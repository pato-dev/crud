'use client'

import React, { useState } from 'react'
import { useRouter } from 'next/navigation';
import Link from 'next/link';

const EditTopicForm = ({ id, title, description }) => {
    const router = useRouter();
    const [newTitle, setNewTitle] = useState(title);
    const [newDescription, setNewDescription] = useState(description);

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const res = await fetch(`http://localhost:3000/api/topics/${id}`, {
                method: "PUT",
                headers: {
                    'Content-type': 'application/json'
                },
                body: JSON.stringify({ newTitle, newDescription }),
            });
            if (!res.ok) {
                throw new Error("Unable to update topic")
            }
            router.refresh()
            router.push("/")
        } catch (error) {
            console.log(error)
        }
    }

    return (
        <form onSubmit={handleSubmit} className='flex flex-col gap-3'>
            <h1 className='text-center'>Edit Topic.</h1>
            <input
                onChange={(e) => setNewTitle(e.target.value)}
                value={newTitle}
                type="text"
                placeholder='Topic title'
                className='border border-slate-500 px-8 py-2'
            />
            <input
                onChange={(e) => setNewDescription(e.target.value)}
                value={newDescription}
                type="text"
                placeholder='Topic description'
                className='border border-slate-500 px-8 py-2'
            />
            <div className='flex justify-between items-center'>
                <button type='submit' className='bg-green-600 font-bold text-white py-2 px-4 w-fit rounded'>Update</button>
                <button className='bg-gray-600 font-bold text-white py-2 px-4 w-fit rounded'>
                    <Link href={"/"} alt='home-page'>Back</Link>
                </button>
            </div>
        </form>
    )
}
export default EditTopicForm