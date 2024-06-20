import express from 'express';
import bodyParser from 'body-parser';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, '../public')));

app.set('views', path.join(__dirname, '../views'));
app.set('view engine', 'ejs'); // Pastikan view engine diatur ke ejs

app.get("/login/", (req, res) => { res.render("login") });
app.get("/signup/", (req, res) => { res.render("signup") });
app.get("/signup-seller/", (req, res) => { res.render("signup-seller") });

// Customer
app.post("/customer/dashboard/", (req, res) => {
    let nama = req.body.email;
    res.render("customer/index", { name: nama });
});
app.get("/customer/dashboard/", (req, res) => { res.render("customer/index", { name: "nama" }) });
app.get("/customer/search/", (req, res) => { res.render("customer/search", { name: "nama" }) });
app.get("/customer/product/", (req, res) => { res.render("customer/product", { name: "nama" }) });
app.get("/customer/shop/", (req, res) => { res.render("customer/shop", { name: "nama" }) });
app.get("/customer/cart/", (req, res) => { res.render("customer/cart", { name: "nama" }) });
app.get("/customer/tracking/", (req, res) => { res.render("customer/tracking", { name: "nama" }) });
app.get("/customer/chat/", (req, res) => { res.render("customer/chat", { name: "nama" }) });

// Seller
app.get("/seller/dashboard/", (req, res) => { res.render("seller/index", { name: "nama" }) });
app.get("/seller/shop/", (req, res) => { res.render("seller/shop", { name: "nama" }) });
app.get("/seller/order/", (req, res) => { res.render("seller/order", { name: "nama" }) });
app.get("/seller/order-cancel/", (req, res) => { res.render("seller/order-cancelled", { name: "nama" }) });
app.get("/seller/order-shipping/", (req, res) => { res.render("seller/order-shipping", { name: "nama" }) });
app.get("/seller/order-review/", (req, res) => { res.render("seller/order-review", { name: "nama" }) });
app.get("/seller/product/", (req, res) => { res.render("seller/product", { name: "nama" }) });
app.get("/seller/statistic/", (req, res) => { res.render("seller/statistic", { name: "nama" }) });

// Admin
app.get("/admin/dashboard/", (req, res) => { res.render("admin/index", { name: "nama" }) });
app.get("/admin/datatable/", (req, res) => { res.render("admin/datatable", { name: "nama" }) });
app.get("/admin/statistic-user/", (req, res) => { res.render("admin/statistic-user", { name: "nama" }) });
app.get("/admin/statistic-seller/", (req, res) => { res.render("admin/statistic-seller", { name: "nama" }) });
app.get("/admin/statistic-selling/", (req, res) => { res.render("admin/statistic-selling", { name: "nama" }) });
app.get("/admin/statistic-product/", (req, res) => { res.render("admin/statistic-product", { name: "nama" }) });

export default app;
