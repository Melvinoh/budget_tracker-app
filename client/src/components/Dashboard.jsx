import React, { useEffect } from 'react'
import { useGlobalContext } from '../context/globalContext.jsx'
import { dollar } from '../utils/icons.jsx'
import ChartComponent from './ChartComponent.jsx'
import Transactions from './transactions.jsx'

const Dashboard = () => {
  const {totalExpenses, totalIncome, totalBalance, getExpenses,getIncome} = useGlobalContext()

  useEffect(() => {
    getExpenses()
    getIncome()
  }, [])
  
  return (
    <div className="dasboard">
      <div className="inner-layout">
          <h5>All transactions</h5>
          <div className="statscon">
            <div className="chart-container">
              <ChartComponent/>
              <div className="amount-con">
                <div className="income">
                  <h3>total income</h3>
                  <p>
                    {dollar} {totalIncome()}
                  </p>
                </div>
                <div className="expense">
                  <h3>total Expense</h3>
                  <p>
                    {dollar} {totalExpenses()}
                  </p>
                </div>
                <div className="expense">
                  <h3>total Balance</h3>
                  <p>
                    {dollar} {totalBalance()}
                  </p>
                </div>

              </div>
            </div>
            <div className="history con">
                <Transactions/>
            </div>
          </div>

      </div>
    </div>
    
  )
}
export default Dashboard