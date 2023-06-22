import ShoppingCart from "./components/ShoppingCart/ShoppingCart";

//Arquitectura de um componente
//Funcão - Retorna JSX


//PascalCase
function App() {
	//Logica do componente

	// Obrigatoriamente retornar JSX
	return (
		<>
			<ShoppingCart></ShoppingCart>
		</>
	);
}

export default App;

//Class Components
// class App extends React.Component {
//      //Logica do componente

//      // Obrigatoriamente render() e retornar JSX
//     render(){
//         return <>Hello World!</>
//     }
// }
