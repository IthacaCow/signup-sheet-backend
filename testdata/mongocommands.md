## Import json into mongodb ( preferred )

```
mongoimport -d GIS -c users --type json --file gis_test_users.json --jsonArray
```

## Import csv into mongodb

** Note that importing by csv might cause problems **

** Mongo can possibly parse number-id into number, instead of string **

** Please use the script at `testdata/csv2json.sh` to convert `csv` to `json`

```
mongoimport -d GIS -c users --type csv --file gis_test_users.csv --headerline
```

## Mongo Shell Command

```

# use the gis database
> use GIS

# find all records in collection 'users'
> db.users.find()

# delete all records in collection 'users'
> db.users.remove({})

# remove the whole collection 'users'
> db.users.drop()





