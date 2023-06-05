# CustomTee3D

CustomTee3D is a web application that allows users to load, create, and customize LOGO for T-shirt 3D models. With various lighting options, camera controls, and object positioning in space, users can fully explore and interact with the 3D world. The codebase follows industry-standard best practices and utilizes Higher Order Components (HOCs) for reusability and scalability. 

CustomTee3D supports custom color and file formats upload, and it integrates with the DALLE AI for image generation and utilization. The application offers a responsive and performant experience across all devices. Special thanks to Adrian Hajdin from JSMastery for providing excellent 3D tutorials.

## Ongoing Development Plans
- Due to API limitations, the AI Logo Generator function is currently disabled.
- Enable users to download the resulting T-shirt model image.
- Future plans include incorporating MongoDB for database functionality.

## Frontend Technology Stack

React Three.js React Three Fiber React Three Drei Framer Motion Valtio React Color Tailwind CSS

## Backend Technology Stack
Express
Cloudinary
OpenAI

## Prerequisites
Before proceeding, ensure that you have the following installed on your machine:

- Node.js (version 14 or higher)
- npm (Node Package Manager)
- MongoDB (optional for future database integration)

## Backend Setup - Set up environment variables
Add the following environment variables to the .env file:
CLOUDINARY_API_KEY=<your-cloudinary-api-key>
CLOUDINARY_API_SECRET=<your-cloudinary-api-secret>
OPENAI_API_KEY=<your-openai-api-key>

## MIT LICENSE