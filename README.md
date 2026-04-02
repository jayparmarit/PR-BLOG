📌 Blog API (Node.js + Express + MongoDB + Cloudinary)

This is a RESTful Blog API built using Node.js, Express, MongoDB, Multer, and Cloudinary.
It supports full CRUD operations with image & video upload functionality.

🚀 Features
Create blog with image & video upload
Get all blogs
Get single blog by ID
Update blog (including media)
Delete blog
Cloudinary integration for media storage
Error handling with custom middleware


🛠️ Tech Stack
Node.js
Express.js
MongoDB (Mongoose)
Multer
Cloudinary
Postman (API Testing)



📂 Project Structure
<br/>
PR_BLOG
<br/>
│
<br/>
├── config/
<br/>
│   └── cloudinary.js
<br/>
│
<br/>
├── controller/
<br/>
│   └── blogController.js
<br/>
│
<br/>
├── middleware/
<br/>
│   ├── upload.js
<br/>
│   └── HttpError.js
<br/>
│
<br/>
├── model/
<br/>
│   └── Blog.js
<br/>
│
<br/>
├── routes/
<br/>
│   └── blogRoutes.js
<br/>
│
<br/>
├── app.js
<br/>
├── db.js
<br/>
├── .env
<br/>
└── package.json
<br/>


⚙️ Installation & Setup
Clone the repository
cd blog-api
Install dependencies
npm install
Create .env file
PORT=5000
MONGO_URI=your_mongodb_connection
CLOUDINARY_CLOUD_NAME=your_cloud_name
CLOUDINARY_API_KEY=your_api_key
CLOUDINARY_API_SECRET=your_api_secret
Run server
npm run dev


🌐 Base URL
https://pr-blog.onrender.com/


📬 API Endpoints
🔹 1. Check Server
GET /
<img width="1920" height="1080" alt="Screenshot 2026-04-02 112935" src="https://github.com/user-attachments/assets/6eedfe04-1584-4615-90be-08744471d419" />

Response: "Hello from server"


🔹 2. Create Blog
POST /blog/add
<img width="1920" height="1080" alt="Screenshot 2026-04-02 113340" src="https://github.com/user-attachments/assets/201fde48-fd7a-4516-91b6-5c4dcd89d945" />

Body (form-data):
title (text)
author (text)
content (text)
blogImage (file)
blogVideo (file, optional)


🔹 3. Get All Blogs
GET /blog/allBlogs
<img width="1920" height="1080" alt="Screenshot 2026-04-02 113549" src="https://github.com/user-attachments/assets/30e4d008-b0a7-48f8-bce1-1fee537b59c4" />



🔹 4. Get Blog by ID
GET /blog/:id

<img width="1920" height="1080" alt="Screenshot 2026-04-02 113658" src="https://github.com/user-attachments/assets/06cff71d-9a70-4c55-90ad-d0fe472a78c9" />



🔹 5. Update Blog
PATCH /blog/update/:id
<img width="1920" height="1080" alt="Screenshot 2026-04-02 113913" src="https://github.com/user-attachments/assets/a618bb57-065c-426f-ac99-e18b3ed78587" />


Body (form-data):
title
author
content
blogImage (file)
blogVideo (file)


🔹 6. Delete Blog
DELETE /blog/delete/:id

<img width="1920" height="1080" alt="Screenshot 2026-04-02 114308" src="https://github.com/user-attachments/assets/2022eb1a-201c-4872-a912-57e826ded5d3" />


Response:

{
  "success": true,
  "message": "Blog deleted successfully"
}


📸 Media Handling
Images & videos are uploaded using Multer
Stored in Cloudinary
Supports formats:
Images: jpg, jpeg, png, webp
Videos: mp4, mkv


⚠️ Error Handling
Custom error class (HttpError)
Centralized error middleware
Proper status codes (400, 404, 500)


🧪 API Testing

All APIs are tested using Postman.

✨ Future Improvements
Authentication (JWT)
Pagination
Comments & Likes
User roles


🙋‍♂️ Author
jay parmar
