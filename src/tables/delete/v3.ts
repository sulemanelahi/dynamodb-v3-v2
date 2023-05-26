import { DeleteTableCommand } from '@aws-sdk/client-dynamodb';
import { send } from '../../config';
//-----------------------------------------------------------------

const input = {
    TableName: 'Profile'
};

const command = new DeleteTableCommand(input);

(async () => await send(command))();
