import React, { useEffect } from 'react';
import {
  Card, CardImg, CardText, CardBody,
  CardTitle, CardSubtitle, Button
} from 'reactstrap';
import axios from 'axios';

const PlantCard = (props) => {

  return (
    <div>
      <Card>
        <CardImg top width="100%" src="/assets/318x180.svg" alt="Card image cap" />
        <CardBody>
          <CardTitle>{props.plant.id}: {props.plant.nickname}</CardTitle>
          <CardSubtitle>{props.plant.species}</CardSubtitle>
          <CardText>{props.plant.h2o_freq}</CardText>
        </CardBody>
      </Card>
    </div>
  );
};

export default PlantCard;