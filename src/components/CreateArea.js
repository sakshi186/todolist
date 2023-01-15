import { Fab } from "@mui/material";
import AddIcon from '@mui/icons-material/Add';
import React, { useState } from "react";

function CreateArea(props){
    const[note,setNote]=useState({
        title:"",
        content:""
    })

    let handleChange=(event)=>{
        const{name,value}=event.target;

        setNote(prevNote=>{
           return{
                    ...prevNote,
                    [name]:value
                }
        })
    }
    function submitNote(event){
            props.onAdd(note)
            setNote({
                title:"",
                content:""
            });
            event.preventDefault();
    }
    return(
        <div>
            <form className="create-note">
                <input
                  type="text"
                  name="title"
                  placeholder ="title"
                  onChange={handleChange}
                  value={note.title}
                />
                <textarea
                  name="content" 
                  rows="3"
                  placeholder="take a note..."
                  onChange={handleChange}
                  value={note.content}
                  />
                  <Fab onClick={submitNote}>
                    <AddIcon/>
                  </Fab>
            </form>
        </div>
    )
}
export default CreateArea;