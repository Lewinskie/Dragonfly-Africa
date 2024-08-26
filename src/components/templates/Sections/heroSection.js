import HeroCarousel from "../../molecules/heroCarousel";
function HeroSection({ heroCarousel_data }) {
  return (
    <div>
      <HeroCarousel heroCarousel_data={heroCarousel_data} />
    </div>
  );
}

export default HeroSection;
