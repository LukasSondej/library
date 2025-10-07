import { useMutation, useQueryClient } from "@tanstack/react-query";
import type { Book, NewBook } from "../types";
import { useApi } from "../hooks/useApi";

export const useAddBookQuery = () => {
    const {postData} = useApi()
    const queryClient = useQueryClient()
const {data, isPending, error, mutate} = useMutation({
    mutationKey: ["book"],
    mutationFn: async(newBook: NewBook) => {
return postData<Book, NewBook>("books", newBook)
        },
   onSuccess(addedBook) {
       queryClient.setQueryData<Book[]>(['books'], (oldBook) => {
        return [...(oldBook || []), addedBook]
       })
   },
    })
    return {data, isPending,error, mutate}
}