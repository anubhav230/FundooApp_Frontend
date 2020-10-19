import React from 'react';
import {Component} from 'react';
import '../styles/createNote.css'

class CreateNote extends Component {
    render() {
        return (
            <>
                <div className='create-note'>
                    <form>
                        <input type='text' className='create-note-text' placeholder='Title' />
                    </form>
                </div>
                {/* <div className='create-note'>
                    <form>
                        <input type='text' className='create-note-text' placeholder='Title' />
                    </form>
                </div> */}
            </>
        )
    }
}

export default CreateNote;