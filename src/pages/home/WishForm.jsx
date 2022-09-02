import { useState } from 'react'

function WishForm() {

    const [title, setTitle] = useState("");
    const [text, setText] = useState("");

    const handleData = (e) => {
        if (e.target.id === 'tit') {
            setTitle(e.target.value);
        } else if (e.target.id === 'txt') {
            setText(e.target.value);
        }
    }
    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(title, text)
    }

    return (
        <form onSubmit={handleSubmit}>
            <fieldset>
                <legend>Make A Wish</legend>
                <label htmlFor='tit'>About : </label>
                <input id='tit' type="text" required onChange={handleData} />

                <label htmlFor='tet'>tell me : </label>
                <textarea id='txt' type="text" required onChange={handleData}></textarea>

                <button type='submit'>복채</button>
            </fieldset>
        </form >
    )
}

export default WishForm