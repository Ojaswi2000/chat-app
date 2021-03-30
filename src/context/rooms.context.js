import React,{ createContext,useState,useEffect } from "react";
import { database } from "../misc/firebase";
import { tranformToArrayWithId } from "../misc/helpers";

const RoomsContext = createContext();

export const RoomsRovider = ({children}) => {

    const [rooms,setRooms] = useState(null);
    useEffect(() => {

        const roomsListRef = database.ref('rooms');

        roomsListRef.on('value', (snap)=>{
            const data= tranformToArrayWithId(snap.val());
            console.log('data',data);
            setRooms(data);
        })

        return ()=>{
            roomsListRef.off();
        }

        
    }, [])
    return <RoomsContext.Provider value={rooms} >
        {children}
    </RoomsContext.Provider>
}