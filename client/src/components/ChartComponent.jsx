import React from 'react'

import {Chart as ChartJs,
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend,
    ArcElement,
} from 'chart.js/auto'

import {Line} from 'react-chartjs-2'
import { dateFormat } from '../utils/dateFormat'
import { useGlobalContext } from '../context/globalContext'

 ChartJs.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend,
    ArcElement,

)



const ChartComponent = () => {
    const {Incomes,Expenses} = useGlobalContext()
    const data ={
        labels:Incomes.map((inc) =>{
            const {date} = inc
            return dateFormat(date)
        }),
        datasets: [
            {
                lable: 'income',
                data: [
                    ...Expenses.map((income) =>{
                        const {amount} = income
                        return amount
                    })
                ],
                backgroundColor: 'green'
            },
            {
                lable: 'Expenses',
                data: [
                    ...Expenses.map((expense) =>{
                        const {amount} = expense
                        return amount
                    })
                ],
                backgroundColor: 'red'
            },
        ]

    }
  return (
   <div className="chartstyles">
        <Line data={data} />
   </div>
  )
}

export default ChartComponent