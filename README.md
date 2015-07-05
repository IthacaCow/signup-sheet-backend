# signup-sheet-backend
A web backend for the GIS signup system

## API
### signup
* Parameter: Card ID    
* Return: Temporary access token

### get_user_info
* Parameter: Temporary access token   
* Return: base64 encoded image, first name, last name    

## Database
### Fields
1. Card ID
2. First name
3. Last name
4. Avatar (base64 encoded)
