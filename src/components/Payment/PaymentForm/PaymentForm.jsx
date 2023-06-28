import CardSelector from "./CardSelector/CardSelector";
import FormGroup from "../../FormGroup/FormGroup";
import style from "./style.module.scss";

const PaymentForm = () => {
	return (
		<form className={style.paymentFormWrapper}>
			<CardSelector />
			<FormGroup
				label="Name on card"
				input={{
					type: "text",
					placeholder: "Name",
				}}
			/>
			<FormGroup
				label="Card Number"
				input={{
					type: "text",
					placeholder: "1111 2222 3333 4444",
				}}
			/>
			<div className={style.sideBySide}>
				<FormGroup
					label="Expiration date"
					input={{
						type: "text",
						placeholder: "mm/yy",
					}}
				/>

				<FormGroup
					label="CVV"
					input={{
						type: "text",
						placeholder: "123",
					}}
				/>
			</div>
		</form>
	);
};

export default PaymentForm;
