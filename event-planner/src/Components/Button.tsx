
interface Name {
  txt:string
  icon?:string
    fn?:()=>void,
   
}

function Buttons({txt,icon,fn}:Readonly<Name>) {
  return (
    <button className="btn btn-primary" onClick={fn}>
      {txt}
      {icon && <i className={`fa-solid ${icon}`} style={{ color: "white",marginLeft:"10px" }}></i>}
    </button>
  );
}

export default Buttons