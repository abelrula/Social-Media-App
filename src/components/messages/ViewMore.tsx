import { useState } from "react"
import { imagesPostedByTheOwner } from "../../lib/data"
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io"
import { MessageInfoPhotoModal } from "../Modals"

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
        <h5 className="text-slate-900 font-mono font-thin text-lg flex justify-around items-center w-full  cursor-pointer border border-b-gray-300"><IoIosArrowBack fontSize={25} onClick={()=>setSelectedViewMore("")} />Shared media (284) </h5>
        <div className="flex flex-wrap gap-1 items-center">
                {
                  imagesPostedByTheOwner.map((image,i)=>(
                    <img onClick={ () => {setOpenModal(true); setOpenModalData(image) }} className="w-20 h-28 rounded-lg object-cover object-center" src={image.image} key={i} alt="posts" />
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
           <h5 className="text-slate-900 font-mono font-thin text-lg flex justify-around items-center  w-full cursor-pointer border border-b-gray-300"><IoIosArrowBack fontSize={25} onClick={()=>setSelectedViewMore("")} />Shared Links(4) </h5>
           <ul className="flex flex-col gap-3 text-start px-3">
                  <li className="text-sm text-cyan-700 ">https://Linekeldn:esaylocal.com</li>
                  <li className="text-sm text-cyan-700 ">https://Linekeldn:esaylocal.com</li>
                  <li className="text-sm text-cyan-700 ">https://Linekeldn:esaylocal.com</li>
                  <li className="text-sm text-cyan-700 ">https://Linekeldn:esaylocal.com</li>
                  <li className="text-sm text-cyan-700 ">https://Linekeldn:esaylocal.com</li>
                  <li className="text-sm text-cyan-700 ">https://Linekeldn:esaylocal.com</li>
                  <li className="text-sm text-cyan-700 ">https://Linekeldn:esaylocal.com</li>
            </ul>
          </>
        ) : (
             <>
              <h5 className="text-slate-900 font-mono font-thin text-lg flex justify-around items-center   w-full  cursor-pointer border border-b-gray-300"><IoIosArrowBack fontSize={25} onClick={()=>setSelectedViewMore("")} />Shared Files(4) </h5>
              <ul className="flex flex-col gap-1 text-start px-3 cursor-pointer">
                  <li className="text-xs text-white p-2 rounded-lg  bg-slate-950">Document.pdf</li>
                  <li className="text-xs text-white p-2 rounded-lg  bg-slate-950">Doctor Poiontement.pdf</li>
                 <li className="text-xs text-white p-2 rounded-lg bg-slate-950 ">Essay.pdf</li>
                 <li className="text-xs text-white p-2 rounded-lg  bg-slate-950">Document.pdf</li>
                  <li className="text-xs text-white p-2 rounded-lg bg-slate-950 ">Doctor Poiontement.pdf</li>
                  <li className="text-xs text-white p-2 rounded-lg bg-slate-950 ">Essay.pdf</li>
                   <li className="text-xs text-white p-2 rounded-lg bg-slate-950 ">Document.pdf</li>
                  <li className="text-xs text-white p-2 rounded-lg bg-slate-950 ">Doctor Poiontement.pdf</li>
                  <li className="text-xs text-white p-2 rounded-lg bg-slate-950 ">Essay.pdf</li>
              </ul>
              </>
              ) }
    </>
  )
}