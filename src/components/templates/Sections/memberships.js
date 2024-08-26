import { Container, Grid } from "@mui/material";
import Image from "next/image";

function Memberships({ memberships }) {
  return (
    <Container className="my-10 py-5">
      <div className="my-5 flex flex-row items-center justify-start gap-4 mb-6">
        <div className=" h-1 w-10 rounded bg-red-500"></div>
        <h4 className="  uppercase text-2xl font-bold">
          Membership of Associations
        </h4>
      </div>
      <Grid
        container
        spacing={3}
        sx={{ width: "100%", height: "100%", marginTop: "1rem" }}
      >
        {memberships.list &&
          memberships.list.map((member) => {
            return (
              <Grid
                item
                key={member.id}
                xs={12}
                sm={6}
                md={4}
                sx={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  flexDirection: "column",
                }}
              >
                <Image
                  src={member.logo_url}
                  alt="Image"
                  width={200}
                  // height={100}
                  className="h-40"
                />
                <div>
                  <h4 className=" pt-2 text-center font-sans text-xl font-bold uppercase text-red-500">
                    {member.acronym}
                  </h4>
                  {/* <p className="py-2 text-center text-base font-semibold capitalize text-gray-400"></p> */}
                </div>
              </Grid>
            );
          })}
      </Grid>
    </Container>
  );
}

export default Memberships;
