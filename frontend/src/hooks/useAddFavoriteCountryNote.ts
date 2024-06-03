import { gql, useMutation } from "@apollo/client";
import { useUser } from "~context/UserContext";
import { internalClient } from "~graphql/client";
import { LIST_COUNTRIES } from "~hooks/useFetchFavoriteCountries";

export const useAddFavoriteCountryNote = () => {
    const { user } = useUser();
    const ADD_FAVORITE_COUNTRY_NOTE = gql`
        mutation AddFavoriteCountryNote($countryId: String!, $notes: String) {
            addFavoriteCountryNote(countryId: $countryId, notes: $notes) {
            id
          }
        }
    `;

    return useMutation(
        ADD_FAVORITE_COUNTRY_NOTE,
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
