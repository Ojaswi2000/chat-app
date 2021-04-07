import React from 'react'
import { usePresence } from '../misc/custom-hooks'
import {Badge, Whisper} from 'rsuite'

const PresenceDot = ({uid}) => {
    const presence = usePresence(uid);
    
    return (
        <Whisper placement="top" trigger="hover" speaker={
            <Tooltip>
              This is a help <i>tooltip</i> .
            </Tooltip>
        }>
            <Badge />
        </Whisper>
    )
}

export default PresenceDot
