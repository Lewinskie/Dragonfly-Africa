import { Card, Container, Grid } from "@mui/material";

function CoreValues({ core_values }) {
  return (
    <div
      style={{
        background: "#E6E8F8",
        paddingTop: "0px",
        paddingBottom: "2rem",
      }}
    >
      <Container>
        <div>
          <h4 className="text-2xl font-bold font-sans text-center py-10">
            Our Core Values
          </h4>
          <Grid container spacing={3} sx={{ padding: "2.5rem" }}>
            {core_values.values.map((value) => {
              return (
                <Grid item xs={12} sm={6} md={6} lg={4} xl={4} key={value.id}>
                  <Card style={{ height: "100%", padding: "1rem" }}>
                    <h3 className="font-bold font-sans text-lg text-secondary-500 py-5">
                      {value.title}
                    </h3>
                    <p className="leading-relaxed text-base font-serif">
                      {value.text}
                    </p>
                  </Card>
                </Grid>
              );
            })}
          </Grid>
        </div>
      </Container>
    </div>
  );
}

export default CoreValues;
