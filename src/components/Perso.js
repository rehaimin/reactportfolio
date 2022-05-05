import React from "react";
import myPic from "../images/me4.png";
import { Link } from "react-router-dom";
class Perso extends React.Component {
	rotate() {
		document.getElementById("perso").style =
			"transition:2s;transform:rotate(360deg)";
	}

	componentDidMount() {
		document.querySelector(".main-container").scrollTo(0, 0);
	}

	render() {
		return (
			<section className="perso container hidden visible" id="perso">
				<div className="flex align-items-center space-between">
					<div className="col-6 colTab-12">
						<h2>
							Hey, I am <br />a <span>Web Developer</span>
						</h2>
						<p>Officially, I am a Full-stack Web Developer.</p>
						<p>
							But really, I am passionate building things for the web and make a
							difference in peoples’ lives.
						</p>
						<Link to="/projects" className="btn">
							My projects
						</Link>
					</div>
					<div className="myPic col-6 colTab-12">
						<img src={myPic} alt="" />
					</div>
				</div>
			</section>
		);
	}
}
export default Perso;
