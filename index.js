const express = require('express');

const server = express();

const path = require('path');

const webappRouter =express.Router();
//const webappRouter = require('./routes/webapp')
server.set('view engine','ejs');



server.use('/css',express.static(path.join(__dirname,'/scripts/css')));

server.use('/js',express.static(path.join(__dirname,'/scripts/js')));

webappRouter.route('/gui')
     .get((req,res) => {
       res.render('gui');

     }
);


webappRouter.route('/dash')
     .get((req,res) => {a
       res.render('dash');

     }
);


server.use('/',webappRouter);

server.get('/',(req,res)=>{
  res.render('index',
{
  nav:['PCS','Recon portal'],
  title:'Web Apps'
}
);
}
);

server.get('/API',(req,res) =>{
  res.render('api');
});

const port = process.env.PORT || 3005;

server.listen(port,() =>
{
  console.log('App is running.........')
});
