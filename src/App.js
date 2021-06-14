import React from "react";
import { useForm } from "react-hook-form";
import "./App.css";
import { DevTool } from "@hookform/devtools";

function App() {

  const {
    register,
    control,
    formState: { errors },
    handleSubmit,
  } = useForm({
    defaultValues: {
      nombre: "Yasniel",
      apellidos: "Fajardo Egues",
      nivel: 5,
      edad: 26,
    },
  });

  const onSubmit = (data) => console.log(data);

  return (
    <>
      <form onSubmit={handleSubmit(onSubmit)} encType="multipart/form-data">
        <Select label="Nivel" {...register("nivel")} />

        <input type="file" {...register("avatar", { required: true })}  accept="image/png, image/jpeg"/>
        {errors.avatar?.type === "required" && "El avatar es requerido"}

        <input {...register("nombre", { required: true, maxLength: 20 })} />
        {errors.nombre?.type === "required" && "Nombre es requerido"}
        {errors.nombre?.type === "maxLength" && "No puede tener mas de 20 caracteres"}


        <input {...register("apellidos", { required: true })} />
        {errors.apellidos?.type === "required" && "Apellidos es requerido"}

        <input type="number" {...register("edad", { min: 18, max: 99 })} />
        {errors.edad?.type === "min" && "La edad mínima es de 18 años"}
        {errors.edad?.type === "min" && "La edad máxima es de 99 años"}

        <input type="submit" />
      </form>
      <DevTool control={control} />
    </>
  );
}

export default App;

const Select = React.forwardRef(({ onChange, onBlur, name, label }, ref) => (
  <>
    <label>{label}</label>
    <select name={name} ref={ref} onChange={onChange} onBlur={onBlur}>
      <option value="1">Nivel 1</option>
      <option value="2">Nivel 2</option>
      <option value="3">Nivel 3</option>
      <option value="4">Nivel 4</option>
      <option value="5">Nivel 5</option>
    </select>
  </>
));
