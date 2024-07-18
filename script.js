document.getElementById('cookieDoughForm').addEventListener('submit', async function(event) {
  event.preventDefault();

  const email = document.getElementById('email').value.trim();
  const password = document.getElementById('password').value.trim();
  const responseDiv = document.getElementById('response');

  responseDiv.textContent = 'Processing your request, please wait...';

  try {
    const response = await fetch(`https://my-api-v1.onrender.com/api/cookiedough?email=${encodeURIComponent(email)}&password=${encodeURIComponent(password)}`);
    
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }

    const cookieDoughData = await response.json();
    responseDiv.textContent = JSON.stringify(cookieDoughData, null, 4);
  } catch (error) {
    console.error("Error fetching cookie dough:", error);
    responseDiv.textContent = 'An error occurred while fetching cookie dough. Please change your password and try again.';
  }
});
    
