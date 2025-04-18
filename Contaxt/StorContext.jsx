import { createContext } from "react";
import { food_list } from "../assets/AssetsFile";

export const StorContext =createContext(null)

const StorContextProvider =(props) =>{



    const Contextvalue ={
        food_list
    }

    return(
        <StorContext.Provider value={Contextvalue}>
                 {props.children}
        </StorContext.Provider>

       
    )
}

export default StorContextProvider