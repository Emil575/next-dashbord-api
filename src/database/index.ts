import mongoose from 'mongoose';

mongoose.connect("mongodb+srv://Emil_575:Emil_575@opal.7w458.mongodb.net/Discord-dashbord")
    .then(() => console.log('Connected to Database'))
    .catch((err) => console.log(err));
