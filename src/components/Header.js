import logo from '../assets/logo.png'
import Navbar from './Navbar'

import { Link } from "react-router-dom";

const Header = () => {
    return (
        <>
            <div className="top-header-wrapper">
                <Link to="/"><img src={logo} alt="logo" /></Link>
                <ul>
                    <li><Link to="/countries"><i className="bi bi-flag-fill"></i> Countries</Link></li>
                    <li><Link to="/location"><i className="bi bi-geo-alt-fill"></i> Store locator</Link></li>
                    <li><Link to="/login"><i className="bi bi-person-fill"></i> Signin/Register</Link></li>
                </ul>
            </div>
            <Navbar />
        </>
    )
}

export default Header
