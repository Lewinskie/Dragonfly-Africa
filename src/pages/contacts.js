import { Container, Grid } from "@mui/material";
import Image from "next/image";
import React from "react";
import ContactImage from "../../public/hero3.webp";
import Maps from "@/components/molecules/maps";
import ContactForm from "@/components/molecules/contact-form";

const Contacts = () => {
  return (
    <>
      {/* <div className="relative h-[80vw] md:h-[34vw]">
        <Image
          src={ContactImage}
          alt="alt text"
          fill
          object-fit="cover"
          className="-z-10 brightness-50 object-none"
        />
        <div className="absolute inset-0 bg-primary-600 opacity-40 "></div>
        <div className="absolute bottom-0 left-0 mb-8 pl-8 w-full">
          <Container>
            <div className="max-w-7xl mx-auto">
              <h1 className="text-3xl text-neutral-500">Contact us</h1>
            </div>
          </Container>
        </div>
      </div> */}
      <Maps />
      <div>
        <Container>
          <div className="max-w-7xl mx-auto flex flex-col pb-20">
            <div
              style={{
                marginTop: "4rem",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                marginBottom: "5rem",
              }}
            >
              <div
                className=" h-1 w-10 rounded bg-red-500 "
                style={{ marginRight: "1rem" }}
              ></div>
              <h4 className="uppercase text-xl font-bold text-center">
                We are always glad to hear from you
              </h4>
            </div>

            <ContactForm />
          </div>
        </Container>
      </div>
    </>
  );
};

export default Contacts;
