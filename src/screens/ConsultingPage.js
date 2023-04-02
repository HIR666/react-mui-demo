import { Card, CardContent, Container, Grid, Typography } from "@mui/material";
import React from "react";
import NormalCard from "../components/NormalCard";
import StepCard from "../components/StepCard";

const ConsultingPage = () => {
  return (
    <Container maxWidth="lg">
      <Grid container>
        <Grid item xs={12} mt={5}>
          <NormalCard
            title="Quick - Simple - Easy"
            text="When you partner with QSE for your certification needs, our team will walk you through the entire process from beginning to end. With nearly three decades of experience, we can help your organization take advantage of every opportunity and avoid any pitfalls."
          />
        </Grid>
        <Grid item xs={12} mt={5}>
          <NormalCard
            title="THE 10-STEP APPROACH"
            text="QSE’s 10-Step Approach™ to ISO (or any) certification is designed and perfected to cost-effectively prepare facilities for successfully passing Certification Audits with minimum or no nonconformities. QSE ISO consultants emphasize developing simplified, documented Management Systems which meet or exceed the requirements of any ISO standard requirements. This 10-Step Approach™ has a built-in discipline to involve all employees, including top management, right from the beginning to achieve long-term, desired results. Our approach is so complete that we have helped over 800 companies obtain certification, of which, the majority has obtained certification with zero deficiencies."
          />
        </Grid>
        <Grid item xs={12} my={3}>
          <Grid container spacing={2}>
            <Grid item xs={4}>
              <StepCard title="STEP 1" text="Awareness training." />
            </Grid>
            <Grid item xs={4}>
              <StepCard
                title="STEP 2"
                text="Simplified Documentation Develompment"
              />
            </Grid>
            <Grid item xs={4}>
              <StepCard title="STEP 3" text="Document Review" />
            </Grid>
            <Grid item xs={4}>
              <StepCard title="STEP 4" text="Internal Auditing" />
            </Grid>
            <Grid item xs={4}>
              <StepCard title="STEP 4" text="Implementation Assistance" />
            </Grid>
            <Grid item xs={4}>
              <StepCard title="STEP 6" text="Assistance During Stage 1 Audit" />
            </Grid>
            <Grid item xs={4}>
              <StepCard title="STEP 7" text="Deficiency Correction" />
            </Grid>
            <Grid item xs={4}>
              <StepCard title="STEP 8" text="Readiness Evaluation" />
            </Grid>
            <Grid item xs={4}>
              <StepCard title="STEP 9" text="Preparation for Stage 2 Audit" />
            </Grid>
            <Grid item xs={4}>
              <StepCard
                title="STEP 10"
                text="Assistance During Stage 2 Audit"
              />
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </Container>
  );
};

export default ConsultingPage;
