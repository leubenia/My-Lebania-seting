from pymongo import MongoClient

client = MongoClient('localhost',27017)
db = client.dbsparta

db.users.insert_one({'name':'bobby','age':21})
db.users.insert_one({'name':'qwe','age':22})
db.users.insert_one({'name':'asd','age':23})

all_users = list(db.users.find({}))

same_ages = list(db.users.find({'age':21},{'_id':False}))

print(all_users[0])
print(all_users[0]['name'])

for users in all_users:
    print(users['name'])