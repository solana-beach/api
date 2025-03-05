# Block Data API

## Block details 

`/block/:number`

Returns detailed information about a specific block, including transaction metrics, program statistics, and validator information.

<details>
<summary>Response Schema</summary>

```json
{
  "slot": 0,
  "block_time": 0,
  "epoch": 0,
  "node_pubkey": "string",
  "vote_transactions": 0,
  "user_transactions": 0,
  "vote_instructions": 0,
  "user_instructions": 0,
  "success_transactions": 0,
  "fees": 0,
  "program_instructions": {
    "programName": {
      "total_instruction_count": 0,
      "instruction_count": {
        "instructionType": 0
      }
    }
  }
}
```
</details>

<details>
<summary>Example Response</summary>

```json
{
  "slot": 324331438,
  "block_time": 1741014680,
  "epoch": 750,
  "node_pubkey": "q9XWcZ7T1wP4bW9SB4XgNNwjnFEJ982nE8aVbbNuwot",
  "vote_transactions": 1421,
  "user_transactions": 522,
  "vote_instructions": 1421,
  "user_instructions": 4229,
  "success_transactions": 1688,
  "fees": 59422215,
  "program_instructions": {
    "Vote": {
      "total_instruction_count": 1421,
      "instruction_count": {
        "CompactUpdateVoteState": 1,
        "TowerSync": 1420
      }
    },
    "Raydium CLMM": {
      "total_instruction_count": 57,
      "instruction_count": {
        "SwapV2": 32,
        "Swap": 25
      }
    }
    // ... other program entries
  }
}
```
</details>

## Recent blocks
`/recent-blocks`

Returns a list of recent blocks with basic information including slot, block time, and validator details.

<details>
<summary>Query Options</summary>
  
| Key | Value |
| ----------- | ----- |
| offset | The slot of the last block you want to search backwards from. |
| limit  | The upper limit of blocks you want to receive. |

</details>

<details>
<summary>Response Schema</summary>

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

<details>
<summary>Example Response</summary>

```json
{
  "blocks": [
    {
      "slot": "324331570",
      "blockTime": "1741014731",
      "voteInstructions": 1269,
      "userInstructions": 3465,
      "fees": "20112609",
      "votePubkey": "6F5xdRXh2W3B2vhte12VG79JVUkUSLYrHydGX1SAadfZ",
      "name": "Allnodes ⚡️ 0% fee",
      "iconUrl": "https://s3.amazonaws.com/keybase_processed_uploads/c1bfe4c1d4f6c8f8d66baa152d50e805_360_360.jpg"
    },
    {
      "slot": "324331569",
      "blockTime": "1741014731",
      "voteInstructions": 1319,
      "userInstructions": 3449,
      "fees": "39437059",
      "votePubkey": "6F5xdRXh2W3B2vhte12VG79JVUkUSLYrHydGX1SAadfZ",
      "name": "Allnodes ⚡️ 0% fee",
      "iconUrl": "https://s3.amazonaws.com/keybase_processed_uploads/c1bfe4c1d4f6c8f8d66baa152d50e805_360_360.jpg"
    }
    // ... other block entries
  ],
  "pagination": {
    "total": 1000,
    "offset": 0,
    "limit": 50
  }
}
```
</details>


## Top programs
`/top-programs`

Returns statistics about the most active programs on the network, including total instruction counts and breakdowns of specific instruction types.

<details>
<summary>Response Schema</summary>

```json
[
  {
    "programName": "string",
    "totalInstructionCount": 0,
    "instructionCount": {
      "instructionType1": 0,
      "instructionType2": 0
      // ... other instruction types
    }
  }
]
```
</details>

<details>
<summary>Example Response</summary>

```json
[
  {
    "programName": "Memo",
    "totalInstructionCount": 11492,
    "instructionCount": {
      "AddMemo": 11492
    }
  },
  {
    "programName": "Zeta",
    "totalInstructionCount": 20694,
    "instructionCount": {
      "CancelAllMarketOrders": 7516,
      "Unknown": 11555,
      "CrankEventQueue": 1487,
      "BurnVaultTokens": 24,
      "UpdatePricingV2": 67,
      "ApplyPerpFunding": 35,
      "SettleDexFunds": 3,
      "WithdrawV2": 2,
      "LiquidateV2": 2,
      "CancelOrder": 3
    }
  }
  // ... other program entries
]
```
</details>