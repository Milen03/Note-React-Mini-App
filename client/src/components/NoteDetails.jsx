import { useEffect, useState } from "react"
import noteServices from "../services/noteServices"

export default function NoteDetails({
    noteId,
    onClose,
    title,
    content,
    onDeleteClick
}) {

    const [note,setNote] = useState({})

    useEffect(()=>{
        noteServices.getOne(noteId)
        .then(result =>{
            setNote(result)
        } )
    },[noteId])

    return (
        <div className="fixed inset-0 flex items-center justify-center bg-black/50">

            {/* Modal */}
            <div className="bg-white w-[600px] rounded-2xl shadow-xl p-6">

                {/* Header */}
                <div className="flex items-center justify-between mb-6">
                    <h2 className="text-3xl font-bold">
                        Note Details
                    </h2>

                    <button className="text-3xl font-bold hover:text-red-500 transition"
                    onClick={onClose}>
                        ×
                    </button>
                </div>

                {/* Content */}
                <div className="space-y-6">

                    {/* Title */}
                    <div>
                        <h3 className="text-sm text-zinc-500 mb-2">
                            Title
                        </h3>

                        <div className="bg-zinc-100 p-4 rounded-xl text-xl font-semibold">
                            {note.title}
                        </div>
                    </div>

                    {/* Content */}
                    <div>
                        <h3 className="text-sm text-zinc-500 mb-2">
                            Content
                        </h3>

                        <div className="bg-zinc-100 p-4 rounded-xl min-h-[200px]">
                           {note.content}
                        </div>
                    </div>

                    {/* Buttons */}
                    <div className="flex gap-4 pt-2">

                        <button className="flex-1 bg-yellow-500 text-white py-3 rounded-xl hover:bg-yellow-600 transition">
                            Edit
                        </button>

                        <button className="flex-1 bg-red-500 text-white py-3 rounded-xl hover:bg-red-600 transition"
                        onClick={() => onDeleteClick(note.noteId)}>
                            Delete
                        </button>

                        <button className="flex-1 bg-zinc-300 py-3 rounded-xl hover:bg-zinc-400 transition"
                        onClick={onClose}>
                            Close
                        </button>

                    </div>
                </div>
            </div>
        </div>
    )
}