.PHONY: install
install:
	-kubectl create ns stream-test
	cd sink && $(MAKE) 
	cd transformer && $(MAKE) 
	cd generator && $(MAKE) 