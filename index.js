import express from 'express';
import connect from 'connect';
import bodyParser from 'body-parser';

const app = express();
const port = 3000;

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static("public"));

app.get("/login/", (req,res) =>{ res.render("login.ejs") });
app.get("/signup/", (req,res) =>{ res.render("signup.ejs") });

// Customer
app.post("/customer/dashboard/", (req,res) =>{ 
    let nama = req.body.email;
    res.render("customer/index.ejs", { name: nama, });
});
app.get("/customer/dashboard/", (req,res) =>{ res.render("customer/index.ejs", { name: "nama", }) });
app.get("/customer/search/", (req,res) =>{ res.render("customer/search.ejs", { name: "nama", }) });
app.get("/customer/product/", (req,res) =>{ res.render("customer/product.ejs", { name: "nama", }) });
app.get("/customer/shop/", (req,res) =>{ res.render("customer/shop.ejs", { name: "nama", }) });
app.get("/customer/cart/", (req,res) =>{ res.render("customer/cart.ejs", { name: "nama", }) });
app.get("/customer/tracking/", (req,res) =>{ res.render("customer/tracking.ejs", { name: "nama" }) });
app.get("/customer/chat/", (req,res) =>{ res.render("customer/chat.ejs", { name: "nama" }) });

// Seller
app.get("/seller/dashboard/", (req,res) =>{ res.render("seller/index.ejs", { name: "nama", }) });
app.get("/seller/shop/", (req,res) =>{ res.render("seller/shop.ejs", { name: "nama", }) });
app.get("/seller/order/", (req,res) =>{ res.render("seller/order.ejs", { name: "nama", }) });
app.get("/seller/order-cancel/", (req,res) =>{ res.render("seller/order-cancelled.ejs", { name: "nama", }) });
app.get("/seller/order-shipping/", (req,res) =>{ res.render("seller/order-shipping.ejs", { name: "nama", }) });
app.get("/seller/order-review/", (req,res) =>{ res.render("seller/order-review.ejs", { name: "nama", }) });
app.get("/seller/product/", (req,res) =>{ res.render("seller/product.ejs", { name: "nama", }) });
app.get("/seller/statistic/", (req,res) =>{ res.render("seller/statistic.ejs", { name: "nama", }) });

// Admin
app.get("/admin/dashboard/", (req,res) =>{ res.render("admin/index.ejs", { name: "nama", }) });
app.get("/admin/datatable/", (req,res) =>{ res.render("admin/datatable.ejs", { name: "nama", }) });
app.get("/admin/statistic-user/", (req,res) =>{ res.render("admin/statistic-user.ejs", { name: "nama", }) });
app.get("/admin/statistic-seller/", (req,res) =>{ res.render("admin/statistic-seller.ejs", { name: "nama", }) });
app.get("/admin/statistic-selling/", (req,res) =>{ res.render("admin/statistic-selling.ejs", { name: "nama", }) });
app.get("/admin/statistic-product/", (req,res) =>{ res.render("admin/statistic-product.ejs", { name: "nama", }) });

app.listen(port, () => {
    console.log(`Listening on port ${port}`);
});