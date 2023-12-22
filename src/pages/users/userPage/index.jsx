import { Link, useParams } from "react-router-dom"
export const UserPage = () => {
    const {name, age, hobby, secondName} = useParams()
    return(
        <>
            <p>Name: {name}</p>
            <p>SecondName: {secondName}</p>
            <p>Age: {age}</p>
            <p>Hobby: {hobby}</p>
            <Link to={"/users"}>
                <p>Back</p>
            </Link>
        </>
    )
}