import React, { useEffect, useState } from 'react';

export const Employee = React.memo(
    ({ limit = 3 }) => {
        const [employee, setEmployee] = useState([]);

        useEffect(() => {
            getEmployees();
        }, []);


        const getEmployees = async () => {
            try {
                const res = await fetch("https://jsonplaceholder.typicode.com/users");

                if (!res.ok) {
                    throw new Error(`Error HTTP: ${res.status}`);
                }
                const data = await res.json();
                setEmployee(data)
                console.log("se ha ejecutado la peticion ajax")
            } catch (error) {
                console.error("Error al obtener los empleados:", error);
            }
        };


        console.log("Se ha renderizado el componente empleado");

        return (
            <div>
                <ul className='employee'>
                    {
                        employee?.slice(0, limit).map((item, index) => {
                            return (
                                <li key={index}>{item?.name}</li>
                            )
                        })
                    }

                </ul>
            </div>
        );
    }
);
