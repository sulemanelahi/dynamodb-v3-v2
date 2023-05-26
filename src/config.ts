import { DynamoDBClient } from '@aws-sdk/client-dynamodb';
import { ACCESS_KEY_ID, SECRET_ACCESS_KEY } from './environment';
//-----------------------------------------------------------------

export const client = new DynamoDBClient({
    credentials: {
        secretAccessKey: SECRET_ACCESS_KEY,
        accessKeyId: ACCESS_KEY_ID
    },
    region: 'us-west-2'
});

export const send = async (command: any) => {
    try {
        const results = await client.send(command);

        console.log('results: ', results);
    } catch (err) {
        console.error('err: ', err);
    }
};
