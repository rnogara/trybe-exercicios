'''
docker exec -it mongodb_v6 mongosh

use trybnb

db.places.find({'address.country': 'Spain'}).sort({'_id':1})
db.places.find({'address.country': 'United States'}).count()
'''
