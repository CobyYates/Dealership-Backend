import { objectType } from "nexus";

const Vehicle = objectType({
  name: "Vehicle",
  definition(t) {
    t.model.id(); 
    t.model.createdAt();
    t.model.updatedAt();
    t.model.make()
    t.model.model()
    t.model.year()
    t.model.price()
    t.model.power()
    t.model.torque()
    t.model.engine()
    t.model.sixty()
    t.model.topSpeed()
    t.model.weight()  
    t.model.vtype()  
  }
});

export const Models = [Vehicle];
