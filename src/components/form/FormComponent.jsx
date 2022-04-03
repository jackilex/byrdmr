import React from 'react';
import { useForm } from "react-hook-form";
import { ReactComponent as Arrow } from '../../Assets/Images/arrow.svg';
import './form.css';

export default function FormComponent() {
  const { register, handleSubmit, watch, formState: { errors }, reset } = useForm();
   const onSubmit = (data,errors )=> {
     console.log( data && data )
     if(data?.name && data?.email && data?.message){
       alert( "success" )
       reset()
     }
     
   };

  console.log(watch("name"));
  return (
    <section
  
      className="form--contact_container fh-vwp">
      <form className="form--contact" onSubmit={handleSubmit(onSubmit)}>
        <label htmlFor="name">FULL NAME</label>
        <input type="text" name="name" {...register( "name", { required: true } )} />
        {errors.name && errors.name.type === "required" && <span className='error'>This is required</span>}
        <label htmlFor="email" >EMAIL</label>
        <input type="email" {...register("email", { required: true })} name="email" />
        {errors.email && errors.email.type === "required" && <span className='error'>This is required</span>}
        <label htmlFor="message">MESSAGE</label>
        <textarea className="text--area" type="text" {...register( "message", { required: true } )} />
        {errors.message && errors.message.type === "required" && <span className='error'>This is required</span>}
         <button type='submit' className="form--contact_btn">
        <Arrow />
      </button>
      </form>
    </section>
  );
}
