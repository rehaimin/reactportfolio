import React from "react";
class Blog extends React.Component {
	componentDidMount() {
		document.querySelector(".main-container").scrollTo(0, 0);
	}

	render() {
		return (
			<section className="blog container hidden visible" id="blog">
				<div className="col-12">
					<div className="flex space-around">
						<h2>Blog</h2>

						<div className="col-4 colTab-6">
							<div>
								<a href="#blog">
									<h3>Blog Title</h3>
								</a>
								<p>
									Lorem, ipsum dolor sit amet consectetur adipisicing elit.
									Laborum dolor beatae minima veniam nostrum sequi corrupti?
									Doloremque eaque nam animi.
								</p>
							</div>
						</div>
						<div className="col-4 colTab-6">
							<div>
								<a href="#blog">
									<h3>Blog Title</h3>
								</a>
								<p>
									Lorem, ipsum dolor sit amet consectetur adipisicing elit.
									Laborum dolor beatae minima veniam nostrum sequi corrupti?
									Doloremque eaque nam animi.
								</p>
							</div>
						</div>
						<div className="col-4 colTab-6">
							<div>
								<a href="#blog">
									<h3>Blog Title</h3>
								</a>
								<p>
									Lorem, ipsum dolor sit amet consectetur adipisicing elit.
									Laborum dolor beatae minima veniam nostrum sequi corrupti?
									Doloremque eaque nam animi.
								</p>
							</div>
						</div>
						<div className="col-4 colTab-6">
							<div>
								<a href="#blog">
									<h3>Blog Title</h3>
								</a>
								<p>
									Lorem, ipsum dolor sit amet consectetur adipisicing elit.
									Laborum dolor beatae minima veniam nostrum sequi corrupti?
									Doloremque eaque nam animi.
								</p>
							</div>
						</div>
						<div className="col-4 colTab-6">
							<div>
								<a href="#blog">
									<h3>Blog Title</h3>
								</a>
								<p>
									Lorem, ipsum dolor sit amet consectetur adipisicing elit.
									Laborum dolor beatae minima veniam nostrum sequi corrupti?
									Doloremque eaque nam animi.
								</p>
							</div>
						</div>
						<div className="col-4 colTab-6">
							<div>
								<a href="#blog">
									<h3>Blog Title</h3>
								</a>
								<p>
									Lorem, ipsum dolor sit amet consectetur adipisicing elit.
									Laborum dolor beatae minima veniam nostrum sequi corrupti?
									Doloremque eaque nam animi.
								</p>
							</div>
						</div>
					</div>
				</div>
			</section>
		);
	}
}

export default Blog;
