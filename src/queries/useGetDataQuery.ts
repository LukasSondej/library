import { useQuery } from "@tanstack/react-query"
import { useApi } from "../hooks/useApi"
import type { Book } from "../types"

export const useGetDataQuery = () => {
    const {getData} = useApi()
    const {data} = useQuery({
        queryKey: ["books"],
        queryFn: async() => {
           return getData<Book[]>("books")
        }
    })
    return {data}
}