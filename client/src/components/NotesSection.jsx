import { useEffect, useState } from "react"
import noteServices from "../services/noteServices"

import NoteCart from "./NoteCart"
import Sidebar from "./Sidebar"
import NoteDetails from "./NoteDetails"
import NoteDelete from "./NoteDelete"

export default function NotesSection(){

    const [notes,setNotes] = useState([])

    const [noteIdDetails,setNoteIdDetails] = useState(null)

    const [noteIdDelete,setNoteDelete] = useState(null)

    useEffect(()=>{
        noteServices.getAll()
        .then(result =>{
            setNotes(result)
        })
    },[])

    const saveCreateNoteClickHandler = async (e) =>{
        e.preventDefault()

        const formData = new FormData(e.target)
        const noteData = Object.fromEntries(formData)

        const newNote = await noteServices.create(noteData)

        setNotes(state =>[...state,newNote])

    }

    const noteDetailsClickHandler = (noteId) =>{
        setNoteIdDetails(noteId)
    }

     const noteDetailsCloseHandler = () =>{
        setNoteIdDetails(null)
    }

    const noteDeleteClickHandler = (nodeId) =>{
        setNoteDelete(nodeId)
    }

    const noteDeleteCloseHandler = () =>{
        setNoteDelete(null)
    }

    const noteDeleteHandler = async () =>{
      await noteServices.delete(noteIdDelete)

      setNotes(state =>state.filter(note => note._id !== noteIdDelete))

      setNoteDelete(null)
        
    }

    return (
        <>
        <Sidebar
        onSave={saveCreateNoteClickHandler}/>

        {noteIdDetails && <NoteDetails
        noteId={noteIdDetails}
        onClose={noteDetailsCloseHandler}
        onDeleteClick={noteDeleteClickHandler}
        {...notes}
        />}

        {noteIdDelete && <NoteDelete
        onClose={noteDeleteCloseHandler}
        onDelete={noteDeleteHandler}
        />}
              <main className="flex-1 p-6">
        <h2 className="text-3xl font-bold mb-6">
          Your Notes
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">

          {/* Note Card */}
         {notes.map(note => <NoteCart
         key={note._id}
         onDetailsClick={noteDetailsClickHandler}
         onDeleteClick={noteDeleteClickHandler}
         {...note}
         />)}


        </div>
      </main>
        </>
    )
}