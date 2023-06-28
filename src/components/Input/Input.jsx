import style from "./style.module.scss";

function Input({ type, placeholder }) {
	return (
		<input className={style.input} type={type} placeholder={placeholder} />
	);
}

export default Input;
