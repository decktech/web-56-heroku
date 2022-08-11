console.log(xyz)

const server = require('./api/server');

const PORT = 9000;

server.listen(PORT, () => {
    console.log(`server running on port ${PORT}`)
})
