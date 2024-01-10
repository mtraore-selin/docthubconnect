<div id="top">
<h1 align="center">DoctHub Connect 🧑‍⚕️</h1>

<h3>📝 Description :</h3> 
Welcome to our comprehensive healthcare platform! Our website offers a seamless experience for users and doctors alike. Sign up or log in to unlock a range of features. Easily browse through a list of available doctors, manage your profile, and submit queries effortlessly. Stay updated with notifications and enjoy secure access to your information. Aspiring doctors can apply through our user-friendly system. Book appointments with your preferred doctors and track their completion status. Admin features ensure smooth operations, including approval of doctor applications and user management. Rest assured, all data is stored securely. Join us to experience a new era of convenient and efficient healthcare interactions.

<br/>

---

### 🌐 Link:

<h4> Live Site: https://docthubconnect</h4>

### 👋 Connect with me:

<br>

---

<p align="right"><a href="#top">Back to Top</a></p>

### 📃Features :

<ul>
  <li><strong>User Registration and Login:</strong> Enabling user registration and login functionality is the foundation of any user-oriented platform.</li>
  <li><strong>View Available Doctors:</strong> Allowing users to easily view the list of available doctors helps them find the right medical professional for their needs.</li>
  <li><strong>Update Profile:</strong> Providing users with the ability to update their profiles keeps their information accurate and up to date.</li>
  <li><strong>Contact Section for Queries:</strong> Including a contact section for user queries enhances user engagement and customer support.</li>
  <li><strong>Notifications Tab:</strong> A notifications tab helps users stay informed about updates, appointments, and application statuses.</li>
  <li><strong>Admin Management System:</strong> An admin management system is crucial for overseeing users, appointments, and doctor applications.</li>
  <li><strong>Access Control:</strong> Restricting access to certain sections like notifications, profile, appointments, and doctor applications to logged-in users ensures data privacy and security.</li>
  <li><strong>Doctor Application:</strong> Allowing users to apply to become a doctor on the site expands the pool of medical professionals and adds value to the platform.</li>
  <li><strong>Book Appointments:</strong> Enabling users to book appointments with their preferred doctors streamlines the process of accessing medical services.</li>
  <li><strong>Admin Approval for Doctor Requests:</strong> Admin approval for doctor applications ensures that only qualified professionals are listed on the platform.</li>
  <li><strong>User and Doctor Removal:</strong> Admin's ability to remove users or doctors from the site is crucial for maintaining the platform's integrity.</li>
  <li><strong>Appointment Marking:</strong> Allowing doctors and admin to mark appointments as completed ensures proper record-keeping.</li>
  <li><strong>Application and Appointment Notifications:</strong> Sending notifications to users, doctors, and admins about application statuses and appointment updates enhances communication.</li>
  <li><strong>Data Storage and Security:</strong> Storing all data in a database ensures data integrity, security, and easy retrieval of information.</li>
</ul>

<hr/>

<p align="right"><a href="#top">Back to Top</a></p>

### Steps to run the project on your local machine

<ol>
<li>Fork this repository</li>
<li>Open terminal or command prompt on your local machine. Run the following command to clone the repository:</li>

```
git clone
```

Replace **your-username** with your GitHub username and **your-repo** with the name of your repository.

<li>Open the project and rename <strong>.env.example</strong> files to <strong>.env</strong> in both client and root directory.</li>

<li>Add your own environment variables to these both files.</li>

<li>To run the backend, open a new terminal and execute:</li>

```
npm start
```

<li>To run the frontend, open a new terminal and run 'cd client/' to go to client directory and execute: </li>

```
npm start
```

</ol>

### To access the admin dashboard

<ol>
<li>Download the project from the git repository</li>
<li>You need to create your own MongoDB instance and add the MongoDB url to the .env file</li>
<li>Register on the website and go to your MongoDB and manually change the 'isAdmin' field of the account you want to make admin in the DB to 'true' and then log in back on the site</li>
<li>Now you will be able to access the admin dashboard</li>
</ol>

---

<p align="right"><a href="#top">Back to Top</a></p>

### Home page

<h3 align="center"> Give it a 🌟 if you 🧡 this repository </h3>

## <h3 align="center"> Live 🌟 https://docthubconnect.onrender.com/ 🧡 </h3>

<p align="right"><a href="#top">Back to Top</a></p>

</div>

## App structure

