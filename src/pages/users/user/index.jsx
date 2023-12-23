import { Link } from "react-router-dom"
export const User = ({name, age, hobby}) => {
    return(
        <div>
            <Link to={`/user/:${name}/:${hobby}/:${age}`}><p>{name}</p></Link>
        </div>
    )
}