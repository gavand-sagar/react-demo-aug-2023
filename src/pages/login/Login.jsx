import { Button, TextField } from '@mui/material';
import React, { useContext } from 'react'
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import MyDataContext from '../../data/my-data-context';
import { useSelector } from 'react-redux';


export default function Login() {
    const { register, handleSubmit, watch, formState: { errors } } = useForm();
    const navigate = useNavigate();
    const { setUsername } = useContext(MyDataContext);

    const { value } = useSelector(state => state.counter)

    function submit(data) {
        //api call is ideal
        if (data.username == "Admin" && data.password == "123") {
            setUsername(data.username)
            navigate('/orders/something')
        }
        else {
            alert("Invalid credentials")
        }
    }

    return (
        <div>
            Value: { value }
            <form onSubmit={handleSubmit(submit)}>
                <br />
                <br />
                <div>
                    <TextField data-testid='username-txt' error={errors?.username} helperText={errors?.username?.message} label="Username" variant="outlined" {...register('username', { required: "Username is Required" })} />

                </div>
                <br />
                <br />
                <div>
                    <TextField data-testid='password-txt' error={errors?.password} helperText={errors?.password?.message} label="Password" variant="outlined" {...register('password', { required: "Password is Required" })} />

                </div>
                <br />
                <br />
                <div>
                    <Button data-testid='login-button' type='submit' varient="contained">LOGIN</Button>
                </div>
            </form>
        </div>
    )
}
