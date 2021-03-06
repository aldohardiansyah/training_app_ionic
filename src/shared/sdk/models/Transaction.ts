/* tslint:disable */

declare var Object: any;
export interface TransactionInterface {
  "accountId": number;
  "type": string;
  "amount": number;
  "date": Date;
  "id"?: number;
}

export class Transaction implements TransactionInterface {
  "accountId": number;
  "type": string;
  "amount": number;
  "date": Date;
  "id": number;
  constructor(data?: TransactionInterface) {
    Object.assign(this, data);
  }
  /**
   * The name of the model represented by this $resource,
   * i.e. `Transaction`.
   */
  public static getModelName() {
    return "Transaction";
  }
  /**
  * @method factory
  * @author Jonathan Casarrubias
  * @license MIT
  * This method creates an instance of Transaction for dynamic purposes.
  **/
  public static factory(data: TransactionInterface): Transaction{
    return new Transaction(data);
  }
  /**
  * @method getModelDefinition
  * @author Julien Ledun
  * @license MIT
  * This method returns an object that represents some of the model
  * definitions.
  **/
  public static getModelDefinition() {
    return {
      name: 'Transaction',
      plural: 'Transactions',
      path: 'Transactions',
      idName: 'id',
      properties: {
        "accountId": {
          name: 'accountId',
          type: 'number'
        },
        "type": {
          name: 'type',
          type: 'string'
        },
        "amount": {
          name: 'amount',
          type: 'number'
        },
        "date": {
          name: 'date',
          type: 'Date'
        },
        "id": {
          name: 'id',
          type: 'number'
        },
      },
      relations: {
      }
    }
  }
}
