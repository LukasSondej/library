
import { useDeleteBookQuery } from "./queries/useDeleteBookQuery"
import type { Book } from "./types"

type Props  ={
element: Book
setIsDeleteConfirmation: (value: boolean) => void
}
export const DeleteBookConfirmation = ({element, setIsDeleteConfirmation}: Props) => {

 const {mutate}= useDeleteBookQuery()
return (
    <div>
        <p>{`Czy napewno chcesz usunąć książkę ${element.title} ? `}</p>
        <button onClick={()=>{
            mutate(element.id)
            setIsDeleteConfirmation(false)
        }}>Tak</button>
        <button onClick={()=>{
            
            setIsDeleteConfirmation(false)
        } }>Nie</button>
    </div>
)
}