// Update a database
function updatePost(postId, updatedData) {
    const postRef = db.ref(`posts/${postId}`);
    
    postRef.update(updatedData)
      .then(() => {
        console.log('Post updated successfully');
      })
      .catch((error) => {
        console.error('Error updating post: ', error);
      });
  }