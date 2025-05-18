import React, { useState } from "react";
import { useLoaderData } from "react-router";
import CoffeeCard from "./CoffeeCard";

const Home = () => {
  const initialCoffees = useLoaderData();
 const [coffees, setCoffees]=useState(initialCoffees)
  // console.log(coffees);

  return (
    <section>
      <h1 className="text-5xl font-semibold my-6 text-center">
        Total Coffees: {coffees.length}
      </h1>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-5">
        {coffees.map((coffee) => (
          <CoffeeCard key={coffee._id} coffee={coffee} setCoffees={coffees} coffees={setCoffees}></CoffeeCard>
        ))}
      </div>
    </section>
  );
};

export default Home;
