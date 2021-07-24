const bcrypt=require("bcrypt")
const securePassword=async(password)=>{
    const passwordhash=await bcrypt.hash(password,10);
    console.log(passwordhash);
}
securePassword("sapna");