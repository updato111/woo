async function handleTelegramLogin() {
    try {
      const response = await fetchTelegramLoginData();
      if (response.user) {
        // Store the Telegram user ID in the application state
        setTelegramUserId(response.user.telegram_id);
        // Redirect the user to the dashboard or other relevant page
        window.location.href = `/dashboard?user_id=${response.user.telegram_id}`;
      } else {
        console.error('User property is null in the response');
      }
    } catch (error) {
      console.error('Error during Telegram login:', error);
    }
  }
  
