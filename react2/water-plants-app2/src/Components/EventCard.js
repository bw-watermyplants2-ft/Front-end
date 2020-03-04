import React from "react";
import { Container, Card, CardContent, Typography } from "@material-ui/core";

const EventCard = props => {
  return (
    <Container maxWidth="lg">
      <Card>
        <CardContent>
          <Typography>{props.plantName}</Typography>
          <Typography>{props.plantSpecies}</Typography>
          <Typography>{props.h20_freq}</Typography>
        </CardContent>
      </Card>
    </Container>
  );
};
export default EventCard;
