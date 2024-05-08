import { Account, Client } from 'appwrite';
const client = new Client();

client
    .setEndpoint('https://cloud.appwrite.io/v1')
    .setProject('6638f45c000b251c196c');
const account = new Account(client);
export {account, client}