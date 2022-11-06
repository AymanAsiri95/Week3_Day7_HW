import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

function Detail() {
    const [APIData, setAPIData] = useState([]);

    let url = "https://6362424c7521369cd068e030.mockapi.io/HW"

    useEffect(() => {
        axios.get(url).then((res) => {
            console.log(res);
            setAPIData(res.data);
        })
    }, [])

    const onDelete = (id) => {
        console.log(id);
        axios.delete(`https://6362424c7521369cd068e030.mockapi.io/HW/${id}`).then(res => {
            console.log(res);
            setAPIData(APIData.filter(del => {
                return del.id !== id
            }))
        })

    };

    return (
        <div>
            {APIData.map((data, index) => {
                return (
                    <div key={index}>
                        <p>First Name : {data.Fname}</p>
                        <p>Last Name : {data.Lname}</p>

                        <Link to="/Detail">
                            <button onClick={() => localStorage.setItem("id", data.id)}>Details</button></Link>
                    </div>

                )
            })}
            <Link to="/">Back to Home page</Link>

        </div>
    )
}

export default Detail


{/* {APIData.map((e) => (
          <div id="main">
            <p >First Name:{e.Fname} </p>
            <p>Last Name:{e.Lname}</p>
          </div>
        ))} */}