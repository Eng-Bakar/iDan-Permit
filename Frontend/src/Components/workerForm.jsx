import { Link } from "react-router-dom";
import { TiBackspaceOutline } from "react-icons/ti";

import axios from "axios";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import WorkerHeader from "./WorkerHeader";

function WorkerForm() {
    const [StartDate, setStartDate] = useState("");
    const [EndDate, setEndDate] = useState("");
    const [Duration, setDuration] = useState(0);
    const [Destination, setDestination] = useState("");
    const [PermissionReason, setPermissionReason] = useState("");
    const navigate = useNavigate();

    const worker = localStorage.getItem('worker'); // worker is key in local storage

    const HandlePostRequest = (e) => {
        e.preventDefault();
        axios.post("http://localhost:7000/new/request", {
            "fullName": JSON.parse(worker).name,
            "ID": JSON.parse(worker).id,
            "title": JSON.parse(worker).title,
            "startDate": StartDate,
            "endDate": EndDate,
            "duration": Duration,
            "destination": Destination,
            "reason": PermissionReason
        }).then((response) => {
            if(response.data.error){
                alert("Error");
            }
            else {
                alert("Request has been sent successfully");
                navigate("/workerDashboard");
                calculateDuration(response.data.startDate, response.data.endDate); // Calculate duration when data is fetched
            }
        }).catch((error) => {
            // alert("Error in sending request");
            console.log(error);
        });
    };
    const calculateDuration = (startDate, endDate) => {
        const start = new Date(startDate);
        const end = new Date(endDate);
        const duration = Math.floor((end - start) / (1000 * 3600 * 24)); // Difference in days
        setGetMessage(prevState => ({ ...prevState, duration })); // Update the duration in state
    };

    // Automatically calculate duration when StartDate or EndDate changes
    useEffect(() => {
        if (StartDate && EndDate) {
            const start = new Date(StartDate);
            const end = new Date(EndDate);
            const duration = Math.floor((end - start) / (1000 * 3600 * 24)); // Difference in days
            setDuration(duration); // Set the calculated duration
        } else {
            setDuration(0); // Reset duration if dates are missing
        }
    }, [StartDate, EndDate]); 
    return <div>
        <WorkerHeader />
        <div className="bg-lightBlue w-full h-screen py-12">
            <div className="w-[350px] ml-5 sm:mt-0 mt-20 sm:ml-[38%] shadow-lg h-[470px] rounded-[8px] bg-white ">
                <form className="pt-4">
                    <div className="flex">
                        <Link to="/workerDashboard">
                            <TiBackspaceOutline className="absolute text-[25px] mt-2 text-[#6A6458] hover:text-[#514c43] ml-[310px]" />
                        </Link>
                        <h1 className="text-center text-[#6A6458] ml-[80px]  font-Roboto text-[25px]">
                            Apply Permission
                        </h1>
                    </div>
                    <div className="px-6 ">
                        <div>
                            <div className="flex mt-1 justify-between">
                                <label className="text-deepBlue  ml-1">Start Date</label>
                                <label className="text-deepBlue  mr-[74px]">End Date</label>
                            </div>
                            <input value={StartDate} onChange={(event) => setStartDate(event.target.value)} type="date" className="w-[140px] h-[40px] text-gray-400   bg-lightBlue outline-none rounded-[5px] px-2" />
                            <input value={EndDate} onChange={(event) => setEndDate(event.target.value)} type="date" className="w-[140px] h-[40px] text-gray-400 bg-lightBlue outline-none rounded-[5px] px-2 ml-5 mb-1" />
                        </div>
                        <div className="mt-3">
                            <div className="flex mt-1 justify-between">
                                <label className="text-deepBlue  ml-1">Duration</label>
                                <label className="text-deepBlue  mr-[55px]">Destination</label>
                            </div>
                            <input value={Duration + " days"} readOnly type="text" placeholder="Duration of trip" className="w-[140px] h-[40px] text-deepBlue bg-lightBlue outline-none rounded-[5px] px-2" />
                            <input value={Destination} onChange={(event) => setDestination(event.target.value)} type="text" placeholder="Trip Destination" className="w-[140px] h-[40px] text-deepBlue bg-lightBlue outline-none rounded-[5px] px-2 ml-5 mb-1" />
                        </div>
                        <div className="mt-3">
                            <label className="text-deepBlue  ">Permission Reason</label>
                            <textarea value={PermissionReason} onChange={(event) => setPermissionReason(event.target.value)} className="w-[300px] h-[140px] text-deepBlue bg-lightBlue outline-none rounded-[5px] px-2 mt-1 py-1"></textarea>
                            <button onClick={HandlePostRequest} className="w-[300px] h-[40px] text-white bg-[#6A6458] hover:bg-[#514c43] rounded-[5px] mt-5">Submit</button>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    </div>
}

export default WorkerForm;
