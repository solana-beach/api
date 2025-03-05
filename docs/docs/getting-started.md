# Getting Started

Thanks for your interest in the Solana Beach API.

## Request an API-Key

To receive a key please join our [Telegram Group](https://t.me/+UW04VHylcMdlZmUy) and send a DM to one of the team members.

## Accessing the API

Our REST-API servers are available under the Base URL `https://api.solanabeach.io/v1`.

Your requests must use the HTTP `GET` method and must include a `Accept: application/json` and `Authorization: Bearer {YOUR-API-KEY}` header.

## Usage Limits

The two tables below show the rate limit restrictions and how you can trace and throttle your consumption.

| Rate Limiter | Limit | Relevance |
| ----------- | ----- | ------- |
| Standard    | 100 requests / 10 seconds | This rate limiter counts every request |
| On-Demand   | 600 requests / 20 minutes | This rate limiter counts every request that triggers a call to an external data provider |


| Response Header    | Relevance | 
| -------- | ------- |
| Solana-Beach-Standard-Credits-Remaining  | You can use this value to throttle your scripts |
| Solana-Beach-Standard-Credits-Consumed   | You can use this value to trace your consumption |
| Solana-Beach-On-Demand-Credits-Remaining   | You can use this value to throttle your scripts |
| Solana-Beach-On-Demand-Credits-Consumed   | You can use this value to trace your consumption |

## Error Response

If the HTTP response status code reports an error the response schema will look like this:
```
{
  "err": "string"
}
```