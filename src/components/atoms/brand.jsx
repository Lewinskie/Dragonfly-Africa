import React from "react";
import Image from "next/image";
import Link from "next/link";

function Logo() {
  return (
    <div>
      <a className="flex items-center gap-2 ">
        <Image
          src="/drgLogoTransparent.png"
          alt="Image"
          width={80}
          height={50}
        />
        <h4 className="font-bold text-xl font-sans uppercase">
          Dragon<span className="text-secondary-500">Fly</span> Aviation
        </h4>
      </a>
    </div>
  );
}

export default Logo;
