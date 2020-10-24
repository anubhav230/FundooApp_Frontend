import React, {Component} from 'react'
import {Modal, Button} from 'react-bootstrap'
import '../styles/updateModel.scss'

export class UpdateModel extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            // <>
            <div>
                <Modal
                    {...this.props}
                    size="lg"
                    aria-labelledby="contained-modal-title-vcenter"
                    centered
                >
                    <Modal.Header>
                        <Modal.Title id="contained-modal-title-vcenter">
                        </Modal.Title>
                    </Modal.Header>
                    <Modal.Body className='updateNote'>
                        <input className='title' placeholder='title' value={this.props.title} onChange={(e) => this.titleHandler(e)} />
                        <textarea className='title' placeholder='description' value={this.props.description} onChange={(e) => this.descriptionHandler(e)} />
                    </Modal.Body>
                    <Modal.Footer>
                        <Button className='model-close' onClick={this.props.onHide}>Close</Button>
                    </Modal.Footer>
                </Modal>
            </div>
            // </>
        )
    }
}