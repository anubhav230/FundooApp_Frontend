import React, {Component} from 'react'
import {Modal, Button} from 'react-bootstrap'
import '../styles/updateModel.scss'

export class UpdateModel extends Component {
    constructor(props) {
        super(props);
        this.state = {
            title: '',
            description: ''
        }
    }

    render() {
        return (
            <>
                <Modal
                    
                    {...this.props}
                    // className="model-lg"
                    size="lg"
                    aria-labelledby="contained-modal-title-vcenter"
                    centered>
                    <Modal.Header>
                        <Modal.Title id="contained-modal-title-vcenter">
                        </Modal.Title>
                    </Modal.Header>
                    <Modal.Body className='updateNote'>
                        <input className='title' placeholder='title' />
                        <textarea className='title' placeholder='description' />
                    </Modal.Body>
                    <Modal.Footer>
                        <Button className='model-close' onClick={this.props.onHide}>save</Button>
                    </Modal.Footer>
                </Modal>
            </>
        )
    }
}