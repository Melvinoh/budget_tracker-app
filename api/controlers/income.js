import IncomeSchema from "../modules/IncomeModule.js"

export const addIncome = async (req , res) =>{

    const {title,amount,category,date,description} = req.body

    const newIncome = new IncomeSchema({
        title,
        amount,
        category,
        date,
        description
    })
    console.log(newIncome)
   
    try {
        if(!title || !amount || !category || !date || !description){
            return res.status(400).json({message: 'all field are required'})
        }
        if(amount <= 0 || !amount === 'number'){
            return res.status(400).json({message:'invalid amount input'})
        }
        await newIncome.save()
        res.status(200).json({message: 'income added'})
    } catch (error) {
        res.status(500).json({message : "income not added tyr again"})
    }

}
export const  getIncome = async (req, res) =>{
    try {
        const incomes = await IncomeSchema.find().sort({createdAt: -1})
        res.status(200).json(incomes)

    } catch (err) {
        res.status(500).json({message:'data not found'})
        console.log(err)
        
    }
}
export const deleteIncome = async (req ,res )=>{
    const {id} = req.params;
    console.log(id)
    try {
        await IncomeSchema.findByIdAndDelete(id);
        res.status(200).json({Message: "income has been deleted."});
    } catch (err) {
        console.log(err);
        res.status(500).json({message: "Server error."});
    }
} 
