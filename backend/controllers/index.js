import User from '../models/user'

// post: http://localhost:3000/api
export async function postUsers(req,res){
    try{
        const formData = req.body;
        if(!formData) return res.status(404).json({error:"Form data not provided"})
        User.create(formData).then((data)=>{
            return res.status(200).json({data})
        })
    }catch(error){
        return res.status(404).json({error:"Error while posting data"})
    }
}

// get: http://localhost:3000/api
export async function findUser(req,res){
    try{
        const accountId = req.query
        await User.findOne(accountId).then((data)=>{
            return res.status(200).json({data})
        })
        if(!accountId) return res.status(404).json({error:"User not found"})        
        
    }catch(error){
        return res.status(404).json({error:"Error while fetching data"})
    }
}



// User.create(formData, function(err,data){
    // return res.status(404).json({data})
// })