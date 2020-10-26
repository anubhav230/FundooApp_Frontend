
import React from 'react';
import {Component} from 'react';
import service from '../services/note';
import '../styles/getNote.scss'
// import '../styles/updateModel.scss'
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
        showModal: false,
        id: null,
        title: '',
        description: '',
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


    closeModal = () => {
        this.setState({showModal: false});
    }


    deleteNote(id) {
        this.setState({showModal: false});
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
        return (
            <>
                <div className='noteList'>
                    {this.state.note ? (
                        <div className='noteList2' >
                            {this.state.note.data.data.filter((data) => !data.isDelete).map((item) => {
                                const id = item.id
                                const title = item.title
                                const description = item.description
                                return <div>
                                    <div className='note' onClick={() => this.setState({
                                        showModal: true,
                                        id: item.id,
                                        title: item.title,
                                        description: item.description
                                    })}>

                                        <span> {item.title}</span>
                                        <p>{item.description}</p>
                                        <div className='icons'>
                                            <BiBellPlus className='iconsCard-get'></BiBellPlus>
                                            <BsPersonPlus className='iconsCard-get'></BsPersonPlus>
                                            <VscSymbolColor className='iconsCard-get'></VscSymbolColor>
                                            <BiImageAlt className='iconsCard-get'></BiImageAlt>
                                            <FiTrash2 className='iconsCard-get' onClick={() => this.deleteNote(id)}></FiTrash2>
                                            <BiEdit className='iconsCard-get' onClick={() => this.setState({showModal: true})}></BiEdit>
                                        </div>
                                    </div>
                                </div>
                            })}
                        </div>)
                        : null}
                </div>
                <div>
                    <UpdateModel
                        id={this.state.id}
                        title={this.state.title}
                        description={this.state.description}
                        show={this.state.showModal}
                        close={this.closeModal}
                        className="uptateModel"
                    />
                </div>
            </>
        )
    }
}
export default GetNotes;