import WorkerHeader from "../Components/WorkerHeader"
import { useState, useEffect } from "react"
import { useNavigate } from "react-router-dom"
import axios from "axios"
import { useParams } from "react-router-dom"

function ManagerViewBox (){
    const params = useParams()
    const navigate = useNavigate()
    const [ViewMore, setViewMore] = useState({})
    const [status, setStatus] = useState({})

    const HandleGetMore = (ID) => {
        axios.get(`http://localhost:7000/request/${params.ID}`).then((response) => {
            setViewMore(response.data)
        }).catch((err) => {
            console.log(err)
        })
    }
    // const HandleStatus = () => {

    // }
    const HandleDeleteRequest = () => {
        axios.delete(`http://localhost:7000/request/delete/${params.ID}`).then((response) => {
            console.log(response)
            alert("Request has been deleted successfully")
            navigate("/workerDashboard")
        }).catch((err) => {
            alert("Error in deleting request")
            console.log(err)

        })
    }
    useEffect(() => {
        HandleGetMore()
    })
    return <div className="w-full h-screen">

        <WorkerHeader />
        <div className="w-[400px] absolute px-[20px] rounded-lg pt-[20px] mt-24 ml-[30%] h-[400px] shadow-lg shadow-[#6A6458]">
            <h1 className="text-center text-[#3b3832] font-semibold text-[20px]"> More Details </h1>
            <div className="mt-6 flex items-center gap-5">
                <ul className="font-semibold leading-[30px]">
                    <li>Start Date</li>
                    <li>End Date</li>
                    <li>Duration </li>
                    <li>Destination </li>
                </ul>
                <ul>
                    <li> : </li>
                    <li> : </li>
                    <li> : </li>
                    <li> : </li>
                    <li> : </li>
                </ul>
                <ul className=" leading-[30px]">
                    <li>{ViewMore.startDate}</li>
                    <li>{ViewMore.endDate}</li>
                    <li>{ViewMore.duration} days </li>
                    <li>{ViewMore.destination} </li>
                </ul>
            </div>
            <div className="w-[380px] h-[100px]">
            <h1 className="mt-1 font-semibold"> Permission reason : </h1>
            {/* <p className="w-[370px]"> Lorem Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque, corrupti? ipsum dolor sit amet consectetur adipisicing elit. Dicta cum, consequatur ullam debitis qui corrupti alias nemo! Maiores atque ullam ut repellat, sed iure nam provident dignissimos ipsam illum dolore.</p> */}
            <textarea value={ViewMore.reason} className="w-[360px] ml-[-5px] h-[100px] outline-none  px-[6px] " placeholder="Enter your reason"></textarea>
            <div className="flex gap-20 ml-5">
                <button  className="mt-4 w-[120px] h-[35px] rounded-[8px] bg-[#3b3832] hover:bg-[#6A6458] text-white"> {ViewMore.status} </button>
                <button onClick={() => HandleDeleteRequest(ViewMore.ID)} className="mt-4 w-[120px] h-[35px] rounded-[8px] bg-[#3b3832] hover:bg-[#6A6458] text-white"> Delete </button>
                
            </div>
            </div>

            
        </div>
    </div>
}
export default ManagerViewBox