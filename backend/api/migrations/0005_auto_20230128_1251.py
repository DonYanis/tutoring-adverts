# Generated by Django 3.2.16 on 2023-01-28 12:51

from django.conf import settings
from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        ('api', '0004_user_address'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='chat',
            name='user1',
        ),
        migrations.RemoveField(
            model_name='chat',
            name='user2',
        ),
        migrations.AddField(
            model_name='chat',
            name='student',
            field=models.ForeignKey(null=True, on_delete=django.db.models.deletion.CASCADE, related_name='student', to=settings.AUTH_USER_MODEL),
        ),
        migrations.AddField(
            model_name='chat',
            name='teacher',
            field=models.ForeignKey(null=True, on_delete=django.db.models.deletion.CASCADE, related_name='teacher', to=settings.AUTH_USER_MODEL),
        ),
    ]
