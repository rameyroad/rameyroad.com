# How to setup build and deploy in GitHub.

Note this information came from this page:

https://learn.microsoft.com/en-us/azure/container-instances/container-instances-github-action

**_You must be logged into via Azure CLI_**

## Create the credentials:

> ### \$groupId=$(az group show --name $resourceGroup --query id --output tsv)
>
> ### az ad sp create-for-rbac --scope $groupId --role Contributor --sdk-auth

The output of this command will be the the JSON value for the AZURE_CREDENTIALS secret. Save that and note the ClientId in the JSON for the next steps.

## Grant the credentials ACR push permissions

> ### \$registryId=$(az acr show --name rameyroad --resource-group $resourceGroup --query id --output tsv)
>
> ### az role assignment create --assignee fc2d32c6-8074-422d-b5eb-5d0e7b07f95b --scope $registryId --role AcrPush

## Other Secrets

The remaining secrets come from the Azure Container registry and must be obtained by logging in using a browser.

> ### echo "Using subscription ID $subscriptionID"
> ### echo "Creating SP for RBAC with name $servicePrincipalName, with role $roleName and in scopes /subscriptions/$subscriptionID/resourceGroups/$resourceGroup"
> ### az ad sp create-for-rbac --scope $scope \
> ###                          --role $roleName \
> ###                          --sdk-auth
