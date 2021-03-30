import React,{useState,useCallback} from 'react'
import { Button, ControlLabel, Form, FormControl, FormGroup, Icon, Modal, Schema } from 'rsuite'
import { useModalState } from '../misc/custom-hooks'

const {StringType} = Schema.Types;

const model= Schema.Model({
    name: StringType().isRequired('Chat room is required'),
    description: StringType().isRequired('Description is required'),

});

const INITIAL_VALUE ={
    name:'',
    description:''
}

const CreateRoomBtnModal = () => {

    const {isOpen,open,close} = useModalState();
    const [formValue, setFormValue] = useState(INITIAL_VALUE);
    const [isLoading, setIsLoading] = useState(false);

    const onFormChange =useCallback(value => {
        setFormValue(value);
    },[]);

    return (
        <div className="mt-2">
            <Button block color="green" onClick={open}>
                <Icon icon="creative" /> Create new chat room
            </Button>

            <Modal show={isOpen} onHide={close}>
                <Modal.Header>

                    <Modal.Title>
                        New chat room
                    </Modal.Title>
                </Modal.Header>
                <Modal.Body>

                    <Form fluid onChange={onFormChange} formValue={formValue} model={model}>
                        <FormGroup>
                            <ControlLabel>Room Name</ControlLabel>
                            <FormControl name="name" placeholder="Enter chat room here..." />
                        </FormGroup>

                        <FormGroup>
                            <ControlLabel>Description</ControlLabel>
                            <FormControl componentClass="textarea" rows={5} name="description" placeholder="Enter room description..." />
                        </FormGroup>

                    </Form>
                </Modal.Body>
                <Modal.Footer>
                    <Button block appearance="primary">
                        Create new chat room
                    </Button>
                </Modal.Footer>
            </Modal>
        </div>
    )
}

export default CreateRoomBtnModal
