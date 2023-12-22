import { Link, useNavigate } from "react-router-dom"
import { User } from "./user"
import { useState } from "react"
import "./styles.css"
export const Users = () => {
    const [users, setUsers] = useState([
        {name: "Sergio", secondName: "Vediankin", hobby: "Basket", age: 15},
        {name: "Name", secondName: "secondName", hobby: "Hobby", age: 20}
    ])
    return(
        <div className="container"> 
            <div className="usersTabl">
                {users.map((user) => (
                    <User name={user.name}/>
                ))}
            </div>
            <Link to={"/"}>
                Back
            </Link>
        </div>
    )
}