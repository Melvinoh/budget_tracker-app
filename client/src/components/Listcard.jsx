import React from 'react'
import Button from './Button'
import { calendar,trash, dollar, comment, money, freelance, stocks, yt, piggy, bank, users, rent, food, hospital, waterbill, clothing,electricity,book} from '../utils/icons'
import { dateFormat } from '../utils/dateFormat'

const Listcard = (
  {id,
  title,
  amount,
  date,
  category,
  description,
  deleteItem,
  type
}

) => {

const categoryIcon = () =>{
  switch (category) {
    case 'salary':
      return money;
    case 'freelancing':
      return freelance;
    case 'investments':
      return stocks;
    case 'stocks':
      return users;
    case 'bitcoin':
      return bank;
    case 'youtube':
      return yt;
    case 'others':
      return piggy;
    default:
      return '';
  }
}
const expencescatIcon = () =>{
  switch (category) {
    case 'health':
      return hospital;
    case 'education':
      return book;
    case 'food':
      return food;
    case 'shelter':
      return rent;
    case 'water bill':
      return  waterbill;
    case 'electricity bill':
      return electricity;
    case 'clothing':
      return clothing;
    default:
      return '';
  }
}
  return (
  <div className="li-items" >
      <div className="icon">
        {type === 'expences' ? expencescatIcon() : categoryIcon()}

      </div>
      <div className="content" >
        <h5>{title}</h5>
        <div className="inner-content">
          <div className="text">
            <p>{dollar} {amount}</p>
            <p>{calendar} {dateFormat(date)}</p>
            <p>
              {comment}
              {description}
            </p>
          </div>
        </div>
      </div>
      <div className="btn-con">
           <Button
              icon={trash}
              bpad={'0.5rem'}
              brad={'10px'}
              bg={'#0b0b5beb'}
              color={'white'}
              onClick={() => deleteItem(id)}
           />
        </div>
  </div>
  )
}

export default Listcard