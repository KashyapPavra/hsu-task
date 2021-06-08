import React, { useContext } from "react";
import ApprImage from "./ApprAbout/ApprImage";
import ApprAboutText from "./ApprAbout/ApprAboutText";
import { GlobalContext } from "../../App";

export default function ApprAbout() {
	let { globalData } = useContext(GlobalContext);

	return (
		<div className='apprAbout'>
			<ApprImage />
			<ApprAboutText value={globalData.scholarship.about[0].data} />
		</div>
	);
}
