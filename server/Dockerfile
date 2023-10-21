FROM python:3.9

WORKDIR /app

COPY requirements.txt .

RUN apt-get update
RUN pip install --upgrade pip setuptools \
  pip install --upgrade fastapi uvicorn \
  pip install --no-cache-dir --upgrade -r ./requirements.txt

COPY ./src .

CMD ["uvicorn", "main:app", "--reload", "--host", "0.0.0.0", "--port", "8080"]
