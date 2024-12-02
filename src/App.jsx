import React from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Home from './routes/Home'
import Demo from './routes/Demo'
import Contact from './routes/Contact'
import AboutUs from './routes/About'

const App = () => {
	return (
		<Router>
			<Routes>
				<Route
					path='/'
					element={<Home />}
				/>
				<Route
					path='/demo'
					element={<Demo />}
				/>
				<Route
					path='/contact'
					element={<Contact />}
				/>
				<Route
					path='/about'
					element={<AboutUs />}
				/>
			</Routes>
		</Router>
	)
}

export default App
