from django.views.generic import View
from django.http import HttpResponse
from django.conf import settings
import os
from django.conf.urls import url
from rest_framework_swagger.views import get_swagger_view

class ReactAppView(View):

    def get(self, request):
        try:
            with open(os.path.join(str(settings.ROOT_DIR), 'frontend','build', 'index.html')) as file:
                return HttpResponse(file.read())

        except:
            return HttpResponse(
                """
                index.html not found! build your React app!!
                """,
            status=501,

            )



schema_view = get_swagger_view(title='WoW API')

urlpatterns = [
    url(r'^swagger/', schema_view)
]