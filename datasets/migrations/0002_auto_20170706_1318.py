# -*- coding: utf-8 -*-
# Generated by Django 1.11 on 2017-07-06 11:18
from __future__ import unicode_literals

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        ('keywords', '0002_remove_keyword_datasets'),
        ('datasets', '0001_initial'),
    ]

    operations = [
        migrations.AddField(
            model_name='dataset',
            name='keywords',
            field=models.ManyToManyField(blank=True, related_name='datasets', to='keywords.Keyword'),
        ),
        migrations.AlterField(
            model_name='dataset',
            name='account',
            field=models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, related_name='datasets', to='accounts.Account'),
        ),
    ]
