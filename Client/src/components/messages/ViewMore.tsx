import { useState } from "react"
import { imagesPostedByTheOwner } from "../../lib/data"
import { IoIosArrowBack, IoIosArrowRoundBack } from "react-icons/io"
import { MessageInfoPhotoModal } from "../Modals"
import { FaFileAlt } from "react-icons/fa"
import { AiOutlineDelete } from "react-icons/ai"
 
type ViewMorePropstype = {
  type: string,
  setSelectedViewMore: React.Dispatch<React.SetStateAction<string>>
}
export const ViewMore = ({type,setSelectedViewMore}:ViewMorePropstype) => {

  const [openModal,setOpenModal]=useState<boolean>(false)
  const [openModalData,setOpenModalData]=useState(null)
   return (
    <>
      { type === "media" ? (
        <>
           <h5 className="text-slate-900 font-mono font-thin text-lg flex justify-around items-center w-full  cursor-pointer border border-b-gray-300">
             <IoIosArrowRoundBack  className="text-slate-900" fontSize={ 25 } onClick={ () => setSelectedViewMore("") } />Shared media (284) 
             </h5>
        <div className="flex flex-wrap gap-1 items-center w-full">
                {
                  imagesPostedByTheOwner.map((image,i)=>(
                    <img onClick={ () => {setOpenModal(true); setOpenModalData(image) }} className="w-20 h-28 rounded-lg object-cover object-center" src={image.image[0]} key={i} alt="posts" />
                  ))
                }
          </div>
          {
            openModal && 
            <MessageInfoPhotoModal openModalData={openModalData} setOpenModal={setOpenModal} />
          }
        </>        
      ): type === "links" ? (
          <>
           <h5 className="text-slate-900 font-mono font-thin text-lg flex justify-around items-center w-full  cursor-pointer border border-b-gray-300"><IoIosArrowBack fontSize={25} onClick={()=>setSelectedViewMore("")} />Shared Links(4) </h5>
           <ul className="flex flex-col gap-3 text-start px-3">
                  <li className="text-sm text-cyan-700 flex justify-between ">https://Linekeldn:esaylocal.com <FaFileAlt /></li>
                  <li className="text-sm text-cyan-700 flex justify-between ">https://Linekeldn:esaylocal.com <FaFileAlt /></li>
                  <li className="text-sm text-cyan-700 flex justify-between ">https://Linekeldn:esaylocal.com <FaFileAlt /></li>
                  <li className="text-sm text-cyan-700 flex justify-between ">https://Linekeldn:esaylocal.com <FaFileAlt /></li>
                  <li className="text-sm text-cyan-700 flex justify-between ">https://Linekeldn:esaylocal.com <FaFileAlt /></li>
                  <li className="text-sm text-cyan-700 flex justify-between ">https://Linekeldn:esaylocal.com <FaFileAlt /></li>
                  <li className="text-sm text-cyan-700 flex justify-between ">https://Linekeldn:esaylocal.com <FaFileAlt /></li>
            </ul>
          </>
        ) : (
             <>
              <h5 className="text-slate-900 font-mono font-thin text-lg flex justify-around items-center w-full  cursor-pointer border border-b-gray-300"><IoIosArrowBack fontSize={25} onClick={()=>setSelectedViewMore("")} />Shared Files(4) </h5>
              <ul className="flex flex-col gap-1 text-start px-3 cursor-pointer">
                  <li className="text-xs flex items-center gap-2  justify-between text-black p-2 rounded-lg  bg[#f1f1f1] hover:bg-[black] hover:text-white">Document.pdf
                    <span className="flex gap-2 items-center">
                      <button className="p-1 bg-white rounded-lg text-black hover:bg-green-500">open</button>
                     <AiOutlineDelete className="hover:bg-[#bb1e1e] text-xl rounded-md self-end" />
                   </span>
                  </li>
                  <li className="text-xs flex items-center gap-2  justify-between text-black p-2 rounded-lg  bg[#f1f1f1] hover:bg-[black] hover:text-white">Doctor Poiontement.pdf
                    <span className="flex gap-2 items-center">
                      <button className="p-1 bg-white rounded-lg text-black hover:bg-green-500">open</button>
                     <AiOutlineDelete className="hover:bg-[#bb1e1e] text-xl rounded-md self-end" />
                   </span>
                  </li>
                 <li className="text-xs flex items-center  gap-2 justify-between text-black p-2 rounded-lg bg[#f1f1f1]0 hover:bg-[black] hover:text-white ">Essay.pdf
                  <span className="flex gap-2 items-center">
                    <button className="p-1 bg-white rounded-lg text-black hover:bg-green-500">open</button>
                     <AiOutlineDelete className="hover:bg-[#bb1e1e] text-xl rounded-md self-end" />
                   </span>
                 </li>
                 <li className="text-xs flex items-center  gap-2 justify-between text-black p-2 rounded-lg  b[#f1f1f1]0 hover:bg-[black] hover:text-white">Document.pdf
                  <span className="flex gap-2 items-center">
                    <button className="p-1 bg-white rounded-lg text-black hover:bg-green-500">open</button>
                     <AiOutlineDelete className="hover:bg-[#bb1e1e] text-xl rounded-md self-end" />
                   </span>
                 </li>
                  <li className="text-xs flex items-center gap-2  justify-between text-black p-2 rounded-lg bg-[#f1f1f1] hover:bg-[black] hover:text-white ">Doctor Poiontement.pdf
                    <span className="flex gap-2 items-center">
                      <button className="p-1 bg-white rounded-lg text-black hover:bg-green-500">open</button>
                     <AiOutlineDelete className="hover:bg-[#bb1e1e] text-xl rounded-md self-end" />
                   </span>
                  </li>
                  <li className="text-xs flex items-center gap-2 justify-between text-black p-2 rounded-lg bg-[#f1f1f1] hover:bg-[black] hover:text-white ">Essay.pdf
                    <span className="flex gap-2 items-center">
                      <button className="p-1 bg-white rounded-lg text-black hover:bg-green-500">open</button>
                     <AiOutlineDelete className="hover:bg-[#bb1e1e] text-xl rounded-md self-end" />
                   </span>
                  </li>
                   <li className="text-xs flex items-center gap-2 r justify-between text-black p-2 rounded-lg bg[#f1f1f1]0 hover:bg-[black] hover:text-white ">Document.pdf
                    <span className="flex gap-2 items-center">
                      <button className="p-1 bg-white rounded-lg text-black hover:bg-green-500">open</button>
                     <AiOutlineDelete className="hover:bg-[#bb1e1e] text-xl rounded-md self-end"  />
                   </span>
                   </li>
                  <li className="text-xs flex items-center gap-2  justify-between text-black p-2 rounded-lg bg-[#f1f1f1] hover:bg-[black] hover:text-white ">Doctor Poiontement.pdf
                    <span className="flex gap-2 items-center">
                      <button className="p-1 bg-white rounded-lg hover:bg-green-500">open</button>
                     <AiOutlineDelete className="hover:bg-[#bb1e1e] text-xl rounded-md self-end" />
                   </span>
                  </li>
                  <li className="text-xs flex items-center gap-2  justify-between text-black p-2 rounded-lg bg-[#f1f1f1] hover:bg-[black] hover:text-white ">Essay.pdf
                    <span className="flex gap-2 items-center">
                      <button className="p-1 bg-white rounded-lg text-black hover:bg-green-500">open</button>
                     <AiOutlineDelete className="hover:bg-[#bb1e1e] text-xl rounded-md self-end" />
                   </span>
                  </li>
              </ul>
              </>
              ) }
    </>
  )
}