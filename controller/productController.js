const express = require('express');
const ProductModel = require('../models/productModel');

//  exports.getAllProducts=async(req,res)=>{
//     try {
//         const products=await ProductModel.find({});
//         res.json(products);
//     } catch (error) {
//         res.status(500).json({error:error.message});
//     }
//  }



exports.getAllProducts=async(req,res)=>{

    const page=Number(req.query.page)||1
    const limit=Number(req.query.limit)||6
    const skip=(page-1)*limit;
    const category=req.query.category;
    const sort = req.query.sort; 
    const price = req.query.price; // Add this line

    let sortOptions = {};
    if (sort) {
        const [field, order] = sort.split(':');
        sortOptions[field] = order === 'desc' ? -1 : 1;
    }

  

    let query={}
    if(category)
        {
            query.category={$regex:category,$options:'i'}

        }

        if (price) {
            query.price = price;
        }
        try {
            const products=await ProductModel.find(query)
            .sort(sortOptions)
            .skip(skip)
            .limit(limit);
            res.json(products);
        } catch (error) {
            res.status(500).json({error:error.message});
        }
     }
    






//  exports.getProductById=async(req,res)=>{
//     try {
        
//     } catch (error) {
        
//     }
//  }