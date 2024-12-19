import { Link } from "react-router-dom";
import WorkerHeader from "../Components/WorkerHeader";
import { FaArrowLeft } from "react-icons/fa6";
import { FaUserTie } from "react-icons/fa6";
import { BsQrCode } from "react-icons/bs";
// import { FaFileDownload } from "react-icons/fa";




function ManagerViewNotification (){
    return <div className="w-full bg-fixed overflow-hidden h-screen bg-lightBlue">
        <WorkerHeader />
        <div className="w-full ml-[14%] px-[20px] py-[10px] h-[480px] top-58 absolute   border-black  mt-24 max-w-4xl  bg-white rounded-xl shadow-md ">
            <div className="mt-5">
                <div className="flex gap-2 items-center">
                    <FaUserTie className="text-4xl" />
                    <h1 className=" font-semibold"> Abukar Ibrahim Mohamed </h1>
                </div>
                 
                <p className="mt-3">
                    Dear ,Khadija Al-Makhzoumi
                    I am pleased to inform you that your request for permission to conduct [specific activity] has been approved. This approval is granted under the terms and conditions set forth in your application submitted on [submission date].
                    We appreciate your initiative and commitment to [related cause or project]. Please ensure that all relevant guidelines are followed during the execution of this project.
                    Best wishes for your endeavor.
                </p>
                <div className="flex items-center justify-between">
                    <p className="mt-5">
                        Sincerely, <br /> 
                        Hamze Abdi Barre <br />
                        Prime Minister
                    </p>
                    <BsQrCode className="text-8xl mt-5 mr-3 " />
                </div>
                <Link to="/workerDashboard"><FaArrowLeft className="text-2xl absolute left-5 mt-2 text-deepBlue hover:text-skyBlue" /></Link>

            </div>
        </div>
        </div>
}
export default ManagerViewNotification