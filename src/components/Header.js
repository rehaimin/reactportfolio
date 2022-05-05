import React, { Component } from "react";
import { Link } from "react-router-dom";
import ToggleTheme from "./ToggleTheme";
export default class Header extends Component {
	displayNav() {
		const navCol = document.querySelector(".nav");
		navCol.classList.toggle("nav-display");
	}

	hideNavOnSmallScreen() {
		if (window.innerWidth <= 870) {
			const navCol = document.querySelector(".nav");
			if (navCol.classList.contains("nav-display")) {
				navCol.classList.remove("nav-display");
			}
		}
	}
	render() {
		return (
			<header>
				<div className="container">
					<div className="flex" id="header">
						<div className="col-6 flex space-between align-items-center title">
							<div>
								<h1>&lt;Mohammed REHAIMIN/&gt;</h1>
							</div>
							<ToggleTheme />
							<span
								role="button"
								className="menu-btn"
								id="menuBtn"
								onClick={this.displayNav.bind(this)}>
								&#xF479;
							</span>
						</div>
						<div className="col-6 nav">
							<nav>
								<ul className="flex">
									<li>
										<Link to="/" onClick={this.hideNavOnSmallScreen.bind(this)}>
											Home
										</Link>
									</li>
									<li>
										<Link
											to="projects"
											onClick={this.hideNavOnSmallScreen.bind(this)}>
											My projects
										</Link>
									</li>
									<li>
										<Link
											to="blog"
											onClick={this.hideNavOnSmallScreen.bind(this)}>
											Blog
										</Link>
									</li>
									<li>
										<Link
											to="contact"
											onClick={this.hideNavOnSmallScreen.bind(this)}>
											Contact me
										</Link>
									</li>
								</ul>
							</nav>
						</div>
					</div>
				</div>
			</header>
		);
	}
}
