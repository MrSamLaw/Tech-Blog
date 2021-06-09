const updateFormHandler = async (event) => {
    event.preventDefault();
  
    const name = document.querySelector('#post-title').value.trim();
    const content = document.querySelector('#post-content').value.trim();
    const summary = document.querySelector('#post-summary').value.trim();
    const id = document.querySelector('#updateBtn').getAttribute('data-id');
  
    if (name && content && summary) {
      const response = await fetch(`/api/posts/${id}`, {
        method: 'PUT',
        body: JSON.stringify({ name, content, summary }),
        headers: {
          'Content-Type': 'application/json',
        },
      });
  console.log(response);
      if (response.ok) {
        document.location.replace('/dashboard');
      } else {
        alert('Failed to update post');
      }
    }
  };

  document
  .querySelector('.update-post-form')
  .addEventListener('submit', updateFormHandler);
