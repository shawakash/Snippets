import { nanoid } from '@reduxjs/toolkit';
import { Button, Form, Input } from 'antd';
import React, { useRef } from 'react'
import { useDispatch } from 'react-redux';
import { setNote } from '../redux/slices/notesSlices';

function CreateNote() {
    const noteRef = useRef(null);
    const titleRef = useRef(null);
    const dispatch = useDispatch();
    function submitNote(e){
        e.preventDefault();
        const note = noteRef.current.value;
        const title = titleRef.current.value;
        dispatch(setNote({note: note, title: title, id: nanoid(10)}));
    }
    return (
        <div className='flex justify-center'>
            <Form onSubmit={submitNote} className='flex flex-col justify-center gap-5 '>
                <Input type="text" placeholder='Title'  className='w-64 mx-8 text-center h-6 text-xl py-4 text-slate-600' ref={titleRef} />
                <Input type="text" placeholder='Content' className='w-80 py-4 h-6  text-center' ref={noteRef} />
                <Button onClick={submitNote} className='w-fit mx-24'>Create Note</Button>
            </Form>
        </div>
    );
}

export default CreateNote;