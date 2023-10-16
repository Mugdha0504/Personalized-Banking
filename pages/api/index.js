import connectMongoose from "../../backend/context/conn";
import {getUsers, postUsers, findUser} from "../../backend/controllers"

export default function handler(req ,res){
    connectMongoose().catch(()=> res.status(405).json({error: "Error in connection"}))

    const {method} = req

    switch(method){
        case 'GET':
            findUser(req,res) 
            break;
        case 'POST':
            postUsers(req,res)
            break;
        default:
            res.setHeader('Allow',['GET','POST']);
            res.status(405).end('Method ${method} not allowed')
    }

    
}