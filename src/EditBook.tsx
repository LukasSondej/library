import { useEffect } from "react"
import { useForm } from "./hooks/useForm"
import { useGetBookQuery } from "./hooks/useGetBookQuery"
import { useEditBookMutation } from "./queries/useEditBookMutation"
import type { Book } from "./types"

type Props = {
    id: string | number
    edit: (value: boolean) => void
}

const EditBook = ({ id, edit }: Props) => {
    const { data: bookData } = useGetBookQuery(id)
    const { values, handleChange, reset, setValues } = useForm<Book>({
        id: 0,
        year: 0,
        title: "",
        description: ""
    })
    const { mutate, isPending,  data: editData } = useEditBookMutation()

useEffect(() => {
    if (bookData) {
        setValues({
            id: bookData.id ?? "",
            year: bookData.year ?? 0,
            title: bookData.title ?? "",
            description: bookData.description ?? ""
        })
    }
}, [bookData, setValues])

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault()
        if (!values.title || !values.year || !values.description) {
            alert("Wypełnij wszystkie pola!")
            return
        }
        mutate({ ...values, year: Number(values.year) }, { onSuccess: () => {
            reset() 
            edit(false) }})
    }

    return (
        <form onSubmit={handleSubmit}>
            <p>
                <label htmlFor="year">Year</label>
                <input
                    type="number"
                    id="year"
                    name="year"
                    value={values.year}
                    onChange={handleChange}
                />
            </p>
            <p>
                <label htmlFor="title">Title</label>
                <input
                    type="text"
                    id="title"
                    name="title"
                    value={values.title}
                    onChange={handleChange}
                />
            </p>
            <p>
                <label htmlFor="description">Description</label>
                <textarea
                    id="description"
                    name="description"
                    value={values.description}
                    onChange={handleChange}
                />
            </p>
            <button className="btn-add" type="submit" disabled={isPending} 
        >Zapisz zmiany</button>
           
            {editData && <div>Książka zaktualizowana! ID: {editData.id}</div>}
        </form>
    )
}

export default EditBook