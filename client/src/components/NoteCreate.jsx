export default function({
    onClose,
    onSave
}){

    return(
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
                    placeholder="Enter title..."
                    className="w-full border border-zinc-300 rounded-xl px-4 py-3 outline-none focus:ring-2 focus:ring-blue-500"
                />
            </div>

            {/* Content */}
            <div>
                <label className="block mb-2 font-semibold">
                    Content
                </label>

                <textarea
                    name="content"
                    placeholder="Write your note..."
                    rows="6"
                    className="w-full border border-zinc-300 rounded-xl px-4 py-3 outline-none resize-none focus:ring-2 focus:ring-blue-500"
                />
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
                    className="flex-1 bg-zinc-200 py-3 rounded-xl hover:bg-zinc-300 transition"
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