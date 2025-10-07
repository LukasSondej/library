import { useState } from "react"
import type { Book } from "./types"
import EditBook from "./EditBook"

type Props  ={
element: Book
}

export const SingleElement = ({element}: Props) => {
    const [isEdit, setIsEdit] = useState<boolean>(false)
    if(isEdit)
{
    return <EditBook id={element.id} edit={setIsEdit}/>
}    return <li >
        <p>{element.title}</p>
        <p>{element.year}</p>
        <p>{element.description}</p>
        
            <button onClick={() => setIsEdit(prev => !prev)}>Edit</button>
        </li>
}