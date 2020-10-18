import React from 'react';
import {Component} from 'react';
import {Navbar, FormControl, Button} from 'react-bootstrap';
import logo from '../../Assets/googlekeep.jpg';
import {IoIosRefresh} from "react-icons/io";
import {FiSettings} from "react-icons/fi";
import {BsViewList} from "react-icons/bs";
import {GrApps} from "react-icons/gr";
import {CgProfile} from "react-icons/cg";
import {HiOutlineMenu} from "react-icons/hi";
import '../../styles/navebar.css'

class Dashboard extends Component {
    render() {
        return (
            <>
                <Navbar variant="default" className="custom-nav-bar" >
                    <div className='outline'>
                        <Button className='btn-light btn-circle btn-sm-outline'>
                            <HiOutlineMenu size='25px'> </HiOutlineMenu>
                        </Button>
                    </div>
                    <Navbar.Brand><img
                        src={logo}
                        alt="Imge"
                        className="custom-image" />
                    </Navbar.Brand>
                    <span className="custom-brand">
                        Notes
                    </span>
                    <FormControl type="text" placeholder="search" className="searchBar" />
                    <div className='refresh'>
                        <Button className='btn-light btn-circle btn-sm-refresh'>
                            <IoIosRefresh size='25px'> </IoIosRefresh>
                        </Button>
                    </div>
                    <div className='list'>
                        <Button className='btn-light btn-circle btn-sm-list'>
                            <BsViewList size='25px'></BsViewList>
                        </Button> </div>
                    <div className='settings'>
                        <Button className='btn-light btn-circle btn-sm-settings'>
                            <FiSettings size='25px'></FiSettings>
                        </Button>
                    </div>
                    <div className='apps'>
                        <Button className='btn-light btn-circle btn-sm-apps'>
                            <GrApps size='25px'></GrApps>
                        </Button>
                    </div>
                    <div className='profile'>
                        <Button className='btn-light btn-circle btn-sm-profile'>
                            <CgProfile size='25px'></CgProfile>
                        </Button>
                    </div>
                </Navbar>
            </>
        )
    }
}
export default Dashboard;