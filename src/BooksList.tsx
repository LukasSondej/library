import { useGetDataQuery } from "./queries/useGetDataQuery"

export const BooksList = () => {
    const {data}= useGetDataQuery()
    console.log(data)
    return <>
   <ul>
    {data?.map(el => <li key={el.id}> {el.title}</li>)}
   </ul>
    </>
}