export default function NoteDelete({
    onClose,
    onDelete
}) {

    return (
        <div className="fixed inset-0 flex items-center justify-center bg-black/50">

            {/* Modal */}
            <div className="bg-white w-[400px] rounded-2xl shadow-xl p-6">

                {/* Header */}
                <div className="mb-6">
                    <h2 className="text-2xl font-bold text-red-500">
                        Delete Note
                    </h2>
                </div>

                {/* Message */}
                <p className="text-zinc-600 mb-8">
                    Are you sure you want to delete this note?
                </p>

                {/* Buttons */}
                <div className="flex gap-4">

                    <button
                        className="flex-1 bg-red-500 text-white py-3 rounded-xl hover:bg-red-600 transition"
                     onClick={onDelete}>
                        Delete
                    </button>

                    <button
                        className="flex-1 bg-zinc-200 py-3 rounded-xl hover:bg-zinc-300 transition"
                      onClick={onClose}>
                        Cancel
                    </button>

                </div>
            </div>
        </div>
    )
}