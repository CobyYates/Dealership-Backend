import { PrismaClient } from "@prisma/client";

const prismaClient = new PrismaClient();

async function createVehicle() {
  try {
    await prismaClient.vehicle.create({
      data: {
        make: "McLaren",
        model: "P1",
        year: "2015",
        price: "1150000",
        power: "903",
        torque: "664",
        engine: "V8",
        sixty: "2.7",
        topSpeed: "217",
        weight: "3411"
      }
    });
  } catch (err) {
    console.log(err);
  }
}

async function main() {
  try {
    await createVehicle();
  } catch (err) {
    console.log(err);
  }
}

main()
  .catch(e => console.error(e))
  .finally(async () => {
    await prismaClient.disconnect();
  });
