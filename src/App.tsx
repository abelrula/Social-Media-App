import { BrowserRouter, Route, Routes } from 'react-router-dom'
  import Feed from './Pages/Feed/Feed'
import Memories from './Pages/Memories/Memories'
import Friends from './Pages/Friends/Friends'
import Layout from './Layouts/Layout'
import Home from './Pages/Home/Home'
import Profile from './Pages/Profile/Profile'
import Message from './Pages/Message/Message'
import Events from './Pages/Events/Events'
import Stories from './Pages/Stories/Stories'
  

function App() {
 
   return (
            <BrowserRouter>
                <Routes>  
               <Route  path="/" element={<Layout />} >
                  <Route index element={<Home />}   />
                  <Route  path="friends" element={<Friends />}  />
                  <Route  path="feed" element={<Feed />}  />
                  <Route  path="memories" element={<Memories />}  />
                  <Route  path="profile" element={<Profile />}  />
                  <Route  path="message" element={<Message />}  />
                  <Route  path="events" element={<Events />}  />
                  <Route  path="stories" element={<Stories />}  />
               </Route>
              </Routes>
            </BrowserRouter>
  
  )
}

export default App