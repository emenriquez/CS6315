# Generated by Django 3.0.4 on 2020-04-06 18:38

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        ('contractors', '0002_auto_20200331_2324'),
    ]

    operations = [
        migrations.CreateModel(
            name='Skills',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
            ],
        ),
        migrations.AlterField(
            model_name='contractor',
            name='skills',
            field=models.ForeignKey(default='hk', on_delete=django.db.models.deletion.CASCADE, to='contractors.Skills'),
        ),
    ]
