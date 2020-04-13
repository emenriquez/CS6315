# Generated by Django 3.0.5 on 2020-04-13 19:04

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='City',
            fields=[
                ('city', models.CharField(max_length=50, primary_key=True, serialize=False)),
            ],
        ),
        migrations.CreateModel(
            name='Skill',
            fields=[
                ('skillType', models.CharField(max_length=50, primary_key=True, serialize=False)),
            ],
        ),
        migrations.CreateModel(
            name='Contractor',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('firstName', models.CharField(max_length=50)),
                ('lastName', models.CharField(max_length=50)),
                ('city', models.ForeignKey(default='Edinburg', on_delete=django.db.models.deletion.CASCADE, to='contractor.City')),
                ('skill', models.ManyToManyField(to='contractor.Skill')),
            ],
        ),
    ]
