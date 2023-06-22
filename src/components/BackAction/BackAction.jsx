import Arrow from "../../assets/icons/arrow.svg";
import "./style.css";

const BackAction = ({ title, linkTo }) => {
	return (
		<div className="back-action">
			<a href={linkTo}>
				<img src={Arrow} alt="" /> {title}
			</a>
		</div>
	);
};

export default BackAction;
