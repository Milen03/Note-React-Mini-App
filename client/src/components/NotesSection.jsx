export default function NotesSection(){

    return (
        <>
              <main className="flex-1 p-6">
        <h2 className="text-3xl font-bold mb-6">
          Your Notes
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">

          {/* Note Card */}
          <div className="bg-white border border-zinc-300 p-5 rounded-2xl shadow-md">
            <h3 className="text-xl font-semibold mb-4">
              React Notes
            </h3>

            <div className="flex gap-3">
              <button className="flex-1 bg-blue-500 text-white py-2 rounded-xl hover:bg-blue-600 transition">
                View
              </button>

              <button className="flex-1 bg-yellow-500 text-white py-2 rounded-xl hover:bg-yellow-600 transition">
                Edit
              </button>

              <button className="flex-1 bg-red-500 text-white py-2 rounded-xl hover:bg-red-600 transition">
                Delete
              </button>
            </div>
          </div>

          {/* Note Card */}
          <div className="bg-white border border-zinc-300 p-5 rounded-2xl shadow-md">
            <h3 className="text-xl font-semibold mb-4">
              Tailwind CSS
            </h3>

            <div className="flex gap-3">
              <button className="flex-1 bg-blue-500 text-white py-2 rounded-xl hover:bg-blue-600 transition">
                View
              </button>

              <button className="flex-1 bg-yellow-500 text-white py-2 rounded-xl hover:bg-yellow-600 transition">
                Edit
              </button>

              <button className="flex-1 bg-red-500 text-white py-2 rounded-xl hover:bg-red-600 transition">
                Delete
              </button>
            </div>
          </div>

          {/* Note Card */}
          <div className="bg-white border border-zinc-300 p-5 rounded-2xl shadow-md">
            <h3 className="text-xl font-semibold mb-4">
              JavaScript
            </h3>

            <div className="flex gap-3">
              <button className="flex-1 bg-blue-500 text-white py-2 rounded-xl hover:bg-blue-600 transition">
                View
              </button>

              <button className="flex-1 bg-yellow-500 text-white py-2 rounded-xl hover:bg-yellow-600 transition">
                Edit
              </button>

              <button className="flex-1 bg-red-500 text-white py-2 rounded-xl hover:bg-red-600 transition">
                Delete
              </button>
            </div>
          </div>

        </div>
      </main>
        </>
    )
}