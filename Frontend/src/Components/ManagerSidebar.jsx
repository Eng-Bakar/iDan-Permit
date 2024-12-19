import { FaUserPlus } from "react-icons/fa6";
import { FaUserTie } from "react-icons/fa6";
import { Link } from "react-router-dom";
import { HiUsers } from "react-icons/hi";
import { FaUsers } from "react-icons/fa6";
import { MdSpaceDashboard } from "react-icons/md";


function ManagerSidebar (){
    return <div className="h-screen fixed z-10 pt-7   w-[10%]     border-r-[#6A6458] border-r-2 border-solid  ">
        <h1 className=" text-[25px] text-[#6A6458] pb-5 sm:border-b-solid sm:border-b-2 sm:border-b-[#6A6458] w-full font-semibold text-center font-Roboto"> iDan </h1>
        <div className="mt-6 sm:block flex">
            <Link to="/managerDashboard hidden">
                <div className="  mb-8   px-[10px]">
                    <MdSpaceDashboard className="text-[30px] ml-10 text-center  text-[#6A6458] " />
                    <h1 className="text-[17px] text-center font-semibold mt-1 text-[#6A6458] "> Dashboard </h1>
                </div>
            </Link>
            <Link to="/totalAdmins">
                <div className="  mb-8  px-[10px]">
                    <HiUsers className="text-[30px] ml-10 text-center  text-[#6A6458] " />
                    <h1 className="text-[17px] text-center font-semibold mt-1 text-[#6A6458] "> All Admins </h1>
                </div>
            </Link>
            <Link to="/totalWorkers">
                <div className="  mb-8  px-[10px]">
                    <FaUsers className="text-[30px] ml-10 text-center  text-[#6A6458] " />
                    <h1 className="text-[17px] text-center font-semibold mt-1 text-[#6A6458] "> All Workers </h1>
                </div>
            </Link>
            <Link to="/addAdmin">
                <div className="  mb-8  px-[10px]">
                    <FaUserTie className="text-[30px] ml-10 text-center  text-[#6A6458] " />
                    <h1 className="text-[17px] text-center font-semibold mt-1 text-[#6A6458] "> Add Admin </h1>
                </div>
            </Link>
            <Link to="/addWorker">
                <div className="  mb-8  px-[10px]">
                    <FaUserPlus className="text-[30px] ml-10 text-center  text-[#6A6458] " />
                    <h1 className="text-[17px] text-center font-semibold mt-1 text-[#6A6458] "> Add Worker </h1>
                </div>
            </Link>
        {/* <Link to="/addWorker">
        <div className="  group justify-center   mt-10 px-[10px]">
        <FaUserPlus className="text-[21px]  text-white " />
        <h1 className="text-[17px] font-semibold  text-white "> Add Worker </h1>
        </div>
        </Link> */}
        </div>
    </div>
}
export default ManagerSidebar