import { QueryResult, gql, useQuery } from "@apollo/client";
import { externalCountryClient } from "~graphql/client";
import { CountriesResponse } from "~types/Countries";

export const useFetchCountries = (): QueryResult<CountriesResponse> => {
    const LIST_COUNTRIES = gql`
      {
        countries {
          name
          code,
          capital,
          emoji
        }
      }
    `;

    return useQuery(LIST_COUNTRIES, {client: externalCountryClient});
};