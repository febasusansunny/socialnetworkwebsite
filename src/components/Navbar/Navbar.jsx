import React from 'react'; 

import { 
  Nav, 
  NavLink, 
  NavMenu, 
 
} from './Navbar-Styles'; 
import { ReactComponent as Logo } from '../../assets/crown.svg';


const Navbar = () => { 
  return ( 
    <> 
      <Nav> 
        {/* <Bars />  */}
  
        <NavMenu> 
           <NavLink to='/homepage' >
                 <Logo className='logo' />
            </NavLink> 
            
        </NavMenu> 
        
        <NavLink to='/about' > 
            About 
          </NavLink>
        {/* <NavBtn> 
          <NavBtnLink to='/signup'>Sign Up</NavBtnLink> 
        </NavBtn>  */}
      </Nav> 
    </> 
  ); 
}; 
  
export default Navbar;