import {BrowserRouter as Router,Routes,Route} from "react-router-dom";
import Login from "./components/login";
import Register from "./components/register";
import Dashboard from "./components/dashboard";
import Header from "./components/Header";
import Footer from "./components/Footer";
import About from './components/About';
import ConInt from './components/Con_int';
import Consulta from './components/Consulta';
import Auditoria from './components/Auditoria';
import Publications from './components/Blog';
import { ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css'

function App(){
  return(
    <>
    <Router>
      <div className="container">
        <Header/>
        <Routes>
          <Route path='/' element={<Dashboard/>}/>
          <Route path='/login' element={<Login/>}/>
          <Route path='/register' element={<Register/>}/>
          <Route path="/about" element={<About />} />
          <Route path="/con_int" element={<ConInt />} />
          <Route path="/consul" element={<Consulta />} />
          <Route path="/auditoria" element={<Auditoria />} />
          <Route path="/publications" element={<Publications />} />
          <Route path="/login" element={<Login />} />
        </Routes>
        <Footer/>
      </div>
    </Router>
    <ToastContainer/>
    </>
  );
}

export default App;