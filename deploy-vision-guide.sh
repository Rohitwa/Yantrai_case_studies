#!/bin/bash
set -e

# YantrAI Vision Guide - Google Cloud Run Deployment
# This script builds the Docker image and deploys it as a NEW service.

# Colors for output
BLUE='\033[0;34m'
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
RED='\033[0;31m'
NC='\033[0m'

# Configuration
PROJECT_ID="ogretailos-474407"
REGION="us-central1"
REPO="og-repo"
SERVICE_NAME="yantrai-vision-guide"
IMAGE_NAME="yantrai-vision-guide"
IMAGE_TAG="latest"

# Derived
FULL_IMAGE_NAME="$REGION-docker.pkg.dev/$PROJECT_ID/$REPO/$IMAGE_NAME:$IMAGE_TAG"

echo -e "${BLUE}🚀 Starting YantrAI Vision Guide deployment to Cloud Run${NC}"
echo -e "${BLUE}Project: $PROJECT_ID${NC}"
echo -e "${BLUE}Service: $SERVICE_NAME${NC}"

# Check gcloud
if ! command -v gcloud &> /dev/null; then
    echo -e "${RED}❌ gcloud CLI is not installed.${NC}"
    exit 1
fi

echo -e "${YELLOW}🔧 Setting gcloud project...${NC}"
gcloud config set project $PROJECT_ID

echo -e "${YELLOW}🔐 Configuring Docker auth...${NC}"
gcloud auth configure-docker $REGION-docker.pkg.dev --quiet

echo -e "${YELLOW}🏗️  Building and pushing Docker image (linux/amd64)...${NC}"
# Use buildx for cross-platform builds if needed, or standard build if on similar arch
docker build --platform linux/amd64 -t $FULL_IMAGE_NAME --push .

echo -e "${GREEN}✅ Image pushed to Artifact Registry${NC}"

echo -e "${YELLOW}🚀 Deploying to Cloud Run...${NC}"
gcloud run deploy $SERVICE_NAME \
    --image $FULL_IMAGE_NAME \
    --region $REGION \
    --platform managed \
    --allow-unauthenticated \
    --port 8080 \
    --cpu 1 \
    --memory 256Mi \
    --min-instances 0 \
    --max-instances 1 \
    --timeout 300 \
    --quiet

echo -e "${GREEN}✅ Deployment completed successfully!${NC}"

SERVICE_URL=$(gcloud run services describe $SERVICE_NAME --region=$REGION --format="value(status.url)")
echo -e "${GREEN}🌐 New Service URL: $SERVICE_URL${NC}"
echo ""
echo -e "${BLUE}Verification: ${SERVICE_URL}${NC}"
