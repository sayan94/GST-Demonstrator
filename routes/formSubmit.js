const mongoose = require('mongoose');
const Item = mongoose.model('items');

module.exports = (app) =>{
  app.post('/api/formSubmit', async(req, res)=>{

     const { name, price, gst, createdAt} = req.body;
     const item = new Item({
         name,
         price,
         gst,
         createdAt:Date.now()
     });

      try{
       await item.save();
       res.status(200).send(item);
      }catch(err){
       res.status(422).send(err);
      }

  });

  app.get('/api/getItems', async(req, res)=>{

    try {
        const items = await Item.find({});
        res.status(200).send(items);
    }catch(err){
      res.status(422).send(err);
    }
  })
};