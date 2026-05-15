import { useEffect, useState } from "react"
import nodeServices from "../services/nodeServices"

import NoteCart from "./NoteCart"
import Sidebar from "./Sidebar"

export default function NotesSection(){

    const [notes,setNotes] = useState([])


    useEffect(()=>{
        nodeServices.getAll()
        .then(result =>{
            setNotes(result)
        })
    },[])

    const saveCreateNodeClickHandler = async (e) =>{
        e.preventDefault()

        const formData = new FormData(e.target)
        const noteData = Object.fromEntries(formData)

        const newNote = await nodeServices.create(noteData)

        setNotes(state =>[...state,newNote])

    }

    return (
        <>
        <Sidebar
        onSave={saveCreateNodeClickHandler}/>
              <main className="flex-1 p-6">
        <h2 className="text-3xl font-bold mb-6">
          Your Notes
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">

          {/* Note Card */}
         {notes.map(note => <NoteCart
         key={note._id}
         {...note}
         />)}


        </div>
      </main>
        </>
    )
}