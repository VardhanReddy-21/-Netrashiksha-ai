# NetraShiksha AI (नेत्रशिक्षा AI) - Deployment Guide

This guide details how to deploy NetraShiksha AI across various environments:
1. **Local Machine (Windows / macOS / Linux)**
2. **Docker & Docker Compose**
3. **Render.com (Free Cloud Web Service)**
4. **Hugging Face Spaces (Free Public AI Web App)**
5. **Railway / Fly.io / Koyeb**
6. **Self-Hosted Linux VPS (Ubuntu with Systemd + Nginx + SSL)**

---

## ⚙️ Environment Variables
| Variable | Default | Purpose |
| :--- | :--- | :--- |
| `PORT` | `8001` | Port number for the FastAPI / Uvicorn server |
| `HOST` | `127.0.0.1` (or `0.0.0.0` in Docker) | Host interface to bind to (`0.0.0.0` for public/containers) |
| `NO_BROWSER`| `0` | Set to `1` in headless/cloud environments to suppress browser auto-open |

---

## 1. Local Deployment

### Windows (1-Click)
Double-click `start_local.bat` in the project root. It will:
1. Create a `venv` virtual environment if it doesn't already exist.
2. Install all dependencies from `requirements.txt`.
3. Launch `python run.py` and open your default browser at `http://127.0.0.1:8001`.

### macOS / Linux / Manual Windows
```bash
# 1. Navigate to directory
cd netrashiksha-ai

# 2. Create virtual environment
python3 -m venv venv

# 3. Activate virtual environment
# On Linux / macOS:
source venv/bin/activate
# On Windows PowerShell:
.\venv\Scripts\Activate.ps1
# On Windows CMD:
venv\Scripts\activate.bat

# 4. Install dependencies
pip install -r requirements.txt

# 5. Run tests
python tests/test_backend.py

# 6. Start server
python run.py
```
App will be accessible at: `http://127.0.0.1:8001`.

---

## 2. Docker & Docker Compose Deployment

### Using Docker CLI
```bash
# Build the Docker image
docker build -t netrashiksha-ai:latest .

# Run container on port 8001
docker run -d -p 8001:8001 --name netrashiksha netrashiksha-ai:latest
```

### Using Docker Compose
```bash
docker compose up -d
```
Access at `http://localhost:8001`. To stop:
```bash
docker compose down
```

---

## 3. Free Cloud Deployment: Render.com

Render offers free web service hosting for Python / FastAPI:
1. Push your project to a GitHub repository:
   ```bash
   git init
   git add .
   git commit -m "Deploy NetraShiksha AI"
   git remote add origin https://github.com/<your-username>/netrashiksha-ai.git
   git push -u origin main
   ```
2. Log in to [Render.com](https://render.com) and click **New +** -> **Web Service**.
3. Connect your GitHub repository.
4. Configure service settings:
   - **Environment:** `Python`
   - **Build Command:** `pip install -r requirements.txt`
   - **Start Command:** `uvicorn backend.main:app --host 0.0.0.0 --port $PORT`
   - **Plan:** Free
5. Click **Create Web Service**. Render provides a live HTTPS URL (e.g., `https://netrashiksha-ai.onrender.com`).

*(Note: `render.yaml` is pre-configured in the repository root for automated blueprint deployment).*

---

## 4. Free Cloud Deployment: Hugging Face Spaces

Hugging Face Spaces provides permanent free hosting with SSL:
1. Create a free account at [Hugging Face](https://huggingface.co).
2. Click **New Space** -> Choose a name (e.g. `netrashiksha-ai`).
3. Select **Docker** as the Space SDK -> Choose **Blank template**.
4. Push the project files to the Hugging Face Git repository:
   ```bash
   git remote add hf https://huggingface.co/spaces/<your-username>/netrashiksha-ai
   git push hf main
   ```
5. Hugging Face will automatically detect the `Dockerfile` and launch the app with a public shareable URL.

---

## 5. Linux VPS Deployment (Ubuntu 22.04 / 24.04)

For dedicated servers or cloud VMs (AWS EC2, DigitalOcean Droplet, Linode, Hetzner):

### 1. Install System Packages
```bash
sudo apt update && sudo apt install -y python3-pip python3-venv nginx certbot python3-certbot-nginx git libgl1 libglib2.0-0
```

### 2. Setup Code & Virtual Environment
```bash
sudo mkdir -p /var/www/netrashiksha
sudo chown -R $USER:$USER /var/www/netrashiksha
git clone <your-repo-url> /var/www/netrashiksha
cd /var/www/netrashiksha

python3 -m venv venv
source venv/bin/activate
pip install -r requirements.txt
```

### 3. Create Systemd Service
Create `/etc/systemd/system/netrashiksha.service`:
```ini
[Unit]
Description=NetraShiksha AI Assistive Classroom Server
After=network.target

[Service]
User=www-data
WorkingDirectory=/var/www/netrashiksha
ExecStart=/var/www/netrashiksha/venv/bin/uvicorn backend.main:app --host 127.0.0.1 --port 8001 --workers 2
Restart=always

[Install]
WantedBy=multi-user.target
```

Enable and start the service:
```bash
sudo systemctl daemon-reload
sudo systemctl enable netrashiksha
sudo systemctl start netrashiksha
```

### 4. Configure Nginx Reverse Proxy
Create `/etc/nginx/sites-available/netrashiksha`:
```nginx
server {
    listen 80;
    server_name your-domain.com;

    location / {
        proxy_pass http://127.0.0.1:8001;
        proxy_set_header Host $host;
        proxy_set_header X-Real-IP $remote_addr;
        proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
        proxy_set_header X-Forwarded-Proto $scheme;
    }
}
```

Enable configuration and reload Nginx:
```bash
sudo ln -s /etc/nginx/sites-available/netrashiksha /etc/nginx/sites-enabled/
sudo nginx -t
sudo systemctl reload nginx
```

### 5. Setup Free SSL Certificate
```bash
sudo certbot --nginx -d your-domain.com
```
