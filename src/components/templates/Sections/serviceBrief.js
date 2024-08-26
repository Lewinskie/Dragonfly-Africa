import Image from "next/image";
import Charter from "../../../../public/FAH_1364 copy.webp";
import Humanitarian from "../../../../public/IMG-20240226-WA0056.jpg";
import Adhoc from "../../../../public/DSC_4765 copy.jpg";
import Specialized from "../../../../public/DSC_4714 copy.jpg";
import { Container, Typography, Grid, Card, CardContent } from "@mui/material";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function ServiceBrief({}) {
  const briefs = [
    {
      name: "Charter Flights",
      images: [Charter],
      // Experience the pinnacle of aviation excellence: Embark on a
      // transformative journey as we offer our esteemed clients
      // exclusive charter services. Contact us today to book your next charter flight and experience the difference firsthand.
      description: `
      Dragonfly Aviation offers charter flights, providing a flexible and tailored air travel solution. Most clients prefer Charter flights for convenience and flexibility, allowing them to customize travel schedules and destinations according to their specific requirements. 
      `,
    },
    // {
    //   name: "Humanitarian And Relief Services",
    //   images: [Humanitarian],
    //   description: `Saving lives, offering swift access to disaster zones.
    //   Transporting aid, personnel, and performing critical medical and
    //   security evacuations.`,
    // },
    {
      name: "ACMI Solutions (Aircraft, Crew, Maintenance & Insurance)",
      images: [Humanitarian],
      description: `ACMI solutions involve providing complete aircraft services, including the aircraft itself, trained crew, maintenance, and insurance. This comprehensive package is often sought by airlines or organizations that require a temporary or long-term solution to meet their operational needs without the burden of managing the entire process. `,
    },
    {
      name: "Adhoc Flights",
      images: [Adhoc],
      description: `These are flights that are arranged on a case-by-case basis, without a fixed schedule. They are typically organized in response to specific requests or unforeseen circumstances. Dragonfly Aviation's capability to offer ad-hoc flights adds a layer of flexibility for clients who may have immediate or unplanned travel needs. `,
    },
    {
      name: "Specialized Operations",
      images: [Specialized],
      description: `Dragonfly Aviation engages in specialized operations which could include missions such as emergency evacuations. `,
    },
  ];

  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 1000,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    fade: true,
  };

  return (
    <Container>
      <Grid container spacing={4} justifyContent="center">
        {briefs.map((brief, index) => (
          <Grid item xs={12} key={index}>
            <Card variant="outlined">
              <Grid container>
                <Grid item xs={12} md={6}>
                  <Slider {...sliderSettings}>
                    {brief.images.map((image, i) => (
                      <div key={i} style={{ width: "100%" }}>
                        <div
                          style={{
                            position: "relative",
                            paddingBottom: "60%",
                            display: "flex",
                            justifyContent: "center",
                          }}
                        >
                          <Image
                            src={image}
                            alt={brief.name}
                            layout="fill"
                            objectFit="cover"
                            objectPosition="center top"
                            priority={true}
                          />
                        </div>
                      </div>
                    ))}
                  </Slider>
                </Grid>
                <Grid item xs={12} md={6}>
                  <CardContent>
                    <Typography variant="h5" color="primary" gutterBottom>
                      {brief.name}
                    </Typography>
                    <Typography
                      variant="body1"
                      paragraph
                      sx={{ marginTop: "1rem" }}
                    >
                      {brief.description}
                    </Typography>
                  </CardContent>
                </Grid>
              </Grid>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
}

export default ServiceBrief;
