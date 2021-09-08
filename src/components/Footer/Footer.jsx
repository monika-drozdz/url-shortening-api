import InstagramIcon from "../InstagramIcon/InstagramIcon";
import FacebookIcon from "../FacebookIcon/FacebookIcon";
import TwitterIcon from "../TwitterIcon/TwitterIcon";
import PinterestIcon from "../PinterestIcon/PinterestIcon";
import logo from "../../assets/images/logo.svg";
import "./Footer.scss";

const Footer = () => {
	return (
		<footer>
			<div className="footer-logo">
				<img src={logo} alt="logo" />
			</div>
			<div className="footer-map">
				<div className="footer-column">
					<span>Features</span>
					<a href="#shortening">Link Shortening</a>
					<a href="#links">Branded Links</a>
					<a href="#analytics">Analytics</a>
				</div>

				<div className="footer-column">
					<span>Resources</span>
					<a href="#blog">Blog</a>
					<a href="#developers">Developers</a>
					<a href="#support">Support</a>
				</div>
				<div className="footer-column">
					<span>Company</span>
					<a href="#about">About</a>
					<a href="#team">Our Team</a>
					<a href="#careers">Careers</a>
					<a href="#contact">Contact</a>
				</div>
			</div>
			<div className="social-icons">
				<div className="social-hover">
					<a href="#facebook" target="_blank" rel="noopener noreferrer">
						<FacebookIcon />
					</a>
				</div>

				<div className="social-hover">
					<a href="#twitter" target="_blank" rel="noopener noreferrer">
						<TwitterIcon />
					</a>
				</div>

				<div className="social-hover">
					<a href="#pinterest" target="_blank" rel="noopener noreferrer">
						<PinterestIcon />
					</a>
				</div>

				<div className="social-hover">
					<a href="#instagram" target="_blank" rel="noopener noreferrer">
						<InstagramIcon />
					</a>
				</div>
			</div>
		</footer>
	);
};

export default Footer;
