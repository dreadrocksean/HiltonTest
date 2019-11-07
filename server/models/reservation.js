const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const reservationSchema = new Schema({
  guestName: String,
  hotelName: String,
  arrivalDate: String,
  departureDate: String
});

module.exports = mongoose.model("Reservation", reservationSchema);
