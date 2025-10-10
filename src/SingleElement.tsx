import { useState } from "react"
import type { Book } from "./types"
import EditBook from "./EditBook"
import { useDeleteBookQuery } from "./queries/useDeleteBookQuery"
import { DeleteBookConfirmation } from "./DeleteBookConfirmation"

type Props  ={
element: Book
}

export const SingleElement = ({element}: Props) => {
   
    const [isEdit, setIsEdit] = useState<boolean>(false)
    const [isDeleteConfirm, setIsDeleteConfirm] = useState<boolean>(false)
    if(isEdit)
{
    return <EditBook id={element.id} edit={setIsEdit}/>
}  
if (isDeleteConfirm){
    return (
        <DeleteBookConfirmation element={element} setIsDeleteConfirmation={setIsDeleteConfirm}/>
    )
}
return <li >
        <p>{element.title}</p>
        <p>{element.year}</p>
        <p>{element.description}</p>
        
            <button onClick={() => setIsEdit(prev => !prev)}>Edit</button>
            <button onClick={() => setIsDeleteConfirm(true)}>Delete</button>
        </li>
}