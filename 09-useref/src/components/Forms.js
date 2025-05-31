import React, {useRef} from 'react'

export const Forms = () => {
  const nombre = useRef("Jochy");
  const box = useRef()
  const show = e => {
    e.preventDefault();

    console.log(nombre.current.value, "this is the name")

    console.log(box)
    box.current.classList.add("ba-green")
    let {current: newBox} = box;
    newBox.innerHTML = "The form has been sent"

  }
  return (
    <div>
      <h1>Form</h1>
      <div ref={box} className='myBox'>
        <h2>This is a simple test</h2>

      </div>
      <form onSubmit={show}>
        <input type='text' placeholder='name' ref={nombre} /> <br/>
        <input type='text' placeholder='last name' /> <br/>
        <input type='email' placeholder='email' /><br/>
        <input type='submit' value="Send" />
      </form>
    </div>
  )
}
