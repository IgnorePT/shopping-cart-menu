import Divider from "../Divider/Divider";
import PaymentForm from "./PaymentForm/PaymentForm";
import PaymentHeader from "./PaymentHeader/PaymentHeader";

function Payment() {
	return (
		<div className="payment-info">
			<PaymentHeader />
			<PaymentForm></PaymentForm>
			<Divider />
		</div>
	);
}

export default Payment;
