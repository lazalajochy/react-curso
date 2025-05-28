import React from 'react'

export const Services = () => {
    return (
        <div className='page'>
            <h1>Services</h1>

            <section className='services'>
                <article className='service'>
                    <h2>Custom Web & Mobile App Development</h2>
                    <p>I design and build responsive web and mobile applications using technologies like React, React Native, Node.js, and PostgreSQL, tailored to meet client needs and business goals.</p>
                </article>

                <article className='service'>
                    <h2>API & Backend Development</h2>
                    <p>I develop secure and scalable RESTful APIs and backend systems using Node.js and Express, including authentication, data management, and third-party integrations.</p>
                </article>

                <article className='service'>
                    <h2>Database Design & Optimization</h2>
                    <p>I create efficient database schemas and handle performance tuning using PostgreSQL, SQLite, and MongoDB to ensure data consistency and fast access for applications.</p>
                </article>
            </section>
        </div>
    )
}
