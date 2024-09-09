const http=require("http");
const server=http.createServer(
    (req ,res) =>{}
);

server.listen(1212, () => {
    console.log("server is start listning.....")
});
