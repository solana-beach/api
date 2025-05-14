# <img src="solanabeach.svg" height="70px"> Solana Beach API

Hi, thanks for your interest in the Solana Beach API.

## 📋 Table of Contents

- [API Key Request](#api-key-request)
- [Rate Limits](#rate-limits)
- [Documentation](#documentation)
  - [Account Data](#account-data) *(v1 API)*
  - [Block Data](#block-data)
  - [Dashboard Data](#dashboard-data)
  - [Transaction Data](#transaction-data) *(partially v1 API)*
  - [Validator Data](#validator-data)
  - [Validators Data](#validators-data)
- [We Appreciate Your Delegation](#we-appreciate-your-delegation)

---

## 🔑 <a id="api-key-request"></a>Please request an API-Key

To receive a key please join our Telegram Group and send a DM to one of the team members.

## ⚙️ <a id="rate-limits"></a>Rate Limits

The two tables below show the rate limit restrictions and how you can trace and throttle your consumption.

| Rate Limiter | Limit | Relevance |
| ----------- | ----- | ------- |
| **Standard**    | 100 requests / 10 seconds | This rate limiter counts every request |
| **On-Demand**   | 600 requests / 20 minutes | This rate limiter counts every request that<br> triggers a call to an external data provider |


| Response Header    | Relevance | 
| -------- | ------- |
| **Solana-Beach-Standard-Credits-Remaining**  | You can use this value to throttle your scripts |
| **Solana-Beach-Standard-Credits-Consumed**   | You can use this value to trace your consumption |
| **Solana-Beach-On-Demand-Credits-Remaining**   | You can use this value to throttle your scripts |
| **Solana-Beach-On-Demand-Credits-Consumed**   | You can use this value to trace your consumption |

---

## 📚 <a id="documentation"></a>Documentation

Our REST-API servers are available under the Base URL `https://api.solanabeach.io/v2`.

Your requests must use the HTTP `GET` method and must include a `Accept: application/json` and `Authorization: Bearer {YOUR-API-KEY}` header.

If the HTTP response status code reports an error the response schema will look like this:

```json
{
  "err": "string"
}
```

---

### 🪪 <a id="account-data"></a>Account Data

> ⚠️ **API Version Note**: All Account Data endpoints use Base URL `https://api.solanabeach.io/v1`

#### `GET /account/{pubkey}` 
**Fetch account fields**

Returns detailed information about a specific account.

<details>
<summary>Response Schema</summary>
<br>

```json
{
  "type": "string",
  "value": {
    "base": {
      "address": {
        "address": "string",
        "name": "string",
        "logo": "string",
        "ticker": "string",
        "cmcId": "string"
      },
      "balance": 0,
      "executable": true,
      "owner": {
        "address": "string",
        "name": "string",
        "logo": "string",
        "ticker": "string",
        "cmcId": "string"
      },
      "rentEpoch": 0,
      "dataSize": 0
    },
    "extended": {}
  }
}
```
</details>
<br>

#### `GET /account/{pubkey}/transactions` 
**Fetch transactions**

Returns transactions associated with the specified account.

<details>
<summary>Query Options</summary>
<br>

| Parameter | Description | Default |
| ----------- | ----- | ------- |
| `before` | The signature of the last transaction you want to search backwards from | - |
| `limit`  | The upper limit of transactions you want to receive | - |

</details>
<br>

<details>
<summary>Response Schema</summary>
<br>

```json
[
  {
    "transactionHash": "string",
    "blockNumber": 0,
    "index": 0,
    "accounts": [
      {
        "account": {
          "address": "string",
          "name": "string",
          "logo": "string",
          "ticker": "string",
          "cmcId": "string"
        },
        "writable": true,
        "signer": true,
        "program": true
      }
    ],
    "header": {
      "numRequiredSignatures": 0,
      "numReadonlySignedAccounts": 0,
      "numReadonlyUnsignedAccounts": 0
    },
    "instructions": [
      {
        "parsed": {},
        "raw": {
          "data": "string",
          "accounts": [
            0
          ],
          "programIdIndex": 0
        }
      }
    ],
    "recentBlockhash": "string",
    "signatures": [
      "string"
    ],
    "meta": {
      "err": {},
      "fee": 0,
      "status": {},
      "logMessages": [
        "string"
      ],
      "preBalances": [
        0
      ],
      "postBalances": [
        0
      ]
    },
    "valid": true,
    "blocktime": {
      "absolute": 0,
      "relative": 0
    },
    "mostImportantInstruction": {
      "name": "string",
      "weight": 0,
      "index": 0
    },
    "smart": [
      {
        "type": "string",
        "value": "string"
      }
    ],
    "ondemand": true
  }
]
```
</details>
<br>

#### `GET /account/{pubkey}/stakes` 
**Fetch stake accounts**

Returns stake accounts associated with the specified account.

<details>
<summary>Response Schema</summary>
<br>

```json
[
  {
    "pubkey": "string",
    "lamports": 0,
    "data": {
      "state": 0,
      "meta": {
        "rent_exempt_reserve": 0,
        "authorized": {
          "staker": "string",
          "withdrawer": "string"
        }
      },
      "lockup": {
        "unix_timestamp": 0,
        "epoch": 0,
        "custodian": "string"
      },
      "stake": {
        "delegation": {
          "voter_pubkey": "string",
          "stake": 0,
          "activation_epoch": 0,
          "deactivation_epoch": 0,
          "warmup_cooldown_rate": 0,
          "validatorInfo": {
            "name": "string",
            "image": "string",
            "website": "string",
            "nodePubkey": "string"
          }
        },
        "credits_observed": 0
      }
    }
  }
]
```
</details>
<br>

#### `GET /account/{stake_pubkey}/stake-rewards` 
**Fetch stake account rewards**

Returns rewards for the specified stake account.

<details>
<summary>Query Options</summary>
<br>

| Parameter | Description | Default |
| ----------- | ----- | ------- |
| `cursor` | The epoch of the last stake reward you want to search backwards from | - |

</details>
<br>

<details>
<summary>Response Schema</summary>
<br>

```json
[
  {
    "epoch": 0,
    "effectiveSlot": 0,
    "amount": "string",
    "postBalance": "string",
    "percentChange": 0,
    "apr": 0
  }
]
```
</details>
<br>

#### `GET /account/{pubkey}/tokens` 
**Fetch token accounts**

Returns token accounts associated with the specified account.

<details>
<summary>Response Schema</summary>
<br>

```json
[
  {
    "mint": {
      "address": "string",
      "name": "string",
      "logo": "string",
      "ticker": "string",
      "cmcId": "string"
    },
    "amount": 0,
    "address": {
      "address": "string",
      "name": "string",
      "logo": "string",
      "ticker": "string",
      "cmcId": "string"
    },
    "decimals": 0
  }
]
```
</details>
<br>

#### `GET /account/{pubkey}/token-transfers` 
**Fetch token account transfers**

Returns token transfers associated with the specified account.

<details>
<summary>Response Schema</summary>
<br>

```json
[
  {
    "blocknumber": 0,
    "txhash": "string",
    "mint": {
      "address": "string",
      "name": "string",
      "logo": "string",
      "ticker": "string",
      "cmcId": "string"
    },
    "valid": true,
    "amount": 0,
    "source": {
      "address": "string",
      "name": "string",
      "logo": "string",
      "ticker": "string",
      "cmcId": "string"
    },
    "destination": {
      "address": "string",
      "name": "string",
      "logo": "string",
      "ticker": "string",
      "cmcId": "string"
    },
    "inner": true,
    "txindex": 0,
    "timestamp": {
      "absolute": 0,
      "relative": 0
    },
    "decimals": 0
  }
]
```
</details>
<br>

#### `GET /account/{pubkey}/swap-instructions` 
**Fetch token account swaps**

> [!IMPORTANT]
> This endpoint is broken. We will fix it.

<details>
<summary>Response Schema</summary>
<br>

```json
[
  {
    "id": 0,
    "blocknumber": 0,
    "transactionhash": "string",
    "tokenswap": {
      "pubkey": {
        "address": "string",
        "name": "string",
        "logo": "string",
        "ticker": "string",
        "cmcId": "string"
      },
      "name": "string",
      "tokenA": {
        "mint": {
          "address": "string",
          "name": "string",
          "logo": "string",
          "ticker": "string",
          "cmcId": "string"
        },
        "decimals": 0
      },
      "tokenB": {
        "mint": {
          "address": "string",
          "name": "string",
          "logo": "string",
          "ticker": "string",
          "cmcId": "string"
        },
        "decimals": 0
      },
      "poolToken": {
        "decimals": 0
      }
    },
    "owner": {
      "address": "string",
      "name": "string",
      "logo": "string",
      "ticker": "string",
      "cmcId": "string"
    },
    "instruction": "string",
    "instructiondata": {},
    "valid": true,
    "index": 0,
    "txindex": 0,
    "timestamp": {
      "absolute": 0,
      "relative": 0
    },
    "ondemand": true
  }
]
```
</details>
<br>

---

### 📦 <a id="block-data"></a>Block Data

#### `GET /block/:number` 
**Fetch block details**

Returns detailed information about a specific block, including transaction metrics, program statistics, and validator information.

<details>
<summary>Response Schema</summary>
<br>

```json
{
  "slot": 0,
  "blockTime": 0,
  "epoch": 0,
  "nodePubkey": "string",
  "voteTransactions": 0,
  "userTransactions": 0,
  "voteInstructions": 0,
  "userInstructions": 0,
  "successTransactions": 0,
  "fees": 0,
  "programInstructions": {
    "programName": {
      "totalInstructionCount": 0,
      "instructionCount": {
        "instructionType1": 0,
        "instructionType2": 0,
        // ... other instruction types
      }
    }
  }
}
```
</details>
<br>

#### `GET /recent-blocks` 
**Fetch recent blocks**

Returns a list of recent blocks with basic information including slot, block time, and validator details.

<details>
<summary>Query Options</summary>
<br>

| Parameter | Description | Default |
| ------ | ------------------------------------------------------------- | ------- |
| `offset` | The slot of the last block you want to search backwards from | - |
| `limit`  | The upper limit of blocks you want to receive | - |

</details>
<br>

<details>
<summary>Response Schema</summary>
<br>

```json
{
  "blocks": [
    {
      "slot": "string",
      "blockTime": "string",
      "voteInstructions": 0,
      "userInstructions": 0,
      "fees": "string",
      "votePubkey": "string",
      "name": "string",
      "iconUrl": "string"
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
<br>

#### `GET /top-programs` 
**Fetch statistics about most active programs**

Returns statistics about the most active programs on the network, including total instruction counts and breakdowns of specific instruction types.

<details>
<summary>Response Schema</summary>
<br>

```json
[
  {
    "programName": "string",
    "totalInstructionCount": 0,
    "instructionCount": {
      "instructionType1": 0,
      "instructionType2": 0,
      // ... other instruction types
    }
  }
]
```
</details>
<br>

---

### 📊 <a id="dashboard-data"></a>Dashboard Data

#### `GET /transactions-per-second` 
**Fetch transactions per second**

Returns vote and user transactions per second. Data is cached for 60 seconds.

<details>
<summary>Response Schema</summary>
<br>

```json
{
  "voteTransactionsPerSecond": 0,
  "userTransactionsPerSecond": 0
}
```
</details>
<br>

#### `GET /epoch-info` 
**Fetch current epoch information**

Returns current epoch information. Data is cached for 10 seconds.

<details>
<summary>Response Schema</summary>
<br>

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
<br>

#### `GET /supply-breakdown` 
**Fetch current supply and stake breakdown**

Returns current supply and stake breakdown. Data is cached for 60 seconds.

<details>
<summary>Response Schema</summary>
<br>

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
<br>

#### `GET /instruction-chart` 
**Fetch information about user and vote instructions**

Returns information about user and vote instructions. Data is cached for 60 seconds.

<details>
<summary>Response Schema</summary>
<br>

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
<br>

---

### 💳 <a id="transaction-data"></a>Transaction Data

> ⚠️ **API Version Note**: The `/transaction/{signature}` endpoint in this section uses Base URL `https://api.solanabeach.io/v1`

#### `GET /transaction/{signature}` 
**Fetch transaction**

Returns detailed information about a specific transaction.

<details>
<summary>Response Schema</summary>
<br>

```json
{
  "transactionHash": "string",
  "blockNumber": 0,
  "index": 0,
  "accounts": [
    {
      "account": {
        "address": "string",
        "name": "string",
        "logo": "string",
        "ticker": "string",
        "cmcId": "string"
      },
      "writable": true,
      "signer": true,
      "program": true
    }
  ],
  "header": {
    "numRequiredSignatures": 0,
    "numReadonlySignedAccounts": 0,
    "numReadonlyUnsignedAccounts": 0
  },
  "instructions": [
    {
      "parsed": {},
      "raw": {
        "data": "string",
        "accounts": [
          0
        ],
        "programIdIndex": 0
      }
    }
  ],
  "recentBlockhash": "string",
  "signatures": [
    "string"
  ],
  "meta": {
    "err": {},
    "fee": 0,
    "status": {},
    "logMessages": [
      "string"
    ],
    "preBalances": [
      0
    ],
    "postBalances": [
      0
    ]
  },
  "valid": true,
  "blocktime": {
    "absolute": 0,
    "relative": 0
  },
  "mostImportantInstruction": {
    "name": "string",
    "weight": 0,
    "index": 0
  },
  "smart": [
    {
      "type": "string",
      "value": "string"
    }
  ],
  "ondemand": true
}
```
</details>
<br>

#### `GET /recent-transactions` 
**Fetch recent transactions**

Returns recent transactions with pagination support. Data is cached for 30 seconds.

<details>
<summary>Query Options</summary>
<br>

| Parameter | Description | Default | Max |
|-----------|-------------|---------|-----|
| offset    | Starting position in the transaction list | 0 | - |
| limit     | Maximum number of transactions to return | 50 | 100 |

</details>
<br>

<details>
<summary>Response Schema</summary>
<br>

```json
{
  "slot": "number",
  "transactions": [
    {
      "transactionHash": "string",
      "accounts": [
        {
          "isSigner": "boolean",
          "isWritable": "boolean",
          "isLUT": "boolean",
          "account": {
            "address": "string",
            "name": "string | null",
            "ticker": "string | null",
            "cmcId": "string | null",
            "logo": "string | null",
            "meta": {
              "url": "string | null"
            },
            "decimals": "number | null"
          }
        }
      ],
      "recentBlockhash": "string",
      "signatures": ["string"],
      "meta": {
        "computeUnitsConsumed": "number",
        "err": "object | null",
        "fee": "number",
        "loadedAddresses": {
          "readonly": ["string"],
          "writable": ["string"]
        },
        "logMessages": ["string"],
        "postBalances": ["number"],
        "postTokenBalances": [
          {
            "accountIndex": "number",
            "mint": "object",
            "owner": "object",
            "uiTokenAmount": "object"
          }
        ],
        "preBalances": ["number"],
        "preTokenBalances": [
          {
            "accountIndex": "number",
            "mint": "object",
            "owner": "object",
            "uiTokenAmount": "object"
          }
        ],
        "rewards": ["object"],
        "status": "object"
      },
      "mostImportantInstruction": {
        "name": "string",
        "weight": "number",
        "index": "number"
      },
      "overpaidFees": "number"
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
<br>



---

### 🔍 <a id="validator-data"></a>Validator Data

#### `GET /validator/:address/stake-accounts` 
**Fetch validator stake accounts**

Returns a paginated list of stake accounts for a given validator.

<details>
<summary>Query Options</summary>
<br>

| Parameter | Description | Default | Max |
| ------- | ---------------------------------------------------- | ------- | ------- |
| `address` | The validator's vote public key | - | - |
| `offset` | Starting point for pagination | 0 | - |
| `limit` | Maximum number of results to return | 10 | 1000 |

</details>
<br>

<details>
<summary>Response Schema</summary>
<br>

```json
{
  "stakeAccounts": [
    {
      "stakePubkey": "string",
      "stakeAuthority": "string",
      "withdrawAuthority": "string",
      "state": 0,
      "stake": 0,
      "activationEpoch": 0,
      "deactivationEpoch": 0,
      "lastUpdate": "string"
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
<br>

#### `GET /validator/:nodepubkey/block-rewards-history` 
**Fetch validator block rewards history**

Returns historical block rewards data for a specific validator.

<details>
<summary>Query Options</summary>
<br>

| Parameter | Description | Default | Max |
| ---------- | ---------------------------------------------- | ------- | ------- |
| `nodepubkey` | The validator's node public key | - | - |
| `offset` | Starting point for pagination | 0 | - |
| `limit` | Maximum number of results to return | 10 | 1000 |

</details>
<br>

<details>
<summary>Response Schema</summary>
<br>

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
<br>

#### `GET /validator/:nodepubkey/success-rate-history` 
**Fetch validator success rate history**

Returns historical success rate data for a specific validator.

<details>
<summary>Query Options</summary>
<br>

| Parameter | Description | Default | Max |
| ---------- | ---------------------------------------------- | ------- | ------- |
| `nodepubkey` | The validator's node public key | - | - |
| `offset` | Starting point for pagination | 0 | - |
| `limit` | Maximum number of results to return | 10 | 1000 |

</details>
<br>

<details>
<summary>Response Schema</summary>
<br>

```json
{
  "history": [
    {
      "epoch": 0,
      "slots": 0,
      "blocks": 0,
      "successRate": 0
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
<br>

#### `GET /validator/:votepubkey/stake-accounts-history` 
**Fetch validator stake accounts history**

Returns historical stake accounts data for a specific validator.

<details>
<summary>Query Options</summary>
<br>

| Parameter | Description | Default | Max |
| ---------- | ---------------------------------------------- | ------- | ------- |
| `votepubkey` | The validator's vote public key | - | - |
| `offset` | Starting point for pagination | 0 | - |
| `limit` | Maximum number of results to return | 10 | 1000 |

</details>
<br>

<details>
<summary>Response Schema</summary>
<br>

```json
{
  "history": [
    {
      "epoch": 0,
      "stakeAccounts": 0
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
<br>

#### `GET /validator/:votepubkey/stake-history` 
**Fetch validator stake history**

Returns historical stake data for a specific validator.

<details>
<summary>Query Options</summary>
<br>

| Parameter | Description | Default | Max |
| ---------- | ---------------------------------------------- | ------- | ------- |
| `votepubkey` | The validator's vote public key | - | - |
| `offset` | Starting point for pagination | 0 | - |
| `limit` | Maximum number of results to return | 10 | 1000 |

</details>
<br>

<details>
<summary>Response Schema</summary>
<br>

```json
{
  "history": [
    {
      "epoch": 0, 
      "activatedStake": 0
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
<br>

#### `GET /cluster-block-rewards-history` 
**Fetch cluster block rewards history**

Returns aggregated block rewards history for the entire cluster.

<details>
<summary>Query Options</summary>
<br>

| Parameter | Description | Default | Max |
| ------ | ---------------------------------------------- | ------- | ------- |
| `offset` | Starting point for pagination | 0 | - |
| `limit` | Maximum number of results to return | 10 | 1000 |

</details>
<br>

<details>
<summary>Response Schema</summary>
<br>

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
<br>

#### `GET /cluster-success-rate-history` 
**Fetch cluster success rate history**

Returns aggregated success rate history for the entire cluster.

<details>
<summary>Query Options</summary>
<br>

| Parameter | Description | Default | Max |
| ------ | ---------------------------------------------- | ------- | ------- |
| `offset` | Starting point for pagination | 0 | - |
| `limit` | Maximum number of results to return | 10 | 1000 |

</details>
<br>

<details>
<summary>Response Schema</summary>
<br>

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
<br>

#### `GET /validator/:votepubkey` 
**Fetch validator details**

Returns general details about a specific validator.

<details>
<summary>Query Options</summary>
<br>

| Parameter | Description |
| ---------- | ---------------------------- |
| `votepubkey` | The validator's vote public key |

</details>
<br>

<details>
<summary>Response Schema</summary>
<br>

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
<br>

---


### 📈 <a id="validators-data"></a>Validators Data

#### `GET /skip-rates` 
**Fetch validator skip rates**

Returns skip rate data for validators.

<details>
<summary>Response Schema</summary>
<br>

```json
{
  "skipRate": 0,
  "stakeWeightedSkipRate": 0
}
```
</details>
<br>

#### `GET /staking-yield` 
**Fetch staking yield data**

Returns staking yield data.

<details>
<summary>Response Schema</summary>
<br>

```json
{
  "inflationRate": 0,
  "effectiveInflationRate": 0,
  "inflationRewardsApy": 0,
  "blockRewardsApy": 0
}
```
</details>
<br>

#### `GET /node-versions` 
**Fetch node version distribution**

Returns node version distribution data.

<details>
<summary>Response Schema</summary>
<br>

```json
[
  {
    "version": "string",
    "stake": "number"
  }
]
```
</details>
<br>

#### `GET /validator-list` 
**Fetch paginated list of validators**

Returns a paginated list of validators.

<details>
<summary>Query Options</summary>
<br>

| Parameter | Description | Default | Max |
| ------ | ---------------------------------------------- | ------- | ------- |
| `offset` | Starting position in the validator list | 0 | - |
| `limit` | Maximum number of validators to return | 50 | 100 |

</details>
<br>

<details>
<summary>Response Schema</summary>
<br>

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
<br>

---

## 🧡 <a id="we-appreciate-your-delegation"></a>We appreciate your delegation

If you're satisfied with this product consider choosing the Solana Beach Validator next time you are confronted with the decision where to delegate.