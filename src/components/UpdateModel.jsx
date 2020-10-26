import React, {Component} from 'react'
import {Modal, Button} from 'react-bootstrap'
import '../styles/updateModel.scss'
import service from '../services/note'
import getNote from './GetNote'

export class UpdateModel extends Component {
    constructor(props) {
        console.log("I am in Props", props);
        super(props);
        this.state = {
            id: null,
            title: '',
            description: ''
        }
        this.handleSave = this.handleSave.bind(this);
    }

    componentWillReceiveProps(nextProps) {
        this.setState({
            title: nextProps.title,
            description: nextProps.description,
        });
    }

    titleHandler(e) {
        this.setState({title: e.target.value});
    }

    descriptionHandler(e) {
        this.setState({description: e.target.value});
    }

    handleSave() {

        var updateNote = {id: this.props.id, title: this.state.title, description: this.state.description, token: localStorage.getItem('token')};
        console.log(updateNote)
        service.update(updateNote)
            .then(() => {
                // window.location.reload();
            });
    }

    render() {
        return (
            <>
                <Modal
                    show={this.props.show}
                    // {...this.props}
                    className="model-lg"
                    size="lg"
                    aria-labelledby="contained-modal-title-vcenter"
                    centered>
                    <Modal.Header>
                        <Modal.Title id="contained-modal-title-vcenter">
                        </Modal.Title>
                    </Modal.Header>
                    <Modal.Body className='updateNote'>
                        <input className='title'
                            value={this.state.title}
                            onChange={(e) => this.titleHandler(e)}
                        />
                        <textarea className='title'
                            value={this.state.description}
                            onChange={(e) => this.descriptionHandler(e)}
                        />

                        <Button className='model-close' onClick={this.props.close}>Close</Button>
                        <Button className='model-close' type="submit" onClick={this.props.close, this.handleSave}>
                            Save
                        </Button>
                    </Modal.Body>
                    <Modal.Footer>

                    </Modal.Footer>
                </Modal>
            </>
        )
    }
}