export default function({
    _id,
    title,
    content,
    onDetailsClick
}){

    return(
        <>
        <div className="bg-white border border-zinc-300 p-5 rounded-2xl shadow-md">
            <h3 className="text-xl font-semibold mb-4">
              {title}
            </h3>

            <div className="flex gap-3">
              <button className="flex-1 bg-blue-500 text-white py-2 rounded-xl hover:bg-blue-600 transition"
              onClick={() => onDetailsClick(_id)}>
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

        </>
    )
}