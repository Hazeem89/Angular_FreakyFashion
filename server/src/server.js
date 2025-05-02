import express from "express";

const port = 8000;

const app = express();

const products = [

  {
    "id": 1,
    "Name": "Black Hoodie",
    "Price": 199,
    "Description": "A sleek black hoodie with a modern design",
    "Image": "https://media-hosting.imagekit.io/3e593e748bf64930/P%20(19).jpg?Expires=1838719327&Key-Pair-Id=K2ZIVPTIP2VGHC&Signature=VJ0cS0lVguzqQHmLu8Q-jP9hYZH3uD537Wf9GUePer34epYAvWafxri0ho7bugYK-87nxkTi3-0VrnYrSAJFE1rgmlsV7SC2w~R~ymeN2t7q7472brUiIVEUpB8upmpe2mMgdg6XHKQlsjp842VinbonkoJbjsgZpcboJljgCY2qEgQNb7weiL0nJs8kwi7ihUt0xc9DTZMruNZ1xKgd-R~nPl1sJ3PwlUXSvfDWucIIh6IYtHVO3KIVnbIT~XB7D-ibbDUMRIip4VphV1pn8dTzn8wHrK87PFcI7CzAFe1pvD0jY0Ep4QZBv7zXVGoJt4jSeq5kdTHVQcdfIqxORA__",
    "Brand": "Levis",
    "SKU": "SVA123",
    "totalSales": 120
  },
  {
    "id": 2,
    "Name": "Blue Jeans",
    "Price": 199,
    "Description": "Stylish blue jeans with a perfect fit",
    "Image": "https://media-hosting.imagekit.io/225fa001d4a6414c/P%20(23).jpg?Expires=1838719327&Key-Pair-Id=K2ZIVPTIP2VGHC&Signature=fVxAtzRIr45hW9Mgo5VSrSCfzN97z1Bp~V2elW4sokjF-Es-rhnRYTrw2UYwe99zmmxE8Yh-3AOjGwqjwxihP~RjNzZcahwx7bbKyOcz1sCxELBJPBQPMy2uahucT8Wt4JgXRIGxHiYfQC4q4QtHcqugeP6sdyikhqcfIhTpayoZwsLqfnNZ8CuZxnZYWtnQUTSU8SlQrxw~zj9ZmKe0GIb62gh-ydDEBNHEV2Hlf7dLCGP7Mz0vKjdHRx5~rgrvNpbXxl4fkigkZupFNL3vYbsOA4Orux0pqNXxsZD76hat6~~2rKpA1db8DQrGdPrJOtOcXT21IdS7G8jkdLtF1Q__",
    "Brand": "Levis",
    "SKU": "VIT123",
    "totalSales": 250
  },
  {
    "id": 3,
    "Name": "Red Cap",
    "Price": 199,
    "Description": "A trendy red cap with a comfortable fit",
    "Image": "https://media-hosting.imagekit.io/2d3d9d4aed1642e2/P%20(5).jpg?Expires=1838719327&Key-Pair-Id=K2ZIVPTIP2VGHC&Signature=TlqsEB~RvhNHKoiz0rC7gaM6JCAcsy9BnK452eS0287EkEhTNmV5kdjDa2oVvmwVEi2LPDTvKeYOSFGa-JQC-JBkj-6xZjRpVWbKv9UujL~uNyvEO3SOjgSIrAxyDhym6~5aP-18~JJid17rIjPWtzRr4jFPnPWkPTO71hDK9BlGnxstUCtUNyA9lyalNWfcuJi1QGpAyTAYXoz7Lc7rNTDfuItUuH~2EaRJ-9EUYdUtZDWERTyezhP0UKDszku~xdhOQubsPeOvIqSplHsrUFBd2QKNrMJvkNlvfZ9n2Mbbk9Yli8okSIgZi-g0LOZTlq6VlaSsYTAe2v5CSc1biA__",
    "Brand": "Levis",
    "SKU": "SVA123",
    "totalSales": 350
  },
  {
    "id": 4,
    "Name": "White Sneakers",
    "Price": 199,
    "Description": "Modern white sneakers with sleek design",
    "Image": "https://media-hosting.imagekit.io/be8d318e310e414b/P%20(34).jpg?Expires=1838719327&Key-Pair-Id=K2ZIVPTIP2VGHC&Signature=WyMkZQ6Zx8yCTFVdCuWx9bLJ1LBt-hgHl141njaB4Qv8Rd1~F15KfrNJmRoZS96UiFWsF1hncv3HuxaDcljCr0QCO~~BJ2S1oQuG4TpAJd0kCHY54SDKwmIBFFnhW5uwBx5TvC~PzafcPOE0cz2YD-XonVfQD5Pi2p~~fXE1GwURV8Rcd6Y2Z485VAMBhAr-JTlh66orgupB3K5~axz57ISmzYLpRkvdgyE9Wm2j2yiy4uUMVUN02GQD5OyE0whm1gb7-X65oeS2mlAq4M5wz3UeL-5VrY9QzA~5ZWtxi557ReGm~M7qxIpWnLtll8Q-opLL7xlD4VgdoV63Twz77A__",
    "Brand": "Levis",
    "SKU": "VIT123",
    "totalSales": 420
  },
  ];
// Route to get all products  
app.get("/products", (req, res) => {
res.json(products);
});

// Route to get a single product by ID
app.get("/products/:id", (req, res) => {
  const productId = parseInt(req.params.id, 10);
  const product = products.find(product => product.id === productId);
  if (product) {
    res.json(product);
  } else {
    res.status(404).json({ message: "product not found" });
  }
});

// Start the server
app.listen(port, () => {
console.log(`Listening on port ${port}`);
});