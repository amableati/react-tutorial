import React from "react";
import Car from "./Car";
import Bike from "./Bike";


function VehicleCar({ children }) {
  return (
    <div className="card">
      {children}
    </div>
  );
}

export default function Vehicle() {
  return (
    <VehicleCar>
      <Car name="Honda" engine = "AJDJ8787H28YG" bodyColor="Red" />
	  <Bike name="Bike" engine = "AJDJ8787H28YG" bodyColor="Black" />
    </VehicleCar>
  );
}
