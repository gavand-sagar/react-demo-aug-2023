import { Button, TextField } from '@mui/material';
import React from 'react'
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';


export default function Login() {
    const { register, handleSubmit, watch, formState: { errors } } = useForm();
    const navigate = useNavigate();

    function submit(data) {
        //api call is ideal
        if (data.username == "Admin" && data.password == "123")
        {
            navigate('/orders')
        }
        else {
            alert("Invalid credentials")
        }
    }
    
    return (
        <div>
            <form onSubmit={handleSubmit(submit)}>
                <br />
                <br />
                <div>
                    <TextField error={errors?.username} helperText={errors?.username?.message} label="Username" variant="outlined" {...register('username', { required: "Username is Required" })} />

                </div>
                <br />
                <br />
                <div>
                    <TextField error={errors?.password} helperText={errors?.password?.message} label="Password" variant="outlined" {...register('password', { required: "Password is Required" })} />

                </div>
                <br />
                <br />
                <div>
                    <Button type='submit' varient="contained">LOGIN</Button>
                </div>
            </form>
        </div>
    )
}
