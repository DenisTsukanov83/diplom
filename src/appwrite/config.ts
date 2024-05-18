import { Client, Account, Databases } from "appwrite";

const client = new Client();
const endpoint:any = process.env.REACT_APP_ENDPOINT;
const projectId:any = process.env.REACT_APP_PROJECT_ID;
client.setEndpoint("https://cloud.appwrite.io/v1").setProject("6641c3370007a8433e67");

export const account = new Account(client);
export const database = new Databases(client);