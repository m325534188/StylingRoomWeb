import logo from './logo.svg';
import './App.css';
import Navbar from './Nav';
import { Provider } from 'react-redux';
import store from './redux/store';


export default function App() {
  const time = new Date();
  time.setSeconds(time.getSeconds() + 200);

  return (
    <div className="App">
      <div className="App-header">
      <Provider store={store}>
        <Navbar></Navbar>
        </Provider>
      </div>
    </div>
  )
}


