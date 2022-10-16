from django.db import models
from cloudinary.models import CloudinaryField

# Create your models here.
class Event(models.Model):
    image = CloudinaryField('image')
    name = models.CharField(max_length = 100)
    description = models.TextField(max_length = 2000)
    tel_number = models.IntegerField(null=True)
    email = models.EmailField()

    def save_event(self):
        self.save
    
    def update_event(self):
        self.save

    def delete_event(self):
        self.delete

    def __str__(self):
        return self.name
