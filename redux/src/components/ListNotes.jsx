import { Avatar, Button, Card } from 'antd';
import Meta from 'antd/es/card/Meta';
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { delNote } from '../redux/slices/notesSlices';
import { DeleteOutlined } from '@ant-design/icons';
let src = '';
function ListNotes() {
    const notes = useSelector(state => state.noteReducer.notes);
    useEffect(() => {
        src = "https://joesch.moe/api/v1/random"
    }, []);
    const dispatch = useDispatch();
    const { Meta } = Card;
    return (
        <div className='flex flex-wrap my-20 mx-40 items-center gap-10'>
            {notes.map((note) => (
                <Card
                    className='min-w-[250px] min-h-[100px] text-base h-fit max-w-lg m-2 bg-slate-100 hover:shadow-2xl transition-all'
                    actions={[
                        <Button type='text' onClick={function (){return dispatch(delNote(note.id))}}><DeleteOutlined /></Button>
                    ]}
                >
                    <Meta
                        avatar={<Avatar src="https://joesch.moe/api/v1/random" className='bg-white' />}
                        title={note.title}
                        description={note.note}
                    />
                </Card>))}
        </div>
    );
}

export default ListNotes;