import { Suspense } from 'react';
import './App.css';
import Profile from './Pages/Profile';
import Header from './components/Header';
import Home from './Pages/Home';
import { BrowserRouter , Route, Routes } from "react-router-dom";
import About from './Pages/About';


function App() {
  return (
		<Suspense fallback={null}>
			<BrowserRouter>
				<Header />
				<Routes>
					<Route exact path="/" element={<Home />} />
					<Route exact path="/profile" element={<Profile />} />
					<Route path='/about' element={<About/>}/>
				</Routes>
			</BrowserRouter>
		</Suspense>

);
};

export default App;