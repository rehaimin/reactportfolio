import React from "react";
class Contact extends React.Component {
	componentDidMount() {
		document.querySelector(".main-container").scrollTo(0, 0);
	}

	render() {
		return (
			<section className="contact container hidden visible" id="contact">
				<div className="col-12">
					<div>
						<h2>Contact me</h2>
						<div className="contact-links">
							<div>
								<a href="mailto:mrehaimin@gmail.com">
									<span className="icon">&#xF32C;</span>mrehaimin@gmail.com
								</a>
							</div>
							<div>
								<a href="tel:+212663838063">
									<span className="icon">&#xF5B4;</span>+212-663-838063
								</a>
							</div>
							<div>
								<a
									href="https://www.linkedin.com/in/rehaimin/"
									rel="noopener noreferrer"
									target="_blank">
									<span className="icon">&#xF472;</span>linkedin.com/in/rehaimin
								</a>
							</div>
							<div>
								<a
									href="https://github.com/rehaimin"
									rel="noopener noreferrer"
									target="_blank">
									<span className="icon"> &#xF3ED;</span>github.com/rehaimin
								</a>
							</div>
							<div>
								<a
									href="https://rehaimin.github.io/Resume/"
									rel="noopener noreferrer"
									target="_blank">
									<span className="icon"> &#xF676;</span>My resume
								</a>
							</div>
						</div>
					</div>
				</div>
			</section>
		);
	}
}

export default Contact;
