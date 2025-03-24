# Export MyFitnessPal Data to Grafana

## Project by Nileshkumar Yadav

This project was created as a task for Google Summer of Code (GSoC) 2025.

### To see the working of this project head-down to the end of this readme file i have attached the Video of the working website

### Overview

This project provides a simple web application that allows users to upload MyFitnessPal CSV exports and visualize the data using Grafana. MyFitnessPal is a popular mobile app for tracking food intake, exercise, and other fitness metrics. While it allows CSV exports, manually analyzing these files can be cumbersome. This project automates the process by integrating with Grafana to provide clear and interactive visualizations.

### Features

- Upload MyFitnessPal CSV exports
- Parse and store CSV data in MongoDB
- Display interactive visualizations (bar charts, line graphs, etc.)

## Installation and Setup

### Prerequisites

Ensure you have the following installed:

- **Node.js** (v18+ recommended)
- **MongoDB**
- **Grafana**

### 1. Clone the Repository

```sh
git clone https://github.com/Ni1esh-Yadav/Myfitnesspal.git
cd Myfitnesspal
```

### 2. Install Dependencies

```sh
npm install
```

### 3. Connect MongoDB

replace:

```sh
mongodb://localhost:27017/grafana-data
```

with your mongoDb instance

Ensure MongoDB is running

### 4. Run the Backend Server

```sh
node index.js
```

The server will start on `http://localhost:5000`.

---

# Grafana Installation and Setup Guide

## 1. Installing Grafana

### **On Windows**

1. Download Grafana from the official website: [Grafana Downloads](https://grafana.com/grafana/download)
2. Run the installer and follow the installation steps.
3. By default, Grafana is installed at:
   - `C:\Program Files\GrafanaLabs\grafana`

### **On Linux (Debian/Ubuntu)**

```bash
sudo apt-get install -y adduser libfontconfig1
wget https://dl.grafana.com/oss/release/grafana_10.0.0_amd64.deb
sudo dpkg -i grafana_10.0.0_amd64.deb
```

### **On macOS (Homebrew)**

```bash
brew install grafana
```

## 2. Starting and Stopping Grafana

### **On Windows**

- **Start Grafana:** Open Command Prompt and run:
  ```cmd
  net start grafana
  ```
- **Stop Grafana:**
  ```cmd
  net stop grafana
  ```

Alternatively, you can start Grafana from:

- `C:\Program Files\GrafanaLabs\grafana\bin\grafana-server.exe`

### **On Linux/macOS**

- **Start Grafana:**
  ```bash
  sudo systemctl start grafana-server
  ```
- **Stop Grafana:**
  ```bash
  sudo systemctl stop grafana-server
  ```
- **Enable on Boot:**
  ```bash
  sudo systemctl enable grafana-server
  ```

## 3. Accessing Grafana

- Open a browser and go to: `http://localhost:3000`
- Default login credentials:
  - **Username:** `admin`
  - **Password:** `admin` (you will be prompted to change it after the first login)

## 4. Configuring Grafana

Grafana’s main configuration file (`grafana.ini`) is located at:

- **Windows:** `C:\Program Files\GrafanaLabs\grafana\conf\defaults.ini`
- **Linux/macOS:** `/etc/grafana/grafana.ini`

### **Allow Grafana to be Embedded in an iFrame**

Edit the `grafana.ini` file and update:

```ini
[security]
allow_embedding = true
```

Restart Grafana for changes to take effect:

```ini
command for stopping and starting grafana is mentioned above
```

# Setting Up `uploadId` Variable in Grafana

## 📌 Step 1: Add the `uploadId` Variable in Grafana

1. Open Grafana and go to **Dashboard Settings (⚙️) > Variables**.
2. Click **"Add variable"**.
3. Fill in the details:
   - **Name** → `uploadId`
   - **Type** → `Query`
   - **Label** → _(Optional, e.g., “Select Upload ID”)_
   - **Description** → _(Optional, e.g., “Choose an uploadId to filter data”)_
   - **Hide** → `None`

## 📌 Step 2: Set Up the Query to Fetch `uploadId`s

1. Under **"Query Options"**, set:

   - **Data Source** → `yesoreyeram-infinity-datasource`
   - **Query Type** → `URL`
   - **Method** → `GET`
   - **URL** →
     ```
     http://localhost:5000/api/upload-ids
     ```
   - **Format** → `Table`
   - **Value Field** → `uploadId` _(If response is a list of objects like `[{ "uploadId": "123" }]`, use `$.uploadId` in JSON path.)_

2. Click **"Run Query"** and ensure it shows a list of `uploadId`s.

## 📌 Step 3: Configure Selection Options

- **Multi-value** → ✅ Enable if you want to allow multiple selections.
- **Allow custom values** → ✅ Enable if users can manually enter an ID.
- **Include All Option** → _(Optional) Enable if you want an "All" option._

## 📌 Step 4: Use `uploadId` in Panel Query

1. Open your **Grafana Panel**.
2. Set **Data Source** → `yesoreyeram-infinity-datasource`
3. Set Query:
   ```
   http://localhost:5000/api/data/${uploadId}
   ```
   ✅ Grafana will replace `${uploadId}` with the selected ID from the dropdown.

## 📌 Step 5: Save and Test

- Save the variable and refresh the dashboard.
- Select an `uploadId` from the dropdown.
- Check if the panel correctly updates based on the selected `uploadId`.

**Final Notes:**

- Ensure your Express backend is running (`node index.js`).
- Open your browser and manually test `http://localhost:5000/api/upload-ids` to confirm it returns the correct data.
- If errors persist, check **browser console logs** and **backend logs**.

**Working Of Website:**

https://github.com/user-attachments/assets/6a1f0431-ec2b-4a85-959f-df7e795373ce


