import { Client, Account } from "appwrite";

const client = new Client();
const endpoint:any = process.env.REACT_APP_ENDPOINT;
const projectId:any = process.env.REACT_APP_PROJECT_ID;
console.log(endpoint)
client.setEndpoint("https://cloud.appwrite.io/v1").setProject("6641b6e500330f4d33d8");

export const account = new Account(client);