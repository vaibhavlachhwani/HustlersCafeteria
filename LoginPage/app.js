// Ensure the DOM is fully loaded before executing the script
document.addEventListener('DOMContentLoaded', () => {
    const handleLogin = async (e) => {
        e.preventDefault();

        try {
            // Retrieve the value from the input field
            const username = document.querySelector("#username").value;

            // Perform the login request
            const response = await fetch("http://localhost:5000/api/auth/login", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    username: username,
                }),
            });

            console.log('Response :', response);

            if (response.ok) {
                console.log('Login successful ! New User');
                alert('Login successful ! New User');
                // If login is successful, you might want to perform actions here
                // For example, update state or navigate to another page
                // setlogin({
                //    username: "",
                // });

                // Redirect to another page after successful login
                window.location.href = "https://github.com/PARTHSHARMA4010/HackTheChain";
            } else {
                console.log('Login failed');
                // If login fails, show an alert
                alert("Our Previous User !! Welcome Back");
                window.location.href = "https://github.com/PARTHSHARMA4010/HackTheChain";
            }

            console.log(await response.json());
        } catch (error) {
            console.error("Login error:", error);
        }
    };

    // Attach the event listener to the button with id "sub"
    const loginButton = document.querySelector("#sub");
    loginButton.addEventListener('click', handleLogin);
});
