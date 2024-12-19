import { Link } from "react-router-dom";
import WorkerHeader from "../Components/WorkerHeader";
import axios from "axios";
// import { useNavigate } from "react-router-dom";
import { ImSpinner3 } from "react-icons/im";
import { FaCheckDouble } from "react-icons/fa";
import { FaUserSlash } from "react-icons/fa6";

import {useEffect, useState } from "react";
import WorkerOverView from "../Components/WorkerOverView";
function WorkerDashboard (){
    const [requests, setRequests] = useState([]);
    // const [message, setMessage] = useState("")
    // const navigate = useNavigate();

    const id = localStorage.getItem("worker")

    const HandleGetResult = () => {
        axios.get(`http://localhost:7000/request/SingleRead/${JSON.parse(id).id}`).then((response) => {
            // console.log(response.data)
                setRequests(response.data)
        }).catch((error) => {
            console.log(error)
            alert("Error in getting requests")
        })
    }
    useEffect(() => {
        HandleGetResult();
},[])

    return <div className="w-full  h-screen">
        <WorkerHeader />

        <div>
                <div className=" pt-10 sm:flex grid-cols-[160px_160px] ml-4 gap-5 grid sm:gap-24 mt-12 sm:mt-0 sm:ml-[18%]  ">
                    {/* <Link to="/pendingRequests"><WorkerOverView icon={ImSpinner3} IconColor="text-black" BgColor="bg-[#6A6458]" Users="Pending Requests" Count="0" /></Link> */}
                    <Link to="/workerPendingRequests"><WorkerOverView icon={ImSpinner3} IconColor="text-black" BgColor="bg-[#6A6458]" Users="Pending Requests" Count="200" /></Link>
                    <Link to="/workerAcceptedRequests"><WorkerOverView icon={FaCheckDouble} IconColor="text-black" BgColor="bg-[#E8A430]" Users="Accepted Requests" Count="900" /></Link>
                    <Link to="/workerRejectedRequests"><WorkerOverView icon={FaUserSlash} IconColor="text-black" BgColor="bg-[#D7BA89]" Users="Rejected Requests" Count="200" /></Link>
                </div>
                    <div className="w-[360px] sm:w-full sm:ml-[18%] px-[10px]   top-5 absolute  sm:mt-[15%] mt-[100%] max-4-6xl sm:max-w-4xl max-auto overflow-x-auto    sm:overflow-hidden">
                    <h1 className="text-[23px] font-semibold "> Previous Requests</h1>
                        { requests.length > 0 ? (
                            <div className=" mt-2">
                            <div>
                            
                            <table className=" table-auto shadow-lg font-Nunito  w-full text-left border-collabse">
                                <thead>
                                    <tr className="bg-[#e1e1e1] border border-gray-300 border-b text-[16px]  font-semibold text-black">
                                        <td className="p-3 border border-gray-900 text-center"> No.</td>
                                        <td className="p-3 border border-gray-900 text-center"> Start Date </td>
                                        <td className="p-3 border border-gray-900 text-center"> End Date </td>
                                        <td className="p-3 border border-gray-900 text-center"> Status </td>
                                        <td className="p-3 border border-gray-900 text-center"> Destination </td>
                                        <td className="p-3 border border-gray-900 text-center"> Action </td>
                                    </tr>
                                </thead>
                                <tbody className="bg-white">
                                    {
                                        requests.map((RequestMessage, index) => {
                                            return <tr className="border-b border border-gray-300">
                                            <td className="sm:p-3 p-2 border text-center border-gray-500"> {index + 1} </td>
                                            <td className="sm:p-3 p-2 border text-center border-gray-500">{new Date(RequestMessage.startDate).toLocaleDateString('en-SO')} </td>
                                            <td className="sm:p-3 p-2 border text-center border-gray-500">{new Date(RequestMessage.endDate).toLocaleDateString('en-SO')} </td>
                                            <td className="sm:p-3 p-2 border text-center border-gray-500"> <span className="text-white  bg-[#6A6458] rounded-[5px] px-3 py-1">{RequestMessage.status}</span> </td>
                                            <td className="sm:p-3 p-2 border text-center border-gray-500"> {RequestMessage.destination}  </td> {/* make the world range 5 word +*/}
                                            <td className="sm:p-3 p-5 border border-gray-500 text-[#6A6458] text-center underline hover:text-black font-semibold"> <Link to={`/workerViewBox/${RequestMessage.ID}`}> <button className="px-2 py-1 rounded-md bg-[#D9D9D9] hover:bg-[#211f1b] hover:text-white  text-[#211f1b]">View More</button></Link>  </td> 
                                            {/* <Link to={`/workerViewBox/${RequestMessage._id}`}><td className=""> View more </td></Link> */}
                                        </tr>
                                        })
                                    }
                                </tbody>
                            </table>
                        </div>
                        </div>
                            )
                            :(
                            <div className=" ">
                                <h1 className="text-[20px] font-semibold pt-60 text-center text-red-500"> NO Requests was found </h1>
                            </div>
                            )
                        } 
        </div>
        </div>
        </div>
}
export default WorkerDashboard