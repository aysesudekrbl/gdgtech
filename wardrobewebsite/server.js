require("dotenv").config(); 
const { pool } = require("./dbConfig")
const express = require("express");
const app = express();
const path = require("path");
const bcrypt = require("bcrypt");
const session = require('express-session');
const flash = require('express-flash');
const passport = require('passport');
const multer = require('multer');
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, 'src/public/uploads/');
    },
  filename: (req, file, cb) => {
    cb(null, Date.now() + path.extname(file.originalname));
  }
});

const upload = multer({ storage: storage });



const initializePassport = require('./passportConfig')
initializePassport(passport);

app.use(express.static(path.join(__dirname, 'src', 'public')));
app.use(express.urlencoded({extended:false}))

app.use(session({
  secret: 'secret',
  resave: false,
  saveUninitialized: false
}));

app.use(passport.initialize());
app.use(passport.session());
app.use(flash());

const PORT = process.env.PORT || 4000
app.set('view engine', "ejs")

app.get("/",(req,res) =>{
  res.render('index')
});

app.get('/users/register', checkAuthenticated,(req,res) => {
  res.render("register")
});

app.get('/users/index', checkAuthenticated ,(req,res) => {
  res.render("index")
});


app.get('/users/logout', (req, res, next) => {
  req.logout((err) => {
    if (err) { return next(err); }
    req.flash('success_msg', 'You are logged out');
    res.redirect('/users/index');
  });
});

app.get('/users/wardrobe', checkNotAuthenticated, async (req, res) => {
  try {
    const userId = req.user.id;
    const result = await pool.query(
      `SELECT * FROM users INNER JOIN images ON users.id = images.id WHERE users.id =$1`, [userId]
    );

    if (result.rows.length === 0) {
      return res.send("No wardrobe found for this user.");
    }

    const userData = result.rows[0];
    res.render('wardrobe', {
      user: req.user.username,
      tshirts: userData.tshirts || [],
      jackets: userData.jackets || [],
      trousers: userData.trousers || [],
      shoes: userData.shoes || []
    });
  } catch (err) {
    console.error(err);
    res.redirect('/users/index');
  }
});

app.get('/users/outfitgenerator', checkNotAuthenticated, async (req, res) => {
  try {
    const userId = req.user.id;
    const result = await pool.query(
      `SELECT tshirts, jackets, trousers, shoes FROM images WHERE id = $1`, [userId]
    );

    const wardrobe = result.rows[0] || { tshirts: [], jackets: [], trousers: [], shoes: [] };

    res.render('outfitgenerator', {
      // HATA BURADAYDI: user değişkenini ekledik
      user: req.user.username, 
      tshirts: wardrobe.tshirts || [],
      jackets: wardrobe.jackets || [],
      trousers: wardrobe.trousers || [],
      shoes: wardrobe.shoes || []
    });
  } 
  catch (err) {
    console.error(err);
    res.send("Error loading wardrobe.");
  }
});

app.post('/users/register', async (req,res) => {
  let {username, email, password} = req.body;
  let hashedPassword = await bcrypt.hash(password, 10);

  const results = await pool.query(`SELECT * FROM users WHERE email = $1`, [email]);

  if (results.rows.length > 0) {
    return res.render('register');
  }

  await pool.query( 
    'INSERT INTO users (username, email, password) VALUES ($1, $2, $3) RETURNING id',
    [username, email, hashedPassword]
  );

  req.flash('success_msg', 'You are now registered. Please log in');
  return res.redirect('/users/index');
})

app.post('/users/index', passport.authenticate('local', {
  successRedirect: '/users/wardrobe', 
  failureRedirect: '/users/index',
  failureFlash: true
}))

function checkAuthenticated(req,res,next){
  if (req.isAuthenticated()){
    return res.redirect('/users/wardrobe');
  }
  next();
}

function checkNotAuthenticated(req,res,next){
  if(req.isAuthenticated()){
    return next();
  }
  res.redirect('/users/index');
}
app.post('/users/upload', checkNotAuthenticated, upload.single('image'), async (req, res) => {
    try {
        const userId = req.user.id;
        const category = req.body.category; // tshirt, jackets vb.
        const imagePath = `/uploads/${req.file.filename}`;

       
        await pool.query(
            `UPDATE images SET ${category} = array_append(${category}, $1) WHERE id = $2`,
            [imagePath, userId]
        );

        res.redirect('/users/wardrobe');
    } catch (err) {
        console.error(err);
        res.status(500).send("Dosya yüklenirken hata oluştu.");
    }
});

app.listen(PORT,() => {
  console.log(`Server running on port ${PORT}`);
});