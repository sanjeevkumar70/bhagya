import Cookies from "js-cookie";
import { createUploadLink } from "apollo-upload-client";
import { ApolloClient, ApolloLink, InMemoryCache,concat } from "@apollo/client";


const httpLink = new createUploadLink({
  uri: "https://dev.facesconsent.com:3126/graphql",
});

const authMiddleware = new ApolloLink((operation, forward) => {
  const token = Cookies.get('admin_login_token');
  
    operation.setContext({
      headers: {
        authorization: token ? token : "",
      },
    });
    return forward(operation);
  
  });

export const client = new ApolloClient({
  link: concat(authMiddleware, httpLink),
  cache: new InMemoryCache(  {addTypename: false}),
});