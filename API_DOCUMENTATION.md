# Zingking Masala - API Documentation

## 🔗 Base URL
```
http://localhost:3000/api    (Development)
https://zingkingmasala.com/api (Production)
```

---

## 🛍️ Products API

### 1. Get All Products
```http
GET /api/products
```

**Query Parameters:**
- `category` (optional): `all`, `everyday`, `blended`, `premium`
- `minPrice` (optional): minimum price
- `maxPrice` (optional): maximum price

**Response:**
```json
{
  "success": true,
  "data": [
    {
      "_id": "507f1f77bcf86cd799439011",
      "name": "Garam Masala",
      "price": 299,
      "category": "blended",
      "stock": 150,
      ...
    }
  ]
}
```

---

### 2. Get Single Product
```http
GET /api/products/{id}
```

**Response:**
```json
{
  "success": true,
  "data": {
    "_id": "507f1f77bcf86cd799439011",
    "name": "Garam Masala",
    "description": "A blend of warming spices...",
    "price": 299,
    "category": "blended",
    "image": "https://...",
    "ingredients": ["Cumin", "Coriander", ...],
    "weight": 100,
    "calories": 251,
    "protein": 10.5,
    ...
  }
}
```

---

### 3. Create Product (Admin Only)
```http
POST /api/products
Content-Type: application/json
Authorization: Bearer {admin_token}
```

**Request Body:**
```json
{
  "name": "New Masala",
  "description": "Description here",
  "price": 299,
  "category": "blended",
  "image": "https://...",
  "ingredients": ["Cumin", "Coriander"],
  "weight": 100,
  "calories": 251,
  "protein": 10.5,
  "carbs": 55.2,
  "fat": 8.3,
  "fiber": 13.3,
  "sodium": 300,
  "certifications": ["FSSAI", "ISO 9001"],
  "bestFor": ["Curries", "Biryanis"],
  "storage": "Keep in cool, dry place",
  "shelfLife": "18 months",
  "stock": 100,
  "sku": "ZING-NW001"
}
```

---

### 4. Update Product (Admin Only)
```http
PUT /api/products/{id}
Content-Type: application/json
Authorization: Bearer {admin_token}
```

**Request Body:** (same as POST, send only fields to update)

---

### 5. Delete Product (Admin Only)
```http
DELETE /api/products/{id}
Authorization: Bearer {admin_token}
```

---

## 🛒 Orders API

### 1. Get All Orders (Admin)
```http
GET /api/orders
Authorization: Bearer {admin_token}
```

**Query Parameters:**
- `status` (optional): `pending`, `processing`, `shipped`, `delivered`, `cancelled`

---

### 2. Create Order (Customer)
```http
POST /api/orders
Content-Type: application/json
```

**Request Body:**
```json
{
  "customerName": "John Doe",
  "customerEmail": "john@example.com",
  "customerPhone": "+91 9876543210",
  "shippingAddress": {
    "street": "123 Main St",
    "city": "Delhi",
    "state": "Delhi",
    "pincode": "110001",
    "country": "India"
  },
  "items": [
    {
      "productId": "507f1f77bcf86cd799439011",
      "name": "Garam Masala",
      "price": 299,
      "quantity": 2,
      "image": "https://..."
    }
  ],
  "subtotal": 598,
  "tax": 107.64,
  "shippingCost": 50,
  "totalAmount": 755.64,
  "paymentMethod": "cod"
}
```

**Response:**
```json
{
  "success": true,
  "data": {
    "_id": "507f1f77bcf86cd799439012",
    "orderNumber": "ORD-123456789",
    "customerName": "John Doe",
    "totalAmount": 755.64,
    "status": "pending",
    "createdAt": "2024-03-19T10:30:00Z"
  }
}
```

---

### 3. Get Order Details
```http
GET /api/orders/{id}
```

---

### 4. Update Order Status (Admin)
```http
PUT /api/orders/{id}
Content-Type: application/json
Authorization: Bearer {admin_token}
```

**Request Body:**
```json
{
  "status": "shipped"
}
```

---

## 📧 Contact/Messages API

### 1. Get All Messages (Admin)
```http
GET /api/contact
Authorization: Bearer {admin_token}
```

**Query Parameters:**
- `type` (optional): `inquiry`, `partnership`, `feedback`, `complaint`
- `isRead` (optional): `true`, `false`

---

### 2. Submit Contact Form
```http
POST /api/contact
Content-Type: application/json
```

**Request Body:**
```json
{
  "name": "John Doe",
  "email": "john@example.com",
  "phone": "+91 9876543210",
  "subject": "Product Inquiry",
  "message": "I would like to know more about your masalas",
  "type": "inquiry"
}
```

