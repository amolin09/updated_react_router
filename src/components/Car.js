import React from 'react'
import cars from '../cars.json'
import { useParams } from "react-router-dom"
import { Container, Paper, Chip } from '@mui/material'
import "../App.css"



const Car = () => {

    const { carId } = useParams();
    const currCar = cars[carId-1];

    if(!currCar.Miles_per_Gallon){ //I noticed some cars do not have a value for Miles per Gallon and the result would display "null". I used this check to replace null with a friendlier term
        currCar.Miles_per_Gallon = "Unknown"
    }

    return (
        <div className='car-body'> 
        <Container className='car-container'>
            <Paper className='car-paper'>
            <h2>
                {currCar.Name.toUpperCase()}
            </h2>
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
        </div>
    )
}

export default Car