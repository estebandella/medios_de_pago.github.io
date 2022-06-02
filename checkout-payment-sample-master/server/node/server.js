const express = require("express");
const app = express();
const cors = require("cors");

//*************************************************************** */
const mercadopago = require("mercadopago");

// REPLACE WITH YOUR ACCESS TOKEN AVAILABLE IN: https://developers.mercadopago.com/panel
mercadopago.configure({
	access_token: "TEST-4827193070280907-060203-a15a24d556cfcd5d28d27139d7fc839d-99275358",
});  
// esta clave esta asociada a mi cuenta de MP 
//*************************************************************** */



app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(cors());
app.use(express.static("../../client"));

app.get("/", function (req, res) {
  res.status(200).sendFile("index.html");
}); 

app.post("/create_preference", (req, res) => {

	//*************************************************************** */
	let preference = {
		items: [
			{
				title: req.body.description,
				unit_price: Number(req.body.price),
				quantity: Number(req.body.quantity),
			}
		],
		// una vez realizado el pago, piede volver, y vuelve la URL que indico aca abajo:
		// las tres direcciones van a direccionar a la misma URL que es FEEDBACK
		// Pero yo podria tener 3 urls diferentes 
		back_urls: {
			"success": "http://localhost:8080/feedback",
			"failure": "http://localhost:8080/feedback",
			"pending": "http://localhost:8080/feedback"
		},
		auto_return: "approved",
	};

	mercadopago.preferences.create(preference)
		.then(function (response) {
			res.json({
				id: response.body.id
			});
		}).catch(function (error) {
			console.log(error);
		});

	//*************************************************************** */

});


//*************************************************************** */
// las URL me envian a FEEDBAK, aca en este caso!! ... solo muestro un JSON con 
app.get('/feedback', function(req, res) {
	res.json({
		Payment: req.query.payment_id,
		Status: req.query.status,
		MerchantOrder: req.query.merchant_order_id
	});
});
//*************************************************************** */




app.listen(8080, () => {
  console.log("The server is now running on Port 8080");
});
