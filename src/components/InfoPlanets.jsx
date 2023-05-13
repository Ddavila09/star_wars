import React from 'react'
import { useParams } from 'react-router-dom'
import axios from "axios"
import { useState, useEffect } from 'react'
import { useNavigate } from "react-router-dom";

const InfoPlanets = () => {

    const { id } = useParams()
    const [planets, setPlanets] = useState([])


    const navigate = useNavigate() 

    useEffect(() => {
        axios.get(`https://swapi.dev/api/planets/${id}`)
            .then((response) => {
                console.log(response)
                setPlanets([response.data])
            })
            .catch((err) => {
                navigate(`/error`)
            })
    }, [id])

    return (
        <div>
            {
                planets.map((planet, i) => {
                    return (
                        <div key={i}>
                            <br />
                            <h1>Name: {planet.name}</h1>
                            <br />
                            <h4>Climate: {planet.climate} cm</h4>
                            <h4>Terrain: {planet.terrain} kg</h4>
                            <h4>Population: {planet.population}</h4>
                            <h4>Diameter: {planet.diameter} km</h4>
                        </div>
                    )
                })
            }
        </div>
    )
}


export default InfoPlanets