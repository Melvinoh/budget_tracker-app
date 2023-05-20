import express from "express";
import {transaction} from '../controlers/transaction.js'

const router = express.Router()

router.post('/transactions' , transaction );

export default router;
