import ExpenceSchema from "../modules/ExpenceModule.js"

export const addExpence = async (req , res) =>{

    const {title,amount,category,date,description} = req.body

    const newExpence = new ExpenceSchema({
        title,
        amount,
        category,
        date,
        description
    })
    console.log(newExpence)
   
    try {
        if(!title || !amount || !category || !date || !description){
            return res.status(400).json('all field are required')
        }
        if(amount <= 0 || !amount === 'number'){
            return res.status(400).json('invalid amount input')
        }
        await newExpence.save()
        res.status(200).json('expence added')
    } catch (err) {
        res.status(500).json(err)
    }
}
export const  getExpence = async (req , res) =>{
    try {
        const expences = await ExpenceSchema.find().sort({createdAt: -1})
        res.status(200).json(expences)
    } catch (err) {
        res.status(500).json(err)
        
    }

}
export const deleteExpence = async (req ,res )=>{
    const {id} = req.params;
    console.log(id)
    try {
        await ExpenceSchema.findByIdAndDelete(id);
        res.status(200).json("Expense has been deleted.");
    } catch (err) {
        console.log(err);
        res.status(500).json("Server error.");
    }
} 
