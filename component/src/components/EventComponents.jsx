const EventComponent = () => {
    const handleOnClick = (e, name) => {
        alert('Has dado click: ' + name)
    }
    return (
        <>
            <h1>Events</h1>

            {/*Click event*/}
            <button onClick={e => handleOnClick(e, "Jochy")}>Click event</button>

            <p>
                
            </p>
        </>
    )
}

export default EventComponent;