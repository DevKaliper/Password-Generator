import { useState } from "react";

const VentanaPrincipal = () => {
    const [numero, setNumero] = useState(0);
  return (
    <div className=" p-7 h-[450px] w-[550px] rounded-xl bg-green-400">
      <input
        type="text"
        placeholder="Contraseña"
        className="border-2 border-green-600 rounded-lg w-full p-2 font-extrabold text-xl text-center outline-none mb-2"
      />
      <div className="flex justify-center items-center ">
        <span className="flex-grow text-center">signo de seguridad de la contraseña</span>
        <button className="rounded bg-green-600 px-4 py-2 font-bold text-white hover:bg-gray-700">
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
                console.log(numero)
            }}
            defaultValue={1}
            
            id="numero"
            className="border-2 border-green-600 rounded-lg h-[40px] w-[65px] p-2 font-mono text-xl text-center outline-none mb-2"
          />
          <span className="font-mono text-xl">Numero de caracteres</span>
       
      </div>

      <div>
        <label htmlFor="similares">
            <input
            type="checkbox"
            name="similares"
            id="similares"
            className="border-green-600 border-2"
          />
          Evitar caracteres similares
        </label>
        
          
          
      </div>

      <div>
        <label htmlFor="hexadecimal">
          <input
            type="checkbox"
            name="hexadecimal"
            id="hexadecimal"
          />
          <span>hexadecimal 0-9, A-F</span>
        </label>
      </div>

      <button>Generar</button>


      <div>
        <span>Esta herramienta fue creada por DevKaliper</span>
      </div>


    </div>
  );
};
export default VentanaPrincipal;


// TODO
// 1. Terminar de Estilizar la ventana principal
// 2. Crear la logica para generar la contraseña
// 3. Crear la logica para copiar la contraseña
// 4. Crear la logica para evitar caracteres similares
// 5. Crear la logica para generar hexadecimal

