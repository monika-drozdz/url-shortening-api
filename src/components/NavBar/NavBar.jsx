import React, { useState } from "react";

import "./NavBar.scss";
import CustomButton from "../CustomButton/CustomButton";
import logo from "./../../assets/images/logo.svg";

const NavBar = () => {
	const [displayNavbar, setDisplayNavbar] = useState(false);
	return (
		<nav className="nav-container">
			<img src={logo} className="App-logo" alt="logo" />
			<div className={displayNavbar ? "navbar show" : "navbar hide"}>
				<div className="nav-left">
					<ul>
						<li>
							<a href="#features">Features</a>
						</li>
						<li>
							<a href="#pricing">Pricing</a>
						</li>
						<li>
							<a href="#resources">Resources</a>
						</li>
					</ul>
				</div>

				<div className="nav-right">
					<ul>
						<li>
							<a href="#login">Login</a>
						</li>
						<li>
							<a href="#sign-up">
								<CustomButton>Sign Up</CustomButton>
							</a>
						</li>
					</ul>
				</div>
			</div>

			<div
				className={displayNavbar ? "hamburger open" : "hamburger"}
				onClick={() => setDisplayNavbar(!displayNavbar)}
			>
				<span></span>
				<span></span>
				<span></span>
				<span></span>
			</div>
		</nav>
	);
};

export default NavBar;
