import React,{useState} from 'react'
import DatePicker from 'react-datepicker'
import "react-datepicker/dist/react-datepicker.css"
import { useGlobalContext } from '../context/globalContext'
import Button from './Button'
import { plus } from '../utils/icons'


const Form = () => {
    const {addIncome, getIncome }  = useGlobalContext()
    const [inputState, setInputState] = useState({
        title: "",
        amount: "",
        category: "",
        date: "",
        description: ""
    })
    const {title ,amount,category,date,description} = inputState;

    const handleInput = name => e =>{
        setInputState({...inputState, [name]: e.target.value}) 
    }
    const handleSubmit = e =>{
        e.preventDefault();
        addIncome(inputState);
        getIncome();
        
    }
  return (
   <div className="form">
        <form  onSubmit={handleSubmit}>
            <div className="input-control">
                <input type="text" value={title} name={'title'} placeholder="salary title" onChange={handleInput('title')}/>
            </div>
            <div className="input-control">
                <input type="text" value={amount} name={'amount'} placeholder=" amount" onChange={handleInput('amount')}/>
            </div>
            <div className=" selects input-control">
                <select required  name="category" id="category" value={category} onChange={handleInput('category')}>
                    <option value="" disabled>select cateory</option>
                    <option value="salary">salary</option>
                    <option value="freelancing">freelancing</option>
                    <option value="investments">investments</option>
                    <option value="stocks">stocks</option>
                    <option value="bitcoin">bitcoin</option>
                    <option value="bank">bank</option>
                    <option value="youtube">youtube</option>
                    <option value="others">others</option>
                </select>
            </div>
            <div className="input-control">
                <DatePicker 
                    id='date' 
                    placeholderText='enter a date' 
                    selected={date}
                    dateFormat='dd/mm/yyyy' 
                    onChange={(date)=>{
                        setInputState({...inputState, date: date})
                    }}
                />
            </div>
            <div className="input-control">
                <textarea  value={description} name="description" id="description" cols="25" rows="10" onChange={handleInput('description')} placeholder='description'></textarea>
            </div>
            <div className="submit-btn">
                <Button 
                    name={'add income'}
                    icon={plus}
                    bpad={'.6rem 1.6rem'}
                    bg={'#f543f5'}
                    brad={'10px'}
                    color={'#fff'}
                />

            </div>
        </form>
   </div>
  )
}
export default Form