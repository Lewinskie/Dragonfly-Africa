import React from "react";
import FlightTakeoffOutlinedIcon from "@mui/icons-material/FlightTakeoffOutlined";
import Diversity3OutlinedIcon from "@mui/icons-material/Diversity3Outlined";
import CalendarMonthOutlinedIcon from "@mui/icons-material/CalendarMonthOutlined";
import AirlinesIcon from "@mui/icons-material/Airlines";

import { Container, Grid } from "@mui/material";

function getIcon(iconName) {
  switch (iconName) {
    case "FlightTakeoffOutlinedIcon":
      return <FlightTakeoffOutlinedIcon style={{ fontSize: 48 }} />;
    case "Diversity3OutlinedIcon":
      return <Diversity3OutlinedIcon style={{ fontSize: 48 }} />;
    case "CalendarMonthOutlinedIcon":
      return <CalendarMonthOutlinedIcon style={{ fontSize: 48 }} />;
    case "AirlinesIcon":
      return <AirlinesIcon style={{ fontSize: 48 }} />;
    default:
      return null;
  }
}

function Services({ services_data }) {
  return (
    <section>
      <Container>
        <div className="my-2 flex flex-row items-center justify-start  gap-4 ">
          <div className=" h-1 w-10 rounded bg-red-500"></div>
          <h4 className=" uppercase text-2xl font-bold">Our Services</h4>
        </div>

        <Grid container spacing={3} className="container px-2 py-8">
          {services_data &&
            services_data.services.map((service, i) => (
              <Grid key={i} item xs={12} sm={6} lg={3} className="p-4 flex ">
                <div
                  text-secondary-500
                  mb-4
                  style={{
                    height: "100%",
                    width: "100%",
                    display: "flex",
                    alignItems: "center",
                  }}
                >
                  {getIcon(service.icon)}
                </div>
                <div className="pl-6">
                  <h2 className=" font-sans font-bold mb-4">{service.title}</h2>

                  <p className="leading-relaxed text-base font-serif">
                    {service.text}
                  </p>
                </div>
              </Grid>
            ))}
        </Grid>
      </Container>
    </section>
  );
}

export default Services;
