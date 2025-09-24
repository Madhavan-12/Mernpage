import {Link} from "react-router-dom"
const Navbar =()=>{

    return(
        <>
        <nav>
        <div>         
        <h3>mern</h3>
        <p>Easy code Peacy Node</p>
        </div>
        <ul>
            <li><Link to="/">Home</Link></li>          
            <li><Link to="/Component">Component</Link></li>
            <li><Link to="/Rendering">Rendering</Link></li>
            <li><Link to="/Hooks">Hooks</Link></li>
            <li><Link to="/Product">Product</Link></li>
          </ul>
        </nav>
        </>
    )
};

export default Navbar;