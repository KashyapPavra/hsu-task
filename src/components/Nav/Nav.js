import React from "react";
import Logo from "./Logo";
import HamMenu from "./HamMenu";
import "./css/nav.css";
export default function Nav() {
	return (
		<nav>
			<Logo />
			<HamMenu />
		</nav>
	);
}
