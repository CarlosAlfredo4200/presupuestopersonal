 
import { useForm } from "../hooks/useForm";
import { useModal } from "../hooks/useModal";
 

import { UserContext } from "./UserContext";


export const UserProvider = ({ children }) => {
  
  const {presupuesto,
    setPresupuesto,
    mensaje,
    setMensaje,
    handleSubmit,
    handlepresupuesto,
    isValidPresupuesto, 
    setIsValidPresupuesto,
    
    
  } = useForm();
  
  const {modal, setModal} = useModal();
    

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
        setIsValidPresupuesto,
        modal,
        setModal
        
        
        
      }}
    >
      {children}
    </UserContext.Provider>
  );
};
