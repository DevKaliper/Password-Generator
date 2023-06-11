import { useState } from "react";
import Swal from "sweetalert2";
import { FcApproval,FcCancel,FcCheckmark, FcLock } from "react-icons/fc";

const VentanaPrincipal = () => {
  const [pass, setPass] = useState("")
    const [numero, setNumero] = useState(0);
    

    const [character, setCharacter] = useState(false)
    const [alfaNum, setAlfaNum,] = useState(false)

    const handleCheckedCharacter = (e) => { 
      setCharacter(e.target.checked)


     }

     const handleCheckedAlfa = (e) => { 
      setAlfaNum(e.target.checked)
      }




      const geneneratePass= (value,checkedRepeat,checkedAlfa)=>{
        if (!checkedAlfa && !checkedRepeat){
          return Swal.fire({
            position: 'center',
            icon: 'error',
            title: 'Oops..',
            text: 'Debes selecionar almenos una casilla',
            showConfirmButton: false,
            timer: 1500
          }) && setPass("")
        }

        if (numero < 1){
          return Swal.fire({
            position: 'center',
            icon: 'error',
            title: 'Oops..',
            text: 'Debes seleccionar al menos 2 caracteres',
            showConfirmButton: false,
            timer: 1500
          }) && setPass("")
        }

        if (checkedAlfa){
          const banco = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789@!#$&/)(=?¿"
          let password = ""

          if(checkedRepeat){
            for (let i =0; i < value; i++){
              let aleatorio = banco.charAt(Math.floor(Math.random() * banco.length))
              if (password.includes(aleatorio)){
                i--
                continue
              }else{
                password+=aleatorio
              }
              
              
            }
            return password

          }else{
            for(let i =0; i < value; i++){
              let aleatorio = banco.charAt(Math.floor(Math.random() * banco.length))
              password+=aleatorio

            }
            return password

          }

          

          

        }
        if (!checkedAlfa){
          const banco = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz!#$&/)(=?¿"
          let password = ""

          if(checkedRepeat){
            for (let i =0; i < value; i++){
              let aleatorio = banco.charAt(Math.floor(Math.random() * banco.length))
              if (password.includes(aleatorio)){
                password+= banco.charAt(Math.floor(Math.random() * banco.length)-1)
              }else{
                password+=aleatorio
              }
              
              
            }
            return password

          }
       
          

        }


      }

      const handleClick = () => { 
        let psw = geneneratePass(numero,character,alfaNum)
        if (psw){
          setPass(psw)
        }
       }

       const copyToClipboard = str => {
        if (navigator && navigator.clipboard && navigator.clipboard.writeText)
        
          return navigator.clipboard.writeText(str) && Swal.fire({
            position: 'center',
            icon: 'success',
            title: 'Listo :)',
            text: 'Contraseña copiada al tu portapapeles',
            showConfirmButton: false,
            timer: 1500
          });
          
        return Promise.reject("The Clipboard API is not available.");
      };

      

      

  return (
    <div className=" p-7 h-auto w-[550px] rounded-xl bg-green-100 shadow-2xl hover:scale-110  duration-500">
      <input
        type="text"
        placeholder="Contraseña"
        className="border-2 border-green-600 rounded-lg w-full p-2 font-extrabold text-xl text-center outline-none mb-2"
        value={pass && pass}
      />
      <div className="flex justify-center items-center  ">
        <div className="flex-grow flex gap-2 justify-center items-center text-2xl">
        <span >{
          pass.length < 4 ? <FcCancel/>  : pass.length > 3 && pass.length<8 ?  <FcApproval/> : pass.length > 7 && pass.length<=14 ? <FcCheckmark/> :  <FcLock/> 
         
        }</span>
        <span>{pass.length < 4 ? "Contraseña muy débil" : pass.length > 3 && pass.length<8 ?  "Contraseña aceptable":  pass.length > 7 && pass.length<=14 ? "Contraseña fuerte" :  "Contraseña muy segura" }</span>

        </div>
        <button onClick={() =>
        copyToClipboard(pass)} className="rounded px-4 py-2 font-bold text-white bg-gradient-to-r from-green-500 to-green-700">
          {" "}
          Copiar{" "}
        </button>
      </div>

      <div className="flex items-center gap-3 ">
        
          <input
            type="number"
            name="numero"
            placeholder="0"
            onChange={(e) => {
                setNumero(e.target.value);
                
            }}
            defaultValue={numero}
            
            id="numero"
            className="border-2 border-green-600 rounded-lg h-[40px] w-[65px] p-2 font-mono text-xl text-center outline-none mb-2"
          />
          <span className="font-mono text-xl">Numero de caracteres</span>
       
      </div>

      <div>
        <label htmlFor="similares" className="flex gap-3 items-center font-semibold text-lg">
            <input
           
            onChange={handleCheckedCharacter}
            type="checkbox"
            name="similares"
            id="similares"
            className="h-6 w-6 accent-green-700"
            checked={character}
            
            
          />
          Evitar caracteres similares
        </label>
        
          
          
      </div>

      <div>
        <label htmlFor="hexadecimal" className="flex gap-3 items-center font-semibold text-lg">
          <input
          onChange={handleCheckedAlfa}
            type="checkbox"
            name="hexadecimal"
            id="hexadecimal"
            className="h-6 w-6 accent-green-700"
            checked={alfaNum}

          />
          <span>hexadecimal 0-9, A-F</span>
        </label>
      </div>
<div className="flex justify-center items-center text-center">

      <button onClick={handleClick} className="py-2 px-3 my-4 rounded-xl text-xl font-bold bg-gradient-to-r from-green-500 to-green-700 text-white leading-8 hover:-translate-y-2 duration-500" >Generar</button>
</div>


      <div className="text-center font-thin text-green-700">
        <i>Esta herramienta fue creada por DevKaliper</i>
      </div>


    </div>
  );
};
export default VentanaPrincipal;



