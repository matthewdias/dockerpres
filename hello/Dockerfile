FROM python:2.7-slim

WORKDIR /app
COPY . /app

RUN pip install flask flask-cors

EXPOSE 80

CMD ["python", "app.py"]
