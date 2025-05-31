import React from 'react'
import { Link } from 'react-router-dom'

export const Home = () => {
    return (
        <div className='home'>
            <h1>
                I'm a Full Stack <strong>Software Developer</strong> experienced in building web and mobile apps.
                I work with Node.js, Express, React, React Native, and PostgreSQL to create scalable solutions.
            </h1>
            <h2>
                I'm proficient in JavaScript/TypeScript, Node.js, Express, React/React Native,
                and database technologies like PostgreSQL, SQLite, and MongoDB. I also have
                experience with tools such as Docker, Firebase, and cloud platforms like
                Google Cloud and AWS. <Link to="/contact">Contact me</Link>
            </h2>
            <section className='last-proyects'>
                <h2>Some of my proyects</h2>
                <p>Those are some of my proyects as a software developer</p>
                <div className='works'>

                </div>
            </section>
        </div>
    )
}
