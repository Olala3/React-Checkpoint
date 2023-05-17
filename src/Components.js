import { useState } from "react"

export const data= [
    {id:1, content:'Blog Entry 1'},
    {id:2, content:'Blog Entry 2'},
]

export function Form() {
    //allow users to input new blog entries
    const [input, setInput] = useState('')
    const [data, setData] = useState([
        {id:1, content:'Blog Entry 1'},
        {id:2, content:'Blog Entry 2'},
    ])
    let id = 3;

    const handleChangeInput = (event) => {
        setInput(event.target.value)
    }

    const handleSendBlog = () => {
        setData([{id:id ,content:input}, ...data])
        setInput("");
        id++;
    }

    return <div>
        <h1>Blog Entries</h1>
        <ul>
            {data.map((input) => 
            <li key={input.id}>
                <button>{input.content}</button>
            </li> )}
        </ul>
        <input value={input} placeholder="New Blog Entry" onChange={handleChangeInput}/>
        <button onClick={handleSendBlog}>Send</button>
    </div>
}

export function BlogEntry() {
    //display individual blog entries
    const [data, setData] = useState([
        {id:1, content:'Blog Entry 1'},
        {id:2, content:'Blog Entry 2'},
    ])

    return <div>
        <h2>{data.content}</h2>
    </div>
}
