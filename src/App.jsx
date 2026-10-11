import { Navigate, Route, Routes } from 'react-router-dom'
import Layout from './components/Layout'
import ProtectedRoute from './components/ProtectedRoute'
import AuthPage from './pages/AuthPage'
import Dashboard from './pages/Dashboard'
import Analyze from './pages/Analyze'
import Jobs from './pages/Jobs'
import HistoryPage from './pages/History'
export default function App(){
 return <Routes>
  <Route path="/login" element={<AuthPage mode="login"/>}/>
  <Route path="/register" element={<AuthPage mode="register"/>}/>
  <Route element={<ProtectedRoute/>}><Route element={<Layout/>}>
   <Route path="/dashboard" element={<Dashboard/>}/><Route path="/analyze" element={<Analyze/>}/><Route path="/jobs" element={<Jobs/>}/><Route path="/history" element={<HistoryPage/>}/>
  </Route></Route>
  <Route path="*" element={<Navigate to={localStorage.getItem('career_token')?'/dashboard':'/login'} replace/>}/>
 </Routes>
}
