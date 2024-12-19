import axios from "axios"
import { useState } from "react"
import { useNavigate } from "react-router-dom"
function LoginPage (){
    const [ID, setID] = useState("")
    const [Password, setPassword] = useState("")

    const navigate = useNavigate()

    const HandleWorker = (e) => {
        e.preventDefault()
        axios.post("http://localhost:7000/worker/login", {
            "id" : ID,
            "password" : Password
        }).then((response) => {
            console.log(response.data)
            if (response.data.error){
                alert("Incorrect ID or Password")
            }
            else if (response.data.empty){
                alert("ID and Password are required")
            }
            else {
                alert("Login Successfully!! Wlecome to your account")
                localStorage.setItem("worker", JSON.stringify(response.data.worker))
                navigate("/workerDashboard")
            }
        }).catch((err) => {
            console.log(err);
        })
    }
    return <div className="w-full fixed h-screen bg-lightGray">
        <div className="w-full h-[80px] bg-[#6A6458]">
            <h1 className="text-center text-3xl text-white font-semibold pt-5"> iDan</h1>
        </div>
     <div className="w-full  h-screen flex my-40 sm:my-20  justify-center ">
        <div className="bg-white pt-[15px] shadow-lg px-4 w-[350px] h-[280px] rounded-[5px]">
            <h1 className="text-center  text-[25px] mb-5 font-Roboto"> Worker Login </h1>
            <input value={ID} onChange={(event) => setID(event.target.value)} className="w-[310px] px-1 h-[40px] outline-none rounded-[5px] border-2 border-[#6A6458] " type="text" placeholder="Enter your ID" />
            <input value={Password} onChange={(event) => setPassword(event.target.value)} className="w-[310px] px-1 mt-5 h-[40px] outline-none rounded-[5px] border-2 border-[#6A6458] " type="password" placeholder="Enter your password" />
           <button onClick={HandleWorker} className="w-[310px] h-[35px] mt-5 text-white hover:bg-transparent hover:border-2 hover:border-[#6A6458] hover:text-[#6A6458] hover:font-semibold bg-[#6A6458] rounded-[5px]"> Submit </button>
        </div>
    </div>
    </div>
}
export default LoginPage