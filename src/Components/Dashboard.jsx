import React from 'react';
import {Component} from 'react';
import {Navbar, Form, FormControl, Button} from 'react-bootstrap';
import logo from '../Assets/googlekeep.jpg';
import "../styles/navebar.css"
import {IoIosRefresh} from "react-icons/io";
import {FiSettings} from "react-icons/fi";
import {BsViewList} from "react-icons/bs";
import {GrApps} from "react-icons/gr";
import {CgProfile} from "react-icons/cg";
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
                    <div >
                        <Form inline >
                            <FormControl type="text" placeholder="Search" className="searchBar" />
                            <div className='refresh'>
                                <Button className='btn-light btn-circle btn-sm'>
                                    <IoIosRefresh size='27px'> </IoIosRefresh>
                                </Button>
                            </div>
                            <div className='list'>
                                <Button className='btn-light btn-circle btn-sm'>
                                    <BsViewList size='27px'></BsViewList>
                                </Button> </div>
                            <div className='settings'>
                                <Button className='btn-light btn-circle btn-sm'>
                                    <FiSettings size='27px'></FiSettings>
                                </Button>
                            </div>
                            <div className='apps'>
                                <Button className='btn-light btn-circle btn-sm'>
                                    <GrApps size='27px'></GrApps>
                                </Button>
                            </div>
                        </Form>
                    </div>
                </Navbar>
            </>
        )
    }
}
export default Dashboard;