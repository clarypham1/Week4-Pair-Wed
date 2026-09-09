import { tours } from "../data";
import { useState } from "react";
import Title from "./Title";
import Tour from "./Tour";

const Tours = () => {
  const [toursData, setToursData] = useState(tours);

  const handleRemoveTour = (tourId) => {
    setToursData(toursData.filter(tour => tour.id !== tourId));
  };
  return (
    <section className="section" id="tours">
      <Title title="featured" subTitle="tours" />

      <div className="section-center featured-center">
        {toursData.map((tour) => {
          return (
            <Tour
              {...tour}
              key={tour.id}
              onRemove={handleRemoveTour}
            />
          )
        })}
      </div>
    </section>
  );
};
export default Tours;
