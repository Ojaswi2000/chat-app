import React from 'react'
import { Divider } from 'rsuite'
import CreateRoomBtnModal from './CreateRoomBtnModal'
import DashboardToggle from './dashboard/DashboardToggle'

const Sidebar = () => {
    return (
        <div className="h-100 pt-2">
            <div>
                <DashboardToggle />
                <CreateRoomBtnModal />
                <Divider>Join Conversation</Divider>
            </div>
            
            Bottom text
        </div>
    )
}

export default Sidebar
