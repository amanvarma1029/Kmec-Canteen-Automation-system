const express = require("express");
const app = express();
require("dotenv").config();

const connectDB = require("./db/connect")
const userRouter = require("./routes/user")

connectDB(process.env.MONGO_URI);
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static('public'));

app.use(userRouter);

app.listen(process.env.PORT, ()=>{
    console.log(`Server running on port ${process.env.PORT}`)
})


// const express = require('express');
// const app = express();
// const port = 3000; // You can use any port you prefer

// app.use(express.urlencoded({ extended: true }));
// app.use(express.static('public'));


// // Handle form submission
// app.post('/signup', (req, res) => {
//   const { username, email, password, cPassword } = req.body;
//   // Process the submitted data here (e.g., save to a database)
//   console.log('Received form data:', { username, email, password, cPassword });
//   // Send back a response
//   res.send('Form submitted successfully!');
// });

// // Start the server
// app.listen(port, () => {
//   console.log(`Server is listening at http://localhost:${port}`);
// });
