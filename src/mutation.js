import { idArg, mutationType, stringArg } from 'nexus'

export const Mutation = mutationType({
  name: 'Mutation',
  definition(t) {

    t.crud.createOneVehicle()
    t.crud.updateOneVehicle()
    t.crud.deleteOneVehicle()
  }
})

// export const Mutation = mutationType({
//     name: 'Mutation',
//     definition(t) {
//         t.crud.deleteOneVehicle()
//         t.field('createVehicle', {
//           type: 'Vehicle',
//           args: {
//             make: stringArg({ nullable: false }),
//             model: stringArg({ nullable: false }),
//             year: stringArg({ nullable: false }),
//             topSpeed: stringArg(),
//             power: stringArg(),
//             weight: stringArg(),
//             engine: stringArg(),
//             torque: stringArg(),
//             sixty: stringArg(),
//             price: stringArg(),
//             vtype: stringArg(),
//           },
//           resolve: (
//             parent,
//             {
//               make,
//               model,
//               year,
//               topSpeed,
//               power,
//               weight,
//               engine,
//               torque,
//               sixty,
//               price,
//               vtype,
//             },
//             ctx,
//           ) => {
//             return ctx.prisma.vehicle.create({
//               data: {
//                 make,
//                 model,
//                 year,
//                 topSpeed,
//                 power,
//                 weight,
//                 engine,
//                 torque,
//                 sixty,
//                 price,
//                 vtype,
//               },
//             })
//           },
//         })
      
//       t.field('updateVehicle', {
//         type: 'Vehicle',
//         args: {
//           id: idArg(),
//           make: stringArg(),
//           model: stringArg(),
//           year: stringArg(),
//           topSpeed: stringArg(),
//           power: stringArg(),
//           weight: stringArg(),
//           engine: stringArg(),
//           torque: stringArg(),
//           sixty: stringArg(),
//           price: stringArg(),
//           vtype: stringArg(),
//         },
//         resolve: (
//           parent,
//           {
//             make,
//             model,
//             year,
//             topSpeed,
//             power,
//             weight,
//             engine,
//             torque,
//             sixty,
//             price,
//             vtype,
//           },
//           ctx,
//         ) => {
//           return ctx.prisma.vehicle.update({
//             where: {
//               id,
//             },
//             data: {
//               make,
//               model,
//               year,
//               topSpeed,
//               power,
//               weight,
//               engine,
//               torque,
//               sixty,
//               price,
//               vtype,
//             },
//           })
//         },
      // })
    // }
// })