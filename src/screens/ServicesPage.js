import {
  Card,
  CardContent,
  CardMedia,
  Container,
  Grid,
  Typography,
} from "@mui/material";
import React from "react";

const ServicesPage = () => {
  return (
    <Container maxWidth="lg">
      <Grid container my={5}>
        <Grid item xs={12}>
          <Card>
            <CardMedia
              sx={{ height: 300 }}
              image="https://cdn.discordapp.com/attachments/1083609995142254682/1087551672919793694/AdobeStock_272669935-scaled.jpeg"
            />
            <CardContent>
              <Grid item mb={3}>
                <Typography variant="h3">WHAT IS ISO TRAINING?</Typography>
              </Grid>
              <Grid item my={3}>
                <Typography variant="p">
                  In simple terms, all standards require ISO training for some
                  parts or the entire ISO standard. The essential purpose of the
                  training is to remove ambiguities, understand the intent of
                  the standard, and make it applicable for helping the
                  organization in compliance to the requirements.
                </Typography>
              </Grid>
              <Grid item my={3}>
                <Typography variant="p">
                  Training helps organizations to understand the Terms,
                  Concepts, and Principles as stated in the standard. Training
                  also helps them to determine the scope of applicability of the
                  ISO standard to the organization based on the nature of
                  operations and by nature of their Products/Services.
                </Typography>
              </Grid>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </Container>
  );
};

export default ServicesPage;
