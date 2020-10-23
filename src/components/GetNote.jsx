import React from 'react';
import {Component} from 'react';
import service from '../services/note';
import '../styles/getNote.scss'
import {VscSymbolColor} from 'react-icons/vsc'
import {BiImageAlt} from 'react-icons/bi'
import {BiBellPlus} from 'react-icons/bi'
import {BsPersonPlus} from 'react-icons/bs'
import {FiTrash2} from 'react-icons/fi'

class GetNotes extends Component {

    state = {
        note: null
    }

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
            });
    }

    render() {
        return (
            <>
                <div className='noteList'>
                    {this.state.note ? (
                        <div className='noteList2'>
                            {this.state.note.data.data.map((item) => {
                                return <div>
                                    <div className='note'>
                                        <h4> {item.title}</h4>
                                        <p>{item.description}</p>
                                        <div className='icons'>
                                            <BiBellPlus className='iconsCard-get'></BiBellPlus>
                                            <BsPersonPlus className='iconsCard-get'></BsPersonPlus>
                                            <VscSymbolColor className='iconsCard-get'></VscSymbolColor>
                                            <BiImageAlt className='iconsCard-get'></BiImageAlt>
                                            <FiTrash2 className='iconsCard-get'></FiTrash2>
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