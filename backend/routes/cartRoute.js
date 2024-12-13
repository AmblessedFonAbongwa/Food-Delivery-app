import express, { Router } from 'express'
import { addToCard, clearFromCard,getCart } from '../controllers/CartController'
import authMiddleWare from '../middleware/auth'


const CartRouter= express.Router()
CartRouter.post("add",authMiddleWare,addToCard)
CartRouter.post("remove",authMiddleWare,clearFromCard)
CartRouter.get("remove",authMiddleWare,getCart)

export default CartRouter
