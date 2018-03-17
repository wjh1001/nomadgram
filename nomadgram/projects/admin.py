from django.contrib import admin
from . import models

# Register your models here.
@admin.register(models.Proposal)
class ProjectAdmin(admin.ModelAdmin):
    
    list_display_links =(
    )

    search_fields = (
        'creator',
        'title',
        'description',
    )

    list_filter = ()



    # client = models.ForeignKey(user_models.Client, models.DO_NOTHING, blank=True, null=True)
    # title = models.CharField(max_length=100)
    # description = models.CharField(max_length=5000)
    # image_url = models.FileField(blank=True, null=True)
    # start_price = models.CharField(max_length=20)
    # end_price = models.CharField(max_length=20)
    # duration = models.CharField(max_length=100)
    # creation_date = models.DateTimeField(auto_now=True)
    # status = models.IntegerField(default=0)
    # buy_or_sell = 