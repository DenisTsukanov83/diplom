import { Client, Account } from "appwrite";

const client = new Client();
const endpoint:any = process.env.REACT_APP_ENDPOINT;
const projectId:any = process.env.REACT_APP_PROJECT_ID;
console.log(endpoint)
client.setEndpoint("https://cloud.appwrite.io/v1").setProject("6640d9ad0027165d2522");

export const account = new Account(client);