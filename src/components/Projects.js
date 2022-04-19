import React from "react";
import books from "../images/books.JPG";
import bootcamp from "../images/bootcamp.JPG";
import calculatrice from "../images/calculatrice.JPG";
import devinette from "../images/devinette.JPG";
import fishfood from "../images/fishfood.JPG";
import githubfinder from "../images/githubfinder.JPG";
import green from "../images/green.JPG";
import trello from "../images/trello.JPG";
import voyageur from "../images/voyageur.JPG";

class Projects extends React.Component {
	componentDidMount() {
		document.querySelector(".main-container").scrollTo(0, 0);
	}

	render() {
		return (
			<section className="projects container hidden visible" id="my-projects">
				<div className="flex space-around">
					<h2>My projects</h2>

					<div className="col-4 colTab-6">
						<a
							href="https://rehaimin.github.io/calculatrice/"
							rel="noopener noreferrer"
							target="_blank">
							<img src={calculatrice} alt="" />
						</a>
					</div>
					<div className="col-4 colTab-6">
						<a
							href="https://rehaimin.github.io/devinette/"
							rel="noopener noreferrer"
							target="_blank">
							<img src={devinette} alt="" />
						</a>
					</div>
					<div className="col-4 colTab-6">
						<a
							href="https://rehaimin.github.io/GithubApi/"
							rel="noopener noreferrer"
							target="_blank">
							<img src={githubfinder} alt="" />
						</a>
					</div>
					<div className="col-4 colTab-6">
						<a
							href="https://rehaimin.github.io/trello-clone/"
							rel="noopener noreferrer"
							target="_blank">
							<img src={trello} alt="" />
						</a>
					</div>
					<div className="col-4 colTab-6">
						<a
							href="https://rehaimin.github.io/bootcamp/"
							rel="noopener noreferrer"
							target="_blank">
							<img src={bootcamp} alt="" />
						</a>
					</div>
					<div className="col-4 colTab-6">
						<a
							href="https://rehaimin.github.io/voyageur/"
							rel="noopener noreferrer"
							target="_blank">
							<img src={voyageur} alt="" />
						</a>
					</div>
					<div className="col-4 colTab-6">
						<a
							href="https://rehaimin.github.io/Book/"
							rel="noopener noreferrer"
							target="_blank">
							<img src={books} alt="" />
						</a>
					</div>
					<div className="col-4 colTab-6">
						<a
							href="https://rehaimin.github.io/green/"
							rel="noopener noreferrer"
							target="_blank">
							<img src={green} alt="" />
						</a>
					</div>
					<div className="col-4 colTab-6">
						<a
							href="https://rehaimin.github.io/fishfood/"
							rel="noopener noreferrer"
							target="_blank">
							<img src={fishfood} alt="" />
						</a>
					</div>
				</div>
			</section>
		);
	}
}

export default Projects;
