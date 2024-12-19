import ManagerHeader from "../Components/ManagerHeader"
import ManagerSidebar from "../Components/ManagerSidebar"
import OverView from "../Components/Overview"
import { ImSpinner3 } from "react-icons/im";
import { FaCheckDouble } from "react-icons/fa";
import { FaUserSlash } from "react-icons/fa6";
import { Link } from "react-router-dom";




function ManagerDashboard (){
    return <div className="w-full h-screen">
        <ManagerHeader />
        <ManagerSidebar />
        <div className="pl-[12%] w-full pt-20 h-screen">
            <h1 className="text-2xl ml-20 font-Nunito font-semibold "> Dashboard Overview </h1>
            <div className="mt-6 flex gap-24 ml-[75px]  ">
                {/* <Link to="/totalAdmins"><OverView icon={HiUsers} IconColor="text-sky-800" IconBgColor="bg-sky-100" Users="Total Admins" Count="20" /></Link>
                <Link to="/totalWorkers"><OverView icon={FaUsers} IconColor="text-[#FEC53D]" IconBgColor="bg-yellow-100" Users="Total Workers" Count="20" /></Link> */}
                <Link to="/pendingRequests"><OverView icon={ImSpinner3} IconColor="text-black" BgColor="bg-[#6A6458]" Users="Pending Requests" Count="0" /></Link>
                <Link to="/acceptedRequests"><OverView icon={FaCheckDouble} IconColor="text-black" BgColor="bg-[#E8A430]" Users="Accepted Requests" Count="900" /></Link>
                <Link to="/rejectedRequests"><OverView icon={FaUserSlash} IconColor="text-black" BgColor="bg-[#D7BA89]" Users="Rejected Requests" Count="20000" /></Link>
            </div>
            <div className="ml-[6%] mt-3 ">
                <h1 className="font-semibold text-[18px]"> Waiting Requests</h1>
                <table className=" table-auto mt-3 w-[90%] font-Nunito  text-left border-collabse">
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
                    <tr className="border-b border border-gray-300">
                        <td className="p-3 border text-center border-gray-500"> 01 </td>
                        <td className="p-3 border text-center border-gray-500"> SOM252 </td>
                        <td className="p-3 border text-center border-gray-500"> Abukar Ibrahim Mohamed </td>
                        <td className="p-3 border text-center border-gray-500"> <span className="text-white bg-[#6A6458]  rounded-[5px] px-3 py-1">Rejected</span> </td>
                        <td className="p-3 border text-center border-gray-500"> South Korea  </td> {/* make the world range 5 word +*/}
                        <td className="p-3 border text-center border-gray-500"> <span className="text-[#6A6458] underline hover:text-black font-semibold rounded-full px-2 py-1"><Link to="/workerViewMore">View more</Link></span> </td>
                    </tr>
                </tbody>
                
                
                       </table>
            
            </div>
        </div>
        </div>
    // </div>
}
export default ManagerDashboard
// text-[#6A6458] underline hover:text-black font-semibold rounded-full px-2 py-1