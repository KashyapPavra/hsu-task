import "./css/global.css";
import "./css/fontsAndColors.css";
import Nav from "./components/Nav/Nav";
import DetailsSection from "./components/DetailsSection/DetailsSection";
import AboutSection from "./components/AboutSection/AboutSection";
import TestimonialSection from "./components/TestimonialSection/TestimonialSection";
import FAQSection from "./components/FAQSection/FAQSection";
import axios from "axios";
import { useState, useEffect, createContext } from "react";
export const GlobalContext = createContext(null);

function App() {
	const [globalData, setGlobalData] = useState(null);
	const [loading, setLoading] = useState(true);
	useEffect(() => {
		axios
			.get(
				"https://stage.harbour.space/api/v1/scholarship_pages/data-science-apprenticeship-zeptolab"
			)
			.then(function (response) {
				setGlobalData(response.data);
				setLoading(false);
			})
			.catch(function (error) {
				console.log(error);
			});
	}, []);

	return loading === true ? (
		<div>Loading</div>
	) : (
		<div className='App'>
			<Nav />
			<GlobalContext.Provider value={{ globalData, setGlobalData }}>
				<div className='mainSection'>
					<DetailsSection />
					<AboutSection />
					<TestimonialSection />
					<FAQSection />
				</div>
			</GlobalContext.Provider>
		</div>
	);
}

export default App;
