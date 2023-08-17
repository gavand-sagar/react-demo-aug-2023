import { useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import MyDataContext from "../../data/my-data-context";

export function useRouteGaurd(){
    const { username } = useContext(MyDataContext)
    const navigate = useNavigate();
    useEffect(() => {
        // on page load
        if (!(username != null && username != '')) {
            // not logged in
            // redirect to login
            navigate('/login')
        }

    }, [])

    return username
}