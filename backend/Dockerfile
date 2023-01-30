from python:latest

ADD . .

RUN pip install Django
RUN pip install djangorestframework
RUN pip install django-allauth
RUN python -m pip install django-cors-headers
RUN pip install requests
RUN pip install beautifulsoup4
RUN pip install Pillow
RUN pip install lxml


CMD ["python" , "./manage.py" ]