install:
	npm install
start-progression:
	npx babel-node -- src/bin/brain-progression.js
start-gcd:
	npx babel-node -- src/bin/brain-gcd.js
start-calc:
	npx babel-node -- src/bin/brain-calc.js
start-even:
	npx babel-node -- src/bin/brain-even.js
start-games:
	npx babel-node -- src/bin/brain-games.js
publish:
	npm publish
lint:
	npx eslint .
