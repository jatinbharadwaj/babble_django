"""
WSGI config for babble_django project.

It exposes the WSGI callable as a module-level variable named ``application``.

For more information on this file, see
https://docs.djangoproject.com/en/2.2/howto/deployment/wsgi/
"""

import os

from django.core.wsgi import get_wsgi_application
# Added whitenoise
# from whitenoise.django import DjangoWhiteNoise

os.environ.setdefault('DJANGO_SETTINGS_MODULE', 'babble_django.settings')

application = get_wsgi_application()

# application = DjangoWhiteNoise(get_wsgi_application())
