import { useState } from "react"

export default function ({
    onClose,
    onSave
}) {
    const [form, setForm] = useState({
        title: '',
        content: ''
    })

    const countCharInTextArea = (e) => {
        setForm(state => ({
            ...state,
            content: e.target.value
        }))
    }

    return (
        <>
            <div className="fixed inset-0 flex items-center justify-center bg-black/50">

                {/* Modal */}
                <div className="bg-white w-[500px] rounded-2xl shadow-xl p-6">

                    {/* Header */}
                    <div className="flex items-center justify-between mb-6">
                        <h2 className="text-2xl font-bold">
                            Add Note
                        </h2>

                        <button className="text-2xl font-bold hover:text-red-500 transition" onClick={onClose}>
                            ×
                        </button>
                    </div>

                    {/* Form */}
                    <form className="space-y-5" onSubmit={onSave}>

                        {/* Title */}
                        <div>
                            <label className="block mb-2 font-semibold">
                                Title
                            </label>

                            <input
                                name="title"
                                type="text"
                                minLength={2}
                                maxLength={30}
                                placeholder="Enter title..."
                                className="w-full border border-zinc-300 rounded-xl px-4 py-3 outline-none focus:ring-2 focus:ring-blue-500"
                                required
                            />
                        </div>

                        {/* Content */}
                        <div>
                            <label className="block mb-2 font-semibold">
                                Content
                            </label>

                            <textarea
                                name="content"
                                value={form.content}
                                placeholder="Write your note..."
                                rows="6"
                                onChange={countCharInTextArea}
                                minLength={5}
                                maxLength={200}
                                className="w-full border border-zinc-300 rounded-xl px-4 py-3 outline-none resize-none focus:ring-2 focus:ring-blue-500"
                                required
                            />

                            <p className="text-sm text-zinc-500 mt-2">
                                {form.content.length}/200
                            </p>
                        </div>

                        {/* Buttons */}
                        <div className="flex gap-4 pt-2">

                            <button
                                type="submit"
                                className="flex-1 bg-blue-500 text-white py-3 rounded-xl hover:bg-blue-600 transition"
                            >
                                Save
                            </button>

                            <button
                                type="button"
                                className="flex-1 bg-zinc-200 py-3 rounded-xl hover:bg-red-400 transition"
                                onClick={onClose}>
                                Cancel
                            </button>

                        </div>
                    </form>
                </div>
            </div>
        </>
    )
}