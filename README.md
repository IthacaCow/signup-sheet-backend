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
* Return: Status

### get_specific_record
* Path: `/signup/record/`
* REST method: `GET`
* Parameter: ObjectID (String)
* Parameter: Access Token (String)
* Return: The record (JSON)

### get_all_records
* Path: `/signup/records`
* REST method: `GET`
* Parameter: Access Token (String)
* Return: The records (JSON)


## For cardreader
### signup
* Path: `/api/signup/`
* REST method: `GET`
* Parameter: Card ID    
* Return: Temporary access token, Object ID

### get_user_info
* Path: `/api/signup/user`
* REST method: `GET`
* Parameter: Temporary access token   
* Parameter: Object ID
* Return: base64 encoded image, first name, last name    

### JSON format
```
{ 
  'valid': true,
  'due': false,
  'cardId': 123456, 
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
