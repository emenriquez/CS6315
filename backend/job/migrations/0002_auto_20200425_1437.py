# Generated by Django 3.0.5 on 2020-04-25 14:37

from django.conf import settings
from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    initial = True

    dependencies = [
        ('job', '0001_initial'),
        migrations.swappable_dependency(settings.AUTH_USER_MODEL),
        ('contractor', '0002_contractor_skill'),
    ]

    operations = [
        migrations.AddField(
            model_name='job',
            name='clientID',
            field=models.ForeignKey(on_delete=django.db.models.deletion.DO_NOTHING, to=settings.AUTH_USER_MODEL, to_field='username'),
        ),
        migrations.AddField(
            model_name='job',
            name='contractorID',
            field=models.ForeignKey(on_delete=django.db.models.deletion.DO_NOTHING, to='contractor.Contractor'),
        ),
    ]
