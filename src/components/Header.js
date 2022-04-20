import React, { Component } from "react";
import { Link } from "react-router-dom";
export default class Header extends Component {
	render() {
		return (
			<header>
				<div className="container">
					<div className="flex" id="header">
						<div className="col-6 flex space-between align-items-center title">
							<div>
								<h1>&lt;Mohammed REHAIMIN/&gt;</h1>
							</div>
							<span role="button" className="theme-btn">
								&#xF494;
							</span>
							<span role="button" className="menu-btn" id="menuBtn">
								&#xF479;
							</span>
						</div>
						<div className="col-6 nav">
							<nav>
								<ul className="flex">
									<li>
										<Link to="/">Home</Link>
									</li>
									<li>
										<Link to="projects">My projects</Link>
									</li>
									<li>
										<Link to="blog">Blog</Link>
									</li>
									<li>
										<Link to="contact">Contact me</Link>
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
