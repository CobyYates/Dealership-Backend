import { idArg, queryType, stringArg } from 'nexus'

// export const Query = queryType({
//   definition(t) {
//     t.crud.vehicle()
//   }
// })

export const Query = queryType({
  definition(t) {
    t.field('Vehicle', {
      type: 'Vehicle',
      nullable: true,
      args: { id: idArg() },
      resolve: (parent, { id }, ctx) => {
        return ctx.prisma.vehicle.findOne({
          where: {
            id,
          },
        })
      },
    })

    t.list.field('Vehicles', {
      type: 'Vehicle',
      args: {
        searchString: stringArg({ nullable: true }),
      },
      resolve: (parent, { searchString }, ctx) => {
        return ctx.prisma.vehicle.findMany({
          where: {
            OR: [
              { make: { contains: searchString } },
              { year: { contains: searchString } },
              { vtype: { contains: searchString } }
            ],
          },
        })
      },
    })

    // for finding Trucks, Cars, SUV's
    // t.list.field('Vehicles', {
    //   type: 'Vehicle',
    //   args: {
    //     searchString: stringArg({ nullable: true }),
    //   },
    //   resolve: (parent, { searchString }, ctx) => {
    //     return ctx.prisma.vehicle.findMany({
    //       where: {
    //         OR: [{ type: { contains: searchString } }],
    //       },
    //     })
    //   },
    // })
  },
})
