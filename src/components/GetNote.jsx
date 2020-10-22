import React from 'react';
import {Component} from 'react';
// import service from '../services/note'
import axios from 'axios';
import service from '../services/note';
import '../styles/getNote.css'

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