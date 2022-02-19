const del = async (event) => {
  let postId = event.target.getAttribute('data-post-id');
  const response = await fetch('/api/posts/' + postId, {
    method: 'DELETE',
    headers: { 'Content-Type': 'application/json' },
  });

  if (response.ok) {
    document.location.replace('/dashboard');
  } else {
    alert('Failed to delete post.');
  }
};


document.querySelectorAll('.delete-button').forEach(deleteButton => {
  deleteButton.addEventListener('click', del)
})