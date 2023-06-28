import user from "../../../assets/images/user.png";
import styles from "./style.module.scss";

function PaymentHeader() {
	return (
		<div className={styles.paymentHeader}>
			<h3>Card Details</h3>
			<img src={user} />
		</div>
	);
}

export default PaymentHeader;
