const mongoose = require('mongoose');
const Item = mongoose.model('items');
const axios = require('axios');

module.exports = (app) =>{
  app.post('/api/formSubmit', async(req, res)=>{
      const {name, gst, price} = req.body;
      const expression = `${price}(100%2B${gst})%2F100`;

      try{
          totalPrice = await axios.get(`http://api.mathjs.org/v4/?expr=${expression}`);
          totalPrice = totalPrice.data;
          const item = new Item({
              name,
              price,
              gst,
              totalPrice,
              createdAt:Date.now()
          });
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