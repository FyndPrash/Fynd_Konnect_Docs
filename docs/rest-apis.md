# REST APIs Documentation

This documentation provides an overview of the REST APIs available for integrating with the Fynd platform. These APIs will help you manage products, orders, inventory, and more, programmatically.

## Base URL

All API requests are made to the following base URL:


Make sure to include this base URL before all endpoint paths.

## Authentication

Fynd APIs require authentication using OAuth 2.0. You need to send an access token in the `Authorization` header of every request.

### Obtain Access Token

To obtain an access token, use the following endpoint:


**Headers:**
- `Content-Type: application/json`

**Request Body:**

```json
{
  "client_id": "your-client-id",
  "client_secret": "your-client-secret",
  "grant_type": "client_credentials"
}
{
  "access_token": "your-access-token",
  "token_type": "Bearer",
  "expires_in": 3600
}
