# Validators Data API

This API provides endpoints to fetch validator-related data, including skip rates, staking yield, node versions, and a paginated list of validators. All responses are cached for 30 seconds.


## **Skip Rates**
`GET /skip-rates`

Returns skip rate data for validators.

<details>
<summary>Response Schema</summary>

```json
{
    "skipRate": 0,
    "stakeWeightedSkipRate": 0
}
```
</details>

## **Staking Yield**
`GET /staking-yield`

Returns staking yield data.

<details>
<summary>Response Schema</summary>

```json
{
    "inflationRate": 0,
    "effectiveInflationRate": 0,
    "inflationRewardsApy": 0,
    "blockRewardsApy": 0
}
```
</details>

## **Node Versions**
`GET /node-versions`

Returns node version distribution data.

<details>
<summary>Response Schema</summary>

```json
[
    {
        "version": "string",
        "stake": "number"
    }
]
```
</details>

## **Validator List**
`GET /validator-list`

Returns a paginated list of validators.

<details>
<summary>Query Parameters</summary>

| Parameter | Description | Default | Max |
|-----------|-------------|---------|-----|
| offset    | Starting position in the validator list | 0 | - |
| limit     | Maximum number of validators to return | 50 | 100 |
</details>

<details>
<summary>Response Schema</summary>

```json
{
  "validators": [
    {
      "votePubkey": "string",
      "name": "string",
      "iconUrl": "string",
      "version": "string",
      "activatedStake": "number",
      "stakeAccounts": "number",
      "commission": 0,
      "lastVote": "number",
      "delinquent": "true | false"
    }
  ],
  "pagination": {
    "total": "number",
    "offset": "number",
    "limit": "number"
  }
}
```
</details>

## Error Responses

All endpoints return the following error response in case of failure:

```json
{
  "error": "string"
}
```
