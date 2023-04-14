# hedgehog4-client
Ratings and reviews x-platform app allowing anyone to know whether something or somewhere will be a good use of their time or money before they spend it.

## Running Client Locally

- cd into hedgehog4-client folder
- npm start


The first ever build and deploy is documented in firstBuildAndDeploy.md
## Building and Deploying Server
- Az login
- Az upgrade
- Set variables
    - RESOURCE_GROUP="hedgehog"
    - LOCATION="westeurope"
    - ENVIRONMENT="env-hedgehog-containerapps"
    - API_NAME="hedgehog-server"
    - FRONTEND_NAME="hedgehog-client"
    - GITHUB_USERNAME="thekitbag"
    - ACR_NAME="hedgehogapp"

- docker build -f Dockerfile.server --tag $ACR_NAME.azurecr.io/$API_NAME --platform linux/amd64 .
- az acr login --name $ACR_NAME
- docker push $ACR_NAME.azurecr.io/$API_NAME
- az containerapp update \
  --name $API_NAME \
  --resource-group $RESOURCE_GROUP \
  --image $ACR_NAME.azurecr.io/$API_NAME 

## Building and Deplying Client
- Az login
- Az upgrade
- Set variables
    - RESOURCE_GROUP="hedgehog"
    - LOCATION="westeurope"
    - ENVIRONMENT="env-hedgehog-containerapps"
    - API_NAME="hedgehog-server"
    - FRONTEND_NAME="hedgehog-client"
    - GITHUB_USERNAME="thekitbag"
    - ACR_NAME="hedgehogapp"

- az acr login --name $ACR_NAME
- docker push $ACR_NAME.azurecr.io/$FRONTEND_NAME
- az containerapp update \
  --name $FRONTEND_NAME \
  --resource-group $RESOURCE_GROUP \
  --image $ACR_NAME.azurecr.io/$FRONTEND_NAME 
