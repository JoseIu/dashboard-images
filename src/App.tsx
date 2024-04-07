import '@fontsource-variable/onest';
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import 'react-toastify/dist/ReactToastify.css';
import './App.scss';
import Header from './components/Header/Header';
import MyPhotosPage from './pages/myPhotosPage/MyPhotosPage';
import SearchPage from './pages/searchPage/SearchPage';

const App = () => {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/search" element={<SearchPage />} />
        <Route path="/my-photos" element={<MyPhotosPage />} />
        <Route path="/*" element={<Navigate to="/search" replace />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
