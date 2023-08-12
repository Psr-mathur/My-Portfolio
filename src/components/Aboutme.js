import React from "react";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";

const Aboutme = () => {
	return (
		<div className=" container-fluid overflow-hidden" id="aboutme">
			<div className="aboutme row">
				<div className="left col-12 col-sm-6 d-flex align-items-center justify-content-center">
					<img
						src="/images/prakash.jpeg"
						alt=""
						className="imge rounded-circle bg-danger"
						data-aos="zoom-out"
						data-aos-duration="750"
					/>
				</div>
				<div className="right col-12 col-sm-6 align-self-center h-100">
					<div className=" container">
						<h1 data-aos="fade-left" data-aos-delay="0">
							About Me
						</h1>
						<p data-aos="fade-up" data-aos-delay="100">
							Hello, I'm Prakash, a recent graduate from NIT
							Patna, where I completed my studies in June 2023. I
							am passionate about technology and its potential to
							drive positive change. I'm an enthusiastic learner,
							always seeking opportunities to explore new
							technologies and stay up-to-date with industry
							trends. I am excited to embark on my professional
							journey and contribute my skills and creativity to
							meaningful projects.
						</p>
						<div>
							<Tabs>
								<TabList>
									<Tab>EDUCATION</Tab>
									<Tab>SKILLS</Tab>
								</TabList>

								<TabPanel>
									<h4
										data-aos="fade-left"
										data-aos-delay="150"
									>
										NATIONAL INSTITUTE OF TECHNOLOGY , PATNA
									</h4>
									<p data-aos="fade-up" data-aos-delay="200">
										B.Tech{" "}
										<span>(Electrical Engineering)</span>
									</p>
									<h4
										data-aos="fade-left"
										data-aos-delay="250"
									>
										N&#x2022;K&#x2022;P COLLEGE , MADHUBANI
									</h4>
									<p data-aos="fade-up" data-aos-delay="300">
										Intermediate - BSEB
									</p>
									<h4
										data-aos="fade-left"
										data-aos-delay="350"
									>
										BHOLA HIGH SCHOOL , GHOGHARDIHA
									</h4>
									<p data-aos="fade-up" data-aos-delay="400">
										Matriculation - BSEB
									</p>
								</TabPanel>
								<TabPanel>
									<h4
										data-aos="fade-left"
										data-aos-delay="150"
									>
										Programming Techs:
									</h4>
									<p data-aos="fade-up" data-aos-delay="200">
										&#x2022;&nbsp;&nbsp;&nbsp;C , C++ , OOP
										, Data Structures and Algorithm
									</p>
									<h4
										data-aos="fade-left"
										data-aos-delay="250"
									>
										Development:
									</h4>
									<p data-aos="fade-up" data-aos-delay="300">
										&#x2022;&nbsp;&nbsp;&nbsp;HTML , CSS ,
										SCSS , JavaScript , ReactJS , Bootstrap
										, NodeJS , MySQL
									</p>
									<h4
										data-aos="fade-left"
										data-aos-delay="350"
									>
										Familiar with:
									</h4>
									<p data-aos="fade-up" data-aos-delay="400">
										&#x2022;&nbsp;&nbsp;&nbsp;Git , DBMS ,
										Material-UI , TailwindCSS
									</p>
								</TabPanel>
							</Tabs>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Aboutme;
