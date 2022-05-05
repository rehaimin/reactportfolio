import React from "react";
function Scrolltop() {
	return (
		<div className="scrollTop">
			<span
				role="button"
				onClick={() =>
					document.querySelector(".main-container").scrollTo(0, 0)
				}>
				&#xF139;
			</span>
		</div>
	);
}

export default Scrolltop;
