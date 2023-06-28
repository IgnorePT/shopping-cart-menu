import Arrow from "../../assets/icons/arrow.svg";
import style from "../BackAction/style.module.scss";

const BackAction = ({ title, linkTo }) => {
	return (
		<div className={style.wrapper}>
			<a href={linkTo}>
				<img src={Arrow} alt="" /> {title}
			</a>
		</div>
	);
};

export default BackAction;
