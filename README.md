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
PR_BLOG_PROJECT/
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
[git clone https://github.com/your-username/blog-api.git](https://github.com/amitdabhi01/Blog-Node-Js-Project)
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
https://blog-node-js-project.onrender.com


📬 API Endpoints
🔹 1. Check Server
GET /
<img width="1920" height="1080" alt="Screenshot 2026-04-01 143536" src="https://github.com/user-attachments/assets/66844430-c0d5-4b66-a9b6-3c34c22f2742" />
Response: "Hello from server"


🔹 2. Create Blog
POST /blog/add
<img width="1920" height="1080" alt="Screenshot 2026-04-01 143541" src="https://github.com/user-attachments/assets/b1b75623-087b-433a-95dc-68dc9470f63a" />
Body (form-data):
title (text)
author (text)
content (text)
blogImage (file)
blogVideo (file, optional)


🔹 3. Get All Blogs
GET /blog/allBlogs
<img width="1920" height="1080" alt="Screenshot 2026-04-01 143547" src="https://github.com/user-attachments/assets/8ea3f036-d007-420b-9785-fb3d4a91418c" />



🔹 4. Get Blog by ID
GET /blog/:id
<img width="1920" height="1080" alt="Screenshot 2026-04-01 143552" src="https://github.com/user-attachments/assets/79f5626e-d8ff-4b6d-afa0-ae4992f927fe" />



🔹 5. Update Blog
PATCH /blog/update/:id
<img width="1920" height="1080" alt="Screenshot 2026-04-01 143559" src="https://github.com/user-attachments/assets/f0e62441-804e-4b1c-a51d-6f5eccd7d90e" />

Body (form-data):
title
author
content
blogImage (file)
blogVideo (file)


🔹 6. Delete Blog
DELETE /blog/delete/:id
<img width="1920" height="1080" alt="Screenshot 2026-04-01 143605" src="https://github.com/user-attachments/assets/5c4abc44-a1d5-4936-8b58-a2e293ff9ffc" />


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
Amit Dabhi
