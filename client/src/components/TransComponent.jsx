import React from 'react'
import { useGlobalContext } from '../context/globalContext'

const TransComponent = () => {

  const {transaction} = useGlobalContext()

  const [...history] = transaction()

  return (
    <div className="trans_con">
      <h3>recent history</h3>
      {history.map((item) =>{
        const {_id,title,amount,type} = item
        return(
          <div className="history-item "key={_id}>
            <p style={
              {color: type === 'income' ? "green" : "red"}
              }> 
               {title} 
            </p>
            <p style={
              {color: type === 'income' ? "green" : "red"}
              }> 
              {
                type == 'income' ? `+${amount}` : `-${amount}`
              } 
            </p>


          </div>
        )

      })}

    </div>
  )
}

export default TransComponent