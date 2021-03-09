import React, {useState,useEffect } from 'react'
import classes from "./LeftSection.module.css"
import axios from "axios"

function LeftSection() {
    const [data,setData] = useState([])
    useEffect(() => {
        axios.get("https://60375ca8543504001772228a.mockapi.io/foodApp")
            .then(response => {
                console.log(response.data)
               
                setData(response.data)
            })
            .catch(err => {
                console.log("error")
            })
    },[data])


    return (
        <div className={classes.leftSection}>
            <p className={classes.iteamsName}>Item Name</p>
            {


                data.map(item => {
                    return (<p key={item.id + item.itemName} className={classes.iteamsName}>{item.itemName} :$ {item.itemPrice} </p>)

                })
            }

            {/* 
        <p>Total Price:{arr.reduce((acc, item) => {
            return (acc + parseInt(item.itemPrice))
        }, 0)}  </p> */}
        </div>
    )
}

export default LeftSection
