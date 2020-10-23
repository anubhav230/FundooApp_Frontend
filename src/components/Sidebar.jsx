import React from 'react';
import {Component} from 'react';
import '../styles/sidebar.scss';
import {BiBulb, BiArchiveIn, BiTrashAlt} from 'react-icons/bi';
import {BsPencil, BsBell} from 'react-icons/bs';
import {FiTrash2} from 'react-icons/fi';
import {Link} from 'react-router-dom'

class Sidebar extends Component {



    onClick = () => this.setState({color: 'green'});

    render() {
        return (
            <>
                <div>
                    <nav className="side-drawer">
                        <ul className="side-drawer-ul" >
                            <li className="side-drawer-item">
                                <div className="side-drawer-link">
                                    <BiBulb className="icons"></BiBulb>
                                    <span className="side-drawer-text">Notes </span>
                                </div>
                            </li>
                            <li>
                                <Link to='/dashboard/demo' className="side-drawer-link" activeclassname="active">
                                    <BsBell className="icons"></BsBell>
                                    <span className="side-drawer-text"> Reminders  </span>
                                </Link>
                            </li>
                            <li>
                                <div className="side-drawer-link">
                                    <BsPencil className="icons"></BsPencil>
                                    <span className="side-drawer-text">EditLabels</span>
                                </div>
                            </li>

                            <li>
                                <div className="side-drawer-link">
                                    <BiArchiveIn className="icons"></BiArchiveIn>
                                    <span className="side-drawer-text">Archive </span>
                                </div>
                            </li>

                            <li>
                                <div className="side-drawer-link">
                                    <FiTrash2 className="icons"></FiTrash2>
                                    <span className="side-drawer-text">Trash </span>
                                </div>
                            </li>
                        </ul>
                    </nav >
                </div>

            </>
        )
    }
}
export default Sidebar;