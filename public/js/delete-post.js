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

const edit = async (event) => {
  event.preventDefault();

  const title = document.querySelector('#title').value.trim();
  const body = document.querySelector('#body').value.trim();
  const id = document.querySelector('#id').value.trim();

  if (title && body) {
    const response = await fetch('/api/posts/', {
      method: 'PUT',
      body: JSON.stringify({ title, body, id }),
      headers: { 'Content-Type': 'application/json' },
    });

    if (response.ok) {
      document.location.reload();
    } else {
      alert('Failed to update post.');
    }
  }
};

const showEditForm = async (event) => {
  const editForm = document.getElementById('edit-form')
  editForm.removeAttribute('hidden')
};


document.querySelectorAll('.delete-button').forEach(deleteButton => {
  deleteButton.addEventListener('click', del)
})

document.querySelectorAll('#edit-form').forEach(form => {
  form.addEventListener('submit', edit)
})

document.querySelectorAll('#edit-button').forEach(editButton => {
  editButton.addEventListener('click', showEditForm)
})