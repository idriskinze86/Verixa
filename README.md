# Verixa

### Verify Anything. Trust Everything.

Verixa is a blockchain-powered digital asset verification platform built on Flare Network.

It allows users to generate a SHA-256 fingerprint of a document or digital asset and register that fingerprint on the Flare Coston2 blockchain. The blockchain record provides an immutable proof that can later be used to verify the integrity of the original file.

---

## 1. 🚀 Live Demo

Production:  
https://verixa-lake.vercel.app

Source Code:  
https://github.com/idriskinze86/Verixa

---

## 2. 💡 The Problem

Digital documents and assets can be copied, modified, or tampered with, making it difficult to prove that a file is authentic and unchanged.

Traditional verification systems often depend on centralized databases or trusted intermediaries.

This creates a challenge for individuals and organizations that need a simple and reliable way to prove the integrity of digital assets.

---

## 3. 💎 The Solution

Verixa creates a unique SHA-256 fingerprint for each uploaded file and records that fingerprint on the Flare blockchain.

The original file does not need to be stored on the blockchain. Instead, its cryptographic fingerprint is registered on-chain.

When the file needs to be verified later, Verixa can generate its SHA-256 fingerprint again and compare it with the blockchain record.

If the fingerprints match, the file has not changed since it was registered.

---

## 4. ⚙️ How Verixa Works

### 1. Upload

The user selects a document or digital asset to verify.

### 2. Hash

Verixa generates a unique SHA-256 fingerprint from the selected file.

### 3. Register

The fingerprint is submitted to the Verixa smart contract on Flare Coston2.

The blockchain transaction provides an immutable record of the registration.

### 4. Verify

The file can later be hashed again and compared against the registered blockchain fingerprint to determine whether the file has been modified.

### Workflow

`text
┌─────────────────┐
│ Upload File │
└────────┬────────┘
↓
┌─────────────────┐
│ Generate SHA-256│
│ Hash │
└────────┬────────┘
↓
┌─────────────────┐
│ Connect Wallet │
└────────┬────────┘
↓
┌─────────────────┐
│ Switch to Flare │
│ Coston2 │
└────────┬────────┘
↓
┌─────────────────┐
│ Register Hash │
│ On-Chain │
└────────┬────────┘
↓
┌─────────────────┐
│ Verify Asset │
│ Later │
└─────────────────┘

---

## ✨ Features

- 🔐 SHA-256 digital fingerprinting
- ⛓️ On-chain asset registration
- 🔎 Blockchain-based verification
- ♻️ Duplicate registration detection
- 👛 Browser wallet connection
- 🌐 Flare Coston2 network detection
- 🔄 Network switching support
- 📄 Transaction confirmation
- 🔗 Flare blockchain explorer links
- 📱 Responsive interface

---

## 🏗️ Architecture

Verixa combines client-side file hashing with blockchain-based verification.

`text
VERIXA
│
▼
┌───────────────┐
│ Web App │
│ Next.js │
└───────┬───────┘
│
┌─────────┴─────────┐
▼ ▼
┌──────────────┐ ┌──────────────┐
│ File Upload │ │ Browser │
│ & SHA-256 │ │ Wallet │
└──────┬───────┘ └──────┬───────┘
│ │
└─────────┬─────────┘
▼
┌───────────────┐
│ Verixa Smart │
│ Contract │
└───────┬───────┘
│
▼
┌───────────────┐
│ Flare Coston2 │
│ Blockchain │
└───────────────┘

---

## 🛠️ Technology Stack

| Technology    | Purpose                                  |
| ------------- | ---------------------------------------- |
| Next.js       | Web application framework                |
| TypeScript    | Application development                  |
| Tailwind CSS  | User interface styling                   |
| Wagmi         | Wallet and blockchain interaction        |
| Viem          | Ethereum-compatible blockchain utilities |
| Flare Network | Blockchain infrastructure                |
| Flare Coston2 | Test network                             |
| Solidity      | Smart contract development               |

---

## ⛓️ Flare Network

Verixa is built on Flare Coston2, the Flare test network.

| Property | Value                                       |
| -------- | ------------------------------------------- |
| Network  | Flare Coston2                               |
| Chain ID | 114                                         |
| RPC      | https://coston2-api.flare.network/ext/C/rpc |
| Explorer | https://coston2-explorer.flare.network      |

Flare provides the blockchain infrastructure used to create verifiable and immutable records of digital asset fingerprints.

---

## 🔐 Privacy & Security

Verixa registers the SHA-256 fingerprint of a file rather than storing the original file itself on the blockchain.

This provides two important benefits:

- The original document does not need to be stored on-chain.
- The blockchain can provide proof of the file's registered state.

Changing even a small part of a file produces a different SHA-256 fingerprint.

---

## 🧪 Example Use Cases

Verixa can be used to verify the integrity of:

- 📜 Certificates
- 🎓 Academic records
- 📄 Legal documents
- 📝 Business documents
- 🖼️ Digital media
- 📦 Digital assets
- 📑 Reports and publications

---

## 🎯 Why Blockchain?

Traditional file verification can depend on centralized databases or third-party systems.

Verixa uses blockchain registration to provide a tamper-resistant record that can be independently checked.

`text
File
↓
SHA-256 Fingerprint
↓
Blockchain Registration
↓
Immutable Record
↓
Future Verification
