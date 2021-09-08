import React from "react";

import "./CustomButton.scss";

const CustomButton = ({ children, isShorten, handleCopy, isCopied }) => {
	return (
		<button
			className={`${isShorten ? "shorten" : ""} ${
				isCopied ? "copied" : ""
			} custom-button`}
			onClick={handleCopy}
		>
			{children}
		</button>
	);
};

export default CustomButton;
