# Scandinavia tech Assignment

## Table of Contents

  - [Project Overview](#project-overview)
  - [Microservices Overview](#microservices-overview)
  - [Plannging digram](#plannging-digram)
  - [Technologies Used](#technologies-used)
  - [Monorepo Structure](#monorepo-structure)
  - [Getting Started](#getting-started)
  - [Running the Project](#running-the-project)
  - [Scaling Microservice 2](#scaling-microservice-2)
  - [Notes](#notes)

## Project Overview

This project demonstrates a system of three microservices built with NestJS that communicate through RabbitMQ and use MongoDB for data storage. The microservices are designed to handle events, store data, and provide data to clients efficiently.

### Microservices Overview

1. **Microservice 1 (Event Publisher)**: Publishes an event every second to a RabbitMQ broker with the following interface: 
`{ name: “name”, description: “description” }`.
 and i add counter attribute to note the difference between published events , the final interface is:
`{ name: “name”, description: “description” , “counter”:1  }`.

2. **Microservice 2 (Event Receiver & Data Provider)**:
   - Consumes events from RabbitMQ published by Microservice 1.
   - Inserts each received event into the MongoDB database.
   - Exposes an RPC through RabbitMQ to fetch the most recent 10 published events.
   - Supports horizontal scalability to allow multiple instances to work in parallel.

3. **Microservice 3 (Event Receiver & API)**:
   - Consumes events from RabbitMQ published by Microservice 1 and logs them to the console.
   - Exposes an HTTP endpoint to fetch the most recent 10 published events from Microservice 2.

## Plannging digram

[Plannging digram](https://drive.usercontent.google.com/download?id=1FLhso2bKuAQF56DO7vZ9JhvNhB8SpFdI&authuser=0)



## Technologies Used

- **NestJS**.
- **RabbitMQ**
- **MongoDB**
- **Mongoose**
- **Docker**
- **@golevelup/nestjs-rabbitmq**
- **npm workspaces**

## Monorepo Structure

This project is set up as a monorepo using **npm workspaces** instead of a dedicated monorepo tool like NX. This allows for efficient management of dependencies and code sharing between the microservices without the need for additional tooling.

## Getting Started

To run this project, ensure you have Docker installed on your machine. Docker will allow you to run all necessary services in isolated containers.

##### Prerequisites

- **Docker**: Install Docker from [here](https://www.docker.com/get-started).

### Running the Project

1. **Clone the Repository**:
   ```bash
   git clone https://github.com/Amgad226/Scandinavia-tech-assignment.git
   cd nestjs-microservices 
   ```
   
2. **Setup Environment Variables**:
    ```bash
    cp .env.example .env
    ```

3. ***Running the Projects***
    ```bash
    docker-compose up
    ```

### Scaling Microservice 2
Microservice 2 is designed to be horizontally scalable. To run multiple instances of Microservice 2 (Event Receiver & Data Provider), use the following command:
   ```bash
   docker-compose up --scale ms-event-receiver-data-provider=2 -d
   ```
Replace 2 with the desired number of instances. Docker Compose will handle the creation of multiple containers for Microservice 2.

### Notes
when you run the docker compose up plaese wait for 5-10 seconds,to make sure to establich connection between microservices and rabbit mq 