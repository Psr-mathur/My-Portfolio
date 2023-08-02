import React from "react";

const TEXTS = [
	"नमस्ते",
	"வணக்கம்",
	"ನಮಸ್ತೆ",
	"કેમ છો",
	"bonjour",
	"నమస్కరం",
	"hola",
	"nín hǎo",
	"Hello",
];

const Hello = () => {
	const [index, setIndex] = React.useState(0);

	React.useEffect(() => {
		const intervalId = setInterval(
			() => setIndex((index) => index + 1),
			200 // time
		);
		return () => clearTimeout(intervalId);
	}, []);

	return (
		<div className="hello d-flex align-items-center justify-content-center bg-black text-white position-absolute ">
			<h1 className=" d-inline ">{TEXTS[index % TEXTS.length]}</h1>
		</div>
	);
};
export default Hello;
