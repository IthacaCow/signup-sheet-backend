# signup-sheet-backend
A backend for the GIS signup system
The backend is divided into two part: API, Web
* API: Interface for the card-reader
* Web: Interface for the web admin page


# APIs
## For web interface
### delete_record
* Path: `/signup/record/`
* REST method: `DELETE`
* Parameter: ObjectID (String)
* Parameter: Access Token (String)
* Return: None

### get_specific_record
* Path: `/signup/record/`
* REST method: `GET`
* Parameter: ObjectID (String)
* Parameter: Access Token (String)
* Return: The record (JSON)
* Example return:
```
{ 
	"_id": 123456789, 
	"user": { 
		"_id": 2498024, 
		"avatar": "abcdefg==",
		"name": [ "John", "Doe" ] 
  },
	"event": {
		"_id": 03509358, 
		"start": "2015-07-15 08:00:00"	
		"end":   "2015-07-15 12:00:00"	
  }
}
```
### get_all_records
* Path: `/signup/records`
* REST method: `GET`
* Parameter: Access Token (String)
* Return: The records (JSON)
```
{
	{ 
	  "_id": 123456789, 
	  "user": { 
			"_id": 2498024, 
			"avatar": "abcdefg==",
			"name": [ "John", "Doe" ] 
	  },
	  "event": {
			"_id": 03509358, 
			"start": "2015-07-15 08:00:00"	
			"end":   "2015-07-15 12:00:00"	
	  }
	},
	{ 
	  "_id": 123450790, 
	  "user": { 
			"_id": 0553959, 
			"avatar": "abcdefg==",
			"name": [ "John", "Felix" ] 
	  },
	  "event": {
			"_id": 09503958, 
			"start": "2015-07-14 08:00:00"	
			"end":   "2015-07-14 12:00:00"	
	  }
	}

}
```

### get_all_records_in_event
get all records of a specific event
* Path: `/signup/records/event`
* REST method: `GET`
* Parameter: Access Token (String)
* Parameter: ObjectID of the specific event (String)
* Return: The records (JSON)
* Example return:
```
{
	{ 
	  "_id": 123456789, 
	  "user": { 
			"_id": 2498024, 
			"avatar": "abcdefg==",
			"name": [ "John", "Doe" ] 
	  }
	},
	{ 
	  "_id": 123450790, 
	  "user": { 
			"_id": 0553959, 
			"avatar": "abcdefg==",
			"name": [ "John", "Felix" ] 
	  }
	}

}
```
### get_all_events
* Path: `/signup/records`
* REST method: `GET`
* Parameter: Access Token (String)
* Return: The records (JSON)
* Example return:
```
{
	[ 
	  {
			"_id": 03509358, 
			"start": "2015-07-15 08:00:00"	
			"end":   "2015-07-15 12:00:00"	
	  },

	  {
			"_id": 03944249, 
			"start": "2015-07-17 08:00:00"	
			"end":   "2015-07-17 12:00:00"	
	  }
	]
}
```
### admin_login
* Path: `/admin/login`
* REST method: `POST`
* Parameter: the admin password (String)
* Return: Access Token (String)
* Example return:
```
{
	'token': 50935afds9f8,
}
```



## For cardreader
### signup
Signing up a user at a specific event
* Path: `/api/signup/`
* REST method: `GET`
* Parameter: Card ID    
* Parameter: Event ID
* Return: Temporary access token, Object ID
* Example return:
```
{
	'token': 50935afds9f8,
	'_id': 4982042904,
	'valid': true,
	'due': false
}
```


### get_user_info
This API is supposed to be used in companion with the previous one, 
which will return the information of the user who signs up successfully.
* Path: `/api/signup/user`
* REST method: `GET`
* Parameter: Temporary access token   
* Parameter: Object ID
* Return: base64 encoded image, first name, last name    
* Example return:
```
{ 
  'avatar': 'abcdefg==',
  'name': [ 'John', 'Doe' ] 
}
```    

## Database
### Lookup table
1. Card ID
2. First name
3. Last name
4. Avatar (base64 encoded)

### Signup sheets
1. CardID
2. Signed
3. Timestamp (year-month-day-hour-minute-second)
