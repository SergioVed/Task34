import { Link } from "react-router-dom"
export const User = ({name, secondName, hobby, age}) => {
    return(
        <div>
            <Link to={`/user/:${name}/:${age}/:${hobby}/:${secondName}`}><p>{name}</p></Link>
            <p>--------------------------------------------</p>
        </div>
    )
}