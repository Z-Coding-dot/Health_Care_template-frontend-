# API contract

The frontend uses cookie-based sessions (`withCredentials: true`). No JWT is stored in browser storage.

All error responses use this shape:

```json
{ "code": "VALIDATION_ERROR", "message": "A human-readable message", "details": { "field": ["Reason"] } }
```

## Authentication

| Method | Endpoint | Request body | Response |
| --- | --- | --- | --- |
| POST | `/auth/login` | `{ "email": "string", "password": "string" }` | `{ "name": "string", "role": "patient" | "staff" }` |
| POST | `/auth/register` | `{ "name": "string", "email": "string", "password": "string" }` | User response |
| POST | `/auth/logout` | none | `{ "message": "string" }` |
| POST | `/auth/forgot-password` | `{ "email": "string" }` | `{ "message": "string" }` |
| GET | `/auth/me` | none | User response or `401` |

## Care data and actions

| Method | Endpoint | Request body | Response |
| --- | --- | --- | --- |
| GET | `/services` | none | `Service[]` |
| GET | `/services/:id` | none | `Service` |
| GET | `/departments` | none | `Department[]` |
| GET | `/departments/:id` | none | `Department` |
| GET | `/doctors` | none | `Doctor[]` |
| GET | `/doctors/:id` | none | `Doctor` |
| GET | `/blog` | none | `BlogPost[]` |
| GET | `/blog/:id` | none | `BlogPost` |
| POST | `/appointments` | appointment form fields | `{ "id": "string", "status": "requested" | "confirmed" }` |
| POST | `/contact` | `{ "name": "string", "email": "string", "message": "string" }` | `{ "received": true }` |

The HTTP adapters in `src/services/*.http.ts` are the only place that maps backend response shapes into frontend types.
