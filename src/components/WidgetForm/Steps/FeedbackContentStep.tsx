import { ArrowLeft, Camera } from "phosphor-react";
import { FormEvent, useState } from "react";
import { FeedbackTypes, feedbackTypes } from "..";
import { CloseButton } from "../../CloseButton";
import { ScreenShotButton } from "../ScreenShotButton";

interface FeedBackContentStepProps {
  feedbackType: FeedbackTypes;
  onFeedBackReset: () => void;
  onFeebackSent: () => void;
}

export function FeedBackContentStep(props: FeedBackContentStepProps) {

  const feedbackInfo = feedbackTypes[props.feedbackType];

  //estado do componente de screenshot
  const [screenshot, setScreenshot] = useState<string | null>(null);
  //estado do comentario
  const [commets, setCommets] = useState('');

  function handleSubmitFeedback(event: FormEvent) {
    
    //Linha para verificar o envio do formulário e impedir que a pagina recarregue
    event.preventDefault();
    console.log({
      screenshot, 
      commets});

    props.onFeebackSent();

  }

  return (
    <> {/*Fragment - Tag vazia para que o CSS não seja impactado e tenha a junção de componentes*/}
      <header>

        <button
          type="button"
          className="top-5 left-5 absolute text-zinc-400 hover:text-zinc-100"
          onClick={props.onFeedBackReset}>
          <ArrowLeft weight="bold" className="w-4 h-4" />
        </button>


        <span className="text-xl leading-6 flex items-center gap-2">
          <img src={feedbackInfo.image.source} alt={feedbackInfo.image.alt} className="w-6 h-6" />
          {feedbackInfo.title}
        </span>


        <CloseButton />
      </header>

      <form onSubmit={handleSubmitFeedback}
        className="my-4 w-full">
        <textarea
          className="min-w-[304px] w-full min-h-[112px] text-sm placeholder-zinc-400 text-zinc-100 border-zinc-600 bg-transparent rounded-md focus:border-x-brand-500 focus:ring-brand-500 focus:ring-1 focus:outline-none resize-none scrollbar-thumb-zinc-700 scrollbar-track-transparent scrollbar-thin"
          placeholder="Conte com detalhes o que está acontecendo..."
          onChange={event => setCommets(event.target.value)}
        />
        <footer className="flex gap-2 mt-2">

          <ScreenShotButton
            screenshot={screenshot}
            onScreenshotTook={setScreenshot}
          />

          <button
            type="submit"
            disabled={commets.length == 0}
            className="p-2 bg-brand-500 rounded-md border-transparent flex-1 flex justify-center items-center text-sm hover:bg-brand-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-zinc-900 focus:ring-brand-500 transition-colors disabled:opacity-50 disabled:hover:bg-brand-500"
          >
            Enviar Feedback
          </button>
        </footer>
      </form>



    </>);
}