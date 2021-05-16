const {User} = require('../models')

module.exports = {
    async register (req,res){

        try {
            const user = await User.create(req.body)

            res.send(user.toJSON())
            
        } catch (error) {
            res.status(400).send({
                error:'This Email already in use'
            })
        }
 
       
    },
    async login (req,res){

        try {

            const {email,password} = req.body;
            const user = await User.findOne({
                where:{
                    email:email
                }
            })

            if(!user){
               return res.status(403).send({
                    error:'The Login İnformation was incorrect'
                })
            }

            const isPasswordValid = password==user.password

            if(!isPasswordValid){
                return res.status(403).send({
                    error:'The Login İnformation was incorrect'
                })
            }

            res.send(user.toJSON())
            
        } catch (error) {
            res.status(500).send({
                error:'İnvalid Login İnformaiton'
            })
        }
 
       
    }
}