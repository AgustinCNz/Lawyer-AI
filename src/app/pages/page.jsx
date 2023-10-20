import Link from 'next/link'
import Navbar from '../components/page';

const Resume = () => {
    return (
        <>
        <Navbar/>
        <main className='flex min-h-screen flex-col items-center justify-between p-24 bg-orange shadow-sm'>
        <div className='resume bg-base-200'>
            <div className='flex justify-items-center'>
                <h1 className='flex justify-items-center text-2xl pointer-events-auto'>Resume your contract and more</h1>
            </div>
            
        </div>
        <div className='input bg-base-200'>
                <input className='flex justify-items-center text-2xl pointer-event-auto' type='file' />
                </div>
        </main>
        </>
    )
}
export default Resume;