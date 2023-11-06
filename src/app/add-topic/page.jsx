'use client'
import React, { useState } from 'react'
import { useRouter } from 'next/navigation'
import Link from 'next/link'

const AddTopic = () => {
  const router = useRouter()
  const [title, setTitle] = useState("")
  const [description, setDescription] = useState("")

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!title || !description) {
      alert.confirm("Title and description are required!")
      return;
    }
    try {
      const res = await fetch("http://localhost:3000/api/topics", {
        method: "POST",
        headers: {
          "Content-type": "application/json"
        },
        body: JSON.stringify({ title, description })
      })
      if (res.ok) {
        router.refresh()
        router.push('/')
      } else {
        throw new Error("Failed to create a topic!")
      }
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <form onSubmit={handleSubmit} className='flex flex-col gap-3'>
      <input
        onChange={(e) => setTitle(e.target.value)}
        value={title}
        type="text"
        placeholder='Topic title'
        className='border border-slate-500 px-8 py-2'
      />
      <input
        onChange={(e) => setDescription(e.target.value)}
        value={description}
        type="text"
        placeholder='Topic description'
        className='border border-slate-500 px-8 py-2'
      />
      <div className='flex justify-between items-center'>
        <button type='submit' className='bg-green-600 font-bold text-white py-2 px-4 w-fit rounded'>Submit</button>
        <button className='bg-gray-600 font-bold text-white py-2 px-4 w-fit rounded'>
          <Link href={"/"}>Back</Link>
        </button>
      </div>

    </form>
  )
}

export default AddTopic