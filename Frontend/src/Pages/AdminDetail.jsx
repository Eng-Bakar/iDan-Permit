import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { HiOutlineBackspace } from "react-icons/hi2";
import { MdOutlineDeleteOutline } from "react-icons/md";
import { FiEdit } from "react-icons/fi";
import { useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";




function AdminDetail (){
    const params = useParams();
    const navigate = useNavigate();
    const [SingleAdmin, setSingleAdmin] = useState({})
    const HandleSingleAdmin = (id) => {
        axios.get(`http://localhost:7000/Admin/SingleAdmin/${params._id}`).then((response) => {
            setSingleAdmin(response.data)
        }).catch((error) => {
            console.error(error)
        })
    }

    const HandleDeleteAdmin = (_id) =>{
        axios.delete(`http://localhost:7000/admin/delete/${params._id}`).then(() => {
         alert("Admin has been deleted successfully")   
         navigate("/totalAdmins")
        }).catch((error) => {
            console.log(error)
        })
    }
    useEffect (() => {
        HandleSingleAdmin()
    })
    return <div className="bg-lightBlue w-full h-screen py-5">
        <div className="w-[350px] ml-[35%] mt-6  shadow-lg  h-[500px] rounded-[20px] bg-white ">
            <form className="pt-4 ">
                <div className="flex ">
                    <Link to="/totalAdmins"><HiOutlineBackspace className="absolute text-[25px] mt-2 text-[#6A6458] hover:text-[#211f1b] ml-[310px]" /></Link>
                    <h1 className=" text-center text-[#6A6458] ml-[110px]  font-Roboto text-[25px]"> Admin Details </h1>
                </div>
                <div className="px-6 mt-3">
                    <label className="text-deepBlue ">Name</label>
                    <input type="text" value={SingleAdmin.name} className="w-[300px] h-[40px] text-deepBlue bg-lightBlue outline-none rounded-[10px] px-2" />
                    <div>
                        <div className="flex mt-1 justify-between ">
                            <label className="text-deepBlue  ml-1">ID</label>
                            <label className="text-deepBlue  mr-[110px]">Title</label>
                        </div>
                        <input value={SingleAdmin.id} type="text"  className="w-[140px] h-[40px] text-deepBlue bg-lightBlue outline-none rounded-[10px] px-2 " />
                        <input value={SingleAdmin.title} type="text" className="w-[140px] h-[40px] mb-2 text-deepBlue bg-lightBlue outline-none rounded-[10px] px-2 ml-5 " />
                    </div>
                    <label className="text-deepBlue  ">Email</label>
                    <input value={SingleAdmin.email} type="email"  className="w-[300px] mb-2 h-[40px] text-deepBlue bg-lightBlue outline-none rounded-[10px] px-2" />
                    <label className="text-deepBlue  ">Phone Number</label>
                    <input  value={SingleAdmin.telephone} type="tell" className="w-[300px] h-[40px] mb-2 text-deepBlue bg-lightBlue outline-none rounded-[10px] px-2" />
                    <label className="text-deepBlue  ">Password</label>
                    <input value={SingleAdmin.password} type="text" className="w-[300px] h-[40px] text-deepBlue bg-lightBlue outline-none rounded-[10px] px-2" />
                    <div className="flex justify-between mt-7 px-[30px]">
                        <Link to={`/adminUpdate/${SingleAdmin._id}`}><FiEdit className=" text-[37px] mt-2 text-[#6A6458] hover:text-[#211f1b]" /></Link>
                        <MdOutlineDeleteOutline onClick={() => HandleDeleteAdmin(SingleAdmin._id)} className=" text-[40px] mt-2 text-[#6A6458] hover:text-[#211f1b]" />
                    </div>
                </div>

            </form>
        </div>
    </div>
}
export default AdminDetail