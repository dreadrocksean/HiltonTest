import { gql } from "apollo-boost";
import { graphql } from "react-apollo";

export const getReservationsQuery = graphql(
  gql`
    {
      reservations(delay: 1000) {
        _id
        createdAt
        hotelName
        arrivalDate
      }
    }
  `,
  { name: "getReservationsQuery" }
);

export const getReservationQuery = graphql(
  gql`
    query($id: ID) {
      reservation(delay: 1000, id: $id) {
        _id
        createdAt
        guestName
        hotelName
        arrivalDate
        departureDate
      }
    }
  `,
  {
    name: "getReservationQuery",
    options: props => ({ variables: { id: props.match.params.id } })
  }
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
        guestName: $guestName
        hotelName: $hotelName
        arrivalDate: $arrivalDate
        departureDate: $departureDate
      ) {
        _id
        createdAt
        guestName
        hotelName
        arrivalDate
        departureDate
      }
    }
  `,
  { name: "addReservationMutation" }
);
