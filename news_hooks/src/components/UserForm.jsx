import React, { useRef, useState } from 'react';

function UserForm() {
    const [name, setName] = useState('');
    const nameInputRef = useRef(null);
    const fruitInputRef = useRef(null);
    function handleSubmit(event) {
        event.preventDefault();
        // console.log('Form Submitted');
        // console.log(nameInputRef.current);
        // console.log(fruitInputRef.current);
        const nameInputValue = nameInputRef.current.value;
        const fruitInputValue = fruitInputRef.current.value;
        console.log(nameInputValue);
        console.log(fruitInputValue);
        alert(nameInputValue + fruitInputValue);
    }
    function handleChange(e) {
        console.log(e.target.value);
    }
    return (
        <div className=''>
            <form action="" onSubmit={handleSubmit} className='m-52 p-10'>
                <label htmlFor="name">Name</label>
                <input type="text" className="bg-slate-200 mx-5" ref={nameInputRef} />
                <br />
                <select ref={fruitInputRef}>
                    <option value="grapes">Grapes</option>
                    <option value="apple">Apple</option>
                    <option value="mango">Mango</option>
                    <option value="banana">Banana</option>
                </select>
                <br />
                <button className = "" onClick = {handleSubmit} > Submit </button>

            </form>
        </div>
    );
}

export default UserForm;