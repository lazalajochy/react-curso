
import MyComponent from './components/MyComponent'
import Secondcomponent from './components/SecondComponent'
import ThirdComponent from './components/ThirdComponent'
import EventComponent from './components/EventComponents'
import './App.css'


function App() {
  const data = {
    company: "No",
    salary: "Yes"
  }

  return (
    <>
      <EventComponent />
      <hr />
      <ThirdComponent name="Jochy" last_name="Lazala" data={data} />
      <hr />
      <MyComponent />
      <hr />
      <Secondcomponent />

    </>
  )
}

export default App
