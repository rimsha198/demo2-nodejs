
const http=require("http")
const fs= require("fs")

const server =http.createServer(
     (req ,res)=> {

        const log='${Date.now()}  =Path ${req.url} New Rquest\n'
        fs.appendFile("log.txt", log, (err,data) => {
            switch(req.url){
                case"/": res.end("Hello i'm you'r server");
                break;
                case"/about":res.end("I am Rimsha");
                break;
                default: res.end("404 page is not required");
            }
        })
    }
)
server.listen(8000,() => {
    console.log("server is listening too......")
});