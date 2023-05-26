import { DescribeTableCommand } from '@aws-sdk/client-dynamodb';
import { send } from '../../config';
//-----------------------------------------------------------------

const input = {
    TableName: 'Profile'
};

const command = new DescribeTableCommand(input);

(async () => await send(command))();
