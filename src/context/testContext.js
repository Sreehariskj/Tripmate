import { createContext, useContext, useState } from "react";

export const TestContext = createContext()
export const useTest = () => {
    const context = useContext(TestContext)
    return context
}

export const TestProvider = ({children}) => {
    const [test,setTest] = useState('')
    const value = {
        test,
        setTest
    }
return(
    <TestContext.Provider value={value}>
        {children}
    </TestContext.Provider>
)
}