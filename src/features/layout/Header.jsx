import './layout.css'
import Navbar from './Navbar'
const Header = ({searchMovie})=>{
    return (
        <>
    <header className="header">
        <h1>Movie Finder</h1>
        
    </header> 
    <Navbar searchMovie={searchMovie}/>
    </>
    )
   
}
export default Header