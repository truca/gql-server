import { makeExecutableSchema } from "graphql-tools";
import typeDefs from "./types.graphql";
import users from "../data/users";
import axios from "axios";

const baseURL = "http://1b773838.ngrok.io/api";
const resMapper = res => res.data;

const resolvers = {
  Query: {
    form: (_, args) => {
      return axios
        .get(`${baseURL}/form/${args.id}`)
        .then(resMapper)
        .then(form => form);
    },
    totalForms: () => {
      return axios
        .get(`${baseURL}/forms`)
        .then(resMapper)
        .then(forms => forms.length);
    },
    allForms: () => {
      return axios
        .get(`${baseURL}/forms`)
        .then(resMapper)
        .then(forms => forms);
    }
  }
};

export default makeExecutableSchema({ typeDefs, resolvers });
