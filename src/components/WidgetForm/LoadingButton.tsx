import { SpinnerGap } from "phosphor-react";

export function LoadingButton(){
  return(
    <div className="w-6 h-6 flex items-center justify-center overflow-hidden">
    <SpinnerGap weight="bold" className="w-4 h-4 animate-spin"/>
    </div>
  );
}