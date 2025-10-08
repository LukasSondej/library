import { QueryClient, useMutation, useQuery, useQueryClient } from "@tanstack/react-query"
import { useApi } from "../hooks/useApi"
import type { Book } from "../types"

export const useDeleteBookQuery = () => {
    const queryClient = useQueryClient()
    const {deleteBook} = useApi()
    const {data, mutate} = useMutation({
mutationKey: ["book"],
mutationFn: async(id: string | number ) => {

return deleteBook<Book>(`books/${id}`)
},
onSuccess: (deleteBook) => {
    queryClient.setQueryData<Book[]>(["books"], oldBooks => (
        oldBooks ? oldBooks.filter(el => el.id !== deleteBook.id) : []
    ))
}
    })
    return {data, mutate}
}