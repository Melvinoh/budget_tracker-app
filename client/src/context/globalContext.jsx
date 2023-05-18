import React, {useState,useContext} from "react"
import axios from 'axios'

const BASE_URL = "http://localhost:8800/api"

const GlobalContext = React.createContext()

export const GlobalProvider = ({children}) =>{

    const [Incomes, setIncomes] = useState([])
    const [Expenses, setExpenses] = useState([])
    const [error, seterror] = useState(null)

    const addIncome = async (income) => {
        const response = await axios.post(`${BASE_URL}/add_income`, income)
            .catch((err) =>{
                seterror(err.response.data.message)
            })
        getIncome()
    }
    const getIncome = async () =>{
        const response = await axios.get(`${BASE_URL}/get_income`)
        setIncomes(response.data)
        // console.log(Incomes)
    }

   const deleteIncome = async (id) =>{
        const response = await axios.delete(`${BASE_URL}/delete_income/${id}`)
        console.log('item deleted')
        getIncome()
    }

    const totalIncome = () =>{
        let totalIncome =0;

        Incomes.forEach((income) =>{
            totalIncome = totalIncome + income.amount
        })
        return totalIncome;
    }
    console.log('total', totalIncome());

    // expenses context

    const addExpenses = async (expense) => {
        const response = await axios.post(`${BASE_URL}/add_expence`, expense)
            .catch((err) =>{
                seterror(err.response.data.message)
            })
        getExpenses()
    }
    const getExpenses = async () =>{
        const response = await axios.get(`${BASE_URL}/get_expence`)
        setExpenses(response.data)
        // console.log(Incomes)
    }

    const deleteExpenses = async (id) =>{
        const response = await axios.delete(`${BASE_URL}/delete_expence/${id}`)
        console.log('item deleted')
        getExpenses()
        totalExpenses()
    }

    const totalExpenses = () =>{
        let totalExpense = 0;

        Expenses.forEach((expense) =>{
            totalExpense = totalExpense + expense.amount
        })
        return totalExpense;
    }
    console.log('total', totalExpenses());

    const totalBalance = () =>{
        return totalIncome() -totalExpenses()
    }
    const transaction = () => {
        const history = [...Incomes, ...Expenses]
        history.sort((a,b)=>{
            return new Date(b.createdAt) - new Date(a.createdAt)
        })
        return history
    }
   
  

    return (
        <GlobalContext.Provider value={{addIncome, getIncome, Incomes, deleteIncome,totalIncome, addExpenses, getExpenses,deleteExpenses,totalExpenses, Expenses, error,totalBalance, transaction}}>
            {children}
        </GlobalContext.Provider>
    )
}

export const useGlobalContext = () =>{
    return useContext(GlobalContext)
}