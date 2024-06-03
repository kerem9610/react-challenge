import { LazyQueryResultTuple, OperationVariables, gql, useLazyQuery } from "@apollo/client";
import { internalClient } from "~graphql/client";
import { LoginUserResponse } from "~types/User";

export const useLoginUser = (): LazyQueryResultTuple<LoginUserResponse, OperationVariables> => {
    const FETCHED_USER = gql`
        query GetUser($username: String!, $password: String!) {
          user(username: $username, password: $password) {
            id,
            username
          }
        }
    `;

    return useLazyQuery<LoginUserResponse>(FETCHED_USER, {client: internalClient});
};
