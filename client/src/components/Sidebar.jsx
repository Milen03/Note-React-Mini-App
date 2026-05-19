import { useState } from "react"
import noteServices from "../services/noteServices"
import NoteCreate from "./NoteCreate"

export default function({
    onSave,
    onClose
}){

     const [showCreate,setShowCreate] = useState(false)
    

    const createNoteClickHandler = () =>{
        setShowCreate(true)
    }

    const closeCreateClickHandler = () =>{
        setShowCreate(false)
    }

    
    return(
        <>
        {showCreate &&
        <NoteCreate
        onClose={closeCreateClickHandler}
        onSave={onSave}/> }
        <aside className="w-64 bg-zinc-200 border-r border-zinc-300 p-4 flex flex-col">
    
    <div className="flex items-center justify-between mb-6">
        <h1 className="text-2xl font-bold">
            Notes App
        </h1>

        <button
            className="text-2xl font-bold hover:text-red-500 transition"
            onClick={onClose}
        >
            ×
        </button>
    </div>

    <button
        className="bg-zinc-900 text-white py-2 rounded-xl font-semibold hover:opacity-90 transition"
        onClick={createNoteClickHandler}
    >
        + Add Note
    </button>

</aside>

        </>
    )
}