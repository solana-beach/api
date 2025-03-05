# Dashboard Data API

## Transactions Per Second
`GET /transactions-per-second`

Returns vote and user transactions per second. Data is cached for 60 seconds.

<details>
<summary>Response Schema</summary>

```json
{
  "voteTransactionsPerSecond": 0,
  "userTransactionsPerSecond": 0
}
```
</details>

<details>
<summary>Example Response</summary>

```json
{
  "vote_tps": 1421,
  "user_tps": 522
}
```
</details>

## Epoch Info
`GET /epoch-info`

Returns current epoch information. Data is cached for 10 seconds.

<details>
<summary>Response Schema</summary>

```json
{
    "absoluteSlot": 0,
    "blockHeight": 0,
    "epoch": 0,
    "slotIndex": 0,
    "slotsInEpoch": 0,
    "transactionCount": 0,
    "epochStartTime": 0,
    "slotTime": 0
}
```
</details>

<details>
<summary>Example Response</summary>


```json
{
    "absoluteSlot": 324510109,
    "blockHeight": 302774022,
    "epoch": 751,
    "slotIndex": 78109,
    "slotsInEpoch": 432000,
    "transactionCount": 379341991551,
    "epochStartTime": 1741054506,
    "slotTime": 0.3965150878909522
}
```
</details>


## Supply Breakdown
`GET /supply-breakdown`

Returns current supply and stake breakdown. Data is cached for 60 seconds.

<details>
<summary>Response Schema</summary>


```json
{
    "supply": {
        "circulating": 0,
        "nonCirculating": 0,
        "total": 0
    },
    "stake": {
        "effective": 0,
        "activating": 0,
        "deactivating": 0
    }
}
```
</details>

<details>
<summary>Example Response</summary>


```json
{
    "supply": {
        "circulating": 507656258562928060,
        "nonCirculating": 87629433862916500,
        "total": 595285692425844600
    },
    "stake": {
        "effective": 376277077191890240,
        "activating": 3212515490252653,
        "deactivating": 7122369354610246
    }
}
```
</details>


## Instruction Chart
`GET /instruction-chart`

Returns information about user and vote instructions. Data is cached for 60 seconds.

<details>
<summary>Response Schema</summary>


```json
[
    {
        "time": "string",
        "userInstructions": "string",
        "voteInstructions": "string"
    }
]
```
</details>

<details>
<summary>Example Response</summary>


```json
[
    {
        "time": "2025-03-04T10:52:00.000Z",
        "userInstructions": "132041",
        "voteInstructions": "71402"
    },
    {
        "time": "2025-03-04T10:51:00.000Z",
        "userInstructions": "420620",
        "voteInstructions": "199165"
    },
    // ...
]
```
</details>

