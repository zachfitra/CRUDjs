import User from "../model/Usermodel.js";

export const getUsers = async(req, res) =>{
    try {
        const respone =  await User.findAll();
        res.status(200).json(respone);
    } catch (error){
        console.log(error.message);
    }
}


export const getUserById = async(req, res) =>{
    try {
        const respone =  await User.findOne({
            where : {
                id : req.params.id
            }
    });
        res.status(200).json(respone);
    } catch (error){
        console.log(error.message);
    }
}
