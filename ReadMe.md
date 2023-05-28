# REST

- RESTful HTTP API
- Representational State Transfer, aka REST
- Architectural style for building scalable web apps

# URL VERB FUNCTIONALITY

"/notes" GET >fetches all resources
"/notes/10" GET >fetches single resource
"/notes" POST >create a new resource
"/notes/10" DELETE >delete a single resource
"/notes/10" PUT >updates single resource
"/notes/10" PATCH >replace single resource

Status codes
200 OK
201 Created
204 No content - request had been fullfilled but no contend had been created

400 Bad Request
401 Unathorized
403 Forbidden
404 Not Found

500 Internal Server Error
504 Gateway Timeout
