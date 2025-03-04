 import { GoDotFill } from 'react-icons/go'
import { Link } from 'react-router-dom'
import { onlineContacts } from '../lib/data'

const OnlineContacts = () => {
  return (
   <div className=" p-2.5 w-56 h-fit rounded-lg overflow-x-hidden overflow-y-scroll bg-white scroll-smooth scrollbar-thin max-h-1/2">
            <h4 className="text-center text-zinc-400 font-mono text-sm">Online Contacts</h4>
            <ul className="flex flex-col">
                 {
                  onlineContacts.map((friends,i)=>(
                    <Link
                      to={ `/message/${i}` } className="flex items-center gap-2.5 no-underline h-8" key={ i }>
                        <img className='w-6 h-6 rounded-full object-cover object-center' src={friends.profile} />
                      <p className="w-full text-xs font-mono flex items-center justify-between text-zinc-600">{ friends.name }
                        <GoDotFill color='green' /> </p>
                       
                    </Link>
                  )) 
                 }
            </ul>
        </div>  )
}

export default OnlineContacts