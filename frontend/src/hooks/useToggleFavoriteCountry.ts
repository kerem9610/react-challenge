import { gql, useMutation } from "@apollo/client";
import { useUser } from "~context/UserContext";
import { internalClient } from "~graphql/client";
import { LIST_COUNTRIES } from "~hooks/useFetchFavoriteCountries";

export const useToggleFavoriteCountry = () => {
    const { user } = useUser();
    const TOGGLE_FAVORITE_COUNTRY = gql`
        mutation ToggleFavoriteCountry($countryId: String!, $notes: String) {
          toggleFavoriteCountry(countryId: $countryId, notes: $notes) {
            id
          }
        }
    `;

    return useMutation(
        TOGGLE_FAVORITE_COUNTRY,
        {
            client: internalClient,
            context: { headers: { userId: user?.id } },
            refetchQueries: [
                LIST_COUNTRIES,
                'GetFavoriteCountries'
            ],
        }
    );
};
