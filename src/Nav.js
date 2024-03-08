import { BrowserRouter, Link, Route, Routes } from "react-router-dom";
import About from "./About";
import Shop from "./Shop";
import Cart from "./Cart";

export default function Nav() {
    return (
        <>
        <div id="nav">
            <BrowserRouter>
               <div class="link" > <Link to="/About">אודות</Link> </div>
                <div class="link"><Link to="/Shop">המוצרים שלנו</Link></div>
                <div class="link"><Link to="/Cart"> עגלת הקניות</Link></div>
              
                <Routes>
                    <Route path="/About" element={<About></About>} />
                    <Route path="/Shop" element={<Shop></Shop>} />
                    <Route path="/Cart" element={<Cart></Cart>} />
                  
                </Routes>
            </BrowserRouter>
        </div>
        </>
    )
}