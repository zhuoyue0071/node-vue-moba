const express = require('express')

const app = express()

app.set('secret', 'saf1231n1n8dsca12kk2lqa')
app.use(require('cors')())
app.use(express.json())
app.use('/uploads',express.static(__dirname+'/uploads'))

require('./plugins/db')(app)
require('./routes/admin')(app)
require('./routes/web')(app)

app.listen(3000, () => {
    console.log('已监听3000端口');
})