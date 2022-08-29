 
import { useForm } from "../hooks/useForm";
import { useIsValid } from "../hooks/useIsValid";
import { UserContext } from "./UserContext";

export const UserProvider = ({ children }) => {

    const {presupuesto,
        setPresupuesto,
        mensaje,
        setMensaje,
        handleSubmit,
        handlepresupuesto,} = useForm();

    const { isValidPresupuesto, setIsValidPresupuesto} = useIsValid();

  return (
    <UserContext.Provider
      value={{
        presupuesto,
        setPresupuesto,
        mensaje,
        setMensaje,
        handleSubmit,
        handlepresupuesto,
        isValidPresupuesto, 
        setIsValidPresupuesto
      }}
    >
      {children}
    </UserContext.Provider>
  );
};
