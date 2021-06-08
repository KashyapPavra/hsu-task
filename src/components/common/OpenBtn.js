import React, { useState, useRef } from "react";
import "./css/openBtn.css";
export default function OpenBtn(props) {
	const [clickFlag, setClickFlag] = useState(false);
	const openBtnRef = useRef();
	const [ringCircle1Style, setRingCircle1Style] = useState({
		transform: "rotate(-90deg)",
		transformOrigin: "50% 50%",
		stroke: "#DADADA",
		strokeWidth: "2",
		fill: "transparent",
		r: "15",
		cx: "120",
		cy: "120",
	});
	const [ringCircle2Style, setRingCircle2Style] = useState({
		transform: "rotate(-90deg)",
		transformOrigin: "50% 50%",
		stroke: "#DADADA",
		strokeWidth: "2",
		fill: "transparent",
		strokeDasharray: "0, 94.2",
		strokeDashoffset: "0",
		r: "15",
		cx: "120",
		cy: "120",
	});
	const [eleStyle, setEleStyle] = useState({
		innerCircle: {
			stroke: "white",
			strokeWidth: "0",
			fill: "white",
			r: "15",
			cx: "22.5",
			cy: "22.5",
		},
		outerCircle: {
			fill: "white",
			stroke: "#DADADA",
			r: "20",
			cx: "22.5",
			cy: "22.5",
			strokeWidth: "0.5",
		},

		plusLine1: {
			stroke: "#959595",
			strokeWidth: "1",
			strokeLinecap: "round",
		},
		plusLine2: {
			stroke: "#959595",
			strokeWidth: "1",
			strokeLinecap: "round",
		},
	});

	const clickHandler = () => {
		if (clickFlag === true) {
			setRingCircle2Style({
				...ringCircle2Style,
				animation: "fillCircle2 0.5s 0.5s linear forwards",
			});
			openBtnRef.current
				.querySelector(".bgCircle")
				.classList.remove("bg-circle-anim");
			setEleStyle({
				...eleStyle,
				innerCircle: {
					...eleStyle.innerCircle,
					animation: "circleSmallBack 0.5s linear forwards",
				},
				plusLine1: {
					...eleStyle.plusLine1,
					animation: "line1SpinBack 1s linear forwards",
				},
				plusLine2: {
					...eleStyle.plusLine2,
					animation: "line2SpinBack 1s linear forwards",
				},
			});
			setTimeout(function () {
				setRingCircle1Style({
					transform: "rotate(-90deg)",
					transformOrigin: "50% 50%",
					stroke: "#DADADA",
					strokeWidth: "2",
					fill: "transparent",
					r: "15",
					cx: "22.5",
					cy: "22.5",
				});
				setRingCircle2Style({
					transform: "rotate(-90deg)",
					transformOrigin: "50% 50%",
					stroke: "#DADADA",
					strokeWidth: "2",
					fill: "transparent",
					strokeDasharray: "0, 94.2",
					strokeDashoffset: "0",
					r: "15",
					cx: "22.5",
					cy: "22.5",
				});
			}, 1000);
			setClickFlag(false);
			props.openFaqClickHandler(props.faqAnsRef.current);
		} else if (clickFlag === false) {
			setRingCircle1Style({
				...ringCircle1Style,
				stroke: "#685dc5",
				strokeDasharray: "0,94.2",
				strokeDashoffset: "55",
				animation: "fillCircle 0.4s linear forwards",
			});
			openBtnRef.current
				.querySelector(".bgCircle")
				.classList.add("bg-circle-anim");
			setEleStyle({
				...eleStyle,
				innerCircle: {
					...eleStyle.innerCircle,
					animation: "circleSmall 0.2s 0.5s linear forwards",
				},
				plusLine1: {
					...eleStyle.plusLine1,
					animation: "line1Spin 1s linear forwards",
				},
				plusLine2: {
					...eleStyle.plusLine2,
					animation: "line2Spin 1s linear forwards",
				},
			});
			setClickFlag(true);
			props.openFaqClickHandler(props.faqAnsRef.current);
		}
	};

	return (
		<svg
			className='openButton'
			width='45'
			height='45'
			onClick={clickHandler}
			ref={openBtnRef}
		>
			<circle className='outerCircle' style={eleStyle.outerCircle} />
			<circle
				className='bgCircle'
				r='16'
				cx='22.5'
				cy='22.5'
				style={eleStyle.bgCircle}
			/>
			<circle className='ringCircle' style={ringCircle1Style} />
			<circle className='ringCircle2' style={ringCircle2Style} />
			<circle className='innerCircle' style={eleStyle.innerCircle} />
			<line
				className='plusLine1'
				x1='19'
				y1='22.5'
				x2='26'
				y2='22.5'
				style={eleStyle.plusLine1}
			/>
			<line
				className='plusLine2'
				x1='22.5'
				y1='19'
				x2='22.5'
				y2='26'
				style={eleStyle.plusLine2}
			/>
		</svg>
	);
}
