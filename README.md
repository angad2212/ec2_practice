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


















