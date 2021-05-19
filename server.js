require('./models/db');

const express         = require('express');
const path            = require('path');
const exphbs          = require('express-handlebars');
const bodyparser      = require('body-parser');
const orderController = require('./controllers/orderController');

var app = express();
app.use(bodyparser.json());
app.use(express.static(path.join(__dirname,'/public')));
app.set('views',path.join(__dirname,'views'));

app.engine('handlebars',exphbs({
    exrname: 'handlebars',
    defaultLayout:'mainLayout',
    layoutsDir: __dirname+'/views/',
    runtimeOptions: { //permite a exibe das propriedades na pag admin
        allowProtoPropertiesByDefault: true,
        allowProtoMethodsByDefault: true,
        
    },
}));

app.set('view engine', 'handlebars');
app.listen(3000,()=>{
    console.log('server running on port: 3000')
});
app.use('/',orderController); 