 import ProfilePage from '../../components/ProfilePage'
import { friends } from '../../lib/data'
import {  useParams } from 'react-router-dom'
const Profile = () => {
  const {id}=useParams()
console.log(id);

    const profileOwner=friends.find(friend=>friend.id == Number(id))
    
  console.log(profileOwner);
  
  
  return (
    <>
      <ProfilePage profileOwner={profileOwner}  />
    </>
  )
}

export default Profile