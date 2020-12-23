import React from 'react';
import Formulario from '../../componentes/Formulario/Formulario';
import formCadastro from './FormularioCadastro.json';

const cadastroCliente = () => {
    return(
      <Formulario info={formCadastro} />  
    );
}

export default cadastroCliente;
