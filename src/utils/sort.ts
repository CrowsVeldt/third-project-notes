import { Note } from "./types"
import { sortMethods } from "./util"

function sortBy (method: string): () => string {
    // receive sortMethod: string
    // return sortFunction for appropriate method
    return () => ''
}

function sortNotes (notes: Note[], method: () => []): Note[] {
    // receive note array and sort method
    // use Array.sort to sort notes by method
    // return sorted array

    const sortedNotes: Note[] = notes
    return sortedNotes
}

export {
    sortBy,
    sortNotes
}