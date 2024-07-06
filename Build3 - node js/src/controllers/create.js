// Example: Create a new post
function createPost(title, content) {
    const postsRef = db.ref('posts');
    const newPostRef = postsRef.push();
    
    newPostRef.set({
      title: title,
      content: content,
      createdAt: admin.database.ServerValue.TIMESTAMP  // Server timestamp
    })
    .then(() => {
      console.log('Post added successfully');
    })
    .catch((error) => {
      console.error('Error adding post: ', error);
    });
  }