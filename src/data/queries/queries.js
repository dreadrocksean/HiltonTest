import { gql } from "apollo-boost";
import { graphql } from "react-apollo";

export const getReservationsQuery = graphql(
  gql`
    {
      reservations(delay: 2000) {
        _id
        guestName
        hotelName
        arrivalDate
        departureDate
      }
    }
  `,
  { name: "getReservationsQuery" }
);

export const getReservationQuery = graphql(
  gql`
    query($id: ID) {
      reservation(id: $id) {
        _id
        guestName
        hotelName
        arrivalDate
        departureDate
      }
    }
  `,
  { name: "getReservationQuery" }
);

export const addReservationMutation = graphql(
  gql`
    mutation(
      $guestName: String!
      $hotelName: String!
      $arrivalDate: String!
      $departureDate: String!
    ) {
      addReservation(
        guestName: "$guestName"
        hotelName: "$hotelName"
        arrivalDate: "$arrivalDate"
        departureDate: "$departureDate"
      ) {
        _id
        guestName
        hotelName
        arrivalDate
        departureDate
      }
    }
  `,
  { name: "addReservationMutation" }
);
