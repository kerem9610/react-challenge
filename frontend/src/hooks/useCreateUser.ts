import { gql, useMutation } from "@apollo/client";
import { internalClient } from "~graphql/client";
import { User } from "~types/User";

export const useCreateUser = () => {
    const CREATE_USER = gql`
      mutation CreateUser($username: String!, $password: String!) {
        createUser(username: $username, password: $password) {
          username,
          id
        }
      }
    `;

    const [createUserMutation] = useMutation(CREATE_USER, { client: internalClient });

    const createUser = async (username: string, password: string): Promise<User> => {
        try {
            const { data } = await createUserMutation({ variables: { username, password } });
            return data.createUser;
        } catch (error) {
            console.error("Error creating user:", error);
            throw error;
        }
    };

    return { createUser };
};
