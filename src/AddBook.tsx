import type React from "react"
import { useForm } from "./hooks/useForm"
import { useAddBookQuery } from "./queries/useAddBookQuery"
import type {  NewBook } from "./types"


export const AddBook = () => {
    const {values, handleChange, reset} = useForm<NewBook>({
     
        year: 0,
        title: "",
        description: ""
    })
    const {mutate, isPending, error, data} = useAddBookQuery()
const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (!values.title || !values.year || !values.description) {
        alert("Wypełnij wszystkie pola!")
        return
    }
    mutate({ ...values, year: Number(values.year) }, { onSuccess: () => reset() })
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
    <button className="btn-add" type="submit" disabled={isPending}>Dodaj ksionzke</button>
    {error && <div>Blond {error.message}</div>}
    {data && <div>Książka dodana! ID: {data.id}</div>}
</form>
    
    )
}