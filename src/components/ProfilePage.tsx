  import {AiOutlineMessage } from "react-icons/ai"
import { FaUserPlus } from 'react-icons/fa'
 import shifaaz from"../assets/shifaaz-shamoon-O0xQcGATOw4-unsplash.jpg"
import { Link, Outlet } from "react-router-dom"
import { profileImg } from "../data/data"

type catogriesType=string

const ProfilePage = () => {
 console.log("abela")
 
  const coverImg="https://images.unsplash.com/photo-1631479290037-97d776982ea4?q=80&w=1408&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
  const catogries:catogriesType[]=["posts","photos","videos","friends"]
  return (
    <div className='container '>
         <section className="profileContainer__top">
            <img className="w-full h-[190px] object-cover"  src={coverImg}/>
            <div className="flex items-start relative justify-between">
                   <span  className="flex gap-2.5 relative ">
                        <img className="w-24 h-24 rounded-full object-cover absolute -top-10 left-3.5 object-center z-10 "   src={profileImg}/>
                      <span className="relative top--3.5 left-[120px]">
                         <p className="font-sans font-bold text-xl">Abel Zewdu</p>
                         <p className="font-mono text-zinc-500 text-xs">367 friends</p>
                       </span>
                   </span>
                   <span className="flex gap-2.5 self-end items-center">
                       <button className="rounded-xl bg-sky-600 text-white flex items-center gap-2.5 h-fit border-sky-600 border-2 font-mono text-xs py-1 px-3">Follow<FaUserPlus   /></button>
                       <button className="rounded-xl bg-white text-black flex items-center gap-2.5 h-fit border-slate-600  border-2 text-xs py-1 px-3 ">Message<AiOutlineMessage fill="#1167e7" stroke='#1167e7' className="text-sky-600" /></button>
                   </span>
            </div>
            <ul className="flex gap-2.5 mt-12">
                  {catogries.map((item,i)=>(
                   <Link to={item === "posts" ? "." : item} className="px-1.5 py-1.5 rounded-xl text-white font-mono text-xs bg-sky-900 no-underline" key={i}>{item}</Link>
                  ))}
            </ul>
         </section>
         <Outlet />
    </div>
  )
}

export default ProfilePage