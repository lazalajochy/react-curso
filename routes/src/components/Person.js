import { useParams } from "react-router-dom"
export const Person = () => {
    const { name } = useParams();
    console.log(name);
    return(
        <div>
            <h1>Welcome to the Person Page: {name}</h1>
            <p>This is the person page of our application.</p>
        </div>
    )
}