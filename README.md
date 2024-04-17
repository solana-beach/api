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

If the HTTP response status code reports an error the response schema will look like this:
```
{
  "err": "string"
}
```

### Account Data
`/account/{pubkey}` Fetch account fields
<details>
<summary>Response Schema</summary>
<br>

```
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

`/account/{pubkey}/transactions` Fetch transactions
<details>
<summary>Query Options</summary>
<br>
  
| Key | Value |
| ----------- | ----- |
| before | The signature of the last transaction you want to search backwards from. |
| limit  | The upper limit of transactions you want to receive. |

</details>

<details>
<summary>Response Schema</summary>
<br>
  
```
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

`/account/{pubkey}/stakes` Fetch stake accounts
<details>
<summary>Response Schema</summary>
<br>

```
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

`/account/{stake_pubkey}/stake-rewards` Fetch stake account rewards
<details>
<summary>Query Options</summary>
<br>
  
| Key | Value |
| ----------- | ----- |
| cursor | The epoch of the last stake reward you want to search backwards from. |

</details>

<details>
<summary>Response Schema</summary>
<br>

```
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

`/account/{pubkey}/tokens` Fetch token accounts
<details>
<summary>Response Schema</summary>
<br>

```
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

`/account/{pubkey}/token-transfers` Fetch token account transfers
> [!IMPORTANT]
> This endpoint is broken. We will fix it.
<details>
<summary>Query Options</summary>
<br>
</details>

<details>
<summary>Response Schema</summary>
<br>

```
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

`/account/{pubkey}/swap-instructions` Fetch token account swaps
> [!IMPORTANT]
> This endpoint is broken. We will fix it.
<details>
<summary>Query Options</summary>
<br>
</details>

<details>
<summary>Response Schema</summary>
<br>

```
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

### Transaction Data

`/transaction/{signature}` Fetch transaction
<details>
<summary>Response Schema</summary>
<br>

```
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

`/latest-transactions` Fetch recent transactions
<details>
<summary>Query Options</summary>
<br>
  
| Key | Value |
| ----------- | ----- |
| cursor | The blocknumber,index of the last transaction you want to search backwards from. |
| limit  | The upper limit of transactions you want to receive. |

</details>

<details>
<summary>Response Schema</summary>
<br>

```
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

`/block-transactions/{slot}` Fetch block transactions
<details>
<summary>Query Options</summary>
<br>
  
| Key | Value |
| ----------- | ----- |
| offset | The offset or index of the next transaction in the block. |
| limit  | The upper limit of transactions you want to receive. |

</details>

<details>
<summary>Response Schema</summary>
<br>

```
{
  "totalPages": 0,
  "data": [
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
}
```
</details>
<br>

### Validator Data
`/validators/top` Fetch top validators

<details>
<summary>Response Schema</summary>
<br>

```
[
  {
    "activatedStake": 0,
    "commission": 0,
    "votePubkey": "string",
    "delegatorCount": 0,
    "ll": [
      0,
      0
    ],
    "moniker": "string",
    "version": "string",
    "lastVote": 0,
    "pictureURL":"string"
  }
]
```
</details>
<br>

`/validators/all` Fetch all validators

<details>
<summary>Response Schema</summary>
<br>

```
[
  {
    "activatedStake": 0,
    "commission": 0,
    "votePubkey": "string",
    "delegatorCount": 0,
    "ll": [
      0,
      0
    ],
    "moniker": "string",
    "version": "string",
    "lastVote": 0,
    "pictureURL": "string"
  }
]
```
</details>
<br>

`/validator/{vote_pubkey}` Fetch validator

<details>
<summary>Response Schema</summary>
<br>

```
{
  "validator": {
    "activatedStake": 0,
    "stakePercentage": 0,
    "commission": 0,
    "epochCredits": [
      0
    ],
    "epochVoteAccount": true,
    "lastVote": 0,
    "nodePubkey": "string",
    "rootSlot": 0,
    "votePubkey": "string",
    "blockProduction": {
      "leaderSlots": 0,
      "skippedSlots": 0
    },
    "delegatingStakeAccounts": [
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
    ],
    "delegatorCount": 0,
    "location": {
      "range": [
        0
      ],
      "country": "string",
      "region": "string",
      "eu": "string",
      "timezone": "string",
      "city": "string",
      "ll": [
        0
      ],
      "metro": 0,
      "area": 0
    },
    "moniker": "string",
    "website": "string",
    "pictureURL": "string",
    "version": "string",
    "details": "string",
    "asn": {
      "code": "string",
      "organization": "string"
    }
  },
  "slots": [
    [
      {
        "relativeSlot": 0,
        "absoluteSlot": 0,
        "confirmedBlock": true
      }
    ]
  ],
  "historic": [
    {
      "stake": 0,
      "delegators": 0,
      "timestamp": "string"
    }
  ],
  "latestBlocks": [
    {
      "blocknumber": 0,
      "blocktime": {
        "absolute": 0,
        "relative": 0
      },
      "metrics": {
        "txcount": 0,
        "failedtxs": 0,
        "totalfees": 0,
        "instructions": 0,
        "sucessfultxs": 0,
        "innerinstructions": 0,
        "totalvaluemoved": 0
      },
      "proposer": "string"
    }
  ]
}
```
</details>
<br>

`/validator/{vote_pubkey}/history` Fetch validator history

<details>
<summary>Response Schema</summary>
<br>

```
[
  {
    "id": 0,
    "validator": "string",
    "stake": 0,
    "delegators": 0,
    "timestamp": "string"
  }
]
```
</details>
<br>

`/validator/{node_pubkey}/slots` Fetch validator slots

<details>
<summary>Response Schema</summary>
<br>

```
[
  {
    "validator": "string",
    "slots": [
      {
        "relativeSlot": 0,
        "absoluteSlot": 0,
        "confirmedBlock": true
      }
    ]
  }
]
```
</details>
<br>

`/validator/{vote_pubkey}/delegators` Fetch delegators
<details>
<summary>Query Options</summary>
<br>
  
| Key | Value |
| ----------- | ----- |
| offset | The offset or index of the next delegator. |
| limit  | The upper limit of delegators you want to receive. |

</details>

<details>
<summary>Response Schema</summary>
<br>

```
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

### Block Data
`/block/{slot}` Fetch block

<details>
<summary>Response Schema</summary>
<br>

```
{
  "blocknumber": 0,
  "blockhash": "string",
  "previousblockhash": "string",
  "parentslot": 0,
  "blocktime": {
    "absolute": 0,
    "relative": 0
  },
  "metrics": {
    "txcount": 0,
    "failedtxs": 0,
    "totalfees": 0,
    "instructions": 0,
    "sucessfultxs": 0,
    "innerinstructions": 0
  },
  "programstats": [
    {
      "count": 0,
      "programId": {
        "address": "string",
        "name": "string",
        "logo": "string",
        "ticker": "string",
        "cmcId": "string"
      },
      "instructions": {}
    }
  ],
  "rewards": {},
  "proposer": "string",
  "proposerData": {
    "name": "string",
    "image": "string",
    "website": "string",
    "nodePubkey": "string"
  },
  "ondemand": true
}
```
</details>
<br>

`/latest-blocks` Fetch recent blocks

<details>
<summary>Query Options</summary>
<br>
  
| Key | Value |
| ----------- | ----- |
| cursor | The slot of the last block you want to search backwards from. |
| limit  | The upper limit of blocks you want to receive. |

</details>

<details>
<summary>Response Schema</summary>
<br>

```
[
  {
    "blocknumber": 0,
    "blockhash": "string",
    "previousblockhash": "string",
    "parentslot": 0,
    "blocktime": {
      "absolute": 0,
      "relative": 0
    },
    "metrics": {
      "txcount": 0,
      "failedtxs": 0,
      "totalfees": 0,
      "instructions": 0,
      "sucessfultxs": 0,
      "innerinstructions": 0
    },
    "programstats": [
      {
        "count": 0,
        "programId": {
          "address": "string",
          "name": "string",
          "logo": "string",
          "ticker": "string",
          "cmcId": "string"
        },
        "instructions": {}
      }
    ],
    "rewards": {},
    "proposer": "string",
    "proposerData": {
      "name": "string",
      "image": "string",
      "website": "string",
      "nodePubkey": "string"
    },
    "ondemand": true
  }
]
```
</details>
<br>

### Inflation Data
`/inflation` Fetch inflation

<details>
<summary>Response Schema</summary>
<br>

```
{
  "epoch": 0,
  "foundation": 0,
  "total": 0,
  "validator": 0
}
```

</details>
<br>

`/supply` Fetch supply

<details>
<summary>Response Schema</summary>
<br>

```
{
  "total": 0,
  "circulating": 0,
  "nonCirculating": 0
}
```

</details>
<br>

### Other Data

`/stake-history` Fetch stake history

<details>
<summary>Response Schema</summary>
<br>

```
[
  {
    "epoch": 0,
    "effective": 0,
    "activating": 0,
    "deactivating": 0
  }
]
```

</details>
<br>

`/health` Fetch network health

<details>
<summary>Response Schema</summary>
<br>

```
{
  "boundaries": {
    "start": 0,
    "end": 0
  },
  "window": 0,
  "networkLag": 0,
  "currentSlot": 0
}
```
</details>
<br>

`/network-status` Fetch network status

<details>
<summary>Response Schema</summary>
<br>

```
{
  "lastSyncedSlot": 0,
  "lastNetworkSlot": 0,
  "networkLag": 0,
  "lastEpochInfoSync": 0,
  "laggingBehind": 0
}
```
</details>
<br>

`/staking-apy` Fetch staking APY

<details>
<summary>Response Schema</summary>
<br>

```
{
  "apy": 0
}
```
</details>
<br>

`/epoch-history` Fetch epoch history

<details>
<summary>Response Schema</summary>
<br>

```
{
  "epoch": 0
}
```
</details>
<br>

`/alias` Fetch alias

<details>
<summary>Response Schema</summary>
<br>

```
{
  "mintAddress": {
    "name": "string",
    "ticker": "string",
    "cmcId": "string",
    "coingeckoId": "string",
    "logo": "string",
    "meta": {
      "url": "string"
    }
  }
}
```
</details>
<br>

`/non-validators` Fetch non validator nodes

<details>
<summary>Response Schema</summary>
<br>

```
[
  {
    "pubkey": {
      "address": "string"
    },
    "featureSet": 0,
    "gossip": "string",
    "rpc": "string",
    "shredVersion": 0,
    "tpu": "string",
    "version": "string",
    "location": {
      "range": [
        0
      ],
      "country": "string",
      "region": "string",
      "eu": "string",
      "timezone": "string",
      "city": "string",
      "ll": [
        0
      ],
      "metro": 0,
      "area": 0
    },
    "asn": {
      "code": 0,
      "organization": "string"
    },
    "validator": true
  }
]
```
</details>
<br>

`/cluster-time` Fetch current cluster time

<details>
<summary>Response Schema</summary>
<br>

```
0
```
</details>
<br>

`/market-chart-data` Fetch market chart data

<details>
<summary>Response Schema</summary>
<br>

```
[
  {
    "timestamp": "string",
    "price": 0,
    "volume_24h": 0,
    "market_cap": 0
  }
]
```
</details>
<br>

## We appreciate your delegation
If you're satisfied with this product consider choosing the Solana Beach Validator next time you are confronted with the decision where to delegate.
