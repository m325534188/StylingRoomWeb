import { BrowserRouter, Link, Route, Routes } from "react-router-dom";
import About from "./About";
import Shop from "./Shop";
export default function Nav() {
    return (
        <>
     
            <BrowserRouter>
                <Link to="/About">About</Link>
                <Link to="/Shop">Shop</Link>
               
                <Routes>
                    <Route path="/About" element={<About></About>} />
                    <Route path="/Shop" element={<Shop></Shop>} />
                  
                </Routes>
            </BrowserRouter>
        
        </>
    )
}

{/* <Provider store={store}>
          <ProductDetails></ProductDetails>
          <h6>------------ Different Component ----------------</h6>
          <ProductDetails2></ProductDetails2>
        </Provider>  */}