import ShoppingCart from "./components/ShoppingCart/ShoppingCart";
import "./App.css";

//Arquitectura de um componente
//Regra Para nomear Componentes usar PascalCase
function App() {
	//Logica do componente
	console.log("Renderizou!");
	// Obrigatoriamente retornar JSX
	return (
		<>
			<ShoppingCart></ShoppingCart>
		</>
	);
}

//É necessario exportar o component para poder ser utizado noutras partes da aplicação
export default App;

//Class Components
// class App extends React.Component {
//      //Logica do componente

//      // Obrigatoriamente render() e retornar JSX
//     render(){
//         return <>Hello World!</>
//     }
// }
