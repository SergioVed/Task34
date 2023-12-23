import { Link } from "react-router-dom"
export const User = ({user}) => {
    const {name, age, secondName, hobby} = user
    return(
        <div>
            <Link to={`/user/${name}/${age}/${hobby}/${secondName}`}><p>{name}</p></Link>
            <p>--------------------------------------------</p>
        </div>
    )
}