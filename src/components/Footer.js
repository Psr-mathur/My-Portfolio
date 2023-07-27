import React from "react";

const Footer = () => {
	return (
		<div className="footer">
			<footer className=" d-flex gap-4 align-items-center justify-content-center pt-2">
				<a
					href="https://github.com/Psr-mathur"
					style={{ textDecoration: "none", color: "inherit" }}
				>
					<i className="fa-brands fa fa-github fa-2x"></i>
				</a>
				<a
					href="https://www.linkedin.com/in/prakash-kumar-a9685a190/"
					style={{ textDecoration: "none", color: "inherit" }}
				>
					<i className="fa-brands fa fa-linkedin fa-2x"></i>
				</a>
				<a href="" style={{ textDecoration: "none", color: "inherit" }}>
					<i className="fa-brands fa fa-instagram fa-2x"></i>
				</a>
			</footer>
			<footer className="text-center text-lg-start">
				<div className="text-center p-3">
					© 2023 Copyright:
					<span>&nbsp; Contact me for Source Code.</span>
				</div>
			</footer>
		</div>
	);
};

export default Footer;
