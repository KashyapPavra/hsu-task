import React, { useContext } from "react";
import ApprScholarship from "./ApprNumbers/ApprScholarship";
import ApprCommitment from "./ApprNumbers/ApprCommitment";
import ApprContract from "./ApprNumbers/ApprContract";
import { GlobalContext } from "../../App";

export default function ApprNumbers() {
	let { globalData } = useContext(GlobalContext);

	return (
		<div className='apprNumbers'>
			<ApprScholarship
				scholarship={globalData.scholarship.total_value}
				tuition={globalData.scholarship.tuition}
				living={globalData.scholarship.stipend_per_year}
			/>
			<ApprCommitment
				studyAmt={globalData.scholarship.study_commitment}
				studyText='You will complete 15 modules to graduate. Daily classes are 3 hours, plus coursework to complete in your own time.'
				workAmt={globalData.scholarship.internship_commitment}
				workText='Immerse yourself in the professional world during your apprenticeship. You’ll learn the ropes from the best and get to apply your newly acquired knowledge in the field from day one.'
			/>

			<ApprContract
				contractAmt={1}
				contractText='You’ll be guaranteed a 1 year contract with SCG upon graduation.'
			/>
		</div>
	);
}
