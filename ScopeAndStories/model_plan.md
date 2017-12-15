# Model Plan

## Item
| Property       | Type            | Required |
|----------------|-----------------|----------|
| name           | String          |          |
| ID             | String          |          |
| manufacturer   | String          |          |
| description    | String          |          |
| size           | String          |          |
| taxExempt      | Boolean         |          |

## ItemCollection
| Property       | Type            | Required |
|----------------|-----------------|----------|
| item           | [Schema.ObjectId] ( Items ) |          |
| user           | Schema.ObjectId ( User ) |          |
| sellable       | Boolean         |          |
| retailPrice    | Number          |          |
| orderPrice     | Number          |          |
| count          | Number          |          |
| reorderedCount | Number          |          |
| orderNeeded    | Boolean         |          |
| orderPlaced    | Boolean         |          |
| backordered    | Boolean         |          |  

## Category
| Property       | Type            | Required |
|----------------|-----------------|----------|
| name           | string          | true     |
| items           | [Schema.ObjectId] ( Items ) | true |

## Sale
| Property | Type | Required |
|----------|------|----------|
| items | [{ item: Schema.ObjectId (Items), count: Number }] | |
| dateSold | Date | |
| cashPaid | Number | |
| taxRate | Number | |

## Order
| Property       | Type            | Required |
|----------------|-----------------|----------|
| user | Schema.ObjectId (User) | |
| item | Schema.ObjectId (Item) | |
| expectedDelivery | Date | |
| count | Number | |
| backordered | Boolean | |
| received | Boolean | |
| defaultTaxRate | Number | |

## User
| Property | Type | Required |
|----------|------|----------|
| username | String | true |
| password | String | true |
| role | String | true |
| admins | [Schema.ObjectId] (Users) | |
| users | [Schema.ObjectId] (Users) | |

