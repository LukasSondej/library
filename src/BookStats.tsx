
import { useGetDataQuery } from "./queries/useGetDataQuery"

export const BookStats = () => {
    const { data } = useGetDataQuery()
    const bookCount = data?.length ?? 0

    console.log(data)
    return (
        <div>
            <p style={{fontSize: 24}}>ILOŚĆ KSIĄŻEK: {bookCount}</p>
        </div>
    )
}