//import logo from './logo.svg';
import 'antd/dist/antd.css';
import './App.css';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import Home from './components/home';
import Detail from './components/detail';

function App() {
  return (
   <>
   <BrowserRouter>

   <Routes>
     <Route index element={<Home/>}></Route>
     <Route path='detail/:id' element={<Detail/>}></Route>
   </Routes>
   </BrowserRouter>
   </>
  );
}

export default App;
