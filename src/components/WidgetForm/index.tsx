import { useState } from "react";


//importação das imagens
import bugImageURL from '../../assets/bug.svg';
import ideaImageURL from '../../assets/idea.svg';
import thoughtImageURL from '../../assets/thought.svg';
import { FeedBackContentStep } from "./Steps/FeedbackContentStep";
import { FeedBackTypeStep } from "./Steps/FeedBackTypeStep";
import { FeedBackSuccessStep } from "./Steps/FeedBackSuccessStep";



export const feedbackTypes = {
  BUG: {
    title: 'Problema',
    image: {
      source: bugImageURL,
      alt: 'Imagem de bug'
    }
  },
  IDEA: {
    title: 'Ideia',
    image: {
      source: ideaImageURL,
      alt: 'Imagem de lampada'
    }
  },
  OTHER: {
    title: 'Outros',
    image: {
      source: thoughtImageURL,
      alt: 'Imagem de pensamento'
    }
  }
};

//Tipagem 
export type FeedbackTypes = keyof typeof feedbackTypes;

/*
Object.entries(feedbackTypes) =>
[
  ['BUG', {...}],
  ['IDEA', {...}],
  ['OTHER', {...}]
]
*/

export function WidgetForm() {

  const [feedBackChose, setfeedBackChose] = useState<FeedbackTypes | null>(null);
  const [feedbackSent, setfeedbackSent] = useState(false);

  function handleRestartFeedback(){
    setfeedbackSent(false);
    setfeedBackChose(null);
  }

  return (
    <div className="bg-zinc-900 p-4 relative rounded-2xl mb-4 flex flex-col items-center shadow-lg w-[calc(100vw-2rem)] md:w-auto">

     {feedbackSent ? 
     (
       <FeedBackSuccessStep
        onFeedbackRestart={handleRestartFeedback}
       />
     )
     
     :(
       <>
        {!feedBackChose /*se ternário */ ? (
        <FeedBackTypeStep onFeedBackTypeChanged={setfeedBackChose} />
      )/*senao*/ : (
        <div className="flex flex-col items-center">
          <FeedBackContentStep 
            onFeebackSent = {() => setfeedbackSent(true)}
            feedbackType={feedBackChose}
            onFeedBackReset={handleRestartFeedback}
          /> 
        </div>
      )
      }
       </>

     )}

      <footer className="text-xs text-neutral-400">
        Feito pensando em você! Saiba mais em <a className="underline underline-offset-2" href="https://github.com/ThiagoMDantas">GitHub</a>


      </footer>
    </div>
  )

}