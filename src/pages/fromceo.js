import React from "react";
import CeoSplash from "@/components/templates/Sections/ceoSplash";
import { ceo_message } from "@/data";

const fromceo = () => {
  const message = { ceo_message };
  return (
    <>
      <CeoSplash message={message} />
    </>
  );
};

export default fromceo;
