from .models import Event
from rest_framework import serializers

class EventSerializer(serializers.ModelSerializer):
    class Meta:
        model = Event
        fields = ("image","name","description","tel_number","email")
