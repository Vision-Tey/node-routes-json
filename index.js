const http = require('http');
const path = require('path');
const fs = require('fs');
const productData = require("./Models/products");
const userData = require("./Models/users");
const HOSTNAME =  "localhost";
const PORT = 5001;




// const server = http.createServer((req, res) => {
//     if (req.url === '/'){
// fs.readFile(path.join(__dirname, 'public', 'index.html'),
//  (err, content) =>{
//     if (err) throw err;

//         res.writeHead(200, { 'Content-Type': 'text/html'});
//         res.end(content);
//        }
//     );
//   }

//   if (req.url === '/api/users'){
//   const users = [
//       {name: 'Bob Smith', age: 10, email: 'bob@jd.com'},
//       {name: 'John Doe', age: 20, email: 'john@jd.com'},
//       {name: 'Agent Sir', age: 30, email: 'agent@jd.com'},
//       {name: 'Sta Bar', age: 40, email: 'sta@jd.com'},
//       {name: 'Pat Dip', age: 50, email: 'pat@jd.com'},
//       {name: 'Stu Cas', age: 60, email: 'stu@jd.com'},
//       {name: 'Dra Gaa', age: 70, email: 'dra@jd.com'},
//       {name: 'Ens Wire', age: 80, email: 'ens@jd.com'}
//   ];
//   res.writeHead(200, { 'Content-Type': 'application.json'});
//     res.end(JSON.stringify(users));
//   }

//   if (req.url === '/api/products'){
//     const products = [
//         {
//             "id": "1",
//             "category": "Electronics",
//             "product": "Camera",
//             "desc": "Camera with holder, Canon",
//             "price": 150000,
//         },
//         {
//             "id": "2",
//             "category": "Electronics",
//             "product": "Ipods",
//             "desc": "One pair, Chargeable",
//             "price": 50000,
//         },
//         {
//             "id": "3",
//             "category": "Electronics",
//             "product": "Oven",
//             "desc": "Five Liters, Alumnium",
//             "price": 200000,
//         },
//         {
//             "id": "4",
//             "category": "Electronics",
//             "product": "Woofer",
//             "desc": "Amplified system with bluetooth",
//             "price": 250000,
//         },
//         {
//             "id": "5",
//             "category": "Garmets",
//             "product": "Blaizer Coat",
//             "desc": "All colors and sizes available",
//             "price": 100000,
//         },
//         {
//             "id": "6",
//             "category": "Garmets",
//             "product": "Jean Jacket",
//             "desc": "Available in brown and light blue colors",
//             "price": 70000,
//         },
//         {
//             "id": "7",
//             "category": "Garmets",
//             "product": "Polo T-shirt",
//             "desc": "In all sizes",
//             "price": 30000,
//         },
//         {
//             "id": "8",
//             "category": "Garmets",
//             "product": "Shirt",
//             "desc": "Different colors but similar design available",
//             "price": 35000,
//         },
//         {
//             "id": "9",
//             "category": "Garmets",
//             "product": "Skirt",
//             "desc": "All colors available",
//             "price": 40000,
//         },
//         {
//             "id": "10",
//             "category": "Garmets",
//             "product": "Sweat Pant",
//             "desc": "Original sweatpants first hand",
//             "price": 40000,
//         },
//         {
//             "id": "11",
//             "category": "Grocery",
//             "product": "Bread",

//             "desc": "One loaf, 1kg",
//             "price": 5000,
//         },
//         {
//             "id": "12",
//             "category": "Grocery",
//             "product": "Coca-cola",
//             "desc": "Coca-cola soda, 2 litres",
//             "price": 8000,
//         },
//         {
//             "id": "13",
//             "category": "Grocery",
//             "product": "Packed Milk",
//             "desc": "Packed milk, 1 litre",
//             "price": 2000,
//         },
        
//         {
//             "id": "24",
//             "category": "Shoes",
//             "product": "High heeled shoe",
//             "desc": "Different sizes available",
//             "price": 70000,
//         }
//     ];
//     res.writeHead(200, { 'Content-Type': 'application.json'});
//       res.end(JSON.stringify(products));
//     }
// });

// const PORT = process.env.PORT || 5001;
// server.listen(PORT, () => console.log(`server running....`))




// Below is an alternative of the above
const server = http.createServer((req, res) => {
    const product = JSON.stringify(productData);
    const user = JSON.stringify(userData);
    console.log(user);
    res.setHeader("Content-Type", "application/json");
    switch (req.url) {
        case "/":
            res.statusCode = 200;
            res.end("welcome to our API");
            break;
        case "/products":
            res.statusCode = 200;
            res.end(product);
            break;
        case "/users":
            res.statusCode = 200;
            res.end(user);
            break;
        default:
            res.statusCode = 400;
            res.end("404 Route not found");
            break;
    }
    
});
server.listen(PORT, HOSTNAME, ()=>{console.log(`running on port ${PORT}`)});