import "./App.css";
import MainInfo from "./components/MainInfo";
import SidePanel from "./components/SidePanel/SidePanel";

import { AppContextProvider } from "./components/Context/AppContext";
import { Analytics } from "@vercel/analytics/react";

function App() {
	return (
		<AppContextProvider>
			<Analytics/>
			<div className="mx-auto min-h-screen max-w-screen-xl px-6 py-12 font-sans md:px-12 md:py-20 lg:px-24 lg:py-0">
				<div className="lg:flex lg:justify-between lg:gap-4">
					<MainInfo />
					<SidePanel />
				</div>
			</div>
		</AppContextProvider>
	);
}

export default App;
