import React, { useState, useEffect } from 'react'
import classes from "./MenuPage.module.css"
import axios from "axios"
import LeftSection from '../LeftSection/LeftSection'


// import axios from "axios"
var sum = 0
function MenuPage() {

    const [data, setData] = useState([])
    // const [status,setStatus]=useState(false)

    const [arr, setArr] = useState([])


    useEffect(() => {
        axios.get("https://5ee249468b27f300160948f0.mockapi.io/newvideo")
            .then(response => {
                console.log(response.data)
                setData(response.data)

            })
            .catch(err => {
                console.log("Error")
            })
            console.log("lcjvckjbncvj")
    }, [])



    // useEffect(() => {
    //     var localData = localStorage.getItem("cartData") ? JSON.parse(localStorage.getItem("cartData")) : []
    //     if (localData) {

    //         setArr(localData)
    //     }
    //      console.log("local data updated")
    // }, [])








    const HandleAddButton = (id) => {
        alert("Cliked " + id)
        let clikedCart = data.filter(item => {
            return (id === item.id)
        })
        console.log(clikedCart)
        clikedCart.foodid = id
        axios.post("https://60375ca8543504001772228a.mockapi.io/foodApp",...clikedCart)
//         arr.push(...clikedCart)
//         setArr(arr)
//         console.log(arr)
//         localStorage.setItem("cartData", JSON.stringify(arr))
// window.location.reload()
    }








    return (
        <div className={classes.menuPage}>

            {/* <div className={classes.leftSection}>
                <p className={classes.iteamsName}>Item Name</p>
                {


                    arr.map(item => {
                        return (<p key={item.id+item.itemName} className={classes.iteamsName}>{item.itemName} :$ {item.itemPrice} </p>)

                    })
                }

{/* 
                <p>Total Price:{arr.reduce((acc, item) => {
                    return (acc + parseInt(item.itemPrice))
                }, 0)}  </p> */}
            {/* </div> */} 
            <LeftSection/>

            <div className={classes.rightSection}>
                {
                    data.map(item => {
                        return (
                            <div key={item.id} className={classes.foodCard}>
                                <img src={item.itemImage} alt="img" className={classes.itemImage} />
                                <p className={classes.itemName}>{item.itemName}</p>
                                <p className={classes.itemPrice}>$ {item.itemPrice}</p>
                                <p className={classes.itemDescription}>{item.itemDescription}</p>
                                <button className={classes.addButton} onClick={() => HandleAddButton(item.id)} >Add</button>
                            </div>
                        )
                    })

                }
            </div>

        </div>
    )
}

export default MenuPage
