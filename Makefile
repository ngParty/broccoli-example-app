NODE_MODULES_BIN=node_modules/.bin

all: serve

setup:
	npm install
	jspm install

serve:
	${NODE_MODULES_BIN}/broccoli serve

dist:
	${NODE_MODULES_BIN}/broccoli build dist
	${NODE_MODULES_BIN}/jspm bundle-sfx index dist/index.js

clean:
	${NODE_MODULES_BIN}/rimraf dist

.PHONY: all setup serve dist clean
