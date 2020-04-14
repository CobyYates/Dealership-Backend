import { PrismaClient } from "@prisma/client";
import fs from 'fs'

const prismaClient = new PrismaClient();

const all_vehicles = fs.readFileSync('prisma/cars.json')

function loadVehicles() {
  const vehicle = JSON.parse(all_vehicles)
  const allVehicles = vehicle.vehicle
  return allVehicles.map(vhcls => {
    return {
      data: {
        make: vhcls.make,
        model: vhcls.model,
        year: vhcls.year,
        topSpeed: vhcls.top_speed,
        power: vhcls.power,
        weight: vhcls.weight,
        engine: vhcls.engine,
        torque: vhcls.torque,
        sixty: vhcls.sixty,
        price: vhcls.price,
        vtype: vhcls.vtype,
      },
    }
  })
}

async function main() {
  try {
    const allVehicles = loadVehicles()
    for (let vhcls of allVehicles) {
      await prismaClient.vehicle.create(vhcls)
      .catch(err => console.log(`Error trying to add: ${err} vehicle ${vhcls}`))
    }
  } catch (err) {
    console.log(err);
  }
}

main()
  .catch(e => console.error(e))
  .finally(async () => {
    await prismaClient.disconnect();
  });
