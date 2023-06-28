import Input from "../Input/Input";
import Label from "../Label/Label";

import style from "./style.module.scss";

function FormGroup({ label, input }) {
	return (
		<div className={style.formGroupWrapper}>
			<Label>{label}</Label>
			<Input type={input.type} placeholder={input.placeholder} />
		</div>
	);
}

export default FormGroup;
