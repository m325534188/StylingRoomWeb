import { BrowserRouter, Link, Route, Routes } from "react-router-dom";
import About from "./About";
import Shop from "./Shop";
import Cart from "./Cart";
import GoToPayment from "./GoToPayment";

export default function Nav() {
    return (
        <>
        <div id="nav">
            <BrowserRouter>
               <div  className="link1" > <Link to="/About">אודות</Link> </div>
                <div className="link1"><Link to="/Shop">המוצרים שלנו</Link></div>
                <div className="link1"><Link to="/Cart"> עגלת הקניות</Link></div>
             
              
                <Routes>
                    <Route path="/About" element={<About></About>} />
                    <Route path="/Shop" element={<Shop></Shop>} />
                    <Route path="/Cart" element={<Cart></Cart>} />
                    <Route path="/GoToPayment" element={<GoToPayment></GoToPayment>} />
                  
                </Routes>
            </BrowserRouter>
        </div>
        </>
    )
}