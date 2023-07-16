import { Link } from "react-router-dom";
import "./index.css";

export default function Navbar() {
    return (
        <>
            <nav className='navbar bg-light fixed-top'>
                <div className='container-fluid'>
                    <button
                        className='navbar-toggler'
                        type='button'
                        data-bs-toggle='offcanvas'
                        data-bs-target='#offcanvasNavbar'
                        aria-controls='offcanvasNavbar'
                    >
                        <span className='navbar-toggler-icon'></span>
                    </button>
                    <div
                        className='offcanvas offcanvas-end'
                        tabindex='-1'
                        id='offcanvasNavbar'
                        aria-labelledby='offcanvasNavbarLabel'
                    >
                        <div className='offcanvas-header'>
                            <h5
                                className='offcanvas-title'
                                id='offcanvasNavbarLabel'
                            >
                                LIST TODO APPS
                            </h5>
                            <button
                                type='button'
                                className='btn-close'
                                data-bs-dismiss='offcanvas'
                                aria-label='Close'
                            ></button>
                        </div>
                        <div className='offcanvas-body'>
                            <ul className='navbar-nav justify-content-end flex-grow-1 pb-3'>
                                <li className='nav-item pb-4'>
                                    <Link to='/' className='Navlink'>
                                        Home
                                    </Link>
                                </li>
                                <li className='nav-item pb-4'>
                                    <Link to='/about-app' className='Navlink'>
                                        About
                                    </Link>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </nav>
        </>
    );
}
