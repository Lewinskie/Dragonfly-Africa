import CeoMessage from "@/components/templates/Sections/ceoMessage";
import AboutSplash from "@/components/templates/Sections/aboutSplash";
import { team, about_us } from "../data";

function About({}) {
  const teamlist = team.staff;
  return (
    <>
      <AboutSplash teamlist={teamlist} about_us={about_us} />
    </>
  );
}

export default About;
