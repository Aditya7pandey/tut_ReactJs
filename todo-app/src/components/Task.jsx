import { useState } from "react";
import React from "react";

function Task({task,onDelete,onEdit}){
    const [isEditing,setIsEditing] = useState(false)
    const [editText,setEditText] = useState(task);

    const handleEdit = ()=>{
        if(isEditing){
            onEdit(editText)
        }
        setIsEditing(!isEditing)
    }

    return(
        <div className="flex justify-between m-3">
            <input
                className="bg-gray-400 rounded border w-90 p-3 "
                type="text"
                value={isEditing ? editText:task}
                readOnly={!isEditing}
                onChange={(e) => setEditText(e.target.value)}
            />
            <button className="bg-amber-300"
                onClick={handleEdit}
            >{isEditing? 'Save' : 'Edit'}</button>
            <button className="bg-amber-800 text-white"
                onClick={onDelete}
            >Delete</button>
        </div>
                
    )    
}

export default Task