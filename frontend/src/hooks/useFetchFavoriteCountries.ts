import { QueryResult, gql, useQuery } from "@apollo/client";
import { useUser } from "~context/UserContext";
import { internalClient } from "~graphql/client";
import { FavoriteCountriesResponse } from "~types/FavoriteCountries";

export const LIST_COUNTRIES = gql`
query GetFavoriteCountries {
  favoriteCountries {
    countryId
    notes,
  }
}
`;

export const useFetchFavoriteCountries = (): QueryResult<FavoriteCountriesResponse> => {
    const { user } = useUser();

    return useQuery(LIST_COUNTRIES, {
        client: internalClient,
        context: { headers: { userId: user?.id }}
    });
};