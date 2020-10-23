# Babble -A social media app 

It is a microblogging social media app similar to twitter. Backend is developed using **_Django and REST Framework_** and frontend is developed using **_ReactJS and BootStrap_**

## Business Logic
### Users
* **Register:** Create new User 
* **Login:** SignIn into existing account 
* **Follow:** Follow other users

### Posts
* **Create Post** Create new Post 
* **Like** Like an existing Post 
* **Unlike** Unlike A liked post
* **Retweet** ReTweet Someone Else's or older post
* **View** View History or parent post of reTweet

### Profiles
* **Bio** Write an introduction about yourself 
* **Location** Mention Your Country or Hometown 


## API Documentation 

1. `GET /api/babbles` 
for retrieving tweets
2. `POST /api/babbles/create` 
for creating a post
3. `POST /login` 
Login into existing account
4. `POST /register` 
Register new user
5. `POST global/` 
See all the Tweets 
6. `POST r'api/profiles?/`
Check praticular profile

## Project Structure

    ├── accounts
          ├── admin.py
          ├── apps.py
          ├── migrations
          ├── models.py
          ├── tests.py
          └── views.py
    ├── babble_django
          ├── __init__.py
          ├── rest_api
          ├── settings.py
          ├── urls.py
          └── wsgi.py
    ├── babble-react
          ├── build
          ├── node_modules
          ├── package.json
          ├── package-lock.json
          ├── public
          ├── README.md
          └── src
    ├── babbles
          ├── admin.py
          ├── api
          ├── apps.py
          ├── forms.py
          ├── __init__.py
          ├── migrations
          ├── models.py
          ├── __pycache__
          ├── serializers.py
          ├── tests.py
          └── views.py
    ├── profiles
          ├── admin.py
          ├── api
          ├── apps.py
          ├── forms.py
          ├── __init__.py
          ├── migrations
          ├── models.py
          ├── __pycache__
          ├── serializers.py
          ├── tests.py
          ├── urls.py
          └── views.py
              ├── static
              ├── static-root
              └── templates

Special thanks to [Justin](https://www.codingforentrepreneurs.com/) for his amazing and detailed tutorials 
