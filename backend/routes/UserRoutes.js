import React from 'react'
import express from 'express'
import RegisterUser from '../controlers/userController.js'

const userRouter =express.Router()

userRouter.post('/register',RegisterUser)
userRouter.post('/login')

export default userRouter
