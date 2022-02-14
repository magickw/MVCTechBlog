// New Post Form Handler
async function newFormHandler(event) {
    event.preventDefault();

    // Get the post title and post text from the form
    const title = document.querySelector('input[name="post-title"]').value.trim();
    const content = document.querySelector('textarea[name="post-text"]').value.trim();


 
    if (title && content){
      const response = await fetch(`/api/posts`, {
      method: 'POST',
      body: JSON.stringify({
        title,
        content
      }),
      headers: {
        'Content-Type': 'application/json'
      }
    });

    // if the response is okay, reload the page, showing the newest post now in the user's post list
    if (response.ok) {
      document.location.replace('/dashboard');
      // otherwise, display the error
    } else {
      alert(response.statusText);
    }
  }
}
  
  document.querySelector('.new-post-form').addEventListener('submit', newFormHandler);