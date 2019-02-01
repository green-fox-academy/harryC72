
    // Reuse your BlogPost class
    // Create a Blog class which can
    //     store a list of BlogPosts
    //     add BlogPosts to the list
    //     delete(int) one item at given index
    //     update(int, BlogPost) one item at the given index and update it with another BlogPost

    import {BlogPost, blogPost1, blogPost2} from '../day-3/blogPost'

    class Blog{
        listOfblogPost: BlogPost[];

        constructor(){
          this.listOfblogPost = [];
        }

        add(blogPost: BlogPost){
          this.listOfblogPost.push(blogPost);
        }

        delete(index: number){
          this.listOfblogPost.splice(index, 1);
        }
        
        update(index: number, blogPost: BlogPost){
          this.listOfblogPost.splice(index, 1, blogPost);
        }
    }

    let pyroBlog = new Blog();
    pyroBlog.add(blogPost1);
    console.log(pyroBlog);
    
    pyroBlog.delete(0);
    console.log(pyroBlog);
    