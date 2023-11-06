import React from 'react'
import RemoveBtn from './RemoveBtn'
import Link from 'next/link'
import { HiPencilAlt } from 'react-icons/hi'

const getData = async () => {
    try {
        const res = await fetch('http://localhost:3000/api/topics', { cache: 'no-store' });
        if (!res.ok) {
            throw new Error('Failed to fetch data')
        }
        return res.json()
    } catch (error) {
        console.log("Error loading topics:", error)
    }
}

const TopicList = async () => {
    const data = await getData()
    return (
        <>
            {data?.map((t) => (
                <div key={t._id} className='p-4 border border-slate-300 my-3 flex justify-between gap-5 items-start'>
                    <div>
                        <h2 className='font-bold text-2xl'>{t.title}</h2>
                        <div>{t.description}</div>
                    </div>
                    <div className='flex gap-2'>
                        <Link href={`edit-topic/${t._id}`}>
                            <HiPencilAlt size={24} />
                        </Link>
                        <RemoveBtn id={t._id} />
                    </div>
                </div>
            ))}


        </>
    )
}

export default TopicList