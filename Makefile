run:
	webpack-dev-server

run-prod:
	ENV=production webpack-dev-server

build-docker-image:
	webpack
	docker build -t mysite/mysite-ui .

build-docker-prod-image:
	ENV=production webpack
	docker build -t mysite/mysite-ui .

run-docker-image:
	docker run -d -p 8080:80 mysite/mysite-ui

run-new-docker-image: build-docker-image run-docker-image