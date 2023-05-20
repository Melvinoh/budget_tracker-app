import  express  from "express";
import { addIncome , getIncome ,deleteIncome} from '../controlers/income.js'

const router = express.Router();

router.post('/add_income', addIncome)
router.get('/get_income', getIncome)
router.delete('/delete_income/:id', deleteIncome)



export default router