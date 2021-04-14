import React,{useState,useCallback} from 'react'
import { Icon, InputGroup } from 'rsuite'
import { ReactMic } from 'react-mic';
import { useParams } from 'react-router';

const AudioMsgBtn = ({afterUpload}) => {
    const {chatId}=useParams();
    const [isRecording, setIsRecording] = useState(false);
    const onUpload = useCallback(
        async() => {
            try {
                const snap=await storage
                .ref(`/chat/${chatId}`)
                .child(Date.now() + f.name)
                .put(f.blobFile, 
                    {cacheControl:`public,max-age-${3600*24*3}`
                });
            } catch (err) {
                
            }
        },
        [],
    )
    const onclick = useCallback(()=>{
        setIsRecording(p=>!p)
    },[])
    return (
        <InputGroup.Button onClick={onclick}>
            <Icon icon="microphone" />
            <ReactMic
            record={isRecording}
            className="d-none"
            onStop={onUpload}
            mimeType="audio/mp3"
            />
        </InputGroup.Button>
        

    )
}

export default AudioMsgBtn
