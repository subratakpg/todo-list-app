import React, { useState } from 'react'

export const AddTodo = (props) => {
    const [title, setTitle] = useState("")
    const [desc, setDesc] = useState("")
    const submit = (e) => {
        e.preventDefault();
        if(!title || !desc){
                alert("Title or description cannot be blank.")
        }   
        else{
            props.addTodo(title, desc)
            setTitle("");
            setDesc("");
        } 
        props.addTodo(title, desc);
    }

    return (
        <>
        <div className="container my-3">
        <h3>Add a todo</h3>

        <form onSubmit={submit}>
        <div className="mb-3">
            <label htmlFor="title" className="form-label">Todo title</label>
            <input type="text" value={title} onChange={(e)=>{setTitle(e.target.value)}} className="form-control" id="title" aria-describedby="emailHelp"  />
        </div>

        <div className="mb-3">
            <label htmlFor="desc" className="form-label">Todo description</label>
            <input type="text" value={desc} onChange={(e)=>{setDesc(e.target.value)}} className="form-control" id="desc" aria-describedby="emailHelp"  />
        </div>
        

        <button type="submit" className="btn btn-sm btn-primary">Add todo</button>
        </form>
        </div>
        </>
    )
}
