import { gql } from "apollo-boost";
import { graphql } from "react-apollo";

const frag = gql`
  fragment resFrag on Reservation {
    _id
    createdAt
    hotelName
    arrivalDate
  }
`;

export const getReservationsGQL = gql`
  query {
    reservations(delay: 1000) {
      ...resFrag
    }
  }
  ${frag}
`;

export const getReservationsQuery = graphql(getReservationsGQL, {
  name: "getReservationsQuery"
});

export const getReservationGQL = gql`
  query($id: ID) {
    reservation(delay: 1000, id: $id) {
      ...resFrag
      guestName
      departureDate
    }
  }
  ${frag}
`;
export const getReservationQuery = graphql(getReservationGQL, {
  name: "getReservationQuery",
  options: props => ({ variables: { id: props.match.params.id } })
});

export const addReservationGQL = gql`
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
      ...resFrag
      guestName
      departureDate
    }
  }
  ${frag}
`;
export const addReservationMutation = graphql(addReservationGQL, {
  name: "addReservationMutation"
});

export const editReservationGQL = gql`
  mutation(
    $_id: ID!
    $guestName: String
    $hotelName: String
    $arrivalDate: String
    $departureDate: String
  ) {
    editReservation(
      _id: $_id
      guestName: $guestName
      hotelName: $hotelName
      arrivalDate: $arrivalDate
      departureDate: $departureDate
    ) {
      ...resFrag
      guestName
      departureDate
    }
  }
  ${frag}
`;
export const editReservationMutation = graphql(editReservationGQL, {
  name: "editReservationMutation"
});
