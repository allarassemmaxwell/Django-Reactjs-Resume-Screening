import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './Pages/Home';
import Contact from './Pages/Contact';
import Blog from './Pages/Blog';
import About from './Pages/About';
import Signin from './Pages/Signin';
import Register from './Pages/Register';
import Logout from './Pages/Logout';

import ResetPassword from './Pages/ResetPassword';

import Profile from './Pages/Dashoard/Profile';
import PrivateRoute from './utils/PrivateRoute';
import { AuthProvider } from './Context/AuthContext';





function App() {
    return (
        <div className="App">
            <body className="bg-white dark:bg-neutral-800">
               
                <BrowserRouter>
                    <AuthProvider>
                        <Routes>
                            <Route path='/' element={<Home />} />
                            <Route path='/contact' element={<Contact />} />
                            <Route path='/blog' element={<Blog />} />
                            <Route path='/about' element={<About />} />
                            <Route path='/login' element={<Signin />} />
                            <Route path='/register' element={<Register />} />
                            <Route path='/logout' element={<Logout />} />
                            <Route path='/reset-password' element={<ResetPassword />} />

                            <Route path='/profile' element={<PrivateRoute><Profile /></PrivateRoute>} />
                        </Routes>
                    </AuthProvider>
                </BrowserRouter>
            </body>
        </div>
    );
}

export default App;
