import { AiOutlineDislike, AiOutlineLike, AiTwotoneFire } from 'react-icons/ai'
import { FcLike, FcShare} from 'react-icons/fc'
 import shoe1 from"../assets/shoe1.jpg"
import shoe2 from"../assets/shoe2.jpg"
import shoe3 from"../assets/shoe3.jpg"
import shoe4 from"../assets/shoe4.jpg"
import shoe5 from"../assets/shoe5.jpg"
import shoe6 from"../assets/shoe6.jpg"
import romario1 from"../assets/romario1.jpg"
import romario2 from"../assets/romario2.jpg"
import guilherme from"../assets/guilherme-stecanella-_dH-oQF9w-Y-unsplash.jpg"
// import holly from"../assets/holly-mandarich-7MrXw_o7Eo4-unsplash.jpg"
import yannic from"../assets/yannic-laderach-Dqx4XWuXu7w-unsplash.jpg"
import shifaaz from"../assets/shifaaz-shamoon-O0xQcGATOw4-unsplash.jpg"
import family from"../assets/family.jpg"
import { BsEmojiTear } from 'react-icons/bs'
import { FaRegCommentDots } from 'react-icons/fa'
import ProfileImage from './ProfileImage'
 

type postedContentsDataType= {
  owner: string;
  titleDescription: string;
  image: string[] 
  reactions: {
      like: number;
      unliked: number;
      hot: number;
      cry: number;
      laugh: number;
  };
  comment: number;
  share: number;
  postedTime?: Date;
}
 const postedContentsData:postedContentsDataType[]=[
  {
    owner:'Robert Hammond',
    titleDescription:"When I am not working, I spend my time in fulfilling and relaxing pursuits such as cooking, gardening, reading, painting, knitting and craft-making 😘",
    image: [romario1,romario2],
    reactions:{
      like:2,
      unliked:182,
      hot:27,
      cry:45,
      laugh:0
    },
    comment:215,
    share:83,
    postedTime:new Date()
   },
   {
    owner:'Robert Hammond',
    titleDescription:"When I am not working, I spend my time in fulfilling and relaxing pursuits such as cooking, gardening, reading, painting, knitting and craft-making",
    image: [shoe1,shoe2,shoe3,shoe4,shoe5,shoe6],
    reactions:{
      like:12,
      unliked:18,
      hot:7,
      cry:5,
      laugh:20
    } ,
    comment:615,
    share:3,
    postedTime:new Date()

   },
   {
    owner:'Robert Hammond',
    titleDescription:"When I am not working",
    image: [family],
    reactions:{
      like:7612,
      unliked:18,
      hot:387,
      cry:45,
      laugh:20
    } ,
    comment:615,
    share:3,
    postedTime:new Date()

   },
   {
    owner:'Robert Hammond',
    titleDescription:"When I am not working, I spend my time in fulfilling and relaxing pursuits such as cooking, gardening, reading, painting, knitting and craft-making",
    image: [guilherme],
    reactions:{
      like:762,
      unliked:8,
      hot:37,
      cry:45,
      laugh:20
    } ,
    comment:615,
    share:3,
    postedTime:new Date()

   },
   {
    owner:'Robert Hammond',
    titleDescription:"meditating in the morning breathing mountain airs 😇",
    image: [yannic],
    reactions:{
      like:762,
      unliked:8,
      hot:37,
      cry:45,
      laugh:20
    } ,
    comment:615,
    share:3,
    postedTime:new Date()
   },
   {
    owner:'Robert Hammond',
    titleDescription:"When I am not working, I spend my time in fulfilling and relaxing pursuits such as cooking, gardening, reading, painting, knitting and craft-making",
    image: [shifaaz],
    reactions:{
      like:72,
      unliked:895,
      hot:7,
      cry:45,
      laugh:250
    } ,
    comment:615,
    share:3,
    postedTime:new Date()
   }
 ]
const PostedContents = ()=> {
  
   return (
    <div className="flex flex-col gap-2.5 h-screen">
        {postedContentsData.map((items,i)=>(
          <div className="bg-white flex justify-center flex-col gap-4 items-center" key={i}>
          <div className="flex justify-start self-baseline ml-2.5 gap-2.5">
             <ProfileImage profileName={items.owner} />
             <div>
               <p className='text-sm font-thin text-black font-sans leading-tight'>
                {items.owner}
               </p>
               <p className='text-xs font-thin text-slate-500 font-sans leading-tight'>1 hour ago</p>
             </div>
          </div>
            <div className="w-11/12 flex flex-col gap-6">
                 <p className="w-5/6 font-sans text-xs ml-2.5 text-yellow-900 font-thin"  >{items.titleDescription}</p>
                 <div className="flex m-auto w-full rounded-full gap-0.5">
                      {
                        items.image.map((img,i)=>(
                          <img className='h-48 object-cover object-center self-center items-end m-auto w-3/4' key={i} src={img}  />
                        ))
                      }
                 </div>
            </div>
            <div className="flex justify-between  w-11/12 ">
             <span className="flex items-center gap-1.5 rounded-xl px-1.5 py-0.5">
               <p className='flex items-center font-thin text-xs gap-2.5 text-yellow-800' >2<AiTwotoneFire className='text-sm' color='blue' /></p>
               <p className='flex items-center font-thin text-xs gap-2.5 text-yellow-800'>182<AiOutlineDislike  className='text-sm'  color='red'/></p>
               <p className='flex items-center font-thin text-xs gap-2.5 text-yellow-800'>27<AiOutlineLike className='text-sm'   color='green'/></p>
               <p className='flex items-center font-thin text-xs gap-2.5 text-yellow-800'>45 <FcLike className='text-sm' /></p>
               <p className='flex items-center font-thin text-xs gap-2.5 text-yellow-800'>0<BsEmojiTear className='text-sm' /></p>
             </span>
             <span className="flex justify-between">
                 <label className='flex items-center  text-xs gap-1 text-slate-400 font-sans' ><FaRegCommentDots  className='icon'/>comments <span>{items.comment}</span></label>
                 <label className='flex items-center  text-xs gap-1 text-slate-400 font-sans '><FcShare className='icon' />share <span className='text-xl font-sans'>{items.share}</span></label>
             </span>
            </div>
          </div>
        ))}
    </div>  
    
    
  )
}

export default PostedContents