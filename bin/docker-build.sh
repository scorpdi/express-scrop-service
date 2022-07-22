docker build --rm -t service-api ../

docker run -d -p 3000:3000 --name service-api service-api