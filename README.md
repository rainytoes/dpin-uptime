# DPin Uptime Monitor

A decentralized uptime monitoring system that leverages a network of distributed validators to monitor website availability and performance. Built on Solana blockchain for trustless validator authentication and payments.

## 🏗️ Architecture

```
┌─────────────────┐    ┌─────────────────┐    ┌─────────────────┐
│   Frontend      │    │      API        │    │   Database      │
│   (Next.js)     │◄──►│   (Express)     │◄──►│  (PostgreSQL)   │
└─────────────────┘    └─────────────────┘    └─────────────────┘
                                │
                                ▼
                       ┌─────────────────┐
                       │      Hub        │
                       │  (WebSocket)    │
                       └─────────────────┘
                                │
                                ▼
                    ┌─────────────────────────┐
                    │     Validators          │
                    │  (Distributed Nodes)    │
                    └─────────────────────────┘
```

## 🚀 Features

- **Decentralized Monitoring**: Network of distributed validators perform website checks
- **Real-time Dashboard**: Live uptime statistics and historical data visualization
- **Blockchain Authentication**: Solana-based cryptographic validator verification
- **Automated Payments**: Validators earn rewards for monitoring services
- **Multi-location Checks**: Global validator network for comprehensive monitoring
- **WebSocket Communication**: Real-time coordination between hub and validators
- **User Authentication**: Secure user management with Clerk
- **Responsive UI**: Modern, dark-mode enabled interface

## 🛠️ Tech Stack

### Frontend
- **Next.js 15** - React framework with App Router
- **TypeScript** - Type-safe development
- **Tailwind CSS** - Utility-first styling
- **Clerk** - Authentication and user management
- **Lucide React** - Icon library
- **Axios** - HTTP client

### Backend
- **Express.js** - REST API server
- **Bun** - JavaScript runtime and package manager
- **WebSocket** - Real-time communication
- **JWT** - Token-based authentication
- **CORS** - Cross-origin resource sharing

### Database
- **PostgreSQL** - Primary database
- **Prisma** - ORM and database toolkit
- **Database Migrations** - Version-controlled schema changes

### Blockchain
- **Solana Web3.js** - Blockchain interaction
- **TweetNaCl** - Cryptographic signing and verification
- **Keypair Management** - Validator identity and authentication

### DevOps
- **Turborepo** - Monorepo management
- **ESLint** - Code linting
- **Prettier** - Code formatting
- **TypeScript** - Type checking across all packages

## 📦 Project Structure

```
├── apps/
│   ├── frontend/          # Next.js user dashboard
│   ├── api/              # Express.js REST API
│   ├── hub/              # WebSocket coordination server
│   └── validator/        # Distributed monitoring nodes
├── packages/
│   ├── db/               # Prisma database package
│   ├── common/           # Shared TypeScript types
│   ├── ui/               # Shared React components
│   ├── eslint-config/    # ESLint configurations
│   └── typescript-config/ # TypeScript configurations
```

## 🚦 Getting Started

### Prerequisites
- Node.js 18+
- Bun 1.2.7+
- PostgreSQL database
- Solana wallet for validators

### Installation

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd dpin-uptime
   ```

2. **Install dependencies**
   ```bash
   bun install
   ```

3. **Set up the database**
   ```bash
   cd packages/db
   bunx prisma migrate dev
   bunx prisma db seed
   ```

4. **Configure environment variables**
   ```bash
   # Create .env files in respective apps
   # Frontend: Clerk keys, API URL
   # API: Database URL, JWT keys
   # Hub: Database URL
   # Validator: Private key, Hub URL
   ```

### Running the Application

1. **Start all services**
   ```bash
   bun run dev
   ```

2. **Or run individual services**
   ```bash
   # Frontend (port 3000)
   cd apps/frontend && bun run dev
   
   # API (port 8080)
   cd apps/api && bun run index.ts
   
   # Hub (port 8081)
   cd apps/hub && bun run index.ts
   
   # Validator
   cd apps/validator && PRIVATE_KEY="[...]" bun run index.ts
   ```

## 🔧 Configuration

### Environment Variables

**Frontend (.env.local)**
```env
NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=pk_test_...
CLERK_SECRET_KEY=sk_test_...
```

**API (.env)**
```env
DATABASE_URL=postgresql://user:password@localhost:5432/uptime_db
JWT_PUBLIC_KEY=-----BEGIN PUBLIC KEY-----...
```

**Validator (.env)**
```env
PRIVATE_KEY=[1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45,46,47,48,49,50,51,52,53,54,55,56,57,58,59,60,61,62,63,64]
```

## 🏃‍♂️ How It Works

1. **User Registration**: Users sign up through Clerk authentication
2. **Website Addition**: Users add websites to monitor via the dashboard
3. **Validator Network**: Validators connect to the hub via WebSocket
4. **Task Distribution**: Hub distributes monitoring tasks to available validators
5. **Website Checking**: Validators perform HTTP checks and measure latency
6. **Result Verification**: Results are cryptographically signed and verified
7. **Data Storage**: Monitoring results stored in PostgreSQL database
8. **Payment Processing**: Validators earn rewards for successful monitoring
9. **Dashboard Updates**: Real-time updates displayed to users

## 🔐 Security Features

- **Cryptographic Signatures**: All validator communications are signed
- **Message Verification**: Hub verifies all incoming validator messages
- **JWT Authentication**: Secure API access with JSON Web Tokens
- **Input Validation**: Comprehensive request validation and sanitization
- **CORS Protection**: Configured cross-origin resource sharing

## 📊 Database Schema

- **Users**: User accounts and authentication
- **Websites**: Monitored websites and their configurations
- **Validators**: Network nodes and their metadata
- **WebsiteTicks**: Individual monitoring results and metrics

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📝 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- Solana Foundation for blockchain infrastructure
- Clerk for authentication services
- Vercel for deployment platform
- Open source community for amazing tools and libraries