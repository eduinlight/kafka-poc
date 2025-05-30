# Kafka Producer/Consumer Example

A simple Kafka learning project demonstrating message production and consumption using KafkaJS with TypeScript and Bun runtime.

## Features

- **Producer**: Sends messages to a Kafka topic (`my-topic`)
- **Consumer**: Consumes messages from the topic with configurable consumer groups
- **Docker Setup**: Complete Kafka cluster with Zookeeper and Kafka UI for monitoring
- **TypeScript**: Full type safety with modern ES modules

## Prerequisites

- [Bun](https://bun.sh) runtime
- Docker and Docker Compose

## Setup

1. Install dependencies:
```bash
bun install
```

2. Start Kafka cluster:
```bash
docker-compose up -d
```

3. Access Kafka UI at http://localhost:8080 to monitor topics and messages

## Usage

**Run Producer:**
```bash
bun run src/producer.ts
```

**Run Consumer:**
```bash
bun run src/consumer.ts [group-id-suffix]
```

The consumer accepts an optional group ID suffix to create multiple consumer groups for testing parallel consumption.
