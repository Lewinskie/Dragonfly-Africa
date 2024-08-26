import ServicesSplash from "@/components/templates/Sections/servicesSplash";
import ServiceBrief from "@/components/templates/Sections/serviceBrief";

function Services({}) {
  return (
    <>
      <ServicesSplash />
      <div className="max-w-7xl mx-auto">
        <div style={{ marginTop: "4rem" }} />
        <ServiceBrief />
        <div style={{ marginTop: "4rem" }} />
      </div>
    </>
  );
}

export default Services;