```
└── 📁controllers
    └── appointmentController.js
    └── doctorController.js
    └── notificationController.js
    └── userController.js
└── 📁db
    └── conn.js
└── 📁middleware
    └── auth.js
└── 📁models
    └── appointmentModel.js
    └── doctorModel.js
    └── notificationModel.js
    └── userModel.js
└── 📁routes
    └── appointRoutes.js
    └── doctorRoutes.js
    └── notificationRouter.js
    └── userRoutes.js
└── README.md
└── package.json
└── server.js
└── 📁client
    └── .env
    └── .env.example
    └── .gitignore
    └── 📁build
        └── android-chrome-192x192.png
        └── android-chrome-512x512.png
        └── apple-touch-icon.png
        └── asset-manifest.json
        └── favicon-16x16.png
        └── favicon-32x32.png
        └── favicon.ico
        └── index.html
        └── robots.txt
        └── site.webmanifest
        └── 📁static
            └── 📁css
                └── 110.a9c2ec09.chunk.css
                └── 110.a9c2ec09.chunk.css.map
                └── 158.5346ba9c.chunk.css
                └── 158.5346ba9c.chunk.css.map
                └── 564.ebec8f91.chunk.css
                └── 564.ebec8f91.chunk.css.map
                └── 702.7130310b.chunk.css
                └── 702.7130310b.chunk.css.map
                └── 796.3d3341d0.chunk.css
                └── 796.3d3341d0.chunk.css.map
                └── 809.8d44b6ef.chunk.css
                └── 809.8d44b6ef.chunk.css.map
                └── 95.6d2ec8a7.chunk.css
                └── 95.6d2ec8a7.chunk.css.map
                └── 987.28e525c5.chunk.css
                └── 987.28e525c5.chunk.css.map
                └── main.4feeeabb.css
                └── main.4feeeabb.css.map
            └── 📁js
                └── 110.a45addc4.chunk.js
                └── 110.a45addc4.chunk.js.map
                └── 158.59558118.chunk.js
                └── 158.59558118.chunk.js.map
                └── 208.52429264.chunk.js
                └── 208.52429264.chunk.js.map
                └── 355.b2b03b2b.chunk.js
                └── 355.b2b03b2b.chunk.js.map
                └── 373.d031bc9d.chunk.js
                └── 373.d031bc9d.chunk.js.map
                └── 564.040d62cb.chunk.js
                └── 564.040d62cb.chunk.js.map
                └── 702.395621bd.chunk.js
                └── 702.395621bd.chunk.js.map
                └── 796.72a1f87f.chunk.js
                └── 796.72a1f87f.chunk.js.map
                └── 809.ebefa25b.chunk.js
                └── 809.ebefa25b.chunk.js.map
                └── 856.2a834a03.chunk.js
                └── 856.2a834a03.chunk.js.map
                └── 95.56a4beb3.chunk.js
                └── 95.56a4beb3.chunk.js.map
                └── 987.e9cad49f.chunk.js
                └── 987.e9cad49f.chunk.js.map
                └── main.6d9a7b52.js
                └── main.6d9a7b52.js.LICENSE.txt
                └── main.6d9a7b52.js.map
            └── 📁media
                └── aboutimg.af2db4b9f307d04f8745.jpg
                └── heroimg.8bbd2437f7c9d842026c.jpg
    └── package-lock.json
    └── package.json
    └── 📁public
        └── android-chrome-192x192.png
        └── android-chrome-512x512.png
        └── apple-touch-icon.png
        └── favicon-16x16.png
        └── favicon-32x32.png
        └── favicon.ico
        └── index.html
        └── robots.txt
        └── site.webmanifest
    └── 📁src
        └── App.js
        └── 📁components
            └── AboutUs.jsx
            └── AdminApplications.jsx
            └── AdminAppointments.jsx
            └── AdminDoctors.jsx
            └── BookAppointment.jsx
            └── Contact.jsx
            └── DoctorApply.jsx
            └── DoctorCard.jsx
            └── Empty.jsx
            └── Footer.jsx
            └── Hero.jsx
            └── HomeCircles.jsx
            └── Loading.jsx
            └── Navbar.jsx
            └── Sidebar.jsx
            └── Users.jsx
        └── 📁helper
            └── apiCall.js
            └── convertImage.js
        └── 📁images
            └── aboutimg.jpg
            └── applications.png
            └── bookappointment.png
            └── docapply.png
            └── doctorappointments.png
            └── doctornotif.png
            └── doctors.png
            └── full_pic.png
            └── heroimg.jpg
            └── home.png
            └── notifications.png
            └── profile.png
            └── signin.png
            └── signup.png
            └── userappointments.png
            └── usernotif.png
            └── users.png
        └── index.js
        └── 📁middleware
            └── route.js
        └── 📁pages
            └── ApplyDoctor.jsx
            └── Appointments.jsx
            └── Dashboard.jsx
            └── Doctors.jsx
            └── Error.jsx
            └── Home.jsx
            └── Login.jsx
            └── Notifications.jsx
            └── Profile.jsx
            └── Register.jsx
        └── 📁redux
            └── 📁reducers
                └── rootSlice.js
            └── store.js
        └── 📁styles
            └── app.css
            └── bookappointment.css
            └── contact.css
            └── doctorapply.css
            └── doctorcard.css
            └── doctors.css
            └── error.css
            └── footer.css
            └── hero.css
            └── homecircles.css
            └── loading.css
            └── navbar.css
            └── notification.css
            └── profile.css
            └── register.css
            └── sidebar.css
            └── user.css
```
