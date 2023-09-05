import { useContext } from "react";
import { PersonalContext } from "../api/personalProvider";

const usePersonal = () => {
    return useContext(PersonalContext)
}

export default usePersonal;