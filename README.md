# Dealership GraphQL Backend

### Project By Coby Yates

This example shows how to implement a **GraphQL server with JavaScript (Node.js)** based on  [Prisma Client](https://github.com/prisma/prisma2/blob/master/docs/prisma-client-js/api.md), [apollo-server](https://www.apollographql.com/docs/apollo-server/), PostgreSQL, and [GraphQL Nexus](https://nexus.js.org/). 

## How to use

### 1. Download example & install dependencies

Install npm dependencies:

```
cd into project
npm install
```

### 2. Run each npm script in package.json

```
npm run launchDocker
npm run createDB
npm run generate
npm run postinstall
npm run seed
npm run dev
```
In another terminal tab run

```
npm run start
```

### Prisma as your data modeling tool

```js
```

### Docker-based PostgreSQL, MySQL, or MongoDB as your data store

```js
```

### At least 3 Query resolvers to get data from your server

```js
```

### At least 2 Mutation resolvers allowing users to create, update, or upsert an item.

```js
```

### At least 1 Mutation resolver allowing users to delete an item.

```js
```

### Your datastore will contain at least 25 items

```js
```

### Your app will be deployable locally using Docker and will have seed data entered into the datastore.

```js
```

### All of your source code will be properly uploaded to GitHub

```js
```

### Your ReadMe file will accurately describe your server install and run process and how to use the APIs

### API Calls

```js
query allVehicles {
   Vehicles{
    make
    model
    year
    price
  }
}
```

<Details><Summary><strong>See more API operations</strong></Summary>

### Create a single vehicle

```graphql
mutation createVehicle {
  createOneVehicle(
    data: {
      vtype: "truck"
      make: "Ford"
      model: "Raptor"
      year: "2020"
      topSpeed: "107"
      power: "450"
      weight: "5508"
      engine: "V6"
      torque: "510"
      sixty: "5.1"
      price: "53455"
    }
  ) {
    id
    createdAt
    make
    model
  }
}
```

### Update a vehicle by id

```graphql
mutation updateVehicle {
  updateOneVehicle(
    where: { id: "ck8zxk14o0000g4uatar505o1" }
    data: {
      vtype: "truck"
      make: "Ford"
      model: "Raptor"
      year: "2020"
      topSpeed: "107"
      power: "450"
      weight: "5508"
      engine: "V6"
      torque: "510"
      sixty: "5.1"
      price: "53455"
    }
  ) {
    createdAt
    make
    model
    power
  }
}
```

### Delete a single vehicle by id

```graphql
mutation deleteVehicle {
  deleteOneVehicle(where: { id: "ck8zx6h870019scua3gmu7740" }) {
    id
    make
  }
}
```

### Find one vehicle by id

```graphql
query filterVehicle {
  Vehicle(id: "ck8zymjtg0000b8uakdhq5p6z") {
    make
    model
    year
    price
    vtype
  }
}
```

### Search by any type of make

```graphql
query filterVehicles {
  Vehicles(searchString: "Ford") {
    make
    model
    year
    price
  }
}
```

</Details>
