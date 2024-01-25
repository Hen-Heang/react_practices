import React from "react";

export default function CardItem({ people }) {
    console.log(people);
  return (
    <ul>
     {people.map(item =><li>{item}</li>)}
    </ul>
  );
}
