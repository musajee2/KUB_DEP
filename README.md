# 🌐 Cloud Native Monitoring App - SIT323 Task 10.1P

This project demonstrates deploying a containerized Node.js app to Google Kubernetes Engine (GKE) using Docker, Kubernetes, and public Docker Hub image hosting. It includes setup of cloud-native observability using GCP tools.

---

## 🧠 Application Overview

A simple Express.js server that logs and responds to root requests with:
```
Cloud Native Monitoring App Running
```

---

## 🛠️ Tech Stack

- Node.js
- Docker
- Kubernetes
- Google Cloud Platform (GKE)
- Docker Hub (public image hosting)

---

## 🚀 Deployment Instructions

### 1. Build Docker Image
```bash
docker build -t monitor-app .
```

### 2. Tag and Push to Docker Hub
```bash
docker tag monitor-app mydockerhubusername/monitor-app:latest
docker push mydockerhubusername/monitor-app:latest
```

### 3. Update Kubernetes Manifest
In `app-deployment.yaml`:
```yaml
image: mydockerhubusername/monitor-app:latest
```

### 4. Apply Deployment to GKE
```bash
kubectl apply -f app-deployment.yaml
kubectl get pods
kubectl get services
```

---

## 📈 Monitoring & Logging

### ✅ Cloud Logging:
- GCP → Logging → Logs Explorer
- Query:
  ```text
  resource.type="k8s_container"
  ```
- Observe: container logs with `"console.log"` outputs from the app.

### ✅ Cloud Monitoring:
- GCP → Monitoring → Metrics Explorer
- Filter:
  ```text
  resource.type="k8s_container"
  ```
- Visualize: pod CPU usage, memory, container uptime.

---

## 📸 Screenshots (Attach in Submission)

1. ✅ `kubectl get pods` showing pod in `Running` state
2. ✅ `kubectl get services` with `EXTERNAL-IP`
3. ✅ Web browser showing `"Cloud Native Monitoring App Running"`
4. ✅ GCP Logs Explorer with captured logs
5. ✅ GCP Monitoring dashboard with metrics

---

## ✅ GCP Resource Clean-Up
After testing:
```bash
gcloud container clusters delete monitor-cluster --region=australia-southeast1
```

---

## 🙋 Author
**s223713179@deakin.edu.au**  
Deakin University | SIT323 Cloud Native Application Development
