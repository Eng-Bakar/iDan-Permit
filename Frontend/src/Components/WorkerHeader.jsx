import { FaUser } from "react-icons/fa";
import { IoIosNotifications } from "react-icons/io";
import { FaSquarePlus } from "react-icons/fa6";
import { Link } from "react-router-dom";
import { RiShutDownLine } from "react-icons/ri";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
<MdSpaceDashboard className="text-[30px] ml-10 text-center  text-[#6A6458] " />
import { MdSpaceDashboard } from "react-icons/md";



function WorkerHeader (){
    const navigate = useNavigate();  // useNavigate hook to navigate to other pages
    const [IsUserOpen, setIsUserOpen] = useState(false)
const HandleOpen = () => {
    setIsUserOpen(true)
}
const HandleClose = () => {
    setIsUserOpen(false)
}
    const worker = localStorage.getItem('worker'); // worker is key in local storage
    const LogOut = () => {
        localStorage.clear();
        navigate("/");
    }

    return <div> 
    <div className=" bg-white fixed  sm:h-screen h-[80px] sm:block flex mb-[400px] justify-between px-[15px] sm:px-0 items-center  top-0 z-10  sm:pt-4  w-full sm:w-[8%]     sm:border-r-[#6A6458] sm:border-r-2 sm:border-solid  ">
        <h1 className=" text-[25px] text-[#6A6458] sm:pb-5 sm:border-b-solid sm:border-b-2 sm:border-b-[#6A6458] sm:w-full font-semibold text-center font-Roboto"> iDan </h1>
        <div className=" sm:block flex items-center sm:mt-20 px-[10px]  ">
            <Link to="/workerDashboard"><MdSpaceDashboard className="text-[35px] ml-5 hover:text-black  text-[#6A6458]" /></Link>
            <Link to="/workerForm"><FaSquarePlus className="text-[30px] ml-5 sm:mt-10 hover:text-black text-[#6A6458]" /></Link>
            <Link to="/workerNotification"><IoIosNotifications className="text-[35px] ml-4 sm:mt-10 hover:text-black text-[#6A6458]" /></Link>
            <div className="ml-2 sm:ml-0">
                <FaUser style={{display: IsUserOpen ? "none" : ""}} onClick={HandleOpen} className="text-[30px] sm:ml-4 sm:mt-10 hover:text-black  text-[#6A6458]" />
                <FaUser style={{display: IsUserOpen ? "block" : "none"}} onClick={HandleClose} className="text-[30px] sm:ml-4 hover:text-black sm:mt-10 hidden  text-[#6A6458]" />
            </div>
        </div>
    </div>
    <div style={{display: IsUserOpen ? "block" : "none"}} className="w-[200px] z-10 shadow-md  sm:right-4 right-4     fixed sm:top-12 top-20  h-[220px]  bg-white rounded-[10px]">
        <div className="w-full h-[50px]  rounded-t-[10px] bg-[#6A6458] shadow-b-md shadow-b-gray-200 pt-5 rounded-b-[20px]">
            <div className="w-[50px] ml-[36%]   py-[10px] px-[5px] h-[50px] shadow rounded-full bg-white">
                <FaUser className="w-[30px] h-[30px] ml-1 text-[#6A6458]" />
            </div>
            <div className="px-[20px] mt-3">
                <h1 className="text-[18px] text-center font-semibold font-Roboto"> {JSON.parse(worker).name} </h1>
                <h1 className="text-[16px]  font-Roboto"> <span className="font-semibold">ID:</span> {JSON.parse(worker).id} </h1>
                <h1 className="text-[16px]  font-Roboto"> <span className="font-semibold">Title:</span> {JSON.parse(worker).title} </h1>
            <button onClick={LogOut} className="w-[100px] flex items-center gap-2 justify-center px-1  h-[35px] mt-3 text-white bg-[#3b3832] hover:bg-[#6A6458] rounded-[5px] ml-7"> Log Out <RiShutDownLine className="w-[20px] h-[20px] " /></button>
            </div>
        </div>
    </div>
</div>
}
export default WorkerHeader