import React from "react";
import SliderSingle from "./SliderSingle";
import testImg from "../../../images/testImg.png";
import linkedin from "../../../images/linkedin.png";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { useMediaQuery } from "react-responsive";
import { CustomRightArrow, CustomLeftArrow } from "./CustomArrows";
export default function Slider() {
	const isDesktop = useMediaQuery({
		query: "(min-device-width: 1200px)",
	});
	const responsive = {
		desktop: {
			breakpoint: { max: 4000, min: 1200 },
			items: 1,
		},
		mobile: {
			breakpoint: { max: 1199, min: 0 },
			items: 1,
		},
	};

	return (
		<div className='slider'>
			<Carousel
				responsive={responsive}
				additionalTransfrom={0}
				autoPlaySpeed={3000}
				centerMode={isDesktop ? true : false}
				infinite={true}
				arrows={isDesktop ? false : true}
				customRightArrow={<CustomRightArrow />}
				customLeftArrow={<CustomLeftArrow />}
			>
				<SliderSingle
					img={testImg}
					name='Irene Pereyra'
					pos="Interaction Design Fellow '19"
					social={linkedin}
					content='This Fellowship was a turning point in my career. I wouldn’t be where I am today without the financial support and experienced offered through the program.'
					edu='B.A. Visual Design'
				/>
				<SliderSingle
					img={testImg}
					name='Irene Pereyra'
					pos="Interaction Design Fellow '19"
					social={linkedin}
					content='This Fellowship was a turning point in my career. I wouldn’t be where I am today without the financial support and experienced offered through the program.'
					edu='B.A. Visual Design'
				/>
				<SliderSingle
					img={testImg}
					name='Irene Pereyra'
					pos="Interaction Design Fellow '19"
					social={linkedin}
					content='This Fellowship was a turning point in my career. I wouldn’t be where I am today without the financial support and experienced offered through the program.'
					edu='B.A. Visual Design'
				/>
				<SliderSingle
					img={testImg}
					name='Irene Pereyra'
					pos="Interaction Design Fellow '19"
					social={linkedin}
					content='This Fellowship was a turning point in my career. I wouldn’t be where I am today without the financial support and experienced offered through the program.'
					edu='B.A. Visual Design'
				/>
				<SliderSingle
					img={testImg}
					name='Irene Pereyra'
					pos="Interaction Design Fellow '19"
					social={linkedin}
					content='This Fellowship was a turning point in my career. I wouldn’t be where I am today without the financial support and experienced offered through the program.'
					edu='B.A. Visual Design'
				/>
			</Carousel>
		</div>
	);
}
