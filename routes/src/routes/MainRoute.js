import { Route, Routes, NavLink, BrowserRouter } from "react-router-dom";
import { Home } from "../components/Home";
import { Contact } from "../components/Contact";
import { Item } from "../components/Item";
import { NotFound } from "../components/NotFound";
import { Person } from "../components/Person";
export const MainRoute = () => {
    return (
        <BrowserRouter>
        <h1>Header</h1>
        <br/>
        <nav>
            <ul>
                <li>
                    <NavLink to="/" className={
                        ({ isActive }) => (isActive ? "highlight" : "")
                    }>Home</NavLink>
                </li>
                 <li>
                    <NavLink to="/contact" className={
                        ({ isActive }) => (isActive ? "highlight" : "")
                    }>Contacts</NavLink>
                </li>
                 <li>
                    <NavLink to="/item" className={
                        ({ isActive }) => (isActive ? "highlight" : "")
                    }>Items</NavLink>
                </li>
            </ul>
        </nav>

        <section>
               <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/contact" element={<Contact />} />
                <Route path="/item" element={<Item />} />
                <Route path="/person/:name/:lastname" element={<Person/>}/>
                <Route path="*" element={<NotFound/>} />
            </Routes>
        </section>
        <hr/>
        <footer>
            <p>Footer</p>
        </footer>

         
        </BrowserRouter>
    );
}