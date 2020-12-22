import Formulario from './componentes/Formulario/Formulario';
import FormCadastro from './FormularioCadastro.json';

function App() {
  return (
    <div className="App">
      <div>Cabeçalho</div>
      <Formulario info={FormCadastro} />
      <div>Rodapé</div>
    </div>
  );
}

export default App;
