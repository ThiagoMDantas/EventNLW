import { useState } from "react";
import { CloseButton } from "./CloseButton";


//importação das imagens
import bugImageURL from '../assets/bug.svg';
import ideaImageURL from '../assets/idea.svg';
import thoughtImageURL from '../assets/thought.svg';



const feedbackTypes = {
  BUG:{
    title:'Problema',
    image:{
      source: bugImageURL,
      alt: 'Imagem de bug' 
    }
  },
  IDEA:{
    title:'Ideia',
    image:{
      source: ideaImageURL,
      alt: 'Imagem de lampada' 
    }
  },
  OTHER:{
    title:'Outros',
    image:{
      source: thoughtImageURL,
      alt: 'Imagem de pensamento' 
    }
  }
};

//Tipagem 
type FeedbackTypes = keyof typeof feedbackTypes;

/*
Object.entries(feedbackTypes) =>
[
  ['BUG', {...}],
  ['IDEA', {...}],
  ['OTHER', {...}]
]
*/

export function WidgetForm(){

  const [feedBackChose, setfeedBackChose] = useState<FeedbackTypes | null>(null);

  return(
    <div className="bg-zinc-900 p-4 relative rounded-2xl mb-4 flex flex-col items-center shadow-lg w-[calc(100vw-2rem)] md:w-auto">
      
      <header>
        <span className="text-xl leading-6">Deixe seu Feedback!</span>
        
        <CloseButton/>

      </header>

      {!feedBackChose 
      //se ternário
      ? (
      <div className="flex py-8 gap-2 w-full">
      {Object.entries(feedbackTypes).map(([key,value]) =>{
          //console.log(key,value);
          return (
            <button 
              key={key}
              className="bg-zinc-800 rounded-lg py-5 w-24 flex flex-1 flex-col items-center gap-2 border-2 border-transparent hover:border-brand-500 focus:border-brand-500 focus:outline-none"
              onClick={() => setfeedBackChose(key as FeedbackTypes)}
              type="button"
            
            >
              <img src={value.image.source} alt={value.image.alt}/>
              <span>{value.title}</span>
            </button>
          )
        })
      }

    </div>) 
    //senao
    : (
    <div>

    </div>)
    }
      
      <footer className="text-xs text-neutral-400">
        Feito pensando em você! Saiba mais em <a className="underline underline-offset-2" href="https://github.com/ThiagoMDantas">GitHub</a> 


      </footer>
    </div>
  )

}