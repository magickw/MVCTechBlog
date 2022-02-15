// Edit form handler

async function editFormHandler (event) {
  event.preventDefault();
  const id = document.querySelector('input[name="post-id"]').value.trim();
  const title = document.querySelector('input[name="post-title"]').value.trim();
  const post_text = document.querySelector('textarea[name="post-text"]').value.trim();

  //PUT method to edit the post
  if(title && post_text && id){
    const response = await fetch(`/api/posts/${id}`, {
    method: 'PUT',
    body: JSON.stringify({
      title,
      post_text
    }),
    headers: {
      'Content-Type': 'application/json'
    }
  });

  if (response.ok) {
    document.location.replace('/dashboard');
    // otherwise, display the error
  } else {
    alert(response.statusText);
  }
}
}


document.querySelector('.edit-post-form').addEventListener('submit', editFormHandler);
