/* eslint-disable react/no-unescaped-entities */
import Image from "next/image";
import React, { useState } from "react";
import AboutImage from "../../../../public/aboutSplash.webp";
import { Container } from "@mui/material";

function AboutSplash({ teamlist, about_us }) {
  const team = teamlist;
  const { paragraphs } = about_us;
  return (
    <>
      <div className="relative h-[40vw] md:h-[24vw]">
        <div
          style={{ position: "relative", height: "100%", overflow: "hidden" }}
        >
          <Image
            src={AboutImage}
            alt="alt text"
            layout="fill"
            objectFit={["cover", "fill"]} // Use 'fill' for large screens
            objectPosition="left 1% top 15%"
            className="-z-10 brightness-50 object-cover"
          />
        </div>
        {/* <div className="absolute inset-0 bg-primary-600 opacity-80 "></div> */}{" "}
        <div
          className="absolute inset-0"
          style={{
            backgroundImage:
              "linear-gradient(to top, rgba(0,3,69,0.8) 0%, rgba(0,3,69,0.2) 100%)",
          }}
        ></div>
        <div className="absolute bottom-0 left-0 mb-8 pl-8 w-full">
          <Container>
            <div className="max-w-7xl mx-auto">
              <h1 className="text-3xl text-neutral-500">About Us</h1>
            </div>
          </Container>
        </div>
      </div>

      {/* <div className="max-w-7xl mx-auto"> */}
      <Container>
        {/* About us message section */}
        <div
          style={{ marginTop: "4rem", display: "flex", alignItems: "center" }}
        >
          <div
            className=" h-1 w-10 rounded bg-red-500"
            style={{ marginRight: "1rem" }}
          ></div>
          <h4 className=" uppercase text-2xl font-bold">Who are we?</h4>
        </div>

        <div className="my-10 flex flex-row items-center justify-start  gap-4 ">
          {paragraphs.map((paragraph, index) => (
            <div key={index}>
              <p
                className="leading-relaxed text-base font-serif"
                style={{ marginBottom: "1rem" }}
              >
                {paragraph.p1}
              </p>
              <p
                className="leading-relaxed text-base font-serif"
                style={{ marginBottom: "1rem" }}
              >
                {paragraph.p2}
              </p>
              <p className="leading-relaxed text-base font-serif">
                {paragraph.p3}
              </p>
            </div>
          ))}
        </div>
      </Container>
      {/* Our Vision and Mission Sections */}
      <div style={{ background: "#E6E8F8", width: "100%" }} className="py-8">
        <Container>
          <div
            className="grid grid-cols-1 md:grid-cols-2 gap-8"
            style={{ background: "#E6E8F8", width: "100%" }}
          >
            <div>
              <h2 className="font-sans text-2xl font bold my-5">Our Vision</h2>
              <p className="leading-relaxed text-base font-serif">
                To become the most efficient and dependable air service provider
                in the region and beyond while contributing significantly to the
                country's economic growth and infrastructure development.
              </p>
            </div>
            <div>
              <h2 className="font-sans text-2xl font bold my-5">Our Mission</h2>
              <p className="leading-relaxed text-base font-serif">
                To meet the needs of our clients by providing high levels of
                safety, ethical business practices and excellent customer
                service.
              </p>
            </div>
          </div>
        </Container>
      </div>
      {/* Our Team */}
      <Container>
        <div className="my-10">
          <div className="my-20 flex flex-row items-center justify-start  gap-4 ">
            <div className=" h-1 w-10 rounded bg-red-500"></div>
            <h4 className=" uppercase text-2xl font-bold">Meet Out Team</h4>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 sm:grid-cols-2 gap-4">
            {team.map((member) => (
              <div
                key={member.id}
                className="bg-white rounded-lg shadow-2xl-primary"
              >
                <div className="relative " style={{ height: "380px" }}>
                  <div
                    style={{
                      position: "relative",
                      height: "100%",
                      overflow: "hidden",
                    }}
                  >
                    <Image
                      src={member.image_url}
                      alt="alt text"
                      layout="fill"
                      objectFit="cover"
                      objectPosition="center 18%"
                    />
                  </div>
                </div>
                <div className="p-4">
                  <h2 className=" font-bold font-sans text-xl  ">
                    {member.name}
                  </h2>
                  <p className="leading-relaxed text-base text-secondary-300 font-serif ">
                    {member.title}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </Container>
      {/* </div> */}
    </>
  );
}

export default AboutSplash;
