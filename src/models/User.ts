import mongoose, { Document, Schema, model } from "mongoose";

export interface IUser extends Document {
  name ?: string,
  email ?: string,
  address ?: string,
  mobile ?:string,
  gender ?: string,
  is_blocked?: boolean,
  createdAt?: Date,
  updatedAt?: Date
}

const userSchema = new Schema<IUser>(
  {
    name : {
      type : String,
      required : true
    },
    email : {
      type: String, 
      required : true
    },
    address : {
      type : String,
      required : true
    },
    mobile : {
      type :String,
      required: true
    },
    gender: {
      type: String,
      required: true
    },
    is_blocked : {
      type :Boolean,
      default : false
    }
    
  },
  {timestamps : true}
)

export default model<IUser>('User',userSchema)