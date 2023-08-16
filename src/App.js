import { HashRouter,Routes, Route } from 'react-router-dom';
import './App.css';
import { HomePage } from './HomePage';
import { BlogPage } from './BlogPage';
import { ProfilePage } from './ProfilePage';
import { Menu } from './Menu';
import {Games} from './Games';
import { BlogPost } from './BlogPost';
import {LoginPage} from './LoginPage';
import {LogOutPage }from './LogOutPage';
import { AuthProvider, AuthRoute } from './auth';

function App() {
  return (
    <>
      <HashRouter>
        <AuthProvider>
          <Menu />

          <Routes>
            <Route path='/' element={<HomePage />} />

            <Route path='/blog' element={<BlogPage />}>
              <Route path=':slug' element={<BlogPost />} />
            </Route>

            <Route path='/login' element={<LoginPage />} />
            <Route 
              path='/logout' 
              element={
                <AuthRoute>
                  <LogOutPage />
                </AuthRoute>
              } 
            />
            <Route 
              path='/profile' 
              element={
                <AuthRoute>
                  <ProfilePage />
                </AuthRoute>
              } 
            />

            <Route path='/games' element={<Games />} />
            <Route path='*' element={<p>Not Fount</p>} />
          </Routes>
        </AuthProvider>
      </HashRouter>
    </>
  );
}

export default App;
