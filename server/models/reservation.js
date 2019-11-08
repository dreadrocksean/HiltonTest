const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const ReservationSchema = new Schema({
  guestName: String,
  hotelName: String,
  arrivalDate: String,
  departureDate: String
});
ReservationSchema.set("timestamps", true);

module.exports = mongoose.model("Reservation", ReservationSchema);
