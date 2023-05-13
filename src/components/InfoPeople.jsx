import React from 'react'
import { useParams } from 'react-router-dom'
import axios from "axios"
import { useState, useEffect } from 'react'
import { useNavigate } from "react-router-dom";

const Info = () => {

  const { id } = useParams()
  const [people, setPeople] = useState([])


  const navigate = useNavigate() 

  useEffect(() => {
    axios.get(`https://swapi.dev/api/people/${id}`)
      .then((response) => {
        console.log(response)
        setPeople([response.data])
      })
      .catch((err) => {
        navigate(`/error`)
      })
  }, [id])

  return (
    <div>
      {
        people.map((person, i) => {
          return (
            <div key={i}>
              <br />
              <h1>Name: {person.name}</h1>
              <br />
              <h4>Height: {person.height} cm</h4>
              <h4>Mass: {person.mass} kg</h4>
              <h4>Hair Color: {person.hair_color}</h4>
              <h4>Skin Color: {person.skin_color}</h4>
            </div>
          )
        })
      }
    </div>
  )
}

export default Info