import { Link } from '@chakra-ui/react'

export default function Reminisce(){
    return(
        <>
        <div className="bg-white-100 min-h-screen ">

            <div style={{height:'100vh'}}className="flex items-center justify-center h-screen text-stone-300">
                
                <button type="button" className="flex-shrink-0 w-1/4 h-40 mx-4 bg-green-900 rounded-lg border text-2xl font-bold hover:bg-lime-800">
                    <Link href='./people'>
                    People
                    </Link></button>
            
                <button type="button" className="flex-shrink-0 w-1/4 h-40 mx-4 bg-green-900 rounded-lg border  text-2xl font-bold hover:bg-lime-800">Places</button>
                <button type="button" className="flex-shrink-0 w-1/4 h-40 mx-4 bg-green-900 rounded-lg border  text-2xl font-bold hover:bg-lime-800">Moments</button>
            </div>
            <footer className="w-50 h-50 m-0 p-0">
                <img className="w-30 h-40"src="memorylane.png"/>
            </footer>
        
        </div>
        </>
    )
}