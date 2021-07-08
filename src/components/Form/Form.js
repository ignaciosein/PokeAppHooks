import React from "react";
import { useForm } from "react-hook-form";

export default function App() {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => console.log(data);

  console.log(watch("example")); // watch input value by passing the name of it

  return (
    /* "handleSubmit" will validate your inputs before invoking "onSubmit" */
    <form onSubmit={handleSubmit(onSubmit)}>
      {/* register your input into the hook by invoking the "register" function */}
      <label>Id</label>
      <br></br>
      <input type="number" {...register("id", { required: true })} />
      <br></br>
      <label>Nombre</label>
      <br></br>
      <input type="text" {...register("nombre", { required: true , minLength: 3 })} />
      <br></br>
      <label>Imagen</label>
      <br></br>
      <input type="text" {...register("example", { required: true })} />
      <br></br>

      <select type="text" {...register("typeOne" , { required: true } )}>

        <option value="Normal">Normal</option>
        <option value="Fuego">Fuego</option>
        <option value="Agua">Agua</option>
        <option value="Hielo">Hielo</option>
      </select>

      <select type="text" {...register("typeTwo")}>
      <option value="Roca">Roca</option>
      <option value="Eléctrico">Eléctrico</option>
      <option value="Lucha">Lucha</option>
      <option value="Veneno">Veneno</option>
      <option value="Volador">Volador</option>
      <option value="Psíquico">Psíquico</option>
      <option value="Bicho">Bicho</option>
      <option value="Fantasma">Fantasma</option>
      <option value="Dragón">Dragón</option>
      <option value="Siniestro">Siniestro</option>
      <option value="Acero">Acero</option>
      <option value="Hada">Hada</option>
  
        <br></br>
      </select>

      {/* include validation with required or other standard HTML validation rules */}
      {/*  <input {...register("exampleRequired", { required: true })} /> */}
      {/* errors will return when field validation fails  */}
      {/* {errors.exampleRequired && <span>This field is required</span>} */}

      <input type="submit" />
    </form>
  );
}
