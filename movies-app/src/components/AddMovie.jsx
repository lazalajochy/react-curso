import { useState } from "react";

const AddMovie = ({ title }) => {
    const [movieState, setMovieStte] = useState({
        title: '',
        description: ''
    });

    const getDataForm = e => {
        e.preventDefault();
        let target = e.target;
        setMovieStte({
            ...movieState,
            title: target.title.value,
            description: target.description.value,
            id: new Date().getTime()

        })
    }

    return (
        <div className="add">
            <h3 className="title">{title}</h3>
            {(movieState?.title) && `${movieState?.title} has been added`}
            <form onSubmit={getDataForm}>
                <input
                    type="text"
                    placeholder="add movie title"
                    name="title"
                />
                <textarea
                    placeholder="description"
                    name="description"
                />
                <input type="submit" value="Save" />
            </form>
        </div>
    )
}

export default AddMovie;