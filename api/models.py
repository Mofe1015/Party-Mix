from email.policy import default
from django.db import models
from django.forms import BooleanField
import string
import random

# Create your models here.

def generateCode():
    length=6

    while True:
        rdmcode = ''.join(random.choices(string.ascii_uppercase, k=length))
        if Room.objects.filter(code=rdmcode).count() == 0:
            break
    return rdmcode

    
class Room(models.Model):
    code = models.CharField(max_length=10, default=generateCode, unique=True)
    host = models.CharField(max_length=50, unique=True)
    guest_can_pause = models.BooleanField(null=False, default=False)
    votes_to_skip = models.IntegerField(null=False, default=1)
    created_at = models.DateTimeField(auto_now_add=True)