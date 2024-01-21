import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './Pages/Home';
import Contact from './Pages/Contact';
import Blog from './Pages/Blog';
import About from './Pages/About';
import Signin from './Pages/Signin';
import Signup from './Pages/Signup';
import ResetPassword from './Pages/ResetPassword';

import Profile from './Pages/Dashoard/Profile';




function App() {
    return (
        <div className="App">
            <body className="bg-white dark:bg-neutral-800">
               
                <BrowserRouter>
                    <Routes>
                        <Route path='/' element={<Home />} />
                        <Route path='/contact' element={<Contact />} />
                        <Route path='/blog' element={<Blog />} />
                        <Route path='/about' element={<About />} />
                        <Route path='/signin' element={<Signin />} />
                        <Route path='/signup' element={<Signup />} />
                        <Route path='/reset-password' element={<ResetPassword />} />

                        <Route path='/profile' element={<Profile />} />
                    </Routes>
                </BrowserRouter>
            </body>
        </div>
    );
}

export default App;
