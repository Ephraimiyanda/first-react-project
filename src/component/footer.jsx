import Btn from "./props/button"
import twitter from '/images/icon-twitter.svg'
import instagram from '/images/icon-instagram.svg'
import facebook from '/images/icon-facebook.svg'
import youtube from '/images/icon-youtube.svg'
import pinterest from '/images/icon-pinterest.svg'
import logo from "/image-onhover/logo.svg"
function Footer(){
    return(
        <footer>
            <div className="logos">
                <img src={logo} alt="" />
                <div className="SM-logos">
                    <img className="social-media-logo" src={facebook} alt="" /> 
                    <img className="social-media-logo" src={youtube} alt="" />
                    <img className="social-media-logo" src={twitter} alt="" />
                    <img className="social-media-logo" src={pinterest} alt="" />
                    <img className="social-media-logo" src={instagram} alt="" />
                </div>
            </div>
           
            <ul className="footer-links">
           <a href="#"> About Us </a>
           <a href="#">Contact </a>
           <a href="#">Blog</a>
            </ul>

           <ul className="footer-links">
           <a href="#">Careers </a>
           <a href="#">Support</a>
           <a href="#"> Privacy Poacy</a>
          
           </ul>
<div className="copyright">
<div className="footer-btn"><Btn class="request-btn"/></div>
 <p >© Easybank. All Rights Reserved</p>
</div>
        </footer>

    )
}
export default Footer;