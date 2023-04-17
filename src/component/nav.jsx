import Btn from './props/button'
import Logo from "../../images/logo.svg"
import hamburger from "../../images/icon-hamburger.svg"
import close from "../../images/icon-close.svg"
function Nav(){
    return(

<div className="navbar">
<div className='img-div'>
    <img className='logo1' src={Logo} alt="" />
<img className='hamburger' src={hamburger} alt="" /></div>
<div>
<ul className='link-container'>
    <a className='nav-links' href="#">Home</a> 
    <a className='nav-links' href="#">About </a>
    <a className='nav-links' href="#">Contact</a>
    <a className='nav-links' href="#">Blog </a>
    <a className='nav-links' href="#"> Careers </a>
</ul>
</div>
<Btn class="request-btn no-display"/>

</div>
    )
}
export default Nav;