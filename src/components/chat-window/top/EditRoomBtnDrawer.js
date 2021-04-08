import React from 'react'
import { Button, Drawer } from 'rsuite'
import { useModalState } from '../../../misc/custom-hooks'
import EditableInput from '../../EditableInput';

const EditRoomBtnDrawer = () => {
    const {isOpen,open,close} = useModalState();
    return (
        <div>
            <Button className="br-circle" size="sm" color="red" onClick={open}>
                a
            </Button>
            <Drawer show={isOpen} onHide={close} placement="right">
                <Drawer.Header>
                    <Drawer.Title>
                    Edit Room
                    </Drawer.Title>
                </Drawer.Header>
                <Drawer.Body>
                <EditableInput />
                </Drawer.Body>
                <Drawer.Footer>
                <Button block onClick={close}> 
                    Close
                </Button>
                </Drawer.Footer>
            </Drawer>
        </div>
    )
}

export default EditRoomBtnDrawer
