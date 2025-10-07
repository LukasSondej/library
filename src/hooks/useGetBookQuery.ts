import { useQuery } from "@tanstack/react-query"
import { useApi } from "./useApi"
import type { Book } from "../types"

export const useGetBookQuery = (id: string | number) => {
    const {getData} = useApi()
const {data} = useQuery({
    queryKey: ['book', id],
    queryFn: async()=> {
return getData<Book>(`books/${id}`)
    }
})
return {data}
}