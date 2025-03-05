# Transaction Data API

## Recent Transactions
`GET /recent-transactions`

Returns recent transactions with pagination support. Data is cached for 30 seconds.

<details>
<summary>Query Parameters</summary>


| Parameter | Description | Default | Max |
|-----------|-------------|---------|-----|
| offset    | Starting position in the transaction list | 0 | - |
| limit     | Maximum number of transactions to return | 50 | 100 |
</details>

<details>
<summary>Response Schema</summary>


```json
{
  "transactions": [
    {
      "transactionHash": "string",
      "valid": "boolean",
      "blocktime": {
        "absolute": "number | null",
        "relative": "number | null"
      },
      "accounts": [
        {
          "pubkey": {
            "_bn": "string"
          },
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
      "instructions": [
        {
          "parsed": {
            "type": "string",
            "details": "object"
          },
          "programId": {
            "name": "string",
            "address": "string"
          }
        }
      ],
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
            "mint": {
              "address": "string",
              "name": "string | null",
              "ticker": "string | null",
              "cmcId": "string | null",
              "logo": "string | null",
              "meta": {
                "url": "string | null"
              },
              "decimals": "number | null"
            },
            "owner": {
              "address": "string"
            },
            "uiTokenAmount": {
              "amount": "string",
              "decimals": "number",
              "uiAmount": "number | null",
              "uiAmountString": "string"
            }
          }
        ],
        "preBalances": ["number"],
        "preTokenBalances": [
          {
            "accountIndex": "number",
            "mint": {
              "address": "string",
              "name": "string | null",
              "ticker": "string | null",
              "cmcId": "string | null",
              "logo": "string | null",
              "meta": {
                "url": "string | null"
              },
              "decimals": "number | null"
            },
            "owner": {
              "address": "string"
            },
            "uiTokenAmount": {
              "amount": "string",
              "decimals": "number",
              "uiAmount": "number | null",
              "uiAmountString": "string"
            }
          }
        ],
        "rewards": ["object"],
        "status": {
          "Ok": "null | object",
          "Err": "object | null"
        }
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
    "offset": "number",
    "limit": "number"
  }
}
```

</details>


<details>
<summary>Example Response</summary>


```json
{
  "transactions": [
    {
      "transactionHash": "2tQ6aeSkPcpZnFSJJVUcTLc81AwK96dtjEEqFdyn96LfRfyYr69zJAhwfgo6YEM1Jheow1VAYfR9UJDwYjaazoqV",
      "valid": false,
      "blocktime": {
        "absolute": null,
        "relative": null
      },
      "accounts": [
        {
          "pubkey": {
            "_bn": "12a83f2f52e3e416646f2c1eea5a50dcd9b66aad385081bc33ca2a04e592eebd"
          },
          "isSigner": true,
          "isWritable": true,
          "isLUT": false,
          "account": {
            "address": "2Fq8wXAGTLNTCGZR4XLsAo11qfW4JauzXqkc2Q2L32Ke"
          }
        }
      ],
      "instructions": [
        {
          "parsed": {
            "SetComputeUnitPrice": {
              "microLamports": 500000
            }
          },
          "programId": {
            "name": "Compute Budget",
            "address": "ComputeBudget111111111111111111111111111111"
          }
        }
      ],
      "meta": {
        "computeUnitsConsumed": 10859,
        "err": {
          "InstructionError": [
            3,
            {
              "Custom": 18
            }
          ]
        },
        "fee": 57500,
        "logMessages": [
          "Program ComputeBudget111111111111111111111111111111 invoke [1]",
          "Program ComputeBudget111111111111111111111111111111 success"
        ],
        "postBalances": [
          1693416153,
          149150792,
          101977920,
          1705200,
          2039280,
          2039280,
          102429115183,
          16258560,
          2039280,
          6124800,
          3591360,
          79594560,
          101977920,
          23357760,
          9214085300,
          1627699705,
          2039280,
          1,
          1,
          521498880,
          993169029269,
          934087680,
          1141440,
          21638277385,
          1141440,
          1141440,
          1461600,
          0
        ],
        "postTokenBalances": [
          {
            "accountIndex": 4,
            "mint": {
              "name": "Wrapped SOL",
              "ticker": "SOL",
              "cmcId": "5426",
              "logo": "https://raw.githubusercontent.com/trustwallet/assets/master/blockchains/solana/info/logo.png",
              "meta": {
                "url": "https://solana.com/"
              },
              "decimals": 9,
              "address": "So11111111111111111111111111111111111111112"
            },
            "owner": {
              "address": "G45eobTg2vFAD8MjYSywcdFjrcVFsmKTSFs1kLZaV1k"
            },
            "uiTokenAmount": {
              "amount": "0",
              "decimals": 9,
              "uiAmount": null,
              "uiAmountString": "0"
            }
          }
        ],
        "preBalances": [
          1693473653,
          149150792,
          101977920,
          1705200,
          2039280,
          2039280,
          102429115183,
          16258560,
          2039280,
          6124800,
          3591360,
          79594560,
          101977920,
          23357760,
          9214085300,
          1627699705,
          2039280,
          1,
          1,
          521498880,
          993169029269,
          934087680,
          1141440,
          21638277385,
          1141440,
          1141440,
          1461600,
          0
        ],
        "preTokenBalances": [
          {
            "accountIndex": 4,
            "mint": {
              "name": "Wrapped SOL",
              "ticker": "SOL",
              "cmcId": "5426",
              "logo": "https://raw.githubusercontent.com/trustwallet/assets/master/blockchains/solana/info/logo.png",
              "meta": {
                "url": "https://solana.com/"
              },
              "decimals": 9,
              "address": "So11111111111111111111111111111111111111112"
            },
            "owner": {
              "address": "G45eobTg2vFAD8MjYSywcdFjrcVFsmKTSFs1kLZaV1k"
            },
            "uiTokenAmount": {
              "amount": "0",
              "decimals": 9,
              "uiAmount": null,
              "uiAmountString": "0"
            }
          }
        ],
        "rewards": [],
        "status": {
          "Err": {
            "InstructionError": [
              3,
              {
                "Custom": 18
              }
            ]
          }
        }
      },
      "mostImportantInstruction": {
        "name": "TransferSol",
        "weight": 0.5,
        "index": 2
      },
      "overpaidFees": 47070.5
    }
  ],
  "pagination": {
    "total": 1,
    "offset": 0,
    "limit": 1
  }
}
```
</details>

