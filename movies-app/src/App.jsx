import HeaderComponent from "./components/Header"
import NavbComponent from "./components/Navb"
import AddMovie from "./components/AddMovie"
function App() {
 
  return (
    
     <div className="layout">
       {/*--header*/}
       <HeaderComponent/>

       {/*--Navitation bar*/}
        <NavbComponent/>

       {/*--mian content*/}
        <section className="content">
            <article className="movie-item">
                <h3 className="title">Web Development</h3>
                <p className="description">Web developmet is very nice... We hope see you soon!</p>
                <button className="edit">Edit</button>
                <button className="delete">Delete</button>
            </article>

            <article className="movie-item">
                <h3 className="title">Web Development</h3>
                <p className="description">Web developmet is very nice... We hope see you soon!</p>
                <button className="edit">Edit</button>
                <button className="delete">Delete</button>
            </article>

            <article className="movie-item">
                <h3 className="title">Web Development</h3>
                <p className="description">Web developmet is very nice... We hope see you soon!</p>
                <button className="edit">Edit</button>
                <button className="delete">Delete</button>
            </article>

            <article className="movie-item">
                <h3 className="title">Web Development</h3>
                <p className="description">Web developmet is very nice... We hope see you soon!</p>
                <button className="edit">Edit</button>
                <button className="delete">Delete</button>
            </article>

        </section>

        <aside className="lateral">
            <div className="search">
                <h3 className="title" >Search</h3>
                <form>
                    <input type="text"/>
                    <button>Search</button>
                </form>
            </div>

            <AddMovie title="Add a movie"/>
            


        </aside>
        <footer className="footer">
            &copy: Master in Js ES12 & TypeScript
        </footer>

    </div>
     
  )
}

export default App
