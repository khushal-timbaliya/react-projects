import React from 'react'

export default function Local() {
    localStorage.setItem("name","student")
    localStorage.setItem("name","student2")

    let data = localStorage.getItem("name");
    console.log(data);
    
    localStorage.removeItem("name")

    let obj = {
        name : "kt",
        subject : "react"
    };

    // localStorage.setItem("myobj",obj);
    // JSON = javascript object noteation
    localStorage.setItem("myObj",JSON.stringify(obj));

    let objData = JSON.parse(localStorage.getItem("myObj"))

    return (
    <div>
      
    </div>
  )
}
