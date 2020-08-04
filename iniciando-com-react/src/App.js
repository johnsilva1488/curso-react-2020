import React from 'react';

  function App( props ) {

    const modificarNome = event => {
     console.log(event.target.value);
   }

    const criaCombobox = () =>{
    const opcoes = ["Fulano","Ciclano"]
    const comBoxOptions = opcoes.map(opcao => <option>{opcao}</option>)

    return(
      <select>
        {comBoxOptions}
      </select>
    )
  }

    const MeuComboBox = () => criaCombobox()

    return(
      <>
      <input type= "text" value={props.nome} onChange={modificarNome}/>
      <h1>Hello  {props.nome} sua idade é {props.idade} </h1>
      <MeuComboBox/>
      </>
    )
  
}

export default App;