import React, { useState } from "react";
import Link from "next/link";
import FooterLogo from "../atoms/footerLogo.js";
import { Container, Grid } from "@mui/material";

function Footer() {
  return (
    <div className=" bg-primary-500 pt-4 pb-2">
      <footer className="text-base font-sans tracking-wide text-white pb-10">
        <Container>
          <Grid container spacing={3}>
            <Grid
              item
              xs={12}
              sm={12}
              md={6}
              sx={{
                display: "flex",
                alignItems: "center",
                justifyContent: { sm: "center", xs: "center" },
                marginBottom: { sm: "2rem", xs: "2rem" },
                marginTop: { sm: "2rem", xs: "2rem" },
                paddingRight: "10px",
              }}
            >
              <div>
                <FooterLogo />
                <p className="font-serif text-base text-white">
                  Dragonfly Aviation Limited - Aerlink Building, 1st Floor
                  Wilson Airport
                </p>
              </div>
            </Grid>
            <Grid
              item
              xs={12}
              sm={6}
              md={2}
              sx={{
                justifyContent: { sm: "center", xs: "center" },
                textAlign: { xs: "center", sm: "start" },
              }}
            >
              <h3 className="py-5 text-base text-white uppercase underline decoration-red-500  underline-offset-8">
                Navigation
              </h3>
              <ul className="flex flex-col font-serif">
                <Link href="/">About Us</Link>
                <Link href="/">Services</Link>
                <Link href="/">News & Events</Link>
                <Link href="/">FAQs</Link>
                <Link href="/">Contact Us</Link>
              </ul>
            </Grid>
            <Grid
              item
              xs={12}
              sm={6}
              md={4}
              sx={{
                justifyContent: { sm: "center", xs: "center" },
                textAlign: { xs: "center", sm: "start" },
              }}
            >
              <h3 className="py-5 text-white text-base uppercase  underline decoration-red-500  underline-offset-8">
                Contacts
              </h3>
              <ul className="p-1 font-serif text-sm">
                <li className="p-1">
                  Tel:&nbsp;
                  <span className="text-base text-white">
                    (+254) 790 554 779 -{" "}
                  </span>
                  Reception
                </li>
                <li className="p-1">
                  Tel:&nbsp;
                  <span className="text-base text-white">
                    (+254) 792 600 900 -{" "}
                  </span>
                  Operations
                </li>
                <li className="p-1">
                  Email:
                  <span className="text-base text-white">
                    &nbsp;info@dragonflyafrica.co.ke
                  </span>
                </li>
                <li className="p-1">
                  P.O. BOX.&nbsp;
                  <span className="text-base text-white">3542-00506 </span>
                  Nairobi Kenya
                </li>
              </ul>
            </Grid>
          </Grid>
        </Container>
      </footer>
    </div>
  );
}

export default Footer;
