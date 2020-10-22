import React from 'react';
import {Component} from 'react';
import '../styles/createNote.css'
import service from '../services/note'
import note from '../services/note';
import {toast} from 'react-toastify'
import 'react-toastify/dist/ReactToastify.min.css'
import GetNotes from '../components/GetNote'

toast.configure()
class CreateNote extends Component {
    state = {
        visible: false,
        note: {
            title: "",
            description: ""
        }
    }

    onChangeUser = event => {
        this.setState({[event.target.name]: event.target.value})

    }

    toggleBox = () => {this.setState({visible: true})}

    handleSubmit = (event) => {
        const token = localStorage.getItem('token')
        const note = {
            title: this.state.title,
            description: this.state.description,
            token: token
        }
        console.log(note)
        if (note.title == "") {
        } else {
            service.createNote(note)
                .then(user => {
                    console.log(user.data.success)
                    if (user.data.success === true) {
                        toast.success('note Created!', {position: toast.POSITION.TOP_CENTER});
                    }
                })
                .catch(() => {
                    toast.error('note not Created!', {position: toast.POSITION.TOP_CENTER});
                });
        }
        this.setState({description: "", title: ""});
    };

    render() {
        return (
            <>
                <div className='create-note2'>
                    <form onSubmit={this.handleSubmit} autoComplete='off'>
                        <input
                            required
                            type='text'
                            className='title'
                            placeholder='Title'
                            name='title'
                            value={note.title}
                            onChange={this.onChangeUser}
                            onClick={this.toggleBox}
                        />
                        {this.state.visible ?
                            <textarea
                                required
                                type='text'
                                className='title'
                                placeholder='Take a note...'
                                name='description'
                                value={note.description}
                                onChange={this.onChangeUser}
                            /> : null}
                    </form>
                    {this.state.visible ?
                        <button
                            className='create-note-close'
                            type='submit'
                            onClick={() => {
                                this.setState({visible: false}, this.handleSubmit)
                            }}>
                            close
                    </button> : null}
                </div>
                <div className='contents'>
                    <GetNotes />
                </div>
            </>
        )
    }
}

export default CreateNote;