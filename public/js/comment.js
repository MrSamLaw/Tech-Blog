const commentFormHandler = async (event) => {
    event.preventDefault();
  
    const post_id = document.querySelector('#commentBtn').getAttribute('data-id');
    const comment = document.querySelector('#comment-comment').value.trim();
    
        if (comment) {
      const response = await fetch(`/api/comments/`, {
        method: 'POST',
        body: JSON.stringify({ post_id,comment }),
        headers: {
          'Content-Type': 'application/json',
        },
      });

      if (response.ok) {
        document.location.reload();
      } else {

        alert('Failed to add comment');
      }
    }
  };
  
  document
    .querySelector('.new-comment-form')
    .addEventListener('submit', commentFormHandler);