import { Schema,models,model } from "mongoose";

const userSchema =new Schema({
    accountId: String,
    address: String,
    age: {
        type: Number
    }, 
    annualIncome: Number,
    balance:Number,
    children: Number,
    city: String,
    code: String,
    country: String,
    creditscore: Number,
    email: String,
    estimatedsalary: Number,
    family_status: String,
    firstName: String,
    housing_type: String,
    income_type: String,
    lastName: String,
    numOFProducts: Number,
    phone:Boolean,
    phoneNumber: String,
    tenure: Number,
    userName: String,
    yearsOfEmployment: Number
})

const User = models.user||model('user',userSchema)
export default User;