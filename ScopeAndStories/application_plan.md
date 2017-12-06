# Project Scope and User Stories
## User Roles
* This app will recognize 2 types of user - Admin and User.  

* Admin will have all the rights of a User but will have additional rights such as User creation and manual controls of inventory.

## Value
* This app will serve two main values to the client:

### Inventory Management
* Track inventory for all items client wishes to track (items both for sale and not for sale)

### Point of Sale
* App will have a user interface to handle transactions.  
  * User will be able to add items to a cart and close out sale with the option to print a reciept.
  * Inventory will be automatically managed according to sale.

## User Stories
* As a user, I can sign into the app.
* As an admin, I can create new users.
* As an admin, I can give admin privileges to current users.
* As an admin, I can create and delete inventory item categories.
* As an admin, I can create and delete inventory items.
* As an admin, I can search the inventory by item or category.
* As an admin, I can edit the current status of an item (increment and decrement count, change price, etc).
* As an admin, I can specify a default tax rate to be used for orders.
* As an admin, I can mark that an item needs to be ordered.
* As an admin, I can mark that an item has been ordered.
* As an admin, I can mark that an item has been recieved (and no longer needs to be ordered).
* As an admin, I can view all items that need to be ordered.
* As an admin, I can add an expected delivery date to an item.
* As an admin, I can run sales reports for various date periods.
* As a user, I can search (by item or category) and view details for all items.
* As a user, I can create a new order.
* As a user, I can view current and past orders.
* As a user, I can edit an order.
* As a user, I can delete an order.
* As a user, I can complete an order (sold).
* As a user, I can print a reciept from an order.
* As a user, I can edit the tax rate of the order.

## Item (SKU) Properties
* Name (string)
* ID (number or string?)
* Sellable (boolean) - Is product for sale?
* Retail Price (number)
* Order Price (number)
* Manufacturer (string)
* Description (string)
* Size (string)
* Tax Exempt (boolean)
* Count (number)
* ReorderCount (number) - automatically trigger OrderNeeded
* OrderNeeded (boolean)
* OrderPlaced (boolean)
* Backordered (boolean)
* ExpectedDelivery (date)