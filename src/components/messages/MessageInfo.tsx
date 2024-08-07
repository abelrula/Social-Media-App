import { IoIosArrowForward } from "react-icons/io"
import { imagesPostedByTheOwner } from "../../lib/data"
 
 
const MessageInfo = () => {
  return (
    <div className=" flex flex-col w-1/3 items-center gap-5">
          <h1 className="text-slate-900  font-mono text-2xl">Chat details</h1>
          <div className="w-full m-x-auto flex flex-col gap-5 px-3">
              <h4 className="text-slate-900 font-mono text-sm flex justify-between">Shared media (284) <IoIosArrowForward /></h4>
               <div className="flex flex-wrap gap-1 items-center">
                {
                  imagesPostedByTheOwner.map((image,i)=>(
                    <img className="w-16 h-16 rounded-lg object-cover object-center" src={image} key={i} alt="posts" />
                  ))
                }
              </div>
              <h5 className="text-slate-900 font-mono text-sm flex justify-between">Shared Files(4) <IoIosArrowForward /></h5>
              <ul className="flex flex-col gap-3 text-start px-3">
                  <li className="text-xs text-slate-600 ">Document.pdf</li>
                  <li className="text-xs text-slate-600 ">Doctor Poiontement.pdf</li>
                  <li className="text-xs text-slate-600 ">Essay.pdf</li>
              </ul>
                <h5 className="text-slate-900 font-mono text-sm flex justify-between">Shared Links(4) <IoIosArrowForward /></h5>
              <ul className="flex flex-col gap-3 text-start px-3">
                  <li className="text-xs text-slate-600 ">https://Linekeldn:esaylocal.com</li>
                  <li className="text-xs text-slate-600 ">https://Linekeldn:esaylocal.com</li>
                  <li className="text-xs text-slate-600 ">https://Linekeldn:esaylocal.com</li>
                  <li className="text-xs text-slate-600 ">https://Linekeldn:esaylocal.com</li>
              </ul>
          </div>
    </div>
  )
}

export default MessageInfo