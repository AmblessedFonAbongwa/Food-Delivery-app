import express ,{Router} from 'express'
import { addToCard, clearFromCard,getCart } from '../controllers/CartController.js'
import authMiddleWare from '../middleware/auth.js'


const CartRouter= express.Router();
CartRouter.post("/add",authMiddleWare,addToCard);
CartRouter.post("/remove",authMiddleWare,clearFromCard);
CartRouter.get("/get",authMiddleWare,getCart);

export default CartRouter
