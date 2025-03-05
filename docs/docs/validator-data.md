# Validator Data API

This API provides endpoints to fetch validator-related data, including stake accounts, block rewards, success rates, and historical data. All responses are paginated and cached for 30 seconds.

## **Stake Accounts**
`GET /validator/:address/stake-accounts`

Returns a paginated list of stake accounts for a given validator.

<details>
<summary>Query Parameters</summary>

| Parameter | Description | Default | Max |
|-----------|-------------|---------|-----|
| address    | The validator's vote public key | - | - |
| offset    | Starting point for pagination | 0 | - |
| limit     | Maximum number of results to return | 10 | 1000 |
</details>


<details>
<summary>Response Schema</summary>

```json
{
  "stakeAccounts": [
    {
      "stake_pubkey": "string",
      "stake_authority": "string",
      "withdraw_authority": "string",
      "state": 0,
      "stake": 0,
      "activation_epoch": 0,
      "deactivation_epoch": 0,
      "last_update": "string"
    }
  ],
  "pagination": {
    "total": 0,
    "offset": 0,
    "limit": 0
  }
}
```
</details>

## **Block Rewards History**
`GET /validator/:nodepubkey/block-rewards-history`

Returns historical block rewards data for a specific validator.

<details>
<summary>Query Parameters</summary>

| Parameter | Description | Default | Max |
|-----------|-------------|---------|-----|
| nodepubkey    | The validator's node public key | - | - |
| offset    | Starting point for pagination | 0 | - |
| limit     | Maximum number of results to return | 10 | 1000 |
</details>

<details>
<summary>Response Schema</summary>

```json
{
  "history": [
    {
      "epoch": 0,
      "blocks": 0,
      "fees": 0
    }
  ],
  "pagination": {
    "total": 0,
    "offset": 0,
    "limit": 0
  }
}
```
</details>

## **Success Rate History**
`GET /validator/:nodepubkey/success-rate-history`

Returns historical success rate data for a specific validator.

<details>
<summary>Query Parameters</summary>

| Parameter | Description | Default | Max |
|-----------|-------------|---------|-----|
| nodepubkey    | The validator's node public key | - | - |
| offset    | Starting point for pagination | 0 | - |
| limit     | Maximum number of results to return | 10 | 1000 |
</details>

<details>
<summary>Response Schema</summary>

```json
{
  "history": [
    {
      "epoch": 0,
      "slots": 0,
      "blocks": 0,
      "success_rate": 0
    }
  ],
  "pagination": {
    "total": 0,
    "offset": 0, 
    "limit": 0
  }
}
```
</details>

## **Stake Accounts History**
`GET /validator/:votepubkey/stake-accounts-history`

Returns historical stake accounts data for a specific validator.

<details>
<summary>Query Parameters</summary>

| Parameter | Description | Default | Max |
|-----------|-------------|---------|-----|
| votepubkey    | The validator's vote public key | - | - |
| offset    | Starting point for pagination | 0 | - |
| limit     | Maximum number of results to return | 10 | 1000 |
</details>

<details>
<summary>Response Schema</summary>

```json
{
  "history": [
    {
      "epoch": 0,
      "stake_accounts": 0
    }
  ],
  "pagination": {
    "total": 0,
    "offset": 0,
    "limit": 0
  }
}
```
</details>

## **Stake History**
`GET /validator/:votepubkey/stake-history`

Returns historical stake data for a specific validator.

<details>
<summary>Query Parameters</summary>

| Parameter | Description | Default | Max |
|-----------|-------------|---------|-----|
| votepubkey    | The validator's vote public key | - | - |
| offset    | Starting point for pagination | 0 | - |
| limit     | Maximum number of results to return | 10 | 1000 |
</details>

<details>
<summary>Response Schema</summary>

```json
{
  "history": [
    {
      "epoch": 0, 
      "activated_stake": 0
    }
  ],
  "pagination": {
    "total": 0,
    "offset": 0,
    "limit": 0
  }
}
```
</details>


## **Cluster Block Rewards History**
`GET /cluster-block-rewards-history`

Returns aggregated block rewards history for the entire cluster.

<details>
<summary>Query Parameters</summary>

| Parameter | Description | Default | Max |
|-----------|-------------|---------|-----|
| offset    | Starting point for pagination | 0 | - |
| limit     | Maximum number of results to return | 10 | 1000 |
</details>

<details>
<summary>Response Schema</summary>

```json
{
  "history": [
    {
      "epoch": 0,
      "blocks": 0,
      "fees": 0
    }
  ],
  "pagination": {
    "total": 0,
    "offset": 0,
    "limit": 0
  }
}
```
</details>

## **Cluster Success Rate History**
`GET /cluster-success-rate-history`

Returns aggregated success rate history for the entire cluster.

<details>
<summary>Query Parameters</summary>

| Parameter | Description | Default | Max |
|-----------|-------------|---------|-----|
| offset    | Starting point for pagination | 0 | - |
| limit     | Maximum number of results to return | 10 | 1000 |
</details>

<details>
<summary>Response Schema</summary>

```json
{
  "history": [
    {
      "epoch": 0,
      "slots": 0,
      "blocks": 0,
      "success_rate": 0
    }
  ],
  "pagination": {
    "total": 0,
    "offset": 0,
    "limit": 0
  }
}
```
</details>

## **Validator Details**
`GET /validator/:votepubkey`

Returns general details about a specific validator.

<details>
<summary>Query Parameters</summary>

| Parameter | Description |
|-----------|-------------|
| votepubkey    | The validator's vote public key |
</details>

<details>
<summary>Response Schema</summary>

```json
{
    "votePubkey": "string",
    "nodePubkey": "string",
    "commission": 0,
    "lastVote": "number",
    "delinquent": "true | false",
    "name": "string",
    "iconUrl": "string",
    "website": "string",
    "details": "string",
    "version": "string",
    "continent": "string",
    "country": "string",
    "region": "string",
    "city": "string",
    "asn": 0,
    "asnOrganization": "string"
}
```
</details>

## Error Responses

All endpoints return the following error response in case of failure:

```json
{
  "error": "string" // Error message
}
```
