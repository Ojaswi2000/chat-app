import React,{useState,useCallback} from 'react'
import { Alert, Icon, InputGroup } from 'rsuite'
import { ReactMic } from 'react-mic';
import { useParams } from 'react-router';
import { storage } from '../../../misc/firebase';

const AudioMsgBtn = ({afterUpload}) => {
    const {chatId}=useParams();
    const [isRecording, setIsRecording] = useState(false);
    const [isLoading,setIsLoading]=useState(false);
    const onUpload = useCallback(
        async data => {
            try {
                setIsLoading(true);
                const snap=await storage
                .ref(`/chat/${chatId}`)
                .child(`audio_${Date.now()}.mp3`)
                .put(data.blob, 
                    {cacheControl:`public,max-age-${3600*24*3}`
                });

                const file={
                    contentType: snap.metadata.contentType,
                    name:snap.metadata.name,
                    url: await snap.ref.getDownloadURL()
                }
                setIsLoading(false);
                afterUpload([file])
            } catch (err) {
                setIsLoading(false);
                Alert.error(err.message,4000)
            }
        },
        [afterUpload,chatId],
    )
    const onclick = useCallback(()=>{
        setIsRecording(p=>!p)
    },[])
    return (
        <InputGroup.Button onClick={onclick} disabled={isLoading} className={isRecording? 'animate-blink':''}>
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
