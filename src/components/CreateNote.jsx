import React from 'react';
import {Component} from 'react';
import '../styles/createNote.css'



class CreateNote extends Component {

    state = {
        visible: false,
        visible2: true
    }

    render() {
        return (
            <>
                {this.state.visible ?
                    <div className='create-note2'>
                        <form>
                            <input type='text' className='create-note-text' placeholder='Title' />
                            <textarea type='text' className='create-note-text2' placeholder='Take a npte...' />
                        </form>
                        <button className='create-note-close' onClick={()=>{
                            this.setState({visible: false, visible2 : true})
                        }}>close</button>
                    </div> : null}
                {this.state.visible2 ?
                    <div className='create-note'>
                        <form onClick={() => {
                            this.setState({visible: true, visible2 : false})
                        }}>
                            <input type='text' className='create-note-text' placeholder='Title' />
                        </form>
                    </div> : null}
            </>
        )
    }
}

export default CreateNote;