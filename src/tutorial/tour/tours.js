import React from "react";
import Tour from "./tour";

const Tours = ({ tours, removeTour }) => {
  return (
    <section>
      <div>
        <h2>Our Tours</h2>
        <div>{/* wanted to use this as underline */}</div>
      </div>
      <div>
        {tours.map((tour) => {
          return <Tour key={tour.id} {...tour} removeTour={removeTour} />;
        })}
      </div>
    </section>
  );
};

export default Tours;
