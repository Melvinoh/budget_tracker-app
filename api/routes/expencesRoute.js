import  express from "express";
import {addExpence,getExpence,deleteExpence} from '../controlers/expences.js'

const router = express.Router()

router.post('/add_expence', addExpence);
router.get('/get_expence',getExpence);
router.delete('/delete_expence/:id',deleteExpence);
        
        

export default router
