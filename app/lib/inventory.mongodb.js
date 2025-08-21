const database = 'inventory';
const collection = 'product'

use('database')

db.createCollection(collection);

const productData = [];