import { useEffect } from 'react';
import { useState } from 'react'
import { useFirestore } from '../../hooks/useFirestore';

function WishForm({ uid }) {

    const [title, setTitle] = useState("");
    const [text, setText] = useState("");
    const { addDocument, response } = useFirestore('wish');

    const handleData = (e) => {
        if (e.target.id === 'tit') {
            setTitle(e.target.value);
        } else if (e.target.id === 'txt') {
            setText(e.target.value);
        }
    }

    //통신 완료되면 인풋 값 초기화
    useEffect(() => {
        if (response.success) {
            setTitle('');
            setText('');
        }
    }, [response.success]);

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(title, text);
        addDocument({ uid, title, text })
    }

    return (
        <form onSubmit={handleSubmit}>
            <fieldset>
                <legend>Make A Wish</legend>
                <label htmlFor='tit'>About : </label>
                <input id='tit' type="text" required onChange={handleData} value={title} />

                <label htmlFor='tet'>tell me : </label>
                <textarea id='txt' type="text" required onChange={handleData} value={text}></textarea>

                <button type='submit'>복채</button>
            </fieldset>
        </form >
    )
}

export default WishForm