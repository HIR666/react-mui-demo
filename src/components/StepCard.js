import React from "react";
import { Card, CardContent, Typography } from "@mui/material";
const StepCard = ({ title, text }) => {
  return (
    <Card>
      <CardContent>
        <Typography variant="h5" color="primary">
          {title}
        </Typography>
        <Typography variant="subtitle1" mt={2}>
          {text}
        </Typography>
      </CardContent>
    </Card>
  );
};

export default StepCard;
