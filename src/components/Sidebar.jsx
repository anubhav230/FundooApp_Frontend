import React from 'react';
import {Component} from 'react';
import '../styles/sidebar.css';
import {BiBulb, BiArchiveIn, BiTrashAlt} from 'react-icons/bi';
import {BsPencil, BsBell} from 'react-icons/bs';
import {FiTrash2} from 'react-icons/fi';
import {Link} from 'react-router-dom'

const sideBar = props => {
    return (
        <div>
            <nav className="side-drawer">
                <ul className="side-drawer-ul">
                    <li className="side-drawer-item">
                        <Link to='/dashboard/notes' className="side-drawer-link" activeclassname="active">
                            <BiBulb className="icons"></BiBulb>
                            <span className="side-drawer-text">Notes </span>
                        </Link>
                    </li>
                    <li><a  className="side-drawer-link">
                        <BsPencil className="icons"></BsPencil>
                        <span className="side-drawer-text">EditLabels</span> </a></li>
                    <li>
                        <a href="/#" className="side-drawer-link">
                            <BsBell className="icons"></BsBell>
                            <span className="side-drawer-text"> Reminders  </span>
                        </a>
                    </li>
                    <li>
                        <Link to='/dashboard/archive' className="side-drawer-link" activeclassname="active">
                            <BiArchiveIn className="icons"></BiArchiveIn>
                            <span className="side-drawer-text">Archive </span>
                        </Link>
                    </li>

                    <li>
                        <Link to='/dashboard/trash' className="side-drawer-link" activeclassname="active">
                            <BiTrashAlt className="icons"></BiTrashAlt>
                            <span className="side-drawer-text">Trash </span>
                        </Link>
                    </li>
                </ul>
            </nav >
        </div>

    );

};

export default sideBar;





// class Sidebar extends Component {



//     onClick = () => this.setState({color: 'green'});

//     render() {
//         return (
//             <>
//                 <div>
//                     <nav className="side-drawer">
//                         <ul className="side-drawer-ul" >
//                             <li className="side-drawer-item">
//                                 <Link to='/dashboard/notes' className="side-drawer-link" activeclassname="active">
//                                     <BiBulb className="icons"></BiBulb>
//                                     <span className="side-drawer-text">Notes </span>
//                                 </Link>
//                             </li>
//                             <li>
//                                 <Link to='/dashboard/demo' className="side-drawer-link" activeclassname="active">
//                                     <BsBell className="icons"></BsBell>
//                                     <span className="side-drawer-text"> Reminders  </span>
//                                 </Link>
//                             </li>
//                             <li>
//                                 <div className="side-drawer-link">
//                                     <BsPencil className="icons"></BsPencil>
//                                     <span className="side-drawer-text">EditLabels</span>
//                                 </div>
//                             </li>

//                             <li>
//                                 <div className="side-drawer-link">
//                                     <BiArchiveIn className="icons"></BiArchiveIn>
//                                     <span className="side-drawer-text">Archive </span>
//                                 </div>
//                             </li>

//                             <li>
//                                 <div className="side-drawer-link">
//                                     <FiTrash2 className="icons"></FiTrash2>
//                                     <span className="side-drawer-text">Trash </span>
//                                 </div>
//                             </li>
//                         </ul>
//                     </nav >
//                 </div>

//             </>
//         )
//     }
// }
// export default Sidebar;