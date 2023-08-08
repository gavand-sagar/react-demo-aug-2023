import React from 'react'
import { useForm } from 'react-hook-form';


export default function Login() {
    const { register, handleSubmit, watch, formState: { errors } } = useForm();
    function submit(data) {
        console.log(data)
    }
    return (
        <div>
            <form onSubmit={handleSubmit(submit)}>
                <div>
                    <input {...register('username', { required: "Username is Required" })} />
                </div>
                <div className='error-message'>
                    {
                        errors?.username?.message
                    }
                </div>
                <div>
                    <input {...register('password', { required: "Password is Required" })} />
                </div>
                <div className='error-message'>
                    {
                        errors?.password?.message
                    }
                </div>
                <div>
                    <button type='submit'>LOGIN</button>
                </div>
            </form>
        </div>
    )
}
