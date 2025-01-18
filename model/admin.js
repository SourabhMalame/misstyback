import mongoose from "mongoose";
import express from "express"


const adminSchema = new mongoose.Schema({

    username: {
        type: String
    }, password: {
        type: String
    }
}, {
    timestamps: true
})


const Admin = mongoose.model("admin", adminSchema)

export default Admin