import { Camera, Trash } from "phosphor-react";
import html2canvas from "html2canvas";
import { useState } from "react";
import { LoadingButton } from "./LoadingButton";

interface ScreenShotButtonProps {
  onScreenshotTook: (screenshot: string | null) => void;
  screenshot: string | null;
}

// props desestruturado 
export function ScreenShotButton({ screenshot, onScreenshotTook }: ScreenShotButtonProps) {

  const [isTakingScreenshot, setTakingScreenshot] = useState(false);

  async function handleTakeScreenshot() {

    setTakingScreenshot(true);

    const canvas = await html2canvas(document.querySelector('html')!);
    const imageBase64 = canvas.toDataURL('image/png');

    onScreenshotTook(imageBase64);

    setTakingScreenshot(false);

  }

  if (!screenshot) {
    return (
      <button
        type="button"
        onClick={handleTakeScreenshot}
        className="p-2 bg-zinc-800 rounded-md border-transparent hover:bg-zinc-700 transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-zinc-900 focus:ring-brand-500"
      >
        {isTakingScreenshot ? <LoadingButton /> : <Camera className="w-6 h-6" />}
      </button>
    )
  } else {
    return (
      <button
        type="button"
        className="w-10 h-10 p-1 rounded-md border-transparent flex justify-end items-end text-zinc-400 hover:text-zinc-100 transition-colors"
        onClick={() => onScreenshotTook(null)}
        style={{
          backgroundImage: `url(${screenshot})`,
          backgroundPosition: 'right bottom',
          backgroundSize: 180,
        }}
      >
        <Trash weight="fill" className="w-4 h-4"/>   

      </button>
    );

  }

}