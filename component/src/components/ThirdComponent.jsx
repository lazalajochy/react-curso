import PropTypes from "prop-types";

const ThirdComponent = ({name, last_name, data}) => {
    return (
        <>
            <h1>Comunication between compoents</h1>
            <ul>
                <li>Name: {name}</li>
                <li>Last Name: {last_name}</li>
                <li>Salary: {data.salary}</li>
                <li>Company: {data.company}</li>
            </ul>

        </>
    )

}

ThirdComponent.PropTypes = {
    name: PropTypes.string.isRequired,
    last_name: PropTypes.string,
    data: PropTypes.object
}


ThirdComponent.defaultProps = {
    name:"Jochy",
    last_name:"Lazala"
}



export default ThirdComponent