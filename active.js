<script src="https://smtpjs.com/v3/smtp.js"></script>

    function sendEmail() {
        var firstName = document.getElementById("first_name").value;
        var lastName = document.getElementById("last_name").value;
        var email = document.getElementById("email").value;
        var subject = document.getElementById("subject").value;
        var message = document.getElementById("message").value;

        var fullMessage = `
            <h3>Contact Form Submission</h3>
            <p><strong>First Name:</strong> ${firstName}</p>
            <p><strong>Last Name:</strong> ${lastName}</p>
            <p><strong>Email:</strong> ${email}</p>
            <p><strong>Subject:</strong> ${subject}</p>
            <p><strong>Message:</strong> ${message}</p>
        `;

        Email.send({
            SecureToken: "qisy hwxs skib zzkf",  // Secure token from smtpjs.com
            To: 'maurya1389@gmail.com', // Receiver's Email
            From: "your-smtp-email@example.com", // Sender's Email
            Subject: "New Contact Form Submission from " + firstName,
            Body: fullMessage
        }).then(
            message => {
                if (message === 'OK') {
                    alert('Your message has been sent successfully!');
                    document.getElementById("contactForm").reset();
                } else {
                    alert('Error! Please try again.');
                }
            }
        );
    }

