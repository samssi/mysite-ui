run:
	node_modules/webpack-dev-server/bin/webpack-dev-server.js

run-prod:
	ENV=production node_modules/webpack-dev-server/bin/webpack-dev-server.js

build-docker-image:
	rm -rf dist/
	node_modules/webpack/bin/webpack.js
	docker build -t mysite-ui .

build-docker-prod-image:
	rm -rf dist/
	node_modules/webpack/bin/webpack.js --config webpack.config.prod.js
	docker build -t mysite-ui .

run-docker-image:
	docker run -d -p 8080:80 mysite-ui

run-new-docker-image: build-docker-image run-docker-image
