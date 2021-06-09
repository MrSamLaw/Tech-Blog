const commentFormHandler = async (event) => {
    event.preventDefault();
  
    const post_id = event.target.getAttribute('post-id');
    const comment = document.querySelector('#comment-comment').value.trim();
      
    if (comment) {
      const response = await fetch(`/api/comment`, {
        method: 'POST',
        body: JSON.stringify({ comment, post_id }),
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