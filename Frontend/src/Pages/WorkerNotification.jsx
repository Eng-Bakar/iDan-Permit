import ManagerHeader from "../Components/ManagerHeader"
import ManagerSidebar from "../Components/ManagerSidebar"
import { Link } from "react-router-dom";
import { FaUserCircle } from "react-icons/fa";
import { MdDelete } from "react-icons/md";
import { MdOutlineMessage } from "react-icons/md";
import { FaDeleteLeft } from "react-icons/fa6";
import axios from "axios"
import { useState, useEffect } from "react";
import WorkerHeader from "../Components/WorkerHeader";


function WorkerNotificationPage (){
    const [Notifications, setNotifications] = useState([])
    const HandleGetNotification = () => {
        axios.get("http://localhost:7000/requests/read").then((response) => {
            setNotifications(response.data)
        }).catch((error) => {
            console.log(error)
        })
    }


    const HandleDeleteNotification = (_id) => {
        axios.delete(`http://localhost:7000/requests/delete/${_id}`).then(() => {
            alert("Notification deleted successfully")
        }).catch((error) => {
            console.log(error)
            alert("Error deleting notification")
        })
    }
    useEffect (() => {
        HandleGetNotification()
    })
    return <div className=" w-full h-screen">
        <WorkerHeader />
        {/* <ManagerSidebar /> */}
        <Link to="/managerDashboard"><FaDeleteLeft className="text-[35px] text-[#6A6458] hover:text-[#211F1E] right-6 sm:right-14 top-24 absolute " /></Link>

        <div className="sm:pl-[13%] pl-4 w-full pt-24 h-screen">
                <h1 className="text-2xl font-semibold text-[#6A6458]"> Notifications </h1>
                  {/* Message 1 */}
                    {
                        Notifications.map((QuickMessage) =>{
                            return <div className=" w-[95%] flex px-[10px] items-center gap-2 h-[50px] rounded-lg bg-[#dad2c2] mt-3">
                            <FaUserCircle className="text-4xl text-[#211F1E]" />
                            <div className="leading-[20px]">
                                <h1 className="text-[18px] font-semibold ml-2 text-[#211F1E]"> {QuickMessage.fullName} </h1>
                                <p className="text-[14px] ml-2"> {QuickMessage.reason}</p>
                            </div>
                            <div className="flex gap-2 items-center text-sky-900  absolute right-7 sm:right-20">
                                <MdDelete onClick={() => HandleDeleteNotification(QuickMessage._id)} className="text-[30px] text-[#211F1E] hover:text-[#6A6458]" />
                                <Link to={`/workerMessageView/`}><MdOutlineMessage className="text-[28px]  hover:text-[#211F1E] text-[#211F1E]" /></Link>
                                {/* <Link to={`/workerMessageView/${QuickMessage.ID}`}><MdOutlineMessage className="text-[28px]  hover:text-[#211F1E] text-[#211F1E]" /></Link> */}
                            </div>
                        </div>
                        })
                    }
    </div>
    </div>
}
export default WorkerNotificationPage