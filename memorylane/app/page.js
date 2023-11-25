import Image from 'next/image'
import { Link } from '@chakra-ui/react'


export default function Home() {
  return (
    <>
      <div className='bg-green-900 min-h-screen '>
        
      {/* <div style={{backgroundImage: "url('logo.png')", backgroundSize: "cover", backgroundPosition:"center", boxShadow:"0 4px 6px rgba(80, 80, 80, 0.1)" }}className='w-3/4 h-60'>

      </div> */}

      <div className=' relative top-40 left-80 w-200 h-100 bg-lightblue'>
      <img src="logo.png" className="flex justify-center" style={{ bottom: "0", width: '50%', height: '50%', objectFit: 'cover' }}/>

      </div>

      <div className='relative top-40 py-5 px-5'>
        <button type="button" className='w-40 h-20 border border-amber-100 bg-amber-100 hover:bg-amber-300 rounded-md' > Remind </button>
      </div>

      <div className='relative top-40 left-80 py-5 px-5'>
        <Link href="/reminisce">
        <button type="button" className=' w-40 h-20 border border-amber-100 bg-amber-100 hover:bg-amber-300 rounded-md' > Reminisce </button>
        </Link>
        
      </div>

      
      <div className='flex justify-center relative bottom-20 h-500'>
        <img src="road.png" className="left-30 " style={{  bottom: "0", width: '80%', height: '80%', objectFit: 'cover' }}/>
      </div>
       



      </div>
    </>
    
    
    
  )
}
