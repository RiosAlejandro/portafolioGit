import { NavLink } from 'react-router-dom';
import Footer from './components/Footer';
import AppRoutes from './routes/appRoutes';
import './App.css';

function App() {
  

  return (
    <div className='containerPage'>
      <header className='header'>
        <div className='photoHeader'></div>
        <div className='menuHeader'>
            <NavLink className="headerTitle" to="/portafolio">Alejandro Rios</NavLink>
            <nav className="navHeader">
              <NavLink className="navHeaderTo" to="/movil">Movil</NavLink>
              <NavLink className="navHeaderTo" to="/frontend">Frontend</NavLink>
              <NavLink className="navHeaderTo" to="/backend">Backend</NavLink>
              <NavLink className="navHeaderTo" to="/fullstack">FullStack</NavLink>
            </nav>
          </div> 
      </header>

      <AppRoutes />

      <Footer />
    </div>
  )
}

export default App
