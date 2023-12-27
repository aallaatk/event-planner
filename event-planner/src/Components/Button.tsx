
interface Name {
  txt:string
}

function Buttons({txt}:Readonly<Name>) {
  return (
    
    <button type="button" className="btn btn-primary">{txt}</button>
    
  )
}

export default Buttons