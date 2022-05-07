import {ChatTeardropDots} from 'phosphor-react';
import { useState } from 'react';
import { Popover } from '@headlessui/react'
import { WidgetForm } from './WidgetForm';

export function Widget(){

//Comentado para implantar o controle de estado do Popover
  //1- Criando uma variavel de estado com o valor default false
  //2- isWidgetOpen váriavel de estádo
  //3- Função responsável por alterar o estado da variavel
  //const [isWidgetOpen, setWidgetOpen] = useState(false)

  //4- Função que chama a função que altera o valor da variavel de estado
  
  //function toggleWidgetVisibility(){
  // setWidgetOpen(!isWidgetOpen)
  //}

  return (

    //implantando headless Popover
    <Popover className="absolute bottom-4 right-4 md:bottom-8 md:right-8 flex flex-col items-end">

      
      {
      //iniciando um bloco javascript para verificar o estado da variavel de estado e exibir a mensagem
      //usando operador ternário (if condição ? true : false)
      //Comentado para implantar o controle de estado do Popover
      //isWidgetOpen ? <p>Hello Woold</p> : null}
    }
        
          <Popover.Panel>
            <WidgetForm/>
          </Popover.Panel>
          
          <Popover.Button className="bg-brand-500 rounded-full px-3 h-12 text-white flex items-center group">
            <ChatTeardropDots className='w-6 h-6' />
            <span className="max-w-0 overflow-hidden group-hover:max-w-xs transition-all duration-700 ease-linear">
              <span className="pl-2">
                Feedback
              </span>
            </span>
          </Popover.Button>
    </Popover>
  )
}