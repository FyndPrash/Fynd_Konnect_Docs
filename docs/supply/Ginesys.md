# Ginesys 

## Scope of Integration

### Prerequisite 

The integration with Ginesys is divided into two parts:

1. **Inventory**: Ginesys is using Fynd API endpoints to update inventory.
2. **Orders**: Fynd is using Ginesys API for Sales and Returns posting purposes only; the rest of the flow is managed on Fynd OMS itself.

### Mandatory Details

The following mandatory details are required from the Integration Partner of Ginesys over email. It is suggested to route this email via the Seller.

| Parameters       | Level          | Mandatory | How to Get It | To be Provided by | Description                                                                                                           |
|------------------|----------------|-----------|----------------|-------------------|-----------------------------------------------------------------------------------------------------------------------|
| GDS Entity ID    | Company level   | Yes       | Email          | Ginesys           | Unique identifier for every company                                                                                  |
| IP Address       | Company level   | Yes       | Email          | Ginesys           | IP address of the POS server of the company                                                                          |
| Auth Key         | Company level   | Yes       | Email          | Ginesys           | Auth key to grant access to the server                                                                                |
| ICODE            | Company level   | Yes       | Email          | Brand             | This code can be EAN/UPC/SKU depending on the seller. It is used to specify the quantity update against which identifier on Fynd and while posting sales to Ginesys. |

Also, share the below channel codes with Ginesys over email for the LEDGER/MOP setup for the seller.

| Channel Code                   | Ledger         |
|--------------------------------|----------------|
| FYND                           | FYND           |
| ECOMM (Website)               | ECOMM          |
| FY_AMAZON                      | AMZ            |
| FY_MYNTRA                      | MYNTRA         |
| UNIKET_B2B                    | UNIKETB2B      |
| FY_TATACLIQ                   | TATACLIQ       |
| FY_FLIPKART_ASSURED           | FPKARTASD      |
| FY_AJIO                        | AJIO_VMS       |
| FY_MAGICPIN                   | MGPN           |
| FY_SHOPIFY                     | SHOPIFY_IN     |
| FY_NYKAA_FASHION               | NYKAA_FASHION  |
| FY_FLIPKART                   | FLIPKART       |

## Functional Flow

### Guide - Setup Ginesys on Fynd

To onboard/integrate any new/existing store to Ginesys POS, please follow the steps below:

1. Go to [Fynd Platform](https://platform.fynd.com/) and select the desired company.
2. Select **Ginesys integration** under the Fynd platform integration section:
   - **Fynd Platform** → **Settings (1)** → **Integrate (2)**

![Image1](/img/ginesys/ginesys1.png)
3. From the integration, list select Ginesys (3).  
4. Now enter the details provided by Ginesys on the given form page.
![Image2](/img/ginesys/ginesys2.png)
5. Once you have filled in the mandate details, proceed to save Ginesys integration for the seller.  
6. The next step would be to share the username (integration id) and company password (company token) with Ginesys.  

![Image4](/img/ginesys/ginesys4.png)
# Enable New Store to Ginesys Integration

- Check if the store is verified in the Profile section of Fynd Platform.
- Get the store mapping from the seller as per Ginesys Location Code.
- Enable **Inventory** and **Order** checkboxes of the store to activate integrations.
![Image5](/img/ginesys/ginesys5.png)
> **Note:** Location ID and Channel Code should be left blank as it is not required.  
# Guide - Order Processing

1. Order placed by the customer on any marketplace will reflect on the Fynd OMS system.
2. The store/warehouse person in charge will have to go to Fynd OMS via [https://seller.fynd.com](https://seller.fynd.com).
![Image7](/img/ginesys/ginesys7.png)
3. Click on the **Go to Order Manager** button on the top right of the page.
4. Now you will see the new order in the **NEW** tab section of the page. 
5. Check for the product's physical availability and click on the **Confirm** button to proceed.
![Image7](/img/ginesys/ginesys7.png)
6. Once the order is confirmed, the order is auto-invoiced at Fynd’s end.
7. This invoice detail is posted to the Ginesys system for Sales Posting.
8. Go to the **TO BE PACKED** tab.
9. Check the relevant order and then click on the **Label** & **Invoice Download** buttons.
![Image10](/img/ginesys/ginesys10.png)
10. Now pack the shipment and keep it ready for dispatch by clicking on the **All Packed** button.

# Guide - To Download Sales Posted on Ginesys

1. **Navigate to Reports > E-Commerce Report > E-COMMERCE_DSR2**.
2. From the menu, select **Export As**.
3. Choose the **Excel** format.
4. A progress bar will display for Report Execution.
5. Below is a sample of the exported Excel file for Sales Invoice Posted.

---

## Technical Flow

### Inventory Integration

### Understanding

- Ginesys uses **Fynd Inventory API v2**.
- Ginesys generates an API token using the **username** (integration ID) and **password** (company token) provided by Fynd.
- Ginesys pushes the inventory against the respective seller identifier.
- **FULL SYNC** Job runs once a day.
- **DELTA inventory** is pushed whenever there is activity on any article.
- Ginesys uses a **checker API** to check the status of the inventory pushed.

### API Endpoints

- **Postman Collection**: [Ginesys Inventory API](https://www.getpostman.com/collections/b7d85d1651c37566d5d9)

#### 1. Authentication

The Authentication API accepts a username and password, creating an access token for the stock point login. This token is used as a request header for the rest of the API calls.

**Request:**

- Method: `GET`
- Endpoint: `https://{{host}}/hogwarts/aggregators/api/v1/{{aggregator}}/shipment/authToken`

**Query Params:**

| Parameter | Description          | Example  |
|-----------|----------------------|----------|
| username  | Integration username  | xxxx     |
| password  | Integration password  | zzzz     |

**Example URL**:  
`https://{{host}}/hogwarts/aggregators/api/v1/{{aggregator}}/authToken?username=xxxx&password=zzzz`

**Response:**

```json
{
  "status": "SUCCESS",
  "accessToken": "61780580-3ff6-4dbb-b6d8-7955b5904a45"
}
```
# API Endpoint - Inventory Push

This event is fired when there is a stock movement against an item. This event sends out the latest stock for that item.

For each item you offer on Fynd, send the exact number you currently have in stock. If you use multiple sales channels, we recommend configuring your systems to send a value of zero once your available inventory reaches a level you specify. When the quantity > 0 the buy button is activated, and the quantity is decremented with each order. When the quantity reaches zero, the item is no longer available for purchase on Fynd until you send a replenishment value.

## Endpoints Shared with Ginesys

- **Auth Endpoint**  
  `https://api.fynd.com/hogwarts/aggregators/api/v1/{{aggregator}}/shipment/authToken`

- **Update Inventory**  
  `https://api.fynd.com/inventory/aggregators/api/v2/updateInventory`

- **Acknowledgement**  
  `https://api.fynd.com/inventory/aggregators/api/v2/getApiStatus`

We have the below APIs to push real-time inventory into the Fynd ecosystem.

### Update Inventory API

- **Method:** PUT  
- **End Point:** `{{host}}/inventory/aggregators/api/v2/updateInventory`

#### Request Header (Mandatory)

- **API Key:** `xxxxxxxx`

#### Request Payload

- The maximum data payload size per request is **500**.

```json
[
   {
      "ADMSITE_CODE": "raw_store1",
      "ICODE": "9000000000032",
      "BARCODE": "9000000000032",
      "STOCK_QUANTITY": 5
   },
   {
      "ADMSITE_CODE": "raw_store2",
      "ICODE": "9000000000034",
      "BARCODE": "9000000000034",
      "STOCK_QUANTITY": 5
   }
]
```


## APIs to Push Real-Time Inventory into the Fynd Ecosystem

### Update Inventory API

- **Method:** `PUT`
- **End Point:** `{{host}}/inventory/aggregators/api/v2/updateInventory`
- **Request Header (Mandatory):**
  - API Key: `xxxxxxx`

#### Request Payload
* The maximum data payload size per request is 500.

```json
[
   {
      "ADMSITE_CODE": "raw_store1",
      "ICODE": "9000000000032",
      "BARCODE": "9000000000032",
      "STOCK_QUANTITY": 5
   },
   {
      "ADMSITE_CODE": "raw_store2",
      "ICODE": "9000000000034",
      "BARCODE": "9000000000034",
      "STOCK_QUANTITY": 5
   }
]
