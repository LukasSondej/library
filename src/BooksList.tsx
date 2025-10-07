import { useGetDataQuery } from "./queries/useGetDataQuery"
import { SingleElement } from "./SingleElement"

export const BooksList = () => {
    const {data}= useGetDataQuery()
    console.log(data)
    return <>
   <ul>
  {data?.map(el => <SingleElement key={el.id} element={el} />)}
   </ul>
    </>
}