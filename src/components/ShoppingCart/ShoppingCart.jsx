import BackAction from "../BackAction/BackAction";
import CheckoutInfo from "../CheckoutInfo/CheckoutInfo";
import Payment from "../Payment/Payment";

import "./style.css";
import style from "../BackAction/style.module.scss";

//If

// if(condicao){

// } else {

// }

// // Switch
// switch (condicao) {
// 	case '':
// 	  console.log('Oranges are $0.59 a pound.');
// 	  break;
// 	default:
// 	  console.log(`Sorry, we are out of ${expr}.`);
//   }

// //Ternarios
// (condicao) ? true : false;

// {hasProduct ? (
// 	<CheckoutInfo products={data}></CheckoutInfo>
// ) : (
// 	<h1>Não tens produtos no carrio</h1>
// )}

//	{hasProduct ? <Payment /> : null}

// && - Operator flow
// condicao &&  qualquer coisa a ser renderizada

const data = [];

const ShoppingCart = () => {
	//Universo da Logica
	const hasProduct = data.length > 0;

	//Universo da Renderização
	return (
		<section className={`shopping-cart-container ${style.wrapper}`}>
			<div className="cart-info">
				<BackAction linkTo="/cart" title="Shopping Continue" />
				{/*  */}

				{hasProduct ? (
					<CheckoutInfo products={data}></CheckoutInfo>
				) : (
					<h1>Não tens produtos no carrio</h1>
				)}
			</div>

			{hasProduct && <Payment />}
		</section>
	);
};

export default ShoppingCart;
