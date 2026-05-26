const baseUrl = `${import.meta.env.VITE_APP_SERVER_URL}/jsonstore/node`

export default {
async getAll() {
    const respose = await fetch(baseUrl)
    const result = await respose.json()
    const note = Object.values(result)

    return note
},
async create(noteData){
    const respose = await fetch(baseUrl,{
        method:'POST',
        headers:{
            'Content-Type': 'application/json'
        },
        body:JSON.stringify(noteData)
    })

    const result = respose.json()

    return result
},
async getOne(noteId){
    const respose = await fetch(`${baseUrl}/${noteId}`)
    const result = await respose.json()

    return result
},

async delete(noteId){
    const response = await fetch(`${baseUrl}/${noteId}`,{
        method:'DELETE'
    })

    const result = await response.json

    return result
},
 async update(noteId,noteData){
        const response = await fetch(`${baseUrl}/${noteId}`,{
             method:'PUT',
             headers:{
                'Content-Type': 'application/json'
             },
             body:JSON.stringify(noteData)
        })

        const result = await response.json()

        return result
    }
}