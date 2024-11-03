const routes = (app)=>{
    app.get('/user', (req, res) => {
        res.send('Welcome');
})
}
module.exports = routes