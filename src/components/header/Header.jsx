import React from 'react';
import SearchIcon from '@mui/icons-material/Search';
import LocationOnOutlinedIcon from '@mui/icons-material/LocationOnOutlined';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import logo from '../../assets/amazone_logo.png';
import  Classes from './header.module.css';
import LowerHeader from '../lowerHeader/LowerHeader';

export default function Header() {
  return (
    <>
       <div className={Classes.header__container}>
        <div className={Classes.logo__container}>
            <a href="/">
            <img src={logo} alt="amazonelogo" /></a>
            <div className={Classes.delivery}>
            <span><LocationOnOutlinedIcon/> </span>
            <div>
                <p>Deliverd To</p>
                <span>Ethiopia</span>
            </div>
           </div> 
        </div>

        <div className={Classes.search}>
           <select name="" id="">
            <option value="">All</option>
           </select>
           <input type="text" name="" id="" placeholder='search product'/>
            <SearchIcon size={25}/>
        </div>

        <div className={Classes.order__container}>
                <a href="" className={Classes.language}>
                <img src="https://icons.iconarchive.com/icons/wikipedia/flags/256/US-United-States-Flag-icon.png" alt="" />
                <select name='' id=''>
                    <option value="">EN</option>
                </select>
                </a>
                <a href="">
                    
                        <p>Sign In</p>
                        <span>Accoount & Lists</span>
                    
                </a>

                <a href="">
                    <p>return</p>
                    <span>& Orders</span>
                </a>
                <a to={"/cart"} className={Classes.cart}>
                    <ShoppingCartOutlinedIcon size={40}/> 
                    <span>0</span>
                </a>
           
        </div>
       </div>
       <LowerHeader/>
    </>
  )
}
