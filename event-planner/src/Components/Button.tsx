
interface Name {
  txt:string
  icon?:string
}

function Buttons({txt,icon}:Readonly<Name>) {
  return (
    <button className="btn btn-primary">
      {txt}
      {icon && <i className={`fa-solid ${icon}`} style={{ color: "white" }}></i>}
    </button>
  );
}

export default Buttons