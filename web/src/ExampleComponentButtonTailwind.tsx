interface ButtonProps {
  text?: string;
}

function Button (props: ButtonProps){
  return (
    <button className="bg-[#8257e6] px-4 h-10 rounded text-violet-100 hover:bg-violet-700 transition-colors">{props.text ?? 'Default'}</button>
  )
}

function ExampleComponentButtonTailwind() {
  return (
    <div className="flex gap-2">
      <Button text="Enviar" />
      <Button text="OK" />
      <Button text="OK" />
    </div>
  )
}

export default ExampleComponentButtonTailwind
