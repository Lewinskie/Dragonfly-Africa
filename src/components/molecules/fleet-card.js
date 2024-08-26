import React from "react";
import Image from "next/image"; // Importing Image from "next/image"
import { Container, Typography, Grid, Card, CardContent } from "@mui/material";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const FleetCard = () => {
  const aircrafts = [
    {
      name: "Fokker 50 Series",
      images: [
        "/fokker_photo.jpg",
        "/IMG-20240226-WA0061.jpg",
        "/IMG-20240226-WA0062.jpg",
        "/IMG-20240226-WA0054.jpg",
      ],
      description:
        "The F-50 is powered by two Pratt & Whitney PW 125B turboprop engines. The propellers are six-bladed with full feathering and reverse capabilities. The aircraft is pressurized, which permits it to fly up to 25,000 feet.",
      crewComposition: [
        { role: "Pilots", quantity: 2 },
        { role: "Cabin Crew", quantity: 2 },
        { role: "Engineer", quantity: 1 },
        { role: "Passengers", quantity: 50 },
      ],
    },
    {
      name: "DHC-8-400",
      images: [
        // "/DSC_4920-Pano copy.jpg",
        "/DSC_4885-Pano copy.jpg",
        "/DSC_4719 copy.jpg",
        "/DSC_4720 copy.jpg",
        "/DSC_4953.jpg",
        "/DSC_4783.jpg",
      ],
      description:
        "The DHC-8 Series 400 is a high wing airplane manufactured by Bombardier Aerospace with shared interests from several partners. It is powered by two 5071 shaft horsepower PW 150A turboprop engines (Pratt & Whitney) and flies up to 25,000 feet.",
      crewComposition: [
        { role: "Pilots", quantity: 2 },
        { role: "Cabin Crew", quantity: 2 },
        { role: "Engineer", quantity: 1 },
        { role: "Passengers", quantity: 76 },
      ],
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
        {aircrafts.map((aircraft, index) => (
          <Grid item xs={12} md={6} key={index}>
            <Card variant="outlined">
              <Slider {...sliderSettings}>
                {aircraft.images.map((image, i) => (
                  <div key={i} style={{ width: "100%" }}>
                    <div style={{ position: "relative", paddingBottom: "60%" }}>
                      <Image
                        src={image}
                        alt={aircraft.name}
                        layout="fill"
                        objectFit="cover"
                        // objectPosition="left top"
                        priority={true}
                      />
                    </div>
                  </div>
                ))}
              </Slider>
              <CardContent>
                <Typography variant="h5" color="primary" gutterBottom>
                  {aircraft.name}
                </Typography>
                <Typography variant="body1" paragraph>
                  {aircraft.description}
                </Typography>
                <Typography variant="h6" color="primary" gutterBottom>
                  Crew Composition
                </Typography>
                {aircraft.crewComposition.map((role, index) => (
                  <Typography key={index} variant="body2" paragraph>
                    <span style={{ fontWeight: "bold", color: "primary" }}>
                      {role.quantity}&nbsp;
                    </span>
                    {role.role}
                  </Typography>
                ))}
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};

export default FleetCard;
