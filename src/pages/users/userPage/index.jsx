import { Link, useParams } from "react-router-dom"
export const UserPage = () => {
    let {name, age, hobby} = useParams()
    return(
        <div>
            <p>Name: {name}</p>
            <p>Age: {age}</p>
            <p>Hobby: {hobby}</p>
        </div>
    )
}