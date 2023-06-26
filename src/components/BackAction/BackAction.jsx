import Arrow from "../../assets/icons/arrow.svg";
import style from "../BackAction/style.module.scss";

console.log(style);

const BackAction = ({ title, linkTo }) => {
	return (
		<div className={style.wrapper}>
			<a className={style["wrapper-cenas_red"]} href={linkTo}>
				<img src={Arrow} alt="" /> {title}
			</a>
		</div>
	);
};

export default BackAction;
