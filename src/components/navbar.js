import React from "react";
import './Navbar.css';
import logomain from "../images/logomain.jpg";
import fab4logo from "..//images/FAB4STOREWEB.png"
import {Link} from "react-router-dom";
import SearchIcon from "@material-ui/icons/Search";
import FavoriteIcon from '@material-ui/icons/Favorite';
import PersonIcon from '@material-ui/icons/Person';
import ShoppingBasketIcon from '@material-ui/icons/ShoppingBasket';
import CustomizedMenus from "../components/Dropdownmenu"



const NavBar = () =>  {
  return (
    <div className="navbar">
      
        <Link><img className="navbar-logo" src={logomain} alt="beatleslogo"/></Link>
        <Link><img className="navbar-logo" src={fab4logo} alt="beatleslogo"/></Link>
      
      

        <Link to="/" className='nav-links'>Home</Link>
        <Link to="/TBS" className='nav-links'>TBS</Link>
        <Link to="/About" className='nav-links'>About</Link>
        

        <CustomizedMenus />
        <Link> <FavoriteIcon className="matUIwish, bodyshuff" alt ="wishlist" fontSize="large"></FavoriteIcon></Link>
        <Link> <PersonIcon className="matUIuser, bodyshuff"  alt ="user" fontSize="large"></PersonIcon></Link>
        <Link> <ShoppingBasketIcon className="matUIcart, bodyshuff" alt ="cart" fontSize="large"></ShoppingBasketIcon></Link>
        
        <div className="left_header">
                <SearchIcon className="search"/>
                <input placeholder="Search products" className="search"
                type="text" />
       </div>


    </div>

    
  );
};
   
export default NavBar;