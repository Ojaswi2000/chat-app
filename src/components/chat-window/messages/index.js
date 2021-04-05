import React,{useState,useEffect} from 'react'
import { useParams } from 'react-router';
import { database } from '../../../misc/firebase';
import { tranformToArrayWithId } from '../../../misc/helpers';

const Messages = () => {
    const {chatId} = useParams();
    const [messages,setMessages]= useState(null);

    useEffect(() => {
        const messagesRef= database.ref('/messages');
        
        messagesRef.orderByChild('roomId').equalTo(chatId).on('value',(snap)=>{
            const data= tranformToArrayWithId(snap.val());
            setMessages(data);
        })
        
        return ()=>{
            messagesRef.off('value');
        }
        
    }, [chatId])
    return (
        <div>
            messages
        </div>
    )
}

export default Messages
