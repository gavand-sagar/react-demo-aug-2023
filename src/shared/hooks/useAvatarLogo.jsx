import { useContext } from "react";
import MyDataContext from "../../data/my-data-context";

export function useAvatarLogo(){
    const { avatar } = useContext(MyDataContext)
    return avatar;
}