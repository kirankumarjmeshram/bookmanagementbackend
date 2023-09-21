# book_management

# Book Management API Documentation

## Introduction

This API documentation outlines the endpoints and functionalities of the Book Management API. The API allows users to manage a collection of books, including creating, retrieving, updating, and deleting book records.

## Base URL

The base URL for all API endpoints is: `bookapp2-9ur9.onrender.com/api`

## Endpoints

### 1. Create a Book

- **Endpoint:** `POST /`
- **Description:** Adds a new book to the collection.
- **Request Body:**
```json
{
  "title": "Book Title",
  "author": "Author Name",
  "publicationYear": 2022,
  "isbn": "1234567890",
  "description": "Book Description"
}
```
Response:
Status: 201 Created
Body:
```json
{
  "message": "Book created successfully",
  "book": {
    "_id": "book_id",
    "title": "Book Title",
    "img": "img address",
    "author": "Author Name",
    "publicationYear": 2022,
    "isbn": "1234567890",
    "description": "Book Description"
  }
}
```
2. Retrieve All Books
Endpoint: GET /
Description: Retrieves a paginated list of all books.
Query Parameters:
page (optional): Page number for pagination (default: 1)
pageSize (optional): Number of items per page (default: 10)
Response:
Status: 200 OK
Body:
```json

{
  "books": [
    {
      "_id": "book_id",
      "title": "Book Title",
      "img": "img address",
      "image": "book_image_url",
      "author": "Author Name",
      "publicationYear": 2022,
      "isbn": "1234567890",
      "description": "Book Description"
    },
    // ... more books
  ],
  "totalPages": 3,
  "currentPage": 1
}
```
3. Retrieve a Single Book by ID
Endpoint: GET /:id
Description: Retrieves details of a single book based on its unique ID.
Response:
Status: 200 OK
Body:
```json

{
  "_id": "book_id",
  "title": "Book Title",
  "img": "img address",
  "image": "book_image_url",
  "author": "Author Name",
  "publicationYear": 2022,
  "isbn": "1234567890",
  "description": "Book Description"
}
```
4. Update a Book by ID
Endpoint: PUT /:id
Description: Updates an existing book based on its unique ID.
Request Body (Fields to be updated):
```json

{
  "title": "Updated Title",
    "img": "img address",
  "author": "Updated Author",
  "publicationYear": 2023,
  "isbn": "0987654321",
  "description": "Updated Description"
}
Response:
Status: 200 OK
Body:
json
Copy code
{
  "message": "Book updated successfully",
  "book": {
    "_id": "book_id",
    "title": "Updated Title",
    "img": "img address",
    "author": "Updated Author",
    "publicationYear": 2023,
    "isbn": "0987654321",
    "description": "Updated Description"
  }
}
```
5. Delete a Book by ID
Endpoint: DELETE /:id
Description: Deletes a book based on its unique ID.
Response:
Status: 200 OK
Body:
```json

{
  "message": "Book deleted successfully"
}
```
