import style from "./style.module.scss";

function Label({ children }) {
	return <label className={style.label}>{children}</label>;
}

export default Label;
