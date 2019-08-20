import React from "react";
import Link from "./Link";
import logoFa from '../assets/img/facebook-logo.svg';
import logoIn from '../assets/img/instagram.svg';
import logoTw from '../assets/img/twitter.svg';

const Footer = () =>{
    return (
        <footer className="mainFooter">
            <div className="container maxWidth">
                <div className="col-3 mainFooter__item">
                    <Link text="Facebook" link="#Facebook" img={logoFa}/>
                </div>
                <div className="col-3 mainFooter__item">
                    <Link text="Twitter" link="#Twitter" img={logoTw}/>
                </div>
                <div className="col-3 mainFooter__item">
                    <Link text="Instagram" link="#Instagramm" img={logoIn}/>
                </div>
            </div>
        </footer>
    )
}

export default Footer;