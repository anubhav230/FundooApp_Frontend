import React from 'react';
import {Component} from 'react';
import '../styles/createNote.css'
import service from '../services/note'
import note from '../services/note';

class CreateNote extends Component {

    state = {
        visible: false,
        // visible2: true,
        note: {
            title: "",
            description: ""
        }
    }

    onChangeUser = event => {
        this.setState({title: event.target.value})
        this.setState({description: event.target.value})
    }


    handleSubmit = event => {

        const token = localStorage.getItem('token')
        // console.log(note)
        const note = {
            title: this.state.title,
            description: this.state.description,
            token: token
        }
        console.log(note)
        // event.preventDefault();
        // service.createNote(note)
        //     .then(() => {
        //         console.log("done")
        //     })
    }

    render() {
        // console.log(this.state.note);
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
                            onClick={() => {
                                this.setState({visible: true}, this.handleSubmit)
                            }}
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
                {/* {this.state.visible2 ?
                    <div className='create-note'>
                        <form
                            onClick={() => {
                                this.setState({visible: true, visible2: false})
                            }}>
                            <input type='text' className='title' placeholder='Title' />
                        </form>
                    </div> : null} */}
            </>
        )
    }
}

export default CreateNote;