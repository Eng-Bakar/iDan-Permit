import { Link } from "react-router-dom"
import { FaDeleteLeft } from "react-icons/fa6";
// import { AiFillDelete } from "react-icons/ai";
import ManagerHeader from "../Components/ManagerHeader"
import ManagerSidebar from "../Components/ManagerSidebar"
import { useEffect, useState } from "react";
import axios from "axios";
function WorkerAcceptedRequests (){

    const [AcceptedRequests, setAcceptedRequests] = useState([])
    const [statusUpdate, setStatusUpdate] = useState("")

    // Function oo update gareenaayo xaalada qofka
    // const updateUserStatus = (id) => {
    //     axios.put(`http://localhost:7000/update/status/${id}`, {
    //         "status": "Approved"
    //     }).then((res) => {
    //         if(res.data.massage){
    //             alert("Status has been updated")
    //         }
    //     }).catch((err) => console.log(err))
    // }


    const getAllPendingRequests = () => {
        axios.get("http://localhost:7000/requests/read").then((res) => {
            setAcceptedRequests(res.data)
        }).catch((err) => {
            console.log(err)
        })
    }

    useEffect(() => {
        getAllPendingRequests()
    },[])

    return <div className="w-full h-screen bg-lightBlue">
        <ManagerHeader />
        <ManagerSidebar />
        <div className="ml-12">
            <h1 className=" text-center text-3xl font-semibold text-[#3b3832] pt-[6%]"> Worker Accepted Requests </h1>
            <Link to="/managerDashboard"><FaDeleteLeft className="text-[40px] text-[#3b3832] hover:text-[#6A6458] right-36 mt-[-33px] absolute " /></Link>

            <div className="w-full  ml-[15%] top-58 absolute  mt-10 max-w-4xl  bg-white rounded-lg shadow-md ">

            <table className="table-auto font-Nunito  w-full text-left border-collabse">
                    <thead>
                        <tr className="bg-[#e1e1e1] border border-gray-300 border-b text-[20px] font-semibold text-black">
                            <td className="p-3 border border-gray-900 text-center"> No.</td>
                            <td className="p-3 border border-gray-900 text-center"> Worker ID </td>
                            <td className="p-3 border border-gray-900 text-center"> Name </td>
                            <td className="p-3 border border-gray-900 text-center"> Status </td>
                            <td className="p-3 border border-gray-900 text-center"> Destination </td>
                            <td className="p-3 border border-gray-900 text-center"> Action </td>
                        </tr>
                    </thead>
                    <tbody className="bg-white">
                        {
                            AcceptedRequests.map((requestInfo, index) => {
                            return <tr className="border-b border border-gray-300">
                            <td className="p-3 border text-center border-gray-500"> {index + 1}</td>
                            <td className="p-3 border text-center border-gray-500"> {requestInfo.ID} </td>
                            <td className="p-3 border text-center border-gray-500"> {requestInfo.fullName} </td>
                            <td className="p-3 border text-center border-gray-500"> <span className="text-white bg-[#6A6458]  rounded-[5px] px-3 py-1"> {requestInfo.status} </span> </td>
                            <td className="p-3 border text-center border-gray-500"> {requestInfo.destination}  </td> {/* make the world range 5 word +*/}
                            <td className="p-3 border text-center border-gray-500"> <span className="text-[#6A6458] underline hover:text-black font-semibold rounded-full px-2 py-1"><Link to={`/managerMessageView/${requestInfo.ID}`}>View more </Link></span> </td>
                        </tr>
                            })
                        }
                    </tbody>
                    
                        </table>
    </div>
        </div>
    </div>
}
export default WorkerAcceptedRequests