import React, { useContext } from "react";
import ApprName from "./ApprName";
import ApprSubline from "./ApprSubline";
import ApprDetails from "./ApprDetails";
import ApprPosition from "./ApprPosition";
import PurpleCTAButton from "../common/PurpleCTAButton";
import ApprCompany from "./ApprCompany";
import ApprTime from "./ApprTime";
import ApprGeoAndDuration from "./ApprGeoAndDuration";
import "./css/details.css";
import companyLogo from "../../images/companyLogo.png";
import { useMediaQuery } from "react-responsive";
import { GlobalContext } from "../../App";

export default function DetailsSection() {
	let { globalData } = useContext(GlobalContext);
	const isDesktop = useMediaQuery({
		query: "(min-device-width: 1200px)",
	});
	var startDate = new Date(globalData.scholarship.scholarship_start_date);

	return (
		<div id='detailsSection' className='container'>
			{isDesktop ? (
				<>
					<div className='columnLeft'>
						<ApprName name={globalData.scholarship.name} />
						<ApprSubline value='A fully funded work-study program to launch your tech career ' />
						<ApprDetails value={globalData.scholarship.description[0].data} />
						<ApprPosition value='Marketing Performance' />
						<PurpleCTAButton value='Apply Now' />
					</div>
					<div className='columnRight'>
						<ApprCompany
							name={globalData.scholarship.company.name}
							logo={companyLogo}
						/>
						<ApprTime />
						<ApprGeoAndDuration
							location={globalData.scholarship.location.name}
							duration={globalData.scholarship.duration}
							startDate={
								startDate.getDate() +
								" " +
								startDate.toLocaleString("default", { month: "long" }) +
								" " +
								startDate.getFullYear()
							}
							endDate='30 Nov 2021'
						/>
					</div>
				</>
			) : (
				<>
					<ApprName name={globalData.scholarship.name} />
					<ApprCompany
						name={globalData.scholarship.company.name}
						logo={companyLogo}
					/>
					<ApprTime />
					<ApprGeoAndDuration
						location={globalData.scholarship.location.name}
						duration={globalData.scholarship.duration}
						startDate={
							startDate.getDate() +
							" " +
							startDate.toLocaleString("default", { month: "long" }) +
							" " +
							startDate.getFullYear()
						}
						endDate='30 Nov 2021'
					/>
					<ApprSubline value='A fully funded work-study program to launch your tech career ' />
					<ApprDetails value={globalData.scholarship.description[0].data} />
					<ApprPosition value='Marketing Performance' />
					<PurpleCTAButton value='Apply Now' />
				</>
			)}
		</div>
	);
}
