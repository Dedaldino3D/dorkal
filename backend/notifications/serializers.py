from rest_framework import serializers
from backend.notifications.models import Notifications
from backend.users.serializers import ListUserSerializer
from backend.posts.serializers import SmallPostSerializer


class NotificationSerializer(serializers.ModelSerializer):
    creator = ListUserSerializer(source='not_creator')  # from of action
    to = ListUserSerializer(source='not_to')  # to of action
    post = SmallPostSerializer()  # post for notifications -- n.t see it again

    class Meta:
        model = Notifications
        fields = '__all__'
        read_only_fields = ('created_at', 'updated_at',)
