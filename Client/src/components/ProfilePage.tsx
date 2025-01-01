 import { Link, Outlet } from "react-router-dom"
import { profileImg } from "../lib/data"
import { CiCamera } from "react-icons/ci"
import { useState } from "react"
import { UploadCoverImage } from "./Modals"

type catogriesType=string

const ProfilePage = () => {
 console.log("abela")
 
  const [ openModal, setOpenModal ] = useState(false)
  const onClick = () => {
    setOpenModal(prev=> !prev)
  }
  
  const coverImg="https://images.unsplash.com/photo-1631479290037-97d776982ea4?q=80&w=1408&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
  const catogries:catogriesType[]=["posts","photos","videos","friends"]
  return (
    <>
     <section className="relative">
            <img className=" w-full h-[210px] object-cover" src={ coverImg } />
            <span className="bg-white py-2 absolute top-0 right-0 flex gap-2.5 items-center">
                     <p className="flex   items-center gap-2rounded-xl  text-black  gap-1 h-fit  font-mono text-xs py-1 px-3"> <h6 className="font-bold text-sm">follwers</h6>132</p>
                     <p className="flex   items-center gap-2rounded-xl  text-black  gap-1 h-fit  font-mono text-xs py-1 px-3"><h6 className="font-bold text-sm">following</h6> 3000</p>
               </span>
             <div className="flex items-start relative justify-between">
                   <span  className="flex gap-2.5 relative ">
                        <img className="w-24 h-24 rounded-full object-cover absolute -top-10 left-3.5 object-center z-10 "   src={profileImg}/>
                      <span className="relative top--3.5 left-[120px]">
                         <p className="font-sans font-bold text-xl">Abel Zewdu</p>
                         <p className="font-mono text-zinc-500 text-xs">367 friends</p>
                       </span>
          </span>
          <button className="mr-2 -mt-2 text-sm px-2 py-1 bg-black text-white flex gap-2 items-center rounded-md  hover:bg-slate-700 hover:text-white cursor-pointer " onClick={ () => setOpenModal(true) }><CiCamera />Edit profile</button>
             {/* onlick UploadCoverImage Modal open*/ }
           {openModal && <UploadCoverImage onclick={onClick} />}

             </div>
            <ul className="flex gap-2.5 mt-12">
                  {catogries.map((item,i)=>(
                   <Link to={item === "posts" ? "." : item} className="px-1.5 py-1.5 rounded-xl text-white font-mono text-xs bg-sky-900 no-underline" key={i}>{item}</Link>
                  ))}
            </ul>
         </section>
         <Outlet />
    </>
   )
}

export default ProfilePage