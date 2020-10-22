import React from 'react';
import {Component} from 'react';
// import service from '../services/note'
import axios from 'axios';
import service from '../services/note';
import '../styles/getNote.css'

import { VscSymbolColor } from 'react-icons/vsc'
import { BiTrashAlt } from 'react-icons/bi';
import { MdAddAlert } from 'react-icons/md';
import { RiUserAddFill, RiInboxArchiveLine } from 'react-icons/ri'
import { BiImageAlt } from 'react-icons/bi'

class GetNotes extends Component {

    state = {
        note: null,
    }

    // async componentDidMount() {
    //     const token = localStorage.getItem("token");
    //     const URL = "http://localhost:4000/get-note";
    //     // const url = `${URL}getNotesList?access_token=${token}`;
    //     fetch(URL, {
    //         method: "POST",
    //         body: JSON.stringify({
    //             token: token,
    //         })
    //     }).then(response => {
    //         return response.json();
    //     }).then(data => {
    //         this.setState({ note: data.data.data });
    //         console.log(note)
    //     }).catch(error => console.log(error))
    // }


    componentDidMount() {
        const token = {
            token: localStorage.getItem('token')
        }
        console.log(token)
        service.getNote(token)
            .then(data => {
                this.setState({note: data});
                console.log(this.state.note.data.data[0].title)
            })
            .catch(() => {
                console.log('error')
            })
    }

    render() {
        return (
            <>
                <div className='noteList'>
                    {this.state.note ? (
                        <div>
                            {this.state.note.data.data.map((data) => {
                                return <div>
                                    <div className='note'>
                                        <h4> {data.title}</h4>
                                        <p>{data.description}</p>
                                        <div className='icons'>
                                        <button className='iconsCard'><MdAddAlert ></MdAddAlert></button>
                                        <button className='iconsCard'><RiUserAddFill></RiUserAddFill></button>
                                        <button className='iconsCard'><VscSymbolColor></VscSymbolColor></button>
                                        <button className='iconsCard'><BiImageAlt></BiImageAlt></button>
                                        <button className='iconsCard'><RiInboxArchiveLine></RiInboxArchiveLine></button>
                                    </div>
                                    </div>
                                </div>
                            })}
                        </div>)
                        : null}
                </div>
            </>
        )
    }

}

export default GetNotes;