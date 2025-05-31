import { useEffect, useState } from 'react'
import { Employee } from './Employee'

export const Managment = () => {
    const [state, setState] = useState({
        name: "",
        limit: 3
    })

    useEffect(() => {
        console.log("La vista se ha renderizado")

    }, [state.limit])


    const asignManagment = e => {
        setState((prev) => ({
            ...prev,
            name: (e.target.value)
        }))

    }
    return (
        <div>
            <h1>
                Nombre del gestor: {state.name}
            </h1>
            <input type='text' onChange={asignManagment} placeholder='introduce your name' />
            <h2>Listado de empleados</h2>
            <p>Los usuarios son gestionados por {state.name} que vienen de jsonplaceholder</p>
            <button onClick={() => {
                setState((prev) => ({
                    ...prev,
                    limit: 3
                }))
            }}>limit 3</button>
            <button onClick={() => {
                setState((prev) => ({
                    ...prev,
                    limit: 6
                }))
            }}>limit 6</button>
            <Employee limit={state.limit} />
        </div>
    )
}
