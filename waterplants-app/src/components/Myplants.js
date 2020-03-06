import React, {useEffect, useState} from 'react';
import axios from 'axios';
import PlantCard from './PlantCard';

export default function MyPlants() {

    const [plants, setPlant] = useState([]);

    useEffect(() => {
        axios
        .get("https://watermyplants2.herokuapp.com/users/:userId/:plantId")
        .then(res => {
            console.log(res);
            setPlant(res);
        })
        .catch(err => {
            console.log(err);
        })
    })

    return (
        <div>
            {plants.map(plant =>(
                <PlantCard key={plant.id} plant={plant} />
            ))}
        </div>
    )
}