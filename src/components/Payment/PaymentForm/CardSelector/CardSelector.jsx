import Label from "../../../Label/Label";
import style from "./style.module.scss";

import mastercard from "../../../../assets/images/payment_1.png";
import visa from "../../../../assets/images/payment_2.png";
import rupay from "../../../../assets/images/payment_3.png";

function CardSelector() {
	return (
		<div className={style.selectorCardWrapper}>
			<Label>Card type</Label>
			<ul className={style.paymentCardsList}>
				<li>
					<img src={mastercard} />
				</li>
				<li>
					<img src={visa} />
				</li>
				<li>
					<img src={rupay} />
				</li>
				<li className={style.seeAll}>
					<span>See all</span>
				</li>
			</ul>
		</div>
	);
}

export default CardSelector;
