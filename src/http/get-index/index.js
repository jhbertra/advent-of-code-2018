let arc = require("@architect/functions")
let url = arc.http.helpers.url

exports.handler = async function http(req) {
    var form = `
    <h1>Advent of Code 2018 - Serverless</h1>`

	return {
		type: "text/html",
		body: form
	}
}