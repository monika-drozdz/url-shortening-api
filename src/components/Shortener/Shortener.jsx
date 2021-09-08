import React, { useState, useCallback, useRef } from "react";
import CustomButton from "../CustomButton/CustomButton";
import Spinner from "../Spinner/Spinner";

import "./Shortener.scss";

const Shortener = () => {
	const [shortLink, setShortLink] = useState([]);
	const [input, setInput] = useState("");
	const [displayInputs, setDisplayInputs] = useState([]);
	const [isPending, setIsPending] = useState(false);
	const [isCopied, setIsCopied] = useState([]);
	const [error, setError] = useState(null);

	const inputRef = useRef(null);

	//validating an input (if input is empty)
	const validate = (input) => {
		if (!input) {
			return "Please add a link";
		}
		return null;
	};

	const handleChange = (e) => {
		setInput(e.target.value);
	};

	const handleSubmit = (e) => {
		e.preventDefault();
		const errorMsg = validate(input);

		if (errorMsg) {
			setError(errorMsg);
			inputRef.current.classList.add("red_border");
			return;
		} else {
			shortenUrl(input);
			inputRef.current.classList.remove("red_border");
			setInput("");
		}
		setError("");
	};

	//fetching external shrtcode API from shrtcode.de
	const shortenUrl = useCallback((item) => {
		setIsPending(true);
		const baseUrl = "https://api.shrtco.de/v2/shorten?url=";
		const fullUrl = baseUrl + item;
		fetch(fullUrl)
			.then((res) => res.json())
			.then((data) => {
				setShortLink((shortLink) => [...shortLink, data.result.short_link]);
			})
			.finally(() => setIsPending(false));
		setDisplayInputs((input) => [...input, item]);
		setIsCopied((isCopied) => [...isCopied, false]);
	}, []);

	//Copy item (short link) to Clipboard
	const handleCopy = (e, item, idx) => {
		e.preventDefault();
		const el = document.createElement("textarea");
		el.value = item.toString();
		document.body.appendChild(el);
		el.select();
		document.execCommand("copy");
		document.body.removeChild(el);

		isCopied[idx] = true;
		setIsCopied([...isCopied]);
	};
	return (
		<div>
			<div>
				<form
					className="input-container"
					onSubmit={(e) => {
						handleSubmit(e);
					}}
				>
					<div className="inp">
						<input
							type="text"
							placeholder="Shorten a link here..."
							value={input}
							onChange={handleChange}
							ref={inputRef}
						></input>
						{error && (
							<label htmlFor="shortener" className="form-label">
								{error}
							</label>
						)}
					</div>

					<div>
						<CustomButton isShorten type="submit" onSubmit={handleSubmit}>
							{isPending ? "Loading..." : "Shorten It!"}
						</CustomButton>
					</div>
				</form>
			</div>

			<div className="white-cards">
				{isPending && <Spinner />}
				{!isPending && shortLink && (
					<div>
						{shortLink.map((item) => {
							let idx = shortLink.indexOf(item);
							return (
								<div className="shorten-links" key={idx}>
									<div className="long-link">{displayInputs[idx]}</div>
									<div className="shrt-container">
										<a
											href={`https://${item}`}
											target="_blank"
											rel="noreferrer"
											className="short-link"
										>
											{item}
										</a>
										<CustomButton
											isCopied={isCopied[idx]}
											isShorten
											handleCopy={(e) => {
												handleCopy(e, item, idx);
											}}
										>
											{isCopied[idx] ? "Copied!" : "Copy"}
										</CustomButton>
									</div>
								</div>
							);
						})}
					</div>
				)}
			</div>
		</div>
	);
};

export default Shortener;
