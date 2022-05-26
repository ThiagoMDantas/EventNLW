import { FeedbackTypes, feedbackTypes } from "..";
import { CloseButton } from "../../CloseButton";

interface FeedBackTypeStepProps { //definindo as propriedades que recebo do pai  
  onFeedBackTypeChanged: (type: FeedbackTypes) => void;

}


export function FeedBackTypeStep(props: FeedBackTypeStepProps) { // propriedades não desestruturadas
  return (
    <> {/*Fragment - Tag vazia para que o CSS não seja impactado e tenha a junção de componentes*/}
      <header>
        <span className="text-xl leading-6">Deixe seu Feedback!</span>
        <CloseButton />
      </header>

      <div className="flex py-8 gap-2 w-full">
        {Object.entries(feedbackTypes).map(([key, value]) => {
          //console.log(key,value);
          return (
            <button
              key={key}
              className="bg-zinc-800 rounded-lg py-5 w-24 flex flex-1 flex-col items-center gap-2 border-2 border-transparent hover:border-brand-500 focus:border-brand-500 focus:outline-none"
              onClick={() => props.onFeedBackTypeChanged(key as FeedbackTypes)}
              type="button"

            >
              <img src={value.image.source} alt={value.image.alt} />
              <span>{value.title}</span>
            </button>
          )
        })
        }

      </div>
    </>);
}