import { useEffect, useState } from "react"
import noteServices from "../services/noteServices"

export default function NoteEdit({
    noteId,
    onClose,
    onEdit,
    _id,
    title,
    content,
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
            <div className="bg-white w-[500px] rounded-2xl shadow-xl p-6">

                {/* Header */}
                <div className="flex items-center justify-between mb-6">
                    <h2 className="text-2xl font-bold">
                        Edit Note
                    </h2>

                    <button className="text-2xl font-bold hover:text-red-500 transition"
                    onClick={onClose}>
                        ×
                    </button>
                </div>

                {/* Form */}
                <form className="space-y-5" onSubmit={onEdit}>

                    {/* Title */}
                    <div>
                        <label className="block mb-2 font-semibold">
                            Title
                        </label>

                        <input
                        name="title"
                            type="text"
                            defaultValue={note.title}
                            className="w-full border border-zinc-300 rounded-xl px-4 py-3 outline-none focus:ring-2 focus:ring-yellow-500"
                        />
                    </div>

                    {/* Content */}
                    <div>
                        <label className="block mb-2 font-semibold">
                            Content
                        </label>

                        <textarea
                        name="content"
                            rows="6"
                            defaultValue={note.content}
                            className="w-full border border-zinc-300 rounded-xl px-4 py-3 outline-none resize-none focus:ring-2 focus:ring-yellow-500"
                        />
                    </div>

                    {/* Buttons */}
                    <div className="flex gap-4 pt-2">

                        <button
                            type="submit"
                            className="flex-1 bg-yellow-500 text-white py-3 rounded-xl hover:bg-yellow-600 transition"
                        >
                            Save Changes
                        </button>

                        <button
                            type="button"
                            className="flex-1 bg-zinc-200 py-3 rounded-xl hover:bg-zinc-300 transition"
                            onClick={onClose}
                        >
                            Cancel
                        </button>

                    </div>
                </form>
            </div>
        </div>
    )
}