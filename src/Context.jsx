import React, { useContext,  useReducer } from "react";
import reducer from "./Reducer";
// import {users} from "./DummyData"

const AppContext = React.createContext();
const initialState = {
    name:"",
    image:"",
    // services:[]
}

const AppProvider = ({children})=>{
    const [state,dispatch] = useReducer(reducer,initialState)

    const updateHomePage = ()=>{
        return dispatch({
            type: "HOME_UPDATE",
            payload:{
                name:"HARISH KAMUNI",
                image:"https://images.mybrandnewlogo.com/hero/d33c5bb69ca91cabfe8a870d62e52c297931be390-480x360-center.jpg"
            }
        })
    }
    const updateAboutPage = ()=>{
        return dispatch({
            type: "ABOUT_UPDATE",
            payload:{
                name:"Web Devloper",
                image:"https://media.istockphoto.com/id/1352603244/photo/shot-of-an-unrecognizable-businessman-working-on-his-laptop-in-the-office.jpg?s=612x612&w=0&k=20&c=upiDYeAZEsxbUBdhX35MXm79drIXA-5Q-FcfmZk71lM="
            }
        })        
    }
    // const getServices = (users)=>{
        
            
    //         dispatch({
    //             type:"GET_SERVICES",
    //             payload:users,
    //         })
    // } 
    // useEffect(()=>{
    //     getServices(users)
    //     // console.log(users)
    // },[])
    
    return <AppContext.Provider value={{...state,updateAboutPage,updateHomePage}}>{children}</AppContext.Provider>
}

const useCustomContext = ()=>{
    
    return useContext(AppContext);
}

export {AppContext,AppProvider,useCustomContext}