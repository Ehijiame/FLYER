import React from "react"
import Header from "./components/Header"
import Card from "./components/Cards"
import data from "./data"

export default function App (){
 const Cards= data.map(
    function (item){
        return(
            <Card
            key={item.id}
            {...item}
            />
        )
    }
 )
    return(
        <div>
       <Header/>
       
       <div className="cards">
       {Cards}
       </div>
       
        </div>
        
    )
}