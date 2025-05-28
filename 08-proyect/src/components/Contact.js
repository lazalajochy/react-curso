import React from 'react'

export const Contact = () => {
    return (
        <div className='page'>
            <h1>Contact</h1>
            <form className='contact' action="mailto:lazalajochy@gmail.com">
                <input type='text' placeholder='name' />
                <input type='text' placeholder='last name' />
                <input type='text' placeholder='email' />
                <textarea placeholder='contact reason' />
                <input type='submit' value="send" />
            </form>
        </div>
    )
}
