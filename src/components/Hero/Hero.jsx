import CustomButton from "./../CustomButton/CustomButton";
import illustration from "./../../assets/images/illustration-working.svg";
import "./Hero.scss";

const Hero = () => {
	return (
		<div className="menu">
			<div className="text-container">
				<h1>More than just shorter links</h1>
				<p>
					Build your brand’s recognition and get detailed insights on how your
					links are performing.
				</p>
				<CustomButton>Get Started</CustomButton>
			</div>
			<img src={illustration} alt="illustration" className="header-image" />
		</div>
	);
};

export default Hero;
