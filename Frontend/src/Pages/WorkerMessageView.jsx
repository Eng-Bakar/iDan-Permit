import { Link } from "react-router-dom";
import WorkerHeader from "../Components/WorkerHeader";
import { FaArrowLeft } from "react-icons/fa6";
import { FaUserTie } from "react-icons/fa6";
import { BsQrCode } from "react-icons/bs";
import { FaFileDownload } from "react-icons/fa";

function WorkerMessageView() {
  return (
    <div className="w-full bg-fixed overflow-hidden h-screen ">
      <WorkerHeader />
      <div className="w-full ml-0 sm:ml-[17%] px-[15px] h-[500px] sm:mt-0 mt-20 sm:px-[20px] py-[10px] sm:h-[550px]  absolute  sm:w-[800px] bg-white rounded-xl sm:shadow-md">
        <div className="mt-5">
          <div className="flex gap-2 items-center">
            <FaUserTie className="text-3xl sm:text-4xl" />
            <h1 className="text-lg sm:text-xl font-semibold">Abukar Ibrahim Mohamed</h1>
          </div>
          <div className="absolute top  flex items-center gap-2 right-4 bottom-2">
            <FaFileDownload className="text-[25px] sm:text-[22px]" />
            <h1 className=" sm:text-sm  font-semibold">Download File</h1>
          </div>
          <div className="flex  sm:flex-row mt-5 gap-5 sm:gap-10">
            <ul className="font-semibold">
              <li>From:</li>
              <li>Date:</li>
              <li>To:</li>
              <li>Title:</li>
              <li>Subject:</li>
            </ul>
            <ul>
              <li>CEO of iDan IT Solutions</li>
              <li>July 1, 2023</li>
              <li>Mohamed Omar Adam</li>
              <li>Software Engineer</li>
              <li>
                Permission Request <span className="font-semibold">Accepted</span>
              </li>
            </ul>
          </div>
          <p className="mt-3 text-sm sm:text-base">
            Dear Khadija Al-Makhzoumi,
            <br />
            I am pleased to inform you that your request for permission to conduct [specific activity] has been approved. This approval is granted under the terms and conditions set forth in your application submitted on [submission date].
            <br />
            Best wishes for your endeavor.
          </p>
          <div className="flex  sm:flex-row items-center justify-between mt-5">
            <p className="text-sm sm:text-base">
              Sincerely, <br />
              Hamze Abdi Barre <br />
              Prime Minister
            </p>
            <BsQrCode className="text-7xl sm:text-8xl mt-5 mr-3" />
          </div>
          <Link to="/workerDashboard">
            <FaArrowLeft className="text-2xl sm:text-3xl absolute left-5 mt-[-10px] text-deepBlue hover:text-skyBlue" />
          </Link>
        </div>
      </div>
    </div>
  );
}

export default WorkerMessageView;
