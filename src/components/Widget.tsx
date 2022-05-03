import {ChatTeardropDots} from 'phosphor-react';
import { useState } from 'react';

export function Widget(){

  //1- Criando uma variavel de estado com o valor default false
  //2- isWidgetOpen váriavel de estádo
  //3- Função responsável por alterar o estado da variavel
  const [isWidgetOpen, setWidgetOpen] = useState(false)

  //4- Função que chama a função que altera o valor da variavel de estado
  function toggleWidgetVisibility(){
    setWidgetOpen(!isWidgetOpen)
  }

  return (
    <div className="absolute bottom-5 right-5">

      
      {//iniciando um bloco javascript para verificar o estado da variavel de estado e exibir a mensagem
      //usando operador ternário (if condição ? true : false)
      isWidgetOpen ? <p>Hello Woold</p> : null}

      <button onClick={toggleWidgetVisibility} className="bg-brand-500 rounded-full px-3 h-12 text-white flex items-center group">
        <ChatTeardropDots className='w-6 h-6' />


        <span className="max-w-0 overflow-hidden group-hover:max-w-xs transition-all duration-700 ease-linear">
          <span className="pl-2">
            Feedback
          </span>
        </span>
      </button>
    </div>
  )
}