interface ButtonProps{
  text:   string;
  name?:  string; //opcional

}
function Button(props:ButtonProps){
  console.log(props.text)
  return <button className="buttostyle hover:bg-violet-700 transition-colors">{props.text}</button>

}
function App() { 
  return (

    <div className="flex gap-2">

    <Button text = 'Enviar'/>
    <Button text = 'Cancelar'/>
    </div>
    )
  }
  

export default App
