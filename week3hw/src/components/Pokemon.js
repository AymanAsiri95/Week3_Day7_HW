import React, { useEffect, useState } from 'react';
import axios from "axios";
import { Link } from "react-router-dom";


function Pokemon() {
    const [state, setstate] = useState([])


    let url = `https://pokeapi.co/api/v2/pokemon/?limit=807`

    useEffect(() => {
        axios.get(url)
            .then((response) => {
                console.log(response.data.results);
                setstate(response.data.results);
            })

    }, [])
    return (
        <div>

            {state.map((items, id) => {
                return (
                    <div key={id}>
                        <p>{items.name}</p>
                        <Link to={`/detail/${items.id}`}>
                        </Link>
                    </div>
                )

            })}
        </div>
    )
}

export default Pokemon