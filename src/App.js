import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home/Home';
import Layout from './pages/Layout/Layout';
const App = () => {
    return <>

        <Router>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/layout" element={<Layout />} />
            </Routes>
        </Router>
    </>
}

export default App;