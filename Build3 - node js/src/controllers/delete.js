// Delete a record
function deletePost(postId) {
    const postRef = db.ref(`posts/${postId}`);
    
    postRef.remove()
      .then(() => {
        console.log('Post deleted successfully');
      })
      .catch((error) => {
        console.error('Error deleting post: ', error);
      });
  }