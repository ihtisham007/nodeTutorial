
//middleman 
//router and model



//get all books
const getBook  = async(req,res) =>{
    console.log('in get function')
    res
        .status(200)
        .json({
            msg: "server is ruunig"
        })
}

//save book
const postBook =  async(req, res) =>{

}
//update book
const updateBook = async(req, res) =>{

}

//delete book
const deleteBook = async(req,res) =>{

}

module.exports = {
    getBook,
    postBook,
    updateBook,
    deleteBook
}