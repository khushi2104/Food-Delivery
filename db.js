
const mongoose = require("mongoose")

const connect=()=>{
  mongoose.connect("mongodb://127.0.0.1:27017/FoodDelivery",{
    useNewUrlParser: true
}).then(async()=>{
    console.log("Connection successful");
    try {
      const fetchdata = await mongoose.connection.db.collection('FoodData');
      const data = await fetchdata.find({}).toArray();
    
      global.FoodData=data;
   //  console.log(global.FoodData)
    } catch (error) {
      console.error("Error fetching data:", error);
    }

    try {
        const foodCategory = await mongoose.connection.db.collection('FoodCategory');
        const cdata = await foodCategory.find({}).toArray();
      
        global.FoodCategory=cdata;
      // console.log(global.FoodCategory);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
}).catch((e)=>{
    console.log("Connection unsuccessful")
    console.log(e);
})

}

module.exports=connect;