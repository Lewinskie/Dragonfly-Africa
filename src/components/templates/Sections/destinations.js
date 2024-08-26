import Image from "next/image";
import { Button } from "../../cva/buttonCVA";

function Destinations({ destinations }) {
  return (
    <div className=" bg-primary-50 py-20">
      <div className="max-w-7xl mx-auto grid grid-cols-1 px-10 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {destinations.map((destination) => (
          <div
            key={destination.id}
            className="bg-white rounded-lg shadow-2xl-primary"
          >
            <div className="relative h-48 overflow-hidden rounded-t-lg">
              <Image
                src={destination.imageSrc}
                alt={destination.name}
                width={1200}
                height={500}
              />
            </div>
            <div className="p-6">
              <h2 className="text-lg font-bold font-sans  mb-4">
                {destination.name}
              </h2>
              <p className="leading-relaxed text-base font-serif h-28">
                {destination.description}
              </p>
              {/* <Button
                href="#"
                intent="primary"
                size="medium"
                className="inline-block mt-4 px-4 py-2  text-white rounded-lg"
              >
                Learn more
              </Button> */}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Destinations;
