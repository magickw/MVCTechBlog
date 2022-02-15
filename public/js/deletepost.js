// Delete form handler
async function deleteFormHandler(event) {
  event.preventDefault();
  
  const id = window.location.toString().split('/')[
      window.location.toString().split('/').length - 1
    ];

    if(id){
      const response = await fetch(`/api/post/${id}`, {
      method: 'DELETE',
      body: JSON.stringify({
        post_id: id
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

document.querySelector('#delete-btn').addEventListener('click', deleteFormHandler);