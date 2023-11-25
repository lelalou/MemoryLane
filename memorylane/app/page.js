import Image from 'next/image'

export default function Home() {
  return (
    <>
      <div className='bg-lime-950/70 min-h-screen '>
        
      {/* <div style={{backgroundImage: "url('logo.png')", backgroundSize: "cover", backgroundPosition:"center", boxShadow:"0 4px 6px rgba(80, 80, 80, 0.1)" }}className='w-3/4 h-60'>

      </div> */}

      <div className='relative top-40 left-20 w-200 h-100 bg-lightblue'>
      <img src="logo.png" style={{ bottom: "0", width: '70%', height: '70%', objectFit: 'cover' }}/>

      </div>

      <div className='relative top-40 py-5 px-5'>
        <button type="button" className='w-40 h-20 border border-amber-100 bg-amber-100 hover:bg-amber-300 rounded-md' > Remind </button>
      </div>

      
      <div className='relative top-20 w-400 h-500'>
        <img src="road.png" className="left-30" style={{  bottom: "0", width: '100%', height: '100%', objectFit: 'cover' }}/>
      </div>
       



      </div>
    </>
    
    
    
  )
}
