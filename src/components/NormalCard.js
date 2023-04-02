import React from "react";
import { Card, CardContent, Typography } from "@mui/material";
const NormalCard = ({ title, text }) => {
  return (
    <div>
      <Card color="secondary">
        <CardContent>
          <Typography variant="h4" color="primary">
            {title}
          </Typography>
          <Typography variant="subtitle1" mt={2}>
            {text}
          </Typography>
        </CardContent>
      </Card>
    </div>
  );
};

export default NormalCard;
