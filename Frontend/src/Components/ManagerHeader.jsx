import { FaUser } from "react-icons/fa";
import { IoIosNotifications } from "react-icons/io";
// import { FaSquarePlus } from "react-icons/fa6";
import { Link } from "react-router-dom";
import { RiShutDownLine } from "react-icons/ri";
import { useState } from "react";
import { IoIosSearch } from "react-icons/io";
import { useNavigate } from "react-router-dom";




function ManagerHeader (){
    const navigate = useNavigate();
    const admin = localStorage.getItem('admin'); // admin is key in local storage NOte meelwalbana admin ka dhig 
    const LogOut = () => {
        localStorage.clear();
        navigate("/");
    }
    const [IsUserOpen, setIsUserOpen] = useState(false)
const HandleOpen = () => {
    setIsUserOpen(true)
}
const HandleClose = () => {
    setIsUserOpen(false)
}
    return <div> 
    <div className="w-full max-w-full fixed pl-[15%]    h-[70px] px-[50px] items-center flex justify-between  ">
        <div className="flex  ">
        
            <input type="text" placeholder="Search by ID" className="w-[300px] pl-8 border-[1px] h-[40px] text-black bg-lightBlue outline-none rounded-full px-2" />
            <IoIosSearch className="text-[22px] text-black ml-2 absolute mt-[10px]" />
        </div>
        <div className="flex items-center text-white gap-3  ">
            {/* <Link to="/workerForm"><FaSquarePlus className="text-2xl hover:text-deepBlue" /></Link> */}
            <Link to="/managerNotification"><IoIosNotifications className="text-3xl text-[#6A6458] hover:text-[#27241f]"  /></Link>
            <FaUser style={{display: IsUserOpen ? "none" : ""}} onClick={HandleOpen} className="text-2xl  text-[#6A6458] hover:text-[#27241f]"  />
            <FaUser style={{display: IsUserOpen ? "block" : "none"}} onClick={HandleClose} className="text-2xl hidden  text-[#6A6458] hover:text-[#27241f]"  />
        </div>
    </div>
    <div style={{display: IsUserOpen ? "block" : "none"}} className="w-[200px]  sm:right-4 right-4   z-10  fixed top-14  h-[220px] shadow-md bg-white rounded-[10px]">
        <div className="w-full h-[50px]  rounded-t-[10px] bg-[#6A6458] shadow-b-md shadow-b-gray-200 pt-5 rounded-b-[20px]">
            <div className="w-[50px] ml-[36%]   py-[10px] px-[5px] h-[50px] shadow rounded-full bg-white">
                <FaUser className="w-[30px] h-[30px] ml-1 text-[#6A6458]" />
            </div>
            <div className="px-[20px] mt-3">
                <h1 className="text-[18px] text-center font-semibold font-Roboto"> {JSON.parse(admin).name.substring(0,15)+"..."}</h1> {/*name kan wuxuu ka imade broweser/localstorage dhaxdisa gaar ahaan markuu kuusoo qabto admin information meshas ka dhax doro name, id, iyo title ka aa ubahan thy*/}
                <h1 className="text-[16px]  font-Roboto"> <span className="font-semibold">ID:</span> {JSON.parse(admin).id} </h1>
                <h1 className="text-[16px]  font-Roboto"> <span className="font-semibold">Title:</span> {JSON.parse(admin).title} </h1>
            <button onClick={LogOut} className="w-[100px] flex items-center gap-2 justify-center px-1  h-[35px] mt-3 text-white bg-[#3b3832] hover:bg-[#6A6458] rounded-[5px] ml-7"> Log Out <RiShutDownLine className="w-[20px] h-[20px] " /></button>
            </div>
        </div>
    </div>
    
</div>
}
export default ManagerHeader
{/* <FaUserPlus /> */}



{/* <div style={{display: IsUserOpen ? "block" : "none"}} className="w-[215px]  right-4    fixed top-20 z-10 h-[210px] shadow-2xl bg-white rounded-[20px]">
        <div className="w-full h-[50px]  rounded-t-[10px] bg-white pt-5 rounded-b-[20px]">
            <div className="w-[50px] ml-[38%]   py-[10px] px-[5px] h-[50px] shadow rounded-full bg-white">
                <FaUser className="w-[30px] h-[30px] ml-1 text-[#6A6458]" />
            </div>
            <div className="px-[20px] mt-3">
                <h1 className="text-[18px] text-center font-semibold font-Roboto"> {JSON.parse(admin).name.substring(0,15)+"..."} </h1> {/*name kan wuxuu ka imade broweser/localstorage dhaxdisa gaar ahaan markuu kuusoo qabto admin information meshas ka dhax doro name, id, iyo title ka aa ubahan thy*/}
        //         <h1 className="text-[16px]  font-Roboto"> <span className="font-semibold">ID:</span> {JSON.parse(admin).id} </h1>
        //         <h1 className="text-[16px]  font-Roboto"> <span className="font-semibold">Title:</span> {JSON.parse(admin).title} </h1>
        //         <button onClick={LogOut} className="w-[100px] flex items-center gap-2 justify-center px-1  h-[35px] mt-3 text-white bg-[#3b3832] hover:bg-[#6A6458] rounded-[5px] ml-9"> Log Out <RiShutDownLine className="w-[20px] h-[20px] " /></button>
        //     </div>
        // </div>
    // </div> 