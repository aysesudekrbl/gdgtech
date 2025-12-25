const express = require("express");
const app = express();
const path = require("path");

app.use(express.static(path.join(__dirname, 'src', 'public')));


const PORT = process.env.PORT || 4000

app.set('view engine', "ejs")
app.get("/",(req,res) =>{
  res.render('index')
});

app.get('/users/register',(req,res) => {
  res.render("register")
});

app.get('/users/index',(req,res) => {
  res.render("index")
});
app.get('/users/wardrobe',(req,res) => {
  res.render("wardrobe")
});

app.get('/users/outfitgenerator',(req,res) => {
  res.render("outfitgenerator")
});

app.listen(PORT,() => {
  console.log(`Server running on port ${PORT}`);
});