let exp=require('express');
let dbschema=require('./mongoose');
let app=exp();
//require('dotenv').config();

app.use(exp.urlencoded({extended:false}));//middle ware using for req.body

app.get("/", function(req,res){
res.send("wellcome to our wabside");
});

app.post("/api/signin", async function (req, res) {
  //
  try{
    const {email} = req.body;
    const emaill= await dbschema.findOne({email});
    const email_id=emaill._id;
    res.status(201).json({ message: 'this email is already exists'});
  }catch (error) {
    try {
      const { user_name} = req.body;
      const user = await dbschema.findOne({ user_name });
      const user_id=user._id;
     res.status(201).json({ message: 'this user_name is already exists'});
   } catch (error) {
    const body = req.body;
    const newUser = new dbschema(body);
    await newUser.save();
    res.status(201).json({ message: 'Data added successfully', id: newUser._id });
   }
  }
});


app.post("/api/login", async function (req, res) {
    const { user_name, password } = req.body;

    try {
        const user = await dbschema.findOne({ user_name });
        const user_pass=user.password;
        const y =user_pass.toString();
        if (password==y) {
            res.json({ msg: 'you are eligible to login' });
        }else{
           res.json({ msg: 'Invalid Credentials' });
        }
    }catch(error){
      res.send({ msg: 'Invalid Credentials'})
    }
});

app.post("/api/forget", async function (req, res) {
  const { email } = req.body;
  try {
      const user = await dbschema.findOne({ email });
      const user_pass=user.password;
      const user_name=user.user_name;
          res.json({user_name:user_name,passwprd:user_pass });
  }catch(error){
    res.send({ msg: 'Invalid mail'})
  }
});


//app.listen(3000);
const port = process.env.PORT || 3000;
app.listen(port, () => {
    console.log(`Server started on port ${port}`);
});