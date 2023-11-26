import { createContext, useContext } from "react";
import { useState, useEffect } from "react";
import Loading from "../components/Loading";

const AppContext = createContext();
export const useGlobalContext =()=> useContext(AppContext)
export const AppProvider =({children})=>{
    const [loading , setLoading] = useState(true);
    const [shopItems, setShopItem] = useState([]);
    const [searchValue, setSearchValue]= useState('')

    const url = ' https://www.themealdb.com/api/json/v1/1/search.php?s='

    const Stockinshop = async ()=>{
        try{
            const response = await fetch (`${url} ${searchValue}`);
            const data = await response.json();
            console.log(data.meals);
            setLoading(false);
            if (data.meals){
                setShopItem(data.meals)
            }
            else{
                setShopItem([])
            }
        }
        catch(error){
            console.log(error);
        }
    }
    useEffect(()=>{
        setTimeout(() => {
            Stockinshop()
        }, 3000);
    }, [searchValue]);
    
    
    return <AppContext.Provider value={{loading, searchValue, setSearchValue, shopItems}}>
      {children}
    </AppContext.Provider>
}