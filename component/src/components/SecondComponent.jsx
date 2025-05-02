import React from "react";
const Secondcomponent = () => {
    // const libros = [];
    const libros = ["Harry Potter", "Juego de Tronos", "Clean Code"];
    return (
        <>
            <h1>List Books</h1>

            {libros.length >= 1 ? (
                <ul>
                    {
                        libros.map((item, index) => {
                            return <li key={index}>{item}</li>
                        })
                    }
                </ul>

            ) : (
                <p>no hay datos...</p>
            )
            }
        </>
    )

}

export default Secondcomponent