import React from 'react';
import {Component} from 'react';
import service from '../services/note';
import '../styles/getNote.scss'
import '../styles/updateModel.scss'
import {VscSymbolColor} from 'react-icons/vsc'
import {BiImageAlt} from 'react-icons/bi'
import {BiBellPlus} from 'react-icons/bi'
import {BsPersonPlus} from 'react-icons/bs'
import {FiTrash2} from 'react-icons/fi'
import {UpdateModel} from './UpdateModel'
import {BiEdit} from 'react-icons/bi'

class GetNotes extends Component {
    state = {
        note: null,
        smShow: false
    }
    getUserNote() {
        const token = {
            token: localStorage.getItem('token')
        }
        console.log(token)
        service.get(token)
            .then(data => {
                this.setState({note: data});
                console.log(this.state.note.data.data[0].title)
            })
            .catch(() => {
                console.log('error')
            });
    }

    componentDidMount() {
        this.getUserNote()
    }

    deleteNote(id) {
        const noteId = {
            id: id,
            token: localStorage.getItem('token')
        }
        console.log(noteId)
        service.delete(noteId)
            .then(() => {
                this.getUserNote()
            });
    }



    render() {
        let addModelClose = () => this.setState({smShow: false})
        return (
            <>
                <div className='noteList'>
                    {this.state.note ? (
                        <div className='noteList2'>
                            {this.state.note.data.data.map((item) => {
                                const id = item.id
                                return <div>
                                    <div className='note'>
                                        <h4> {item.title}</h4>
                                        <p>{item.description}</p>
                                        <div className='icons'>
                                            <BiBellPlus className='iconsCard-get'></BiBellPlus>
                                            <BsPersonPlus className='iconsCard-get'></BsPersonPlus>
                                            <VscSymbolColor className='iconsCard-get'></VscSymbolColor>
                                            <BiImageAlt className='iconsCard-get'></BiImageAlt>
                                            <FiTrash2 className='iconsCard-get' onClick={() => this.deleteNote(id)}></FiTrash2>
                                            <BiEdit className='iconsCard-get' onClick={() => this.setState({smShow: true})}></BiEdit>
                                        </div>
                                    </div>

                                </div>
                            })}

                        </div>)

                        : null}

                </div>
                <UpdateModel
                    show={this.state.smShow}
                    onHide={addModelClose}
                    className="uptateModel"
                />
            </>

        )
    }

}

export default GetNotes;