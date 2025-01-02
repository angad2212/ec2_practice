# Deploying Node.js App on EC2 Instance

This guide will walk you through the process of deploying a Node.js application on an EC2 instance, so it can be accessed over the internet.

## Steps to Deploy

### 1. Connect to SSH
First, connect to your EC2 instance using SSH:
```bash
ssh -i '<path-to-your-key>.pem' key-name@<public-ip>
```

### 2. Install Git and Clone the Repository
```bash
sudo yum update -y
sudo yum install git -y

git --version

git clone <repo-url>
```

### 3. Install NVM and Node.js
Install Node Version Manager:
```bash
curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.7/install.sh | bash
```

Load it:
```bash
source ~/.bashrc
```

Install the Latest version of node:
```bash
nvm install --lts
node -v
```

### 4. Run the Node.js Application
Navigate to the folder:
```bash
cd <your-app-folder>
```

Install dependencies and then run your app
```bash
npm install
node index.js
```

Your app should now be running on your EC2 instance and accessible through the public IP address of the EC2 instance.
[Link Text](http://<your-instance-public-ip>:8080/todos)

Ideally, instead of installing dependencies directly, you would dockerize your app. To do so, follow these steps:

### 1. After connecting to ssh server, install docker on ec2:
```bash
# Update the package database
sudo yum update -y

# Install Docker
sudo yum install docker -y

# Start Docker service
sudo service docker start

# Add EC2 user to the Docker group
sudo usermod -a -G docker ec2-user

# Log out and log back in to apply the group changes
exit
```
### 2. Pull the Docker Image from Docker Hub:
Once Docker is installed on your EC2 instance, pull the Docker image from Docker Hub:

```bash
docker pull <your-dockerhub-username>/my-node-app
Run the Docker Container on EC2:
```

### 3.Now, run the container:

```bash
docker run -p 80:3000 <your-dockerhub-username>/my-node-app
This binds port 3000 of the container to port 80 on your EC2 instance. You can access your app by visiting the public IP address of the EC2 instance in the browser.
```













