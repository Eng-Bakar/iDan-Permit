// import { HiUsers } from "react-icons/hi";

function WorkerOverView ({icon: Icon, IconColor, IconBgColor, BgColor,Users, Count}){
    return <div>
            <div className={`sm:w-[230px] w-[170px] h-[130px] px-[8px] py-5 sm:py-3 shadow-md ${BgColor} rounded-[20px]`}>
                <h1 className="text-[30px] sm:text-[40px] mt-1 text-center text-white font-Nunito font-bold"> {Count} </h1>
                <h3 className=" text-[16px] sm:text-[18px] text-center font-semibold font-Nunito text-white"> {Users}</h3>
                {/* <div className={`text-[27px] px-[8px] py-[9px] w-[45px] h-[45px] mt-[-125px] ml-[165px]  rounded-[15px] ${IconBgColor}`}>
                    <Icon className={` text[20px]  ${IconColor}`} />
                </div> */}
            </div>
    </div>
}
export default WorkerOverView
// HiUsers