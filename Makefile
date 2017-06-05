run:
	webpack-dev-server

run-prod:
	ENV=production webpack-dev-server

build-docker-image:
	rm -rf dist/
	webpack
	docker build -t mysite/mysite-ui .

build-docker-prod-image:
	rm -rf dist/
	NODE_ENV=production webpack
	docker build -t mysite/mysite-ui .

run-docker-image:
	docker run -d -p 8080:80 mysite/mysite-ui

run-new-docker-image: build-docker-image run-docker-image