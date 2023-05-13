import React from 'react'
import { useParams } from 'react-router-dom'
import axios from "axios"
import { useState, useEffect } from 'react'
import { useNavigate } from "react-router-dom";


const InfoSpecies = () => {

    const { id } = useParams()
    const [species, setSpecies] = useState([])

    const navigate = useNavigate() 


    useEffect(() => {
        axios.get(`https://swapi.dev/api/species/${id}`)
            .then((response) => {
                console.log(response)
                setSpecies([response.data])
            })
            .catch((err) => {
                navigate(`/error`)
            })
    }, [id])

    return (
        <div>
            {
                species.map((species, i) => {
                    return (
                        <div key={i}>
                            <br />
                            <h1>Name: {species.name}</h1>
                            <br />
                            <h4>Classification : {species.classification } </h4>
                            <h4>Designation : {species.designation } </h4>
                            <h4>Language : {species.language }</h4>
                            <h4>Average Lifespan  : {species.average_lifespan  } </h4>
                        </div>
                    )
                })
            }
        </div>
    )
}


export default InfoSpecies