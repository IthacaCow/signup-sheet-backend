# signup-sheet-backend
A web backend for the GIS signup system

## API
### signup
* Parameter: Card ID    
* Return: Temporary access token

### get_user_info
* Parameter: Temporary access token   
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
