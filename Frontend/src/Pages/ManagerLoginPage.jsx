import axios from "axios"
import { useState } from "react"
import { useNavigate } from "react-router-dom"

function ManagerLoginPage (){
    const [ID, setID] = useState("")
    const [Password, setPassword] = useState("")
    
    const navigate = useNavigate()
    const HandleAdmin = (e) => {
        e.preventDefault();
        axios.post("http://localhost:7000/admin/login",{
            "id": ID,
            "password": Password
        }).then((response) => {
            if (response.data.error){
                alert("Incorrect ID or Password: ")
            }
            else if (response.data.empty){
                alert("ID and Password are required")
            }
            else (
                alert ("Login successfully!! Welcome to your Account"),
                localStorage.setItem("admin", JSON.stringify(response.data.admin)), // 2 da Admin kan wuxuu ka imade router ka gaar haan /admin/login waliba if admin
                navigate("/managerDashboard")
            )
        }).catch((error) => {
            console.log(error)
            alert("Error in Login", error)
        })

    }

    return <div className="w-full h-screen bg-lightGray">
        <div className="w-full h-[80px] bg-[#6A6458]">
            <h1 className="text-center text-3xl text-white font-semibold pt-5"> iDan</h1>
        </div>
     <div className="w-full h-screen flex  my-40 sm:my-20  justify-center ">
        <div className="bg-white pt-[10px] shadow-lg px-5 w-[350px] h-[280px] rounded-[8px]">
            <h1 className="text-center  text-[25px] mb-5 font-Roboto"> Manager Login </h1>
            <input value={ID} onChange={(event) =>  setID(event.target.value)} className="w-[310px] px-1 h-[40px] outline-none rounded-[5px] border-2 border-deepBlue " type="text" placeholder="Enter your ID" />
            <input value={Password} onChange={(event) =>  setPassword(event.target.value)} className="w-[310px] px-1 mt-6 h-[40px] outline-none rounded-[5px] border-2 border-deepBlue " type="password" placeholder="Enter your password" />
            <button onClick={HandleAdmin} className="w-[310px] h-[40px] mt-7 text-white hover:bg-[#211f1b] bg-[#6A6458] rounded-[5px]"> Submit </button>
            </div>
    </div>
    </div>
}
export default ManagerLoginPage