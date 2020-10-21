from django.test import TestCase
from django.contrib.auth import get_user_model
from rest_framework.test import APIClient


from .models import Tweet

# Create your tests here.

User = get_user_model()

class TweetTestCase(TestCase):
    def setUp(self):
       self.user =  User.objects.create_user(username='abc', password = 'abc')
       self.userb =  User.objects.create_user(username='def', password = 'abc')
       Tweet.objects.create(content="my first tweet", user=self.user)
       Tweet.objects.create(content="my Second tweet", user=self.user)
       Tweet.objects.create(content="my Third tweet", user=self.userb)
       self.currentCount = Tweet.objects.all().count()
    
    # def test_user_created(self):
    #     # user = User.objects.get(username='abc')
    #     self.assertEqual(self.user.username,'abc')
    
    def test_tweet_created(self):
        tweet_obj = Tweet.objects.create(content="my Fourth tweet", user=self.user)
        self.assertEqual(tweet_obj.id,4)
        self.assertEqual(tweet_obj.user,self.user)
        

    def get_client(self):
        client = APIClient()
        client.login(username=self.user.username,password='abc')  
        return client     

    def test_tweet_list(self):
        client = self.get_client()
        response = client.get("/api/babbles/")
        self.assertEqual(response.status_code,200)
        self.assertEqual(len(response.json()),3)
        # sprint(response.json())

    # def test_tweet_list(self):
    #     client = self.get_client()
    #     response = client.get("/api/babbles/")
    #     self.assertEqual(response.status_code,200)
        # self.assertEqual(len(response.json()),3)
        # print(response.json())

    def test_action_like(self):
        client = self.get_client()
        response = client.post("/api/babbles/action",{"id":1,"action":"like"})
        self.assertEqual(response.status_code,200)
        like_count = response.json().get('likes')
        self.assertEqual(like_count,1)

    def test_action_unlike(self):
        client = self.get_client()
        response = client.post("/api/babbles/action",{"id":1,"action":"like"})
        self.assertEqual(response.status_code,200)
        response = client.post("/api/babbles/action",{"id":1,"action":"unlike"})
        self.assertEqual(response.status_code,200)
        like_count = response.json().get('likes')
        self.assertEqual(like_count,0)

    def test_action_retweet(self):
        client = self.get_client()
        currentCount = self.currentCount
        response = client.post("/api/babbles/action",{"id":2,"action":"retweet"})
        self.assertEqual(response.status_code,201)
        data = response.json()
        new_tweet_id = data.get("id")
        self.assertNotEqual(2,new_tweet_id)
        self.assertEqual(currentCount+1,new_tweet_id)
    
    def test_tweet_create_api_view(self):
        response_data = {"content":"This is my test Tweet"}
        client = self.get_client()
        response = client.post("/api/babbles/create",response_data)
        self.assertEqual(response.status_code,201)
        response_data = response.json()
        new_tweet_id = response_data.get("id")
        self.assertEqual(self.currentCount+1,new_tweet_id)

    def test_tweet_detail_api_view(self):
        client = self.get_client()
        response = client.get("/api/babbles/3")
        data = response.json()
        self.assertEqual(response.status_code,200)
        data = response.json()
        _id = data.get("id")
        self.assertEqual(_id,3)

    def test_tweet_delete_api_view(self):
        client = self.get_client()
        response = client.delete("/api/babbles/1/delete")
        self.assertEqual(response.status_code,200)
        response = client.delete("api/babbles/1/delete")
        self.assertEqual(response.status_code,404)
        # print(response)
        # response_unauth = client.delete("api/babbles/3/delete") 
        # self.assertEqual(response_unauth.status_code,404)


        



        



       


    

