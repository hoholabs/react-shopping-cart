import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './Home';
import Shop from './Shop';

function App() {
    return (
        <BrowserRouter basename>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/Shop" element={<Shop />} />
            </Routes>
        </BrowserRouter>
    );
}

export default App;
