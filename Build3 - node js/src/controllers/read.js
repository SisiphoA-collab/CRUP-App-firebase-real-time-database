//Read all the data
function getAllPosts() {
    const postsRef = db.ref('posts');
    
    postsRef.once('value')
      .then((snapshot) => {
        if (snapshot.exists()) {
          const posts = snapshot.val();
          console.log(posts);
        } else {
          console.log('No data available');
        }
      })
      .catch((error) => {
        console.error('Error fetching posts: ', error);
      });
  }