import { useState } from "react";
import Swal from "sweetalert2";

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
        setPass(geneneratePass(numero,character,alfaNum))
       }

       const copyToClipboard = str => {
        if (navigator && navigator.clipboard && navigator.clipboard.writeText)
        
          return navigator.clipboard.writeText(str) && Swal.fire({
            position: 'center',
            icon: 'success',
            title: 'Contraseña copiada al porta papeles :)',
            showConfirmButton: false,
            timer: 1500
          });
          
        return Promise.reject("The Clipboard API is not available.");
      };

  return (
    <div className=" p-7 h-[450px] w-[550px] rounded-xl bg-green-400">
      <input
        type="text"
        placeholder="Contraseña"
        className="border-2 border-green-600 rounded-lg w-full p-2 font-extrabold text-xl text-center outline-none mb-2"
        value={pass && pass}
      />
      <div className="flex justify-center items-center ">
        <span className="flex-grow text-center">signo de seguridad de la contraseña</span>
        <button onClick={() =>
        copyToClipboard(pass)} className="rounded bg-green-600 px-4 py-2 font-bold text-white hover:bg-gray-700">
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
            className="h-6 w-6 "
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
            className="h-6 w-6 "
            checked={alfaNum}

          />
          <span>hexadecimal 0-9, A-F</span>
        </label>
      </div>
<div className="flex justify-center items-center text-center">

      <button onClick={handleClick} className="border-2 py-2 px-3 my-4 rounded-xl text-xl font-bold" >Generar</button>
</div>


      <div className="text-center font-thin">
        <i>Esta herramienta fue creada por DevKaliper</i>
      </div>


    </div>
  );
};
export default VentanaPrincipal;


// TODO
// 1. Terminar de Estilizar la ventana principal (done)
// 2. Crear la logica para generar la contraseña
// 3. Crear la logica para copiar la contraseña
// 4. Crear la logica para evitar caracteres similares
// 5. Crear la logica para generar hexadecimal

