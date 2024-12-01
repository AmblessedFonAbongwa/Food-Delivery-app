import React from 'react'
import express from 'express'
import {LoginUser, RegisterUser} from '../controlers/userController'

const userRouter =express.Router()

userRouter.post('/register',RegisterUser)
userRouter.post('/login',LoginUser)

export default userRouter
