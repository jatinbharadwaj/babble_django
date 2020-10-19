from django.db import models
import random

class Tweet(models.Model):
    # id = models.AutoField(primary_key=True)
    content = models.TextField()
    image = models.FileField(upload_to='images/',blank=True,null=True)

    def serialize(self):
        return{
            "id": self.id,
            "content": self.content,
            "likes": random.randint(0,200)
        }