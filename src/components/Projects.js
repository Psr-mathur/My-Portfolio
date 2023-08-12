import React from "react";

const Card = ({ title, hosturl, github, imgurl }) => {
	return (
		<div
			className="card"
			data-aos={window.innerWidth < 568 ? null : "zoom-in-up"}
		>
			<img
				className="card-img-top projimge"
				src={imgurl}
				alt="contact management"
			/>
			<div className="card-body">
				<h5 className="card-title">{title}</h5>
				<p className="card-text">
					<i className="fa-solid fa fa-code-fork">
						{" "}
						&nbsp;&nbsp;&nbsp;:&nbsp;&nbsp;
					</i>
					<a
						href={github}
						target="blank"
						style={{
							textDecoration: "none",
							color: "inherit",
						}}
					>
						{github}
					</a>
				</p>
				<p className="card-text">
					<i className="fa-solid fa fa-link">
						&nbsp;&nbsp;&nbsp;:&nbsp;&nbsp;
					</i>
					<a
						href={hosturl}
						target="blank"
						style={{
							textDecoration: "none",
							color: "inherit",
						}}
					>
						{hosturl}
					</a>
				</p>
			</div>
		</div>
	);
};

const Projects = () => {
	return (
		<div className="projects" id="projects">
			<div className="container">
				<h2 className=" mb-4">PROJECTS</h2>
				<div className="formob">
					<div className="card-deck">
						<Card
							imgurl="/images/desi-social.png"
							title="Social Media Website"
							github="https://github.com/Psr-mathur/desisocial"
							hosturl="https://desisocial.onrender.com"
						/>
						<Card
							imgurl="/images/orderfood.png"
							title="Food Order Website"
							github="https://github.com/Psr-mathur/order-food"
							hosturl="https://psr-mathur.github.io/order-food/"
						/>
						{/* <Card
							imgurl="/images/contactman.png"
							title="Contact Management App"
							github="https://github.com/Psr-mathur/contact-management"
							hosturl="https://psr-mathur.github.io/contact-management"
						/> */}
						<Card
							imgurl="/images/formilder.png"
							title="Formilder"
							github="https://github.com/Psr-mathur/formilder"
							hosturl="https://formilder.onrender.com/"
						/>
						<Card
							imgurl="/images/emojihub.png"
							title="EmojiHub"
							github="https://github.com/Psr-mathur/emoji-hub"
							hosturl="https://emojihub.onrender.com"
						/>
						<Card
							imgurl="/images/multistep.png"
							title="MultiStep Form"
							github="https://github.com/Psr-mathur/multi-step-form"
							hosturl="https://psr-mathur.github.io/multi-step-form/"
						/>
						<Card
							imgurl="/images/visualgorithm.png"
							title="Visualgorithm"
							github="https://github.com/Psr-mathur/visualgorithm"
							hosturl="https://visualgorithm.onrender.com"
						/>
					</div>
				</div>
				<div className=" d-flex align-items-center justify-content-center pt-4">
					<a
						data-aos="fade-right"
						data-aos-easing="ease-in-out-back"
						href="http://github.com/Psr-mathur"
						target="blank"
						className=" bg-black text-light py-3 px-5 bg-opacity-75 text-decoration-none rounded-1 fw-semibold"
					>
						Github &nbsp;{" "}
						<i className="fa-brands fa fa-github fa-1x"></i>
					</a>
				</div>
			</div>
		</div>
	);
};

export default Projects;
