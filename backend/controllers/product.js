const Product = require("../models/product");
const formidable = require("formidable");
const  _ = require("lodash");
const fs = require("fs")


exports.getProductById = (req,res,next,id) =>{
    Product.findById(id)
    .populate("category")
    .exec((err,product)=>{
        if(err){
            return res.status(400).json({
                error: "Product Not found"
            });
        }
        req.product = product
    });
    next();
}

exports.createProduct = (req, res) =>{
    let form = new formidable.IncomingForm();
    form.keepExtensions = true;

    form.parse(req, (err, fields, file)=>{
        if(err){
            return res.status(400).json({
                error: "problem with file"
            });
        }

        let {name,description,price,category,stock,sold,photo} = fields

        if( !name || !description || !price || !category || !stock || !sold || !photo){
            return res.status(400).json({
                error: "Incomplete fields."
            });
        }
        let product = new Product(fields)

        // handling file
        if(file.photo){
            if(file.photo.size > 2097152){
                return res.status(400).json({
                    error: "file size too big"
                })
            }
            product.photo.data = fs.readFileSync(file.photo.path)
            product.photo.contentType = file.photo.type  
        } 

        // save to the db
        product.save((err,product)=>{
            if(err){
                return res.status(400).json({
                    error:"Saving product filed"
                })
            }

            return res.json(product)
        })
    })
}
 

// product List

exports.getAllProducts = (req, res) => {

    let limit = req.query.limit ? parseInt(req.query.limit) : 8
    let sortBy = req.query.sortBy ? req.query.sortBy : "_id"

    Product.find()
    .select("-photo")
    .populate("category")
    .sort([[sortBy, "asc"]])
    .limit(limit)
    .exec((err, Products) =>{
        if(err){
            return  res.status(400).json({
                error: "No product found"
            })
        }

        res.json(Products)
    })
}
 