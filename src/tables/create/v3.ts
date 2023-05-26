import { CreateTableCommand } from '@aws-sdk/client-dynamodb';
import { send } from '../../config';
//-----------------------------------------------------------------

const input = {
    // CreateTableInput
    AttributeDefinitions: [
        // AttributeDefinitions // required
        {
            // AttributeDefinition
            AttributeName: 'pk', // required
            AttributeType: 'S' // required
        },
        {
            // AttributeDefinition
            AttributeName: 'sk', // required
            AttributeType: 'S' // required
        },
        {
            // AttributeDefinition
            AttributeName: 'name', // required
            AttributeType: 'S' // required
        },
        {
            // AttributeDefinition
            AttributeName: 'age', // required
            AttributeType: 'N' // required
        }
    ],
    TableName: 'Profile', // required
    KeySchema: [
        // KeySchema // required
        {
            // KeySchemaElement
            AttributeName: 'pk', // required
            KeyType: 'HASH' // required
        },
        {
            // KeySchemaElement
            AttributeName: 'sk', // required
            KeyType: 'RANGE' // required
        }
    ],
    LocalSecondaryIndexes: [
        // LocalSecondaryIndexList
        {
            // LocalSecondaryIndex
            IndexName: 'nameIndex', // required
            KeySchema: [
                // required
                {
                    AttributeName: 'pk', // required
                    KeyType: 'HASH' // required
                },
                {
                    AttributeName: 'name', // required
                    KeyType: 'RANGE' // required
                }
            ],
            Projection: {
                // Projection
                ProjectionType: 'ALL'
            }
        }
    ],
    GlobalSecondaryIndexes: [
        // GlobalSecondaryIndexList
        {
            // GlobalSecondaryIndex
            IndexName: 'ageIndex', // required
            KeySchema: [
                // required
                {
                    AttributeName: 'age', // required
                    KeyType: 'HASH' // required
                },
                {
                    AttributeName: 'sk', // required
                    KeyType: 'RANGE' // required
                }
            ],
            Projection: {
                ProjectionType: 'ALL'
            }
        }
    ],
    BillingMode: 'PAY_PER_REQUEST',
    TableClass: 'STANDARD'
};

const command = new CreateTableCommand(input);

(async () => await send(command))();
