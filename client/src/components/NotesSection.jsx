import { useEffect, useState } from "react"
import noteServices from "../services/noteServices"

import NoteCart from "./NoteCart"
import Sidebar from "./Sidebar"
import NoteDetails from "./NoteDetails"
import NoteDelete from "./NoteDelete"
import NoteCreate from "./NoteCreate"
import NoteEdit from "./NoteEdit"

export default function NotesSection() {

    const [notes, setNotes] = useState([])

    const [noteIdDetails, setNoteIdDetails] = useState(null)

    const [noteIdDelete, setNoteDelete] = useState(null)

    const [noteIdEdit, setNoteEdit] = useState(null)

    const [sidebar, setSidebar] = useState(true)

    useEffect(() => {
        noteServices.getAll()
            .then(result => {
                setNotes(result)
            })
    }, [])

    const saveCreateNoteClickHandler = async (e) => {
        e.preventDefault()

        const formData = new FormData(e.target)
        const noteData = Object.fromEntries(formData)

        const newNote = await noteServices.create(noteData)

        setNotes(state => [...state, newNote])

    }

    const noteDetailsClickHandler = (noteId) => {
        setNoteIdDetails(noteId)
    }

    const noteDetailsCloseHandler = () => {
        setNoteIdDetails(null)
    }

    const noteDeleteClickHandler = (nodeId) => {
        setNoteDelete(nodeId)
    }

    const noteDeleteCloseHandler = () => {
        setNoteDelete(null)
    }

    const noteDeleteHandler = async () => {
        await noteServices.delete(noteIdDelete)

        setNotes(state => state.filter(note => note._id !== noteIdDelete))

        setNoteDelete(null)

    }

    const noteEditClickHandler = (noteId) => {
        setNoteEdit(noteId)
    }

    const noteEditCloseHandler = () => {
        setNoteEdit(null)
    }

    const saveEditNoteClickHandler = async (e) => {
        const noteId = noteIdEdit

        e.preventDefault()

        const formData = new FormData(e.target)
        const noteData = Object.fromEntries(formData)

        const updateNote = await noteServices.update(noteId, noteData)

        setNotes(state => state.map(note => note._id === noteId ? updateNote : note))

        setNoteEdit(null)
    }

    const sidebarClickHandler = () => {
        setSidebar(true)

    }

    const sidebarCloseHandler = () => {
        setSidebar(false)
    }

    return (
        <>
            {sidebar ? (
                <Sidebar
                    onSave={saveCreateNoteClickHandler}
                    onClose={sidebarCloseHandler}
                />
            ) : (
                <button
                    className="m-4 w-10 h-10 flex items-center justify-center bg-zinc-900 text-white rounded-xl hover:opacity-90 transition"
                    onClick={sidebarClickHandler}
                >
                    ☰
                </button>
            )}

            {noteIdDetails && <NoteDetails
                noteId={noteIdDetails}
                onClose={noteDetailsCloseHandler}
                onDeleteClick={noteDeleteClickHandler}
                onEditClick={noteEditClickHandler}
                {...notes}
            />}

            {noteIdDelete && <NoteDelete
                onClose={noteDeleteCloseHandler}
                onDelete={noteDeleteHandler}
            />}

            {noteIdEdit && <NoteEdit
                noteId={noteIdEdit}
                onClose={noteEditCloseHandler}
                onEdit={saveEditNoteClickHandler}
                {...notes}
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
                        onEditClick={noteEditClickHandler}
                        {...note}
                    />)}


                </div>
            </main>
        </>
    )
}