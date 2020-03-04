import React, { useEffect, useState } from "react";
import axios from "axios";
import { Container } from "@material-ui/core";
import EventCard from "./EventCard";

const EventList = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    axios
      .get("")
      .then(response => {
        console.log("Data response", response);
        setData(response.data);
      })
      .catch(error => {
        console.log("Data didn't return.", error);
      });
  }, []);

  return (
    <Container maxWidth="lg">
      {data.map(data => {
        return (
          <EventCard
            key={data.id}
            plantName={data.plantName}
            plantSpecies={data.plantSpecies}
            h20_freq={data.h20_freq}
          />
        );
      })}
    </Container>
  );
};
export default plantList;
