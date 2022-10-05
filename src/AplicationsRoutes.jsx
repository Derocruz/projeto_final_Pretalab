import {BrowserRouter,Routes,Route} from 'react-router-dom'
import Home from './pages/home/Home'
import About from './pages/about/about'
import Comments from './pages/Comments/Comments'
import Contact from './pages/Contacts/Contact'
import Footer from './components/Footer/Footer'
import Menu from './components/menu/Menu'

function AplicationsRoutes() {
    return(
        <BrowserRouter>
        <Menu />
        <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/About" element={<About />} />
        <Route path="/comments" element={<Comments />} />
        <Route path="/Contact" element={<Contact />} />
        </Routes> 
         
        <Footer /> 
    
        </BrowserRouter>    
        
            

    )
}
export default AplicationsRoutes
