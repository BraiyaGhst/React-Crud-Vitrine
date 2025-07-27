import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import CreateProduct from './pages/CreateProduct';
import EditProduct from './pages/EditProduct';

function App() {
  return (
    <>
    <div className="min-h-screen bg-gradient-to-t from-blue-200 to-white">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/create" element={<CreateProduct />} />
        <Route path="/edit/:id" element={<EditProduct />} />
      </Routes>
      </div>
    </>
  );
}

export default App;
