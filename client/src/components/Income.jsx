import React, { useEffect } from 'react'
import { useGlobalContext  } from '../context/globalContext'
import Form from './Form'
import Listcard from './Listcard'

const Income = () => {
  const {addIncome, Incomes, getIncome, deleteIncome,totalIncome} = useGlobalContext()

  useEffect(() => {
    getIncome();
    totalIncome();
  }, []);

  return ( 
    <div className="incomes">
      <div className="inner-layout">
        <h3>incomes</h3>
        <h2 className='total-income'>Total income: <span>${totalIncome()}</span></h2>
        <div className="income-content">
            <div className="form-container">
              <Form/>
            </div>
            <div className="incomes">
              {
                Incomes.map((Incomes) => {
                  const {_id, title, amount, date, category, description,type} = Incomes
                  return <Listcard
                    key={_id}
                    id={_id}
                    title={title}
                    amount={amount}
                    category={category}
                    description={description}
                    date={date}
                    type={type}
                    deleteItem={deleteIncome}
                  />
                })
              }

            </div>
        </div>
      </div>
    </div>
  )
}

export default Income