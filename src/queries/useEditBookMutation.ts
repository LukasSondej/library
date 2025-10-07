import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query"
import { useApi } from "../hooks/useApi"
import type { Book } from "../types"

export const useEditBookMutation = () => {
    const queryClient = useQueryClient()
    const { putData } = useApi()
    const { data, mutate, isPending } = useMutation({
        mutationKey: ["putBook"],
        mutationFn: async (updatedBook: Book) => {
            return putData<Book, Book>(`books/${updatedBook.id}`, updatedBook)
        },
        onSuccess: (editedBook) => {
            queryClient.setQueryData<Book[]>(['books'], (oldBooks = []) =>
                oldBooks
                    ? oldBooks.map(book => book.id === editedBook.id ? editedBook : book)
                    : []
            )
        }
    })
    return { data, mutate, isPending }
}