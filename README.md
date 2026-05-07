# base-contract-deploy

A simple Base Layer 2 smart contract deployment starter project.

## What is included

- `contracts/BaseCounter.sol` — a clean Solidity contract that tracks a counter and emits events
- `scripts/deploy.js` — Hardhat deployment script for Base Goerli or another network
- `hardhat.config.js` — configuration for compiling and network deployment
- `package.json` — developer dependencies and commands
- `.gitignore` — ignored local build files and secrets

## Quick start

1. Install dependencies:
   ```bash
   npm install
   ```

2. Add your deployer private key and Base Goerli RPC URL to a `.env` file:
   ```env
   DEPLOYER_PRIVATE_KEY=0x...
   BASEGOERLI_RPC_URL=https://rpc.goerli.base.org
   ```

3. Compile the contract:
   ```bash
   npm run compile
   ```

4. Deploy to Base Goerli:
   ```bash
   npm run deploy
   ```

## Contract behavior

- `name` returns the contract name
- `count` stores the current counter value
- `increment()` increments the counter and emits `CountIncremented`
- `reset()` resets the counter to zero

## Notes

This repository now contains original smart contract code and a deployment scaffold for a Base Layer 2 project.
