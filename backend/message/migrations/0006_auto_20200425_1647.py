# Generated by Django 3.0.5 on 2020-04-25 16:47

from django.conf import settings
from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        migrations.swappable_dependency(settings.AUTH_USER_MODEL),
        ('message', '0005_auto_20200425_1619'),
    ]

    operations = [
        migrations.AlterField(
            model_name='message',
            name='clientID',
            field=models.ForeignKey(on_delete=django.db.models.deletion.DO_NOTHING, to=settings.AUTH_USER_MODEL, to_field='username'),
        ),
    ]