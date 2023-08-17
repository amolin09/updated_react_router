import React from 'react'
import cars from '../cars.json'
import { useParams } from "react-router-dom"
import { Container, Paper, Chip } from '@mui/material'


// import MUI components here //
// Container, Paper, Chip //

const Car = (props) => {

    const { carId } = useParams();
    const currCar = cars[carId-1];
    if(!currCar.Miles_per_Gallon){
        currCar.Miles_per_Gallon = "Unknown"
    }

    return (
        <Container>
            <Paper>
            <h1>
                {currCar.Name.toUpperCase()}
            </h1>
                <Chip label={"Id: " + currCar.id} ></Chip>
                <Chip label={"Name: " + currCar.Name}></Chip>
                <Chip label={"Miles per Gallon: " + currCar.Miles_per_Gallon}></Chip>
                <Chip label={"Cylinders: " + currCar.Cylinders}></Chip>
                <Chip label={"Displacement: " + currCar.Displacement}></Chip>
                <Chip label={"Horsepower: " + currCar.Horsepower}></Chip>
                <Chip label={"Weight in lbs: " + currCar.Weight_in_lbs}></Chip>
                <Chip label={"Acceleration: " + currCar.Acceleration}></Chip>
                <Chip label={"Year: " + currCar.Year}></Chip>
                <Chip label={"Origin: " + currCar.Origin}></Chip>
            </Paper>
        </Container>
        
    )
}

export default Car