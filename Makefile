.PHONY: image
image:
	docker build . -t 127.0.0.1:5000/stream-test:local
	docker push 127.0.0.1:5000/stream-test:local
