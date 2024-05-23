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
import holly from"../assets/holly-mandarich-7MrXw_o7Eo4-unsplash.jpg"
import yannic from"../assets/yannic-laderach-Dqx4XWuXu7w-unsplash.jpg"
import shifaaz from"../assets/shifaaz-shamoon-O0xQcGATOw4-unsplash.jpg"
import family from"../assets/family.jpg"
import { BsEmojiTear } from 'react-icons/bs'
import { FaRegCommentDots } from 'react-icons/fa'
import ProfileImage from './ProfileImage'
 
 
const PostedContents = ():JSX.Element => {
  
   return (
    <div className="postedContents">
    <div className="postedContent">
    <div className="postedContent_header">
       <ProfileImage profileName="abel zewdu"  />
       <div className="postedContent_header-name">
         <p>
           Robert Hammond
         </p>
         <p>1 hour ago</p>
       </div>
    </div>
      <div className="postedContent_center">
           <p className="description" >When I am not working, I spend my time in 
             fulfilling and relaxing pursuits such as cooking, gardening, reading, painting, knitting and craft-making 😘
           </p>
           <div className="images">
             <img src={romario1}  />
             <img src={romario2}  />
             </div>
      </div>
      <div className="postedContent_footer">
       <span className="postedContent_footer-reactions">
         <p>2<AiTwotoneFire className='icons' color='blue' /></p>
         <p>182<AiOutlineDislike  className='icons'  color='red'/></p>
         <p>27<AiOutlineLike className='icons'   color='green'/></p>
         <p>45 <FcLike className='icons' /></p>
         <p>0<BsEmojiTear className='icons' /></p>
       </span>
       <span className="postedContent_footer-status">
           <label><FaRegCommentDots  className='icon'/>comments <span>234</span></label>
           <label><FcShare className='icon' />share <span>56</span></label>
       </span>
      </div>
    </div>
    <div className="postedContent">
    <div className="postedContent_header">
       <ProfileImage profileName="abel zewdu" />
       <div className="postedContent_header-name">
         <p>
           Robert Hammond
         </p>
         <p>1 hour ago</p>
       </div>
    </div>
      <div className="postedContent_center">
           <p className="description" >When I am not working, I spend my time in 
             fulfilling and relaxing pursuits such as cooking, gardening, reading, painting, knitting and craft-making
           </p>
             <div className="images">
             <img src={shoe1}  />
             <img src={shoe3}  />
             <img src={shoe4}  />
             <img src={shoe5}  />
             <img src={shoe6}  />
             <img src={shoe2}  />
             </div>
      </div>
      <div className="postedContent_footer">
       <span className="postedContent_footer-reactions">
         <p>2<AiTwotoneFire className='icons' color='blue' /></p>
         <p>182<AiOutlineDislike  className='icons'  color='red'/></p>
         <p>27<AiOutlineLike className='icons'   color='green'/></p>
         <p>45 <FcLike className='icons' /></p>
         <p>0<BsEmojiTear className='icons' /></p>
       </span>
       <span className="postedContent_footer-status">
           <label><FaRegCommentDots  className='icon'/>comments <span>234</span></label>
           <label><FcShare className='icon' />share <span>56</span></label>
       </span>
      </div>
    </div>
    <div className="postedContent">
    <div className="postedContent_header">
       <ProfileImage profileName="abel zewdu" />
       <div className="postedContent_header-name">
         <p>
           Robert Hammond
         </p>
         <p>1 hour ago</p>
       </div>
    </div>
      <div className="postedContent_center">
           <p className="description" >When I am not working
           </p>
           <div className="images">
             <img src={family}  />
           </div>
      </div>
      <div className="postedContent_footer">
       <span className="postedContent_footer-reactions">
         <p>2<AiTwotoneFire className='icons' color='blue' /></p>
         <p>182<AiOutlineDislike  className='icons'  color='red'/></p>
         <p>27<AiOutlineLike className='icons'   color='green'/></p>
         <p>45 <FcLike className='icons' /></p>
         <p>0<BsEmojiTear className='icons' /></p>
       </span>
       <span className="postedContent_footer-status">
           <label><FaRegCommentDots  className='icon'/>comments <span>234</span></label>
           <label><FcShare className='icon' />share <span>56</span></label>
       </span>
      </div>
    </div>
    <div className="postedContent">
    <div className="postedContent_header">
       <ProfileImage profileName="abel zewdu" />
       <div className="postedContent_header-name">
         <p>
           Robert Hammond
         </p>
         <p>1 hour ago</p>
       </div>
    </div>
      <div className="postedContent_center">
           <p className="description" >When I am not working, I spend my time in 
             fulfilling and relaxing pursuits such as cooking, gardening, reading, painting, knitting and craft-making
           </p>
      </div>
      <div className="postedContent_footer">
       <span className="postedContent_footer-reactions">
         <p>2<AiTwotoneFire className='icons' color='blue' /></p>
         <p>182<AiOutlineDislike  className='icons'  color='red'/></p>
         <p>27<AiOutlineLike className='icons'   color='green'/></p>
         <p>45 <FcLike className='icons' /></p>
         <p>0<BsEmojiTear className='icons' /></p>
       </span>
       <span className="postedContent_footer-status">
           <label><FaRegCommentDots  className='icon'/>comments <span>234</span></label>
           <label><FcShare className='icon' />share <span>56</span></label>
       </span>
      </div>
    </div>
    <div className="postedContent">
    <div className="postedContent_header">
       <ProfileImage profileName="abel zewdu" />
       <div className="postedContent_header-name">
         <p>
           Robert Hammond
         </p>
         <p>1 hour ago</p>
       </div>
    </div>
      <div className="postedContent_center">
           <p className="description" >When I am not working, I spend my time in 
             fulfilling and relaxing pursuits such as cooking, gardening, reading, painting, knitting and craft-making
           </p>
           <div className="images">
             <img src={guilherme}  /> 
             </div>
      </div>
      <div className="postedContent_footer">
       <span className="postedContent_footer-reactions">
         <p>2<AiTwotoneFire className='icons' color='blue' /></p>
         <p>182<AiOutlineDislike  className='icons'  color='red'/></p>
         <p>27<AiOutlineLike className='icons'   color='green'/></p>
         <p>45 <FcLike className='icons' /></p>
         <p>0<BsEmojiTear className='icons' /></p>
       </span>
       <span className="postedContent_footer-status">
           <label><FaRegCommentDots  className='icon'/>comments <span>234</span></label>
           <label><FcShare className='icon' />share <span>56</span></label>
       </span>
      </div>
    </div>
    <div className="postedContent">
    <div className="postedContent_header">
       <ProfileImage profileName="abel zewdu" />
       <div className="postedContent_header-name">
         <p>
           Robert Hammond
         </p>
         <p>1 hour ago</p>
       </div>
    </div>
      <div className="postedContent_center">
           <p className="description" >When I am not working, I spend my time in 
             fulfilling and relaxing pursuits such as cooking, gardening, reading, painting, knitting and craft-making
           </p>
             <div className="images">
             <img src={holly}  />
             </div>
      </div>
      <div className="postedContent_footer">
       <span className="postedContent_footer-reactions">
         <p>2<AiTwotoneFire className='icons' color='blue' /></p>
         <p>182<AiOutlineDislike  className='icons'  color='red'/></p>
         <p>27<AiOutlineLike className='icons'   color='green'/></p>
         <p>45 <FcLike className='icons' /></p>
         <p>0<BsEmojiTear className='icons' /></p>
       </span>
       <span className="postedContent_footer-status">
           <label><FaRegCommentDots  className='icon'/>comments <span>234</span></label>
           <label><FcShare className='icon' />share <span>56</span></label>
       </span>
      </div>
    </div>
    <div className="postedContent">
    <div className="postedContent_header">
       <ProfileImage profileName="abel zewdu" />
       <div className="postedContent_header-name">
         <p>
           Robert Hammond
         </p>
         <p>1 hour ago</p>
       </div>
    </div>
      <div className="postedContent_center">
           <p className="description" >meditating in the morning breathing mountain airs 😇
           </p>
           <div className="images">
             <img src={yannic}  />
           </div>
      </div>
      <div className="postedContent_footer">
       <span className="postedContent_footer-reactions">
         <p>2<AiTwotoneFire className='icons' color='blue' /></p>
         <p>182<AiOutlineDislike  className='icons'  color='red'/></p>
         <p>27<AiOutlineLike className='icons'   color='green'/></p>
         <p>45 <FcLike className='icons' /></p>
         <p>0<BsEmojiTear className='icons' /></p>
       </span>
       <span className="postedContent_footer-status">
           <label><FaRegCommentDots  className='icon'/>comments <span>234</span></label>
           <label><FcShare className='icon' />share <span>56</span></label>
       </span>
      </div>
    </div>
    <div className="postedContent">
    <div className="postedContent_header">
       <ProfileImage profileName="abel zewdu" />
       <div className="postedContent_header-name">
         <p>
           Robert Hammond
         </p>
         <p>1 hour ago</p>
       </div>
    </div>
      <div className="postedContent_center">
           <p className="description" >When I am not working, I spend my time in 
             fulfilling and relaxing pursuits such as cooking, gardening, reading, painting, knitting and craft-making
           </p>
      </div>
      <div className="postedContent_footer">
       <span className="postedContent_footer-reactions">
         <p>2<AiTwotoneFire className='icons' color='blue' /></p>
         <p>182<AiOutlineDislike  className='icons'  color='red'/></p>
         <p>27<AiOutlineLike className='icons'   color='green'/></p>
         <p>45 <FcLike className='icons' /></p>
         <p>45 <FcLike className='icons' /></p>
         <p>0<BsEmojiTear className='icons' /></p>
       </span>
       <span className="postedContent_footer-status">
           <label><FaRegCommentDots  className='icon'/>comments <span>234</span></label>
           <label><FcShare className='icon' />share <span>56</span></label>
       </span>
      </div>
    </div>
    <div className="postedContent">
    <div className="postedContent_header">
       <ProfileImage profileName="abel zewdu" />
       <div className="postedContent_header-name">
         <p>
           Robert Hammond
         </p>
         <p>1 hour ago</p>
       </div>
    </div>
      <div className="postedContent_center">
           <p className="description" >swimming like a fish
           </p>
           <div className="images">
             <img src={shifaaz}  />
           </div>
      </div>
      <div className="postedContent_footer">
       <span className="postedContent_footer-reactions">
         <p>2<AiTwotoneFire className='icons' color='blue' /></p>
         <p>182<AiOutlineDislike  className='icons'  color='red'/></p>
         <p>27<AiOutlineLike className='icons'   color='green'/></p>
         <p>45 <FcLike className='icons' /></p>
         <p>0<BsEmojiTear className='icons' /></p>
       </span>
       <span className="postedContent_footer-status">
           <label><FaRegCommentDots  className='icon'/>comments <span>234</span></label>
           <label><FcShare className='icon' />share <span>56</span></label>
       </span>
      </div>
    </div>
    </div>  
    
    
  )
}

export default PostedContents