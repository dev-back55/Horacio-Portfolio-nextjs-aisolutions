import Link from 'next/link'


 export default function 
() {
  return (
    <div className='flex flex-col items-center justify-center min-h-screen'>
      <h1 className='text-4xl font-bold mb-4'>Page Not Found...🤔​🤷‍♂️​</h1>
      <Link href="/" className='px-4 py-2 rounded-md font-medium bg-[#72BF78] text-white hover:bg-[#72BF78]/90 transition-colors mb-10'>
        Back Home
      </Link>
    </div>
  )
}
