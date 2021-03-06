# Generated by Django 3.0.5 on 2020-04-25 16:19

from django.conf import settings
from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        migrations.swappable_dependency(settings.AUTH_USER_MODEL),
        ('contractor', '0004_auto_20200425_1457'),
        ('message', '0004_auto_20200425_1540'),
    ]

    operations = [
        migrations.AlterField(
            model_name='message',
            name='clientID',
            field=models.ForeignKey(on_delete=django.db.models.deletion.DO_NOTHING, to=settings.AUTH_USER_MODEL),
        ),
        migrations.AlterField(
            model_name='message',
            name='contractorID',
            field=models.ForeignKey(on_delete=django.db.models.deletion.DO_NOTHING, to='contractor.Contractor'),
        ),
    ]
