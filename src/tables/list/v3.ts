import { ListTablesCommand } from '@aws-sdk/client-dynamodb';
import { send } from '../../config';
//-----------------------------------------------------------------

const command = new ListTablesCommand({});

(async () => await send(command))();
