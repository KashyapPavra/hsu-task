import React from "react";
import FilterOptions from "./FilterOptions";
import arrowDown from "../../images/arrow-down.png";
export default function FAQHeader() {
	function filterListClickHandler() {
		document.querySelector(".filterList").classList.toggle("openList");
		document.querySelector(".btnArrow").classList.toggle("btnSpin");
	}
	function filterOptionClickHandler(option) {
		document.querySelector(".selectedOption span").innerHTML = option.innerHTML;
	}
	return (
		<div className='faqHeader'>
			<h2 className='faqHeading headingPurple'>
				Frequently asked <br />
				questions
			</h2>
			<div className='filterSection'>
				<span>Filter by:</span>
				<div className='filterBtn'>
					<div className='filterWrap' onClick={filterListClickHandler}>
						<div className='selectedOption'>
							<span>All</span>
							<img className='btnArrow' src={arrowDown} alt='arrow' />
						</div>
						<ul className='filterList'>
							<FilterOptions
								value='All'
								filterOptionClickHandler={filterOptionClickHandler}
							/>
							<FilterOptions
								value='Program Conditions'
								filterOptionClickHandler={filterOptionClickHandler}
							/>
							<FilterOptions
								value='Admissions'
								filterOptionClickHandler={filterOptionClickHandler}
							/>
							<FilterOptions
								value='Harbour Space'
								filterOptionClickHandler={filterOptionClickHandler}
							/>
							<FilterOptions
								value='SCG'
								filterOptionClickHandler={filterOptionClickHandler}
							/>
							<FilterOptions
								value='Living in BCN'
								filterOptionClickHandler={filterOptionClickHandler}
							/>
						</ul>
					</div>
				</div>
			</div>
		</div>
	);
}
