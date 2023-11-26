'use client'
import ImageDisplay from './imageDisplay'; // Adjust the path as necessary
// HomePage or other parent component
export default function HomePage() {
    const keyPhrase = 'Show me my son'; // Replace with actual key phrase

    return (
      <div>
        <ImageDisplay keyPhrase={keyPhrase} />
        <div className='w-full bg-amber-200 text-white'>
                <div className='pt-5 h-40 w-30 flex justify-center text-white-100'>
                <button type="button" className='flex justify-center pt-5 rounded-full w-20 h-20 border border-gray-800 bg-black decoration-white'>Speak</button>
                </div>
                
                </div> 
      </div>
    );
}