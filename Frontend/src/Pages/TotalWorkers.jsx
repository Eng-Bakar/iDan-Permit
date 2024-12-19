import ManagerHeader from "../Components/ManagerHeader"
import ManagerSidebar from "../Components/ManagerSidebar"
import { Link } from "react-router-dom"
import { FaDeleteLeft } from "react-icons/fa6";
import axios from "axios";
import { useState, useEffect } from "react";



function TotalWorkers (){
    const [Workers, setWorkers] = useState([]);

    const HandleGetWorkers = () => {
        axios.get("http://localhost:7000/worker/read").then((response) => {
            setWorkers(response.data)
        }).catch((error) => {
            console.log(error)
        })
    }

    useEffect(() => {
        HandleGetWorkers()
    },[])
    return <div>
        <ManagerHeader />
        <ManagerSidebar />
        <h1 className=" ml-[48%] text-3xl font-semibold text-deepBlue pt-[6%]"> All Workers </h1>
        <div className="w-full  ml-[15%] top-58 absolute  mt-10 max-w-5xl  bg-white rounded-lg shadow-md ">

            <table className=" table-auto font-Nunito  w-full text-left border-collabse">
                <thead>
                    <tr className="bg-[#e1e1e1] border border-gray-300 border-b text-[20px] font-semibold text-black">
                        <td className="p-3 border border-gray-900 text-center"> No.</td>
                        <td className="p-3 border border-gray-900 text-center"> Admin ID </td>
                        <td className="p-3 border border-gray-900 text-center"> Name </td>
                        <td className="p-3 border border-gray-900 text-center"> Email </td>
                        <td className="p-3 border border-gray-900 text-center"> Action </td>
                    </tr>
                </thead>
                <tbody className="bg-white">
                   
                    {
                        Workers.map((workerData, index) => {
                            return <tr className="border-b border border-gray-300">
                            <td className="p-3 border text-center border-gray-500"> {index + 1} </td>
                            <td className="p-3 border text-center border-gray-500"> {workerData.id} </td>
                            <td className="p-3 border text-center border-gray-500"> {workerData.name} </td>
                            <td className="p-3 border text-center border-gray-500"> {workerData.email} </td> {/* make the world range 5 word +*/}
                            <td className="p-3 border text-center border-gray-500  "> <Link to={`/workerDetail/${workerData._id}`} > <button className="px-2 py-1 rounded-md bg-[#D9D9D9] hover:bg-[#211f1b] hover:text-white  text-[#211f1b] ">View More </button> </Link>  </td> 
                        </tr>
                        })
                    }
                
                   
                </tbody>
                
            </table>
            </div>
    </div>
}
export default TotalWorkers