# Generated by Django 5.0 on 2025-06-20 05:41

from django.db import migrations, models


class Migration(migrations.Migration):
    dependencies = [
        ("members", "0014_alter_season_year"),
    ]

    operations = [
        migrations.AddField(
            model_name="generalsettings",
            name="signup_payment_delta_days",
            field=models.PositiveBigIntegerField(default=7),
        ),
    ]
