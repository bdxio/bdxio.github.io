import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Menu extends Component {
    constructor() {
        super();
    }

    render() {
        return (
            <nav className="row align-middle small-24 menu">
                <span className="columns shrink menu-logo">
                    <Link to="/home"><img src="img/png/logo_white.png" /></Link>
                </span>
                <ul className="columns align-center menu-item">
                {/*  FIXME added selected class on link, thank you for adding a link for this commande work*/}
                    <li className="shrink menu-item-content"><Link className="selected" to="/home">Accueil</Link></li>
                    <li className="shrink menu-item-content"><Link to="/team">La team</Link></li>
                    <li className="shrink menu-item-content"><Link to="/news">Actualités</Link></li>
                    <li className="shrink menu-item-content"><Link className="disabled" to={false?'/speakers': '/home'} >Speakers</Link></li>
                    <li className="shrink menu-item-content"><Link to="/partnerships">Sponsors</Link></li>
                    <li className="shrink menu-item-content"><Link className="disabled" to={false?'/faq': '/home'}>FAQ</Link></li>
                    <li className="shrink menu-item-content"><Link to="/contact">Contact</Link></li>
                </ul>

                {/*<div className="menu-toggle">*/}
                    {/*<span></span>*/}
                    {/*<span></span>*/}
                    {/*<span></span>*/}
                {/*</div>*/}

                <ul className="columns shrink align-center menu-socialNetwork">
                    <li><a href="https://twitter.com/bdxio"><i className="fa fa-twitter"></i></a></li>
                    <li><a href="https://www.facebook.com/bdxio"><i className="fa fa-facebook-f"></i></a></li>
                    <li><a href="https://www.linkedin.com/bdxio"><i className="fa fa-linkedin"></i></a></li>
                    <li><a href="https://www.youtube.com/channel/UCA7pEYY0BlgCdpbnjhCDezQ"><i className="fa fa-youtube"></i></a></li>
                </ul>
                {/* FIXME Add liveStream component*/}
                {/*<span className=" columns shrink text-center menu-liveStream">LiveStream component</span>*/}
            </nav>
        )
    }
}

export default Menu