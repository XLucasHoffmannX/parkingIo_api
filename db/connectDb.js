// version mongoose@^5.13.3C
import mongoose from 'mongoose';
import dotenv from 'dotenv';


dotenv.config();
const URI = process.env.URICONNECT;

const connectDb = async ()=>{
    try {
        mongoose.connect(URI, {
            useCreateIndex: true,
            useNewUrlParser: true,
            useUnifiedTopology: true,
            useFindAndModify: false
        }, error=>{
            if(error) throw error;
            console.log('Cluster on!');
        })
    } catch (error) { console.log(error) }
}


export default connectDb;