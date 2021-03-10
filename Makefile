
.PHONY: api site

api:
	cd api && serverless offline

site:
	cd site && npm start