// src/utils/sendConfirmationEmail.js

const sendConfirmationEmail = async (toEmail, userName, packageTitle, date, code, destination) => {
  try {
    // Call your backend API endpoint
    const response = await fetch("http://localhost:5000/api/send-confirmation-email", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        toEmail,
        userName,
        packageTitle,
        date,
        code,
        destination,
      }),
    });

    const result = await response.json();

    if (result.success) {
      console.log("✅ Real confirmation email sent successfully to:", toEmail);
      // Nice success message for admin
      alert(
        `Confirmation Email Sent!\n\n` +
        `To: ${toEmail}\n` +
        `User: ${userName}\n` +
        `Package: ${packageTitle}\n` +
        `Booking Code: ${code}\n\n` +
        `Email sent from: vishubpatel102@gmail.com`
      );
    } else {
      console.error("❌ Backend responded with error:", result.message);
      alert("Failed to send email. Check backend console for errors.");
    }
  } catch (error) {
    console.error("❌ Network or server error while sending email:", error);
    alert(
      "Could not send email.\n" +
      "Make sure your backend server is running on http://localhost:5000\n" +
      "Check console for details."
    );
  }
};

export default sendConfirmationEmail;