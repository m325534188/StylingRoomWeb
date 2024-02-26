import logo from './logo.svg';
import './App.css';
import FirstComponent from './lesson1/FirstComponent';
import SecondComponent from './lesson1/SecondComponent';
import StatesComponent from './lesson2/StatesComponent';
import ArrayStates from './lesson2/ArrayStates';
import Conditions from './lesson3/Conditions';
import Effects from './lesson3/Effects';
import ApiExample from './lesson3/ApiExample';
import UseHoc from './lesson3/UseHoc';
import UseHoc2 from './lesson3/UseHoc2';
import Login from './lesson4/Login';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './lesson4/Home';
import About from './lesson4/About';
import Navbar from './lesson4/Navbar';
import ReactChildrenExample from './lesson4/ReactChildrenExample';
import UserDetails from './lesson5/UserDetails';
import UserDetails2 from './lesson5/UserDetails2';
import { Provider } from 'react-redux';
import store from './redux/store';

export default function App() {
  return (
    <div className="App">
      <div className="App-header">

        {/* <FirstComponent></FirstComponent> */}
        {/* <StatesComponent></StatesComponent> */}
        {/* <ArrayStates></ArrayStates> */}
        {/* <Conditions></Conditions> */}
        {/* <UseEffectExample></UseEffectExample> */}
        {/* <Effects></Effects> */}
        {/* <ApiExample></ApiExample> */}
        {/* <UseHoc></UseHoc> */}
        {/* <UseHoc2></UseHoc2> */}

        {/* <BrowserRouter>
          <Routes>
            <Route path="/" element={<Login></Login>} />
            <Route path="/home/:name/:password" element={<Home></Home>} />
            <Route path="/about" element={<About></About>} />
          </Routes>
        </BrowserRouter> */}

        {/* <Navbar></Navbar> */}

        {/* <ReactChildrenExample>
          <h1>first child</h1>
          <b>second child</b>
          <FirstComponent></FirstComponent>
        </ReactChildrenExample> */}

        <Provider store={store}>
          <UserDetails></UserDetails>

            <h6>------------ Different Component ----------------</h6>
          <UserDetails2></UserDetails2>
        </Provider>

      </div>
    </div>
  );
}


