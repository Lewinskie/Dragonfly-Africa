import React from "react";

const Maps = () => {
  // Set your default location coordinates (latitude and longitude)
  // fix this
  const defaultLocation =
    "Dragonfly Aviation Ltd, Aerlink Building, -1.3223997167622605, 36.8087432, Langata Rd, Nairobi"; // Coordinates: 1.3183° S, 36.8133° E phoenix house wilson airport
  return (
    <div>
      <div>
        <div
          style={{
            position: "relative",
            textAlign: "right",
            height: "450px",
            width: "100%",
          }}
        >
          <div>
            <iframe
              width="100%"
              height="450px"
              src={`https://maps.google.com/maps?q=${defaultLocation}&t=&z=15&ie=UTF8&iwloc=&output=embed`}
              aria-hidden="false"
              style={{
                overflow: "hidden",
                background: "none!important",
                height: "450px",
                width: "100%",
              }}
            ></iframe>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Maps;
