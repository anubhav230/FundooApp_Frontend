import React from 'react';
import {Component} from 'react';
import '../styles/sidebar.css';
import {BiBulb, BiArchiveIn, BiTrashAlt} from 'react-icons/bi';
import { BsPencil, BsBell } from 'react-icons/bs';
import { FiTrash2 } from 'react-icons/fi';

class Sidebar extends Component {

    render() {
        return (
            <>
                <div>
                    <nav className="side-drawer">
                        <ul className="side-drawer-ul">
                            <li className="side-drawer-item">
                                <a href="#" className="side-drawer-link">
                                    <BiBulb className="icons"></BiBulb>
                                    <span className="side-drawer-text">Notes </span>
                                </a>
                            </li>
                            <li>
                                <a href="#" className="side-drawer-link">
                                    <BsBell className="icons"></BsBell>
                                    <span className="side-drawer-text"> Reminders  </span></a>
                            </li>
                            <li>
                                <a href="#" className="side-drawer-link">
                                    <BsPencil className="icons"></BsPencil>
                                    <span className="side-drawer-text">EditLabels</span> </a>
                            </li>
                            
                            <li>
                                <a href="#" className="side-drawer-link">
                                    <BiArchiveIn className="icons"></BiArchiveIn>
                                    <span className="side-drawer-text">Archive </span></a>
                            </li>

                            <li>
                                <a href="#" className="side-drawer-link">
                                    <FiTrash2 className="icons"></FiTrash2>
                                    <span className="side-drawer-text">Trash </span></a>

                            </li>

                        </ul>
                    </nav >
                </div>

            </>
        )
    }
}
export default Sidebar;