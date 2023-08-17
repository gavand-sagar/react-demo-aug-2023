import React, { useState } from 'react'
import MyDataContext from './my-data-context';

export default function GlobalHoc({ children }) {

    let [username, setUsername] = useState("");
    let [avatar, setAvatar] = useState("");
    let [email, setEmail] = useState("");
    let [myOrderCout, setMyOrderCount] = useState(0);

    return (
        <MyDataContext.Provider
            value={{
                username,
                setUsername,
                avatar,
                email,
                myOrderCout
            }}>
            {children}
        </MyDataContext.Provider>
    )
}
