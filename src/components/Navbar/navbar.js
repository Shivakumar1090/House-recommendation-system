import './style.css';
import logo from './logo.jpg';
const Navbar = () => {
    return ( 
        <div className="navbar">
            <img src={logo} className='image'></img>
            <h2>House Reccomendation system</h2>
        </div>
     );
}
 
export default Navbar;