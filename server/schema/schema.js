const {
  GraphQLObjectType,
  GraphQLString,
  GraphQLInt,
  GraphQLList,
  GraphQLSchema,
  GraphQLID,
  // GraphQLDate,
  GraphQLNonNull
} = require("graphql");

const { delay } = require("../utils/utils");
const Reservation = require("../models/reservation");

const ReservationType = new GraphQLObjectType({
  name: "Reservation",
  fields: () => ({
    _id: { type: GraphQLID },
    guestName: { type: GraphQLString },
    createdAt: { type: GraphQLString },
    hotelName: { type: GraphQLString },
    arrivalDate: { type: GraphQLString },
    departureDate: { type: GraphQLString }
  })
});

const RootQuery = new GraphQLObjectType({
  name: "RootQueryType",
  fields: () => ({
    reservation: {
      type: ReservationType,
      args: { delay: { type: GraphQLInt }, id: { type: GraphQLID } },
      resolve(parent, args) {
        return delay(args.delay).then(() => Reservation.findById(args.id));
      }
    },
    reservations: {
      type: GraphQLList(ReservationType),
      args: { delay: { type: GraphQLInt } },
      resolve(parent, args) {
        return delay(args.delay).then(() => Reservation.find({}));
      }
    }
  })
});

const Mutation = new GraphQLObjectType({
  name: "Mutation",
  fields: {
    addReservation: {
      type: ReservationType,
      args: {
        guestName: { type: new GraphQLNonNull(GraphQLString) },
        hotelName: { type: new GraphQLNonNull(GraphQLString) },
        arrivalDate: { type: new GraphQLNonNull(GraphQLString) },
        departureDate: { type: new GraphQLNonNull(GraphQLString) }
      },
      resolve(parent, args) {
        let reservation = new Reservation({
          guestName: args.guestName,
          hotelName: args.hotelName,
          arrivalDate: args.arrivalDate,
          departureDate: args.departureDate
        });
        return reservation.save();
      }
    }
  }
});

module.exports = new GraphQLSchema({
  query: RootQuery,
  mutation: Mutation
});
