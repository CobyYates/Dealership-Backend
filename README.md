# Dealership GraphQL Backend

<svg style="width:24px;height:24px" viewBox="0 0 24 24">
    <path fill="currentColor" d="M12,5.37L11.56,5.31L6,14.9C6.24,15.11 6.4,15.38 6.47,15.68H17.53C17.6,15.38 17.76,15.11 18,14.9L12.44,5.31L12,5.37M6.6,16.53L10.88,19.06C11.17,18.79 11.57,18.63 12,18.63C12.43,18.63 12.83,18.79 13.12,19.06L17.4,16.53H6.6M12,22A1.68,1.68 0 0,1 10.32,20.32L10.41,19.76L6.11,17.21C5.8,17.57 5.35,17.79 4.84,17.79A1.68,1.68 0 0,1 3.16,16.11C3.16,15.32 3.69,14.66 4.42,14.47V9.36C3.59,9.25 2.95,8.54 2.95,7.68A1.68,1.68 0 0,1 4.63,6C5.18,6 5.66,6.26 5.97,6.66L10.38,4.13L10.32,3.68C10.32,2.75 11.07,2 12,2C12.93,2 13.68,2.75 13.68,3.68L13.62,4.13L18.03,6.66C18.34,6.26 18.82,6 19.37,6A1.68,1.68 0 0,1 21.05,7.68C21.05,8.54 20.41,9.25 19.58,9.36V14.47C20.31,14.66 20.84,15.32 20.84,16.11A1.68,1.68 0 0,1 19.16,17.79C18.65,17.79 18.2,17.57 17.89,17.21L13.59,19.76L13.68,20.32A1.68,1.68 0 0,1 12,22M10.8,4.86L6.3,7.44L6.32,7.68C6.32,8.39 5.88,9 5.26,9.25L5.29,14.5L10.8,4.86M13.2,4.86L18.71,14.5L18.74,9.25C18.12,9 17.68,8.39 17.68,7.68L17.7,7.44L13.2,4.86Z" />
</svg>

<svg style="width:24px;height:24px" viewBox="0 0 24 24">
    <path fill="currentColor" d="M3,3V21H21V3" />
</svg>

### Project By Coby Yates

This example shows how to implement a **GraphQL server with JavaScript (Node.js)** based on  [Prisma Client](https://github.com/prisma/prisma2/blob/master/docs/prisma-client-js/api.md), [apollo-server](https://www.apollographql.com/docs/apollo-server/), PostgreSQL, and [GraphQL Nexus](https://nexus.js.org/). 

## How to use

### 1. Download example & install dependencies

Install npm dependencies:

```javascript
cd into project
npm install
```

### 2. Run each npm script in package.json

| Scripts               |
| --------------------- |
| npm run launchDocker  |
| npm run createDB      |
| npm run generate      |
| npm run postinstall   |
| npm run seed          |
| npm run dev           |

In another terminal tab run

```javascript
npm run start
```

#### To view your Prisma Studio and GraphQL

Open the following in your browser

| Resource              | URL               |
| ----------------------|:-----------------:|
| **Prisma Studio**     | localhost:5555    |
| **GraphQL Playground**| localhost:4000    |

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
