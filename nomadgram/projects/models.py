from django.db import models
from nomadgram.users import models as user_models
from taggit.managers import TaggableManager

# Create your models here.


class Proposal(models.Model):
    creator = models.ForeignKey(user_models.User, models.DO_NOTHING, blank=True, null=True)
    title = models.CharField(max_length=100)
    description = models.CharField(max_length=5000)
    image_url = models.FileField(blank=True, null=True)
    start_price = models.CharField(max_length=20)
    end_price = models.CharField(max_length=20)
    duration = models.CharField(max_length=100)
    creation_date = models.DateTimeField(auto_now=True)
    status = models.IntegerField(default=0) # 0=doing(participate volunteer), 1=doing(stop participate volunteer), 2=finish project
    buy_or_sell = models.IntegerField(default=0) #0=buy(request work), 1=sell(earn money)
    tags = TaggableManager()

    class Meta:
        #managed = False
        db_table = 'proposal'

    def __str__(self):
        return self.title



