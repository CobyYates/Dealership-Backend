# Dealership GraphQL Backend

<img src="./assets/graphql.png" alt="GraphQL" title="GraphQL" height="50">
<img src="./assets/nexus.png" alt="GraphQL" title="GraphQL" height="50">
<img src="./assets/prisma.png" alt="GraphQL" title="GraphQL" height="50">

### Project By Coby Yates

This example shows how to implement a **GraphQL server with JavaScript (Node.js)** based on [Prisma Client](https://github.com/prisma/prisma2/blob/master/docs/prisma-client-js/api.md), [apollo-server](https://www.apollographql.com/docs/apollo-server/), PostgreSQL, and [GraphQL Nexus](https://nexus.js.org/).

## How to use

### 1. Download example & install dependencies

Install npm dependencies:

```s
npm install
```

### 2. Run each npm script in package.json in this order

 ```
 npm run launchDocker
 ``` 
 ``` 
 npm run createDB
 ```     
 ``` 
 npm run generate
 ``` 
 ``` 
 npm run seed
 ```         
 ### Dev Server
 ``` 
 npm run dev
 ```          

### In another terminal tab run

```javascript
npm run start
```

#### To view your Prisma Studio and GraphQL

Open the following in your browser

| Resource               |      URL       |
| ---------------------- | :------------: |
| **Prisma Studio**      | localhost:5555 |
| **GraphQL Playground** | localhost:4000 |

### Prisma as your data modeling tool

- [See Prisma Code](./prisma)

### Docker-based PostgreSQL, MySQL, or MongoDB as your data store

One of the scripts specified in the [package.json](./package.json) file is:

```javascript
"launchDocker": "docker run --name pg-docker"
```

### At least 3 Query resolvers to get data from your server

<Details><Summary><strong>See Query's</strong></Summary>

```js
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
```

```javascript
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
```

</DETAILS>

### At least 2 Mutation resolvers allowing users to create, update, delete or upsert an item.

Simple form (more work for user)

```js
export const Mutation = mutationType({
  name: 'Mutation',
  definition(t) {
    t.crud.updateOneVehicle()
    t.crud.deleteOneVehicle()
  },
})
```

More specific Mutation
<Details><Summary><strong>See Query's</strong></Summary>

```javascript
export const Mutation = mutationType({
    name: 'Mutation',
    definition(t) {
        t.crud.deleteOneVehicle()
        t.field('createVehicle', {
          type: 'Vehicle',
          args: {
            make: stringArg({ nullable: false }),
            model: stringArg({ nullable: false }),
            year: stringArg({ nullable: false }),
            topSpeed: stringArg(),
            power: stringArg(),
            weight: stringArg(),
            engine: stringArg(),
            torque: stringArg(),
            sixty: stringArg(),
            price: stringArg(),
            vtype: stringArg(),
          },
          resolve: (
            parent,
            { make, model, year, topSpeed, power, weight, engine, torque, sixty, price, vtype, },
            ctx,
          ) => {
            return ctx.prisma.vehicle.create({
              data: { make, model, year, topSpeed, power, weight, engine, torque, sixty, price, vtype, },
            })
          },
        })
```
</Details>

### Your datastore will contain at least 25 items

The original data is pulled from a cars.json file to seed the database with data
- [Resource File](./prisma/cars.json)

### Your app will be deployable locally using Docker and will have seed data entered into the datastore.

One of the scripts specified in the [package.json](./package.json) file is:
```javascript
"seed": "node -r esm prisma/seed"
```

<img src="./assets/api.png" alt="GraphQL" title="GraphQL" height="30">

```js
query allVehicles {
   Vehicles{
    id
    make
    model
    year
    price
  }  
}
```

<Details><Summary><strong>See more API operations</strong></Summary>

### Create a single vehicle

```javascript
mutation createVehicle {
  createVehicle(
    # data: {
    	vtype: "truck",
      make: "Ford",
      model: "Raptor",
      year: "2020",
      topSpeed: "107",
      power: "400",
      weight: "5508",
      engine: "V6",
      torque: "510",
      sixty: "5.1",
      price: "53455",
      image: "test"
    # }
  ) {
    id
    createdAt
    make
    model
  }
}
```

### Update a vehicle by id

```javascript
mutation updateOneVehicle {
  updateOneVehicle(
    where: {id: "ck98yqta90000m0uaz66vmccr"}
    data: {
      vtype: "truck",
      make: "Ford",
      model: "Raptor",
      year: "2020",
      topSpeed: "107",
      power: "450",
      weight: "5508",
      engine: "V6",
      torque: "510",
      sixty: "5.1",
      price: "53455"
    }
  ){
    make
    model
    power
    createdAt
    updatedAt
  }
}
```

### Delete a single vehicle by id

```javascript
mutation deleteVehicle {
  deleteOneVehicle(where: {
    id: "ck98yqta90000m0uaz66vmccr"
  })
  {
    id
    make
  }
}
```

### Find one vehicle by id

```javascript
query filterVehicle {
  Vehicle(id: "ck98yqta90000m0uaz66vmccr") {
    make
    model
    year
    price
    vtype
  }
}
```

### Search by any type of make

```javascript
query filterVehicles {
  Vehicles(searchString: "truck") {
    make
    model
    year
    price
  }
}
```

</Details>