**Response:**
```json
{
  "success": true,
  "data": {
    "_id": "507f1f77bcf86cd799439013",
    "name": "John Doe",
    "email": "john@example.com",
    "type": "inquiry",
    "isRead": false,
    "isResolved": false,
    "createdAt": "2024-03-19T10:30:00Z"
  }
}
```

---

## 🔐 Authentication API

### 1. Admin Login
```http
POST /api/auth/login
Content-Type: application/json
```

**Request Body:**
```json
{
  "email": "admin@zingkingmasala.com",
  "password": "password123"
}
```

**Response:**
```json
{
  "success": true,
  "data": {
    "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...",
    "admin": {
      "id": "507f1f77bcf86cd799439014",
      "email": "admin@zingkingmasala.com",
      "name": "Zingking Admin",
      "role": "super_admin"
    }
  }
}
```

**Error Response (401):**
```json
{
  "success": false,
  "error": "Invalid email or password"
}
```

---

### 2. Admin Logout
```http
POST /api/auth/logout
Authorization: Bearer {admin_token}
```

**Response:**
```json
{
  "success": true,
  "data": {
    "message": "Logged out successfully"
  }
}
```

---

## 🛡️ Error Responses

### Bad Request (400)
```json
{
  "success": false,
  "error": "Missing required field: name"
}
```

### Unauthorized (401)
```json
{
  "success": false,
  "error": "Invalid email or password"
}
```

### Not Found (404)
```json
{
  "success": false,
  "error": "Product not found"
}
```

### Server Error (500)
```json
{
  "success": false,
  "error": "Internal server error"
}
```

---

## 💡 Usage Examples

### Example 1: Get All Products
```bash
curl -X GET http://localhost:3000/api/products
```

### Example 2: Get Products by Category
```bash
curl -X GET "http://localhost:3000/api/products?category=premium"
```

### Example 3: Create New Product
```bash
curl -X POST http://localhost:3000/api/products \
  -H "Content-Type: application/json" \
  -H "Authorization: Bearer YOUR_TOKEN" \
  -d '{
    "name": "New Masala",
    "price": 299,
    "category": "blended",
    ...
  }'
```

### Example 4: Submit Contact Form
```bash
curl -X POST http://localhost:3000/api/contact \
  -H "Content-Type: application/json" \
  -d '{
    "name": "John Doe",
    "email": "john@example.com",
    "phone": "+91 9876543210",
    "subject": "Inquiry",
    "message": "Hello",
    "type": "inquiry"
  }'
```

### Example 5: Admin Login
```bash
curl -X POST http://localhost:3000/api/auth/login \
  -H "Content-Type: application/json" \
  -d '{
    "email": "admin@zingkingmasala.com",
    "password": "password123"
  }'
```

---

## 📊 Response Status Codes

| Code | Status | Description |
|------|--------|-------------|
| 200 | OK | Request successful |
| 201 | Created | Resource created |
| 400 | Bad Request | Invalid request |
| 401 | Unauthorized | Authentication failed |
| 403 | Forbidden | Access denied |
| 404 | Not Found | Resource not found |
| 500 | Server Error | Server error |

---

## 🔒 Authentication

### JWT Token Storage
Tokens are stored in:
- **HTTP-Only Cookies** (secure, for server requests)
- **localStorage** (for client-side JavaScript)

### Token Validity
- Expires in: `7 days`
- Refresh before expiry to maintain session

### Adding Token to Requests
```javascript
const token = localStorage.getItem('admin_token');

axios.defaults.headers.common['Authorization'] = `Bearer ${token}`;
```

---

## ⚠️ Rate Limiting
To be implemented:
- 100 requests per minute per IP
- 10 login attempts per minute

---

## 📋 Validation Rules

### Product Fields
- `name`: Required, max 100 characters
- `description`: Required
- `price`: Required, min 0
- `category`: Required, enum: ['everyday', 'blended', 'premium']
- `sku`: Required, unique
- `weight`: Required, positive number

### Order Fields
- `customerName`: Required
- `customerEmail`: Required, valid email
- `customerPhone`: Required
- `items`: Required, non-empty array
- `totalAmount`: Required, positive number

### Contact Fields
- `name`: Required
- `email`: Required, valid email
- `phone`: Required
- `message`: Required, min 10 characters

---

## 🧪 Testing with Postman

1. Import this file into Postman
2. Set `base_url` = `http://localhost:3000/api`
3. Set `token` after login
4. Test each endpoint

---

**API Documentation v1.0 | Last Updated: March 2026**
