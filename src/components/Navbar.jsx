import Link from 'next/link'

const Navbar = () => {
    return (
        <nav className='flex justify-between items-center bg-slate-800 px-5 py-2'>
            <Link href={"/"} alt="" className='text-white font-bold'>PatoDev</Link>
            <Link href={"/add-topic"} alt="" className='bg-white p-1 rounded'>Add Topic</Link>
        </nav>
    )
}

export default Navbar