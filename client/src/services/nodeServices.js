const baseUrl = 'http://localhost:3030/jsonstore/node'

export default {
async getAll() {
    const respose = await fetch(baseUrl)
    const result = await respose.json()
    const note = Object.values(result)

    return note
}
}