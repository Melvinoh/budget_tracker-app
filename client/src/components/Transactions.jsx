import React from 'react'
import { useGlobalContext } from '../context/globalContext'


const Transactions = () => {
  const { transaction } = useGlobalContext()

  const {...history} = transaction()
  return (
    <div className="transactions">
    {
      history.map((item) =>{
        const {id, title,amount,date,type} = item
        return (
          <div className="history-item key{_id}">
            <p style={
              {color: type === 'expense' ? 'red' : 'green'}
            }>
              {title}
            </p>
            <p style={{
              color: type === 'expense' ? 'red' : 'green'
            }}>
              {
                type === 'expense' ? `-${amount}` : `+${amount}`
              }
            </p>

          </div>

        )
        
      })
    }
    </div>
  )
}

export default Transactions