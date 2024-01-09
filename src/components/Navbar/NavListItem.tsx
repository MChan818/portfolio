import { NavigationType } from "./Navbar";

import "./Navbar.css";

const NavListItem = (data: NavigationType) => {
	return (
		<a className={`group flex items-center py-3 ${data.active ? "active" : ""}`} href={`#` + data.href}>
			<span className="nav-indicator mr-4 h-px w-8 bg-slate-600 transition-all group-hover:w-16 group-hover:bg-slate-200 group-focus-visible:w-16 group-focus-visible:bg-slate-200 motion-reduce:transition-none"></span>
			<span className="nav-text text-xs font-bold uppercase tracking-widest text-slate-500 group-hover:text-slate-200 group-focus-visible:text-slate-200">
				{data.label}
			</span>
		</a>
	);
};

export default NavListItem;
