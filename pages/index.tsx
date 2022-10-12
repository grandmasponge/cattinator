import { useRouter } from 'next/router';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css'



//const prisma = new PrismaClient()

export default function index({ data }){
  const router = useRouter()
  const refreshData = () => router.replace(router.asPath)
  return(
    <div className="w-screen h-screen bg-gradient-to-tr from-fuchsia-700 to-orange-600">
      <ToastContainer/> 
      <div className="flex justify-center items-center">
        <img className="border-2 border-double border-white mt-20 w-72 h-72" src={data[0].url} />
      </div>
      <div className='flex flex-row justify-center'>
        <button className='w-32 h-10  border-2 border-white text-white font-bold shadow-md' onClick={refreshData}>next cat</button>
        <button onClick={like} className='text-white font-bold w-20 h-10 border-2 border-white shadow-md'>like</button> 
        <button onClick={dislike} className='text-white font-bold w-20 h-10 border-2 border-white shadow-md'>dislike</button>
      </div>
      
    </div>
  )
}


  export async function getServerSideProps() {
  const res = await fetch(` https://api.thecatapi.com/v1/images/search?api_key=live_YO2SIdpSv09pZny4R6uqfubQSbY3H6DaAWL4OSe4oWYU1u9PKku81NofrgFmwSps`)
  const data = await res.json()
  console.log("working")
  return { props: { data } }
}


  const like = async () => {
    toast.success("🐱 you liked this cat", {
      position: toast.POSITION.TOP_RIGHT,
      autoClose: 2000
    });
  };

  const dislike = async () => {
    toast.error("🐱 you disliked this cat u fat fucking oger", {
    position: toast.POSITION.TOP_RIGHT,
    autoClose: 2000
    });
  }


