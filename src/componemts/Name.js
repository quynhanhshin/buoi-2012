import React, { useState } from "react";

export default function Name() {
    const [name, setName] = useState("Hiếu Thị Hai");
    function handle_Name(e) {
        setName(e.target.value); //name = e.target.value
    }
    const [age, setAge] = useState("26");
    function handle_Age(e) {
        setAge(e.target.value); //name = e.target.value, e là event
    }
    return (
        <div>
            <input type="text" value={name} onChange={handle_Name}></input>
            <p>name: {name}</p>
            <input type="number" value={age} onChange={handle_Age}></input>
            <p>age: {age}</p>
        </div>
    );
}
