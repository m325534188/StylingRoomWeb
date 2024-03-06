import { BrowserRouter, Link, Route, Routes } from "react-router-dom";
import About from "./About";
import Shop from "./Shop";

export default function Nav() {
    return (
        <>
        <div id="nav">
            <BrowserRouter>
               <div class="link" > <Link to="/About">אודות</Link> </div>
                <div class="link"><Link to="/Shop">המוצרים שלנו</Link></div>
              
                <Routes>
                    <Route path="/About" element={<About></About>} />
                    <Route path="/Shop" element={<Shop></Shop>} />
                  
                </Routes>
            </BrowserRouter>
        </div>
        </>
    )
}