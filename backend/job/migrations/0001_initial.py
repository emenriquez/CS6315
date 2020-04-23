# Generated by Django 3.0.5 on 2020-04-22 20:39

from django.conf import settings
from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    initial = True

    dependencies = [
        ('contractor', '0004_auto_20200421_2154'),
        migrations.swappable_dependency(settings.AUTH_USER_MODEL),
    ]

    operations = [
        migrations.CreateModel(
            name='Job',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('clientNotes', models.TextField(default='No details provided', max_length=10000)),
                ('contractorNotes', models.TextField(default='No details provided', max_length=10000)),
                ('dateRequested', models.DateTimeField(auto_now_add=True, verbose_name='Date Joined')),
                ('contractorAccepted', models.BooleanField(default=False)),
                ('clientConfirmed', models.BooleanField(default=False)),
                ('complete', models.BooleanField(default=False)),
                ('clientID', models.ForeignKey(on_delete=django.db.models.deletion.DO_NOTHING, to=settings.AUTH_USER_MODEL)),
                ('contractorID', models.ForeignKey(on_delete=django.db.models.deletion.DO_NOTHING, to='contractor.Contractor')),
            ],
        ),
    ]