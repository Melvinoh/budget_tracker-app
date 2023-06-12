import React, { useEffect } from 'react'
import { useGlobalContext  } from '../context/globalContext'
import Eform from './EForm'
import Listcard from './Listcard'

const Expenses = () => {
  const {addExpenses, Expenses, getExpenses, deleteExpenses,totalExpenses} = useGlobalContext()

  useEffect(() => {
    getExpenses();
    totalExpenses()
  }, []);

  return ( 
    <div className="incomes">
      <div className="inner-layout">
        <h3>Expenses</h3>
        <h2 className='total-expenses'>Total Expense: <span>${totalExpenses()}</span></h2>
        <div className="income-content">
            <div className="form-container">
              <Eform/>
            </div>
            <div className="incomes">
              {
                Expenses.map((Expenses) => {
                  const {_id, title, amount, date, category, description,type} = Expenses
                  return <Listcard
                    key={_id}
                    id={_id}
                    title={title}
                    amount={amount}
                    category={category}
                    description={description}
                    date={date}
                    type={type}
                    deleteItem={deleteExpenses}
                  />
                })
              }

            </div>
        </div>
      </div>
    </div>
  )
}

export default Expenses