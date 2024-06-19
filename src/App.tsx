import { BrowserRouter, Route, Routes } from 'react-router-dom'
  import Feed from './Pages/Feed/Feed'
import Memories from './Pages/Memories/Memories'
import Friends from './Pages/Friends/Friends'
 import Layout from './Layouts/Layout'
import Home from './Pages/Home/Home'
import Profile from './Pages/Profile/Profile'
 import Events from './Pages/Events/Events'
import Stories from './Pages/Stories/Stories'
import MyPosts from './Pages/Profile/ProfileSubPages/MyPosts'
import MyVideos from './Pages/Profile/ProfileSubPages/MyVideos'
 import MyPhotos from './Pages/Profile/ProfileSubPages/MyPhotos'
import MyFriends from './Pages/Profile/ProfileSubPages/MyFriends'
import MessagesConvoversation from "./components/messages/MessagesConvoversation";
import MessageListheader from "./components/messages/MessageListheader";  
import MessageLayout from "./components/messages/MessageLayout";

function App() {
 
   return (
            <BrowserRouter>
                <Routes>  
               <Route  path="/" element={<Layout />} >
                <Route index element={<Home />}   />
                  <Route  path="friends" element={<Friends />}  />
                  <Route  path="feed" element={<Feed />}  />
                  <Route  path="memories" element={<Memories />}  />
                  <Route  path="profile" element={<Profile />} >
                      <Route    index element={<MyPosts />}  />
                      <Route  path="videos" element={<MyVideos />}  />
                      <Route  path="photos" element={<MyPhotos />}  />
                      <Route  path="friends" element={<MyFriends />}  />
                  </Route>
                <Route path="message" element={<MessageLayout />}>
                    <Route index element={<MessageListheader />} />
                    <Route path=":id" element={<MessagesConvoversation />} />
                </Route>
                  <Route  path="events" element={<Events />}  />
                  <Route  path="stories" element={<Stories />}  />
               </Route>
              </Routes>
            </BrowserRouter>
  
  )
}

export default App