import './App.css';
import AddDoctorPage from './pages/AddDoctorPage';
import SpecializationPage from './pages/SpecializationPage';
import SurgeryPage from './pages/SurgeryPage';
import DoctorPage from './pages/DoctorPage';
import HomePage from './pages/HomePage';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/home' element={<HomePage />} />
        <Route path='/doctors' element={<DoctorPage />} />
        <Route path='/specializations' element={<SpecializationPage />} />
        <Route path='/surgery' element={<SurgeryPage />} />
        <Route path='/add/doctor' element={<AddDoctorPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
