import React, { useState, useEffect } from 'react'
import axios from "axios"
import { Link } from 'react-router-dom'
import { useNavigate } from "react-router-dom";

const SearchBar = () => {

    const [info, setInfo] = useState("")
    const [infoID, setInfoID] = useState("")


    console.log(info)
    console.log(infoID)

    const navigate = useNavigate()

    const sendInfo = (e) => {
        e.preventDefault();
        navigate(`/${info}/${infoID}`)
    }



    return (
        <div>
            <form onSubmit={sendInfo}>
                <div className='dropdown'>
                    <label> Search for:  </label>
                    <select onChange={(e) => setInfo(e.target.value)} value={info} className="form-select form-select-lg mb-3 text-center">
                        <option>Select a category</option>
                        <option >People</option>
                        <option>Planets</option>
                        <option>Species</option>
                    </select>
                </div>
                <label className="nav-item nav-link m-0"> ID: </label>
                <input className="" onChange={(e) => setInfoID(e.target.value)} value={infoID} type="text" />
                <button>Search</button>
            </form>
        </div>


    )
}

export default SearchBar