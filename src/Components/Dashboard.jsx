import React from 'react';
import {Component} from 'react';
import {Navbar} from 'react-bootstrap';
import logo from '../Assets/googlekeep.jpg';
import "../styles/navebar.css"

class Dashboard extends Component {
    render() {
        return (
            <>
                <Navbar variant="default" className="custom-nav-bar" >
                    <Navbar.Brand><img
                        src={logo}
                        alt="Imge"
                        className="custom-image" />
                        <span className="custom-brand">
                            Keep
                        </span>
                    </Navbar.Brand>
                </Navbar>
            </>
        )
    }
}
export default Dashboard;