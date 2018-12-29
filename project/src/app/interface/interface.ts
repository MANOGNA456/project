export interface signup{
    name: String,
    emailID: String,
    password: String,
    phonenumber: Number,
    address: String
}

export interface login{
    emailID: String,
    password:String
}

export interface addToCart{
    image : String,
    product_id : String,
    prodname : String,
    brandname : String,
    price : Number,
    description : String
}

