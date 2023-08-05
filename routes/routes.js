const express = require('express')
const router = express.Router()

// to import the module
const CustomerModel = require('../model/customer.model')

// insert the data 
router.post('/', (req, res) => {
    const model = new CustomerModel({
        name: req.body.name,
        age: req.body.age,
        mobile_number: req.body.mobile_number,
        email: req.body.email,
    })
    try {
        model.save();
        res.status(200).json(" Data inserted successfully")
    } catch (error) {
        res.status(400).json("Data not inserted")
    }
})

// get all the records from the customer collections
router.get('/', async (req, res) => {
    try {
        const data = await CustomerModel.find();
        res.status(200).json(data)
    } catch (error) {
        res.json("something went wrong" + error)
    }
})

// get particular data by using id
router.get('/:id', async (req, res) => {
    try {
        const data = await CustomerModel.findById(req.params.id);
        console.log(data, "data");
        res.status(200).json(data)
    } catch (error) {
        console.log();
        res.json("something went wrong" + error)
    }
})

// update customer data by id
router.put('/:id', async (req, res) => {
    const id = req.params.id
    const customerData = req.body
    try {
        await CustomerModel.findByIdAndUpdate(id, customerData, { new: true })
        res.status(200).json("data updated successfully")
    }catch(error){
        res.status(400).json("data not updated")
    }
})

// delete particular data by using id
router.delete('/:id',async (req, res) => {
    try{
        await CustomerModel.findByIdAndDelete(req.params.id)
        res.status(200).json("data deleted successfully")

    }catch(error){
        res.status(400).json("data not deleted")
    }
})

// module export
module.exports = router;