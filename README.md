# <img src="solanabeach.svg" height="70px"> Solana Beach API
Hi, thanks for your interest in the Solana Beach API.

## Please request an API-Key
To receive a key please join our [Telegram Group](https://t.me/+UW04VHylcMdlZmUy) and send a DM to one of the team members.

The two tables below show the rate limit restrictions and how you can trace and throttle your consumption.

| Rate Limiter | Limit | Relevance |
| ----------- | ----- | ------- |
| Standard    | 100 requests / 10 seconds | This rate limiter counts every request |
| On-Demand   | 600 requests / 20 minutes | This rate limiter counts every request that<br> triggers a call to an external data provider |


| Response Header    | Relevance | 
| -------- | ------- |
| Solana-Beach-Standard-Credits-Remaining  | You can use this value to throttle your scripts |
| Solana-Beach-Standard-Credits-Consumed   | You can use this value to trace your consumption |
| Solana-Beach-On-Demand-Credits-Remaining   | You can use this value to throttle your scripts |
| Solana-Beach-On-Demand-Credits-Consumed   | You can use this value to trace your consumption |

## Documentation
Our REST-API servers are available under the Base URL `https://api.solanabeach.io/v1`.

Your requests must use the HTTP `GET` method and must include a `Accept: application/json` and `Authorization: YOUR-API-KEY` header.

Here are the [endpoints](https://app.swaggerhub.com/apis-docs/V2261/solanabeach-backend_api/0.0.1). Important notice: Some endpoints are currently broken and we are working on repairing them.

## We appreciate your delegation
If you're satisfied with this API consider choosing the [Solana Beach Validator](https://solanabeach.io/validator/BeachiopjxQxL7CaHNSZsynApiZCKx9QFVtcWNz3jDBo) next time you are confronted with the decision where to delegate.
