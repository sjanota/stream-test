.PHONY: install
install: image apply

.PHONY: image
image:
	docker build . -t 127.0.0.1:5000/$(node_name):local
	docker push 127.0.0.1:5000/$(node_name):local

.PHONY: apply
apply:
	kubectl apply -k deployment/local

.PHONY: restart
restart:
	kubectl rollout restart deploy $(node_name)
