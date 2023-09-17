const Book = require('../Model/Book')

exports.getBook = async (req,res)=>{
    try {
        const data = await Book.find();
        return res.json({errors:false, data:data})
    } catch (error) {
        return res.status(400).json({errors:true,message:error.message})
    }
}

//post
exports.postBook = async (req,res)=>{
    try {
        const data = await Book.create(req.body);
        return res.json({errors:false, data:data})
    } catch (error) {
        return res.status(400).json({errors:true,message:error.message})
    }
}