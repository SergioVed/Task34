import { Link, useNavigate } from "react-router-dom"
import { User } from "./user"
import { useState } from "react"
import "./styles.css"
export const Users = () => {
    const [users, setUsers] = useState([
        {name: "Sergio", age: 15, hobby: "basketball"},
        {name: "Vlad", age: 14, hobby: "cycling"}
    ])
    return(
        <div className="container"> 
            {users.map((user) => (
                <User name={user.name} age={user.age} hobby={user.hobby}/>
            ))}
        </div>
    )
}