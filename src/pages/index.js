import HeroSection from "../components/templates/Sections/heroSection";
import Services from "@/components/templates/Sections/services";
import Destinations from "@/components/templates/Sections/destinations";
import Memeberships from "@/components/templates/Sections/memberships";
import CoreValues from "@/components/templates/Sections/coreValues";
import { heroCarousel_data } from "../data";
import { services_data } from "../data";
import { memberships } from "../data";
import { destinations } from "../data";
import { core_values } from "../data";

const Home = ({}) => {
  return (
    <div>
      {/* HeroCarousel Section */}
      <HeroSection heroCarousel_data={heroCarousel_data} />
      {/* Serivices Section */}
      <Services services_data={services_data} />
      {/* Destination Section */}
      <Destinations destinations={destinations} />
      {/* Membership Section */}
      <Memeberships memberships={memberships} />
      {/* Core Values Sections */}
      <CoreValues core_values={core_values} />
    </div>
  );
};

export default Home;
