# Contact Form Backend

This is the backend service for the contact form on my portfolio website. It allows visitors to send messages directly to my email through the form on the website.

## Overview

This backend service is built using Node.js, Express, and Nodemailer. It handles the incoming form submissions, sends an email containing the visitor's message, and responds with the status of the email delivery.

## Technologies Used

- **Node.js**: JavaScript runtime for building server-side applications.
- **Express**: Fast, unopinionated, minimalist web framework for Node.js.
- **Nodemailer**: Module for Node.js applications to send emails.
- **dotenv**: Module for loading environment variables from a `.env` file.

## Installation

### ⚠️ Important: Fork Before You Clone

**Attention:** This updated approach encourages proper GitHub workflow and ensures that users work within their own repository fork, making it easier to manage contributions and changes.

### Prerequisites

- Node.js and npm installed on your machine.

### Steps

1. **Fork the repository**:

   - Click the "Fork" button at the top right corner of the repository page to create your own copy of the repository.

2. **Clone the repository**:

   - Clone the forked repository to your local machine:

   ```bash
   git clone <your-forked-repository-url>

   ```

3. **Navigate to the project directory.**

4. **Install dependencies:**

   ```bash
   npm install

   ```

5. **Set Up Environment Variables:**

   - Create a .env file in the root of your project with the following variables:

   ```bash
   EMAIL_USER=your-email@mail.com
   EMAIL_PASS=your-application-specific-password
   EMAIL_TO=your-email@mail.com

   ```

6. **Run the Server:**

   ```bash
   npm start

   ```

## Contact

For any questions or feedback, please contact [Hamada](https://hmad.netlify.app/).
