import axios from '@/axios';

type BlogPost = {
  id: string;           // Strapi typically uses 'id' instead of '_id'
  title: string;
  slug: string;         // Strapi uses string for slugs
  date: string;
  poster: typeof Image; // Ensure Image is defined correctly
  excerpt: string;
  content: any;         // Adjusted depending on the rich text format Strapi provides
};

async function getBlogPosts() {
  try {
    const backendApi :any = import.meta.env.STRAPI_API_URL; // Correctly access the environment variable
    const response = await axios.get(`${backendApi}/api/blog-posts?populate=*`);
    
    // Strapi returns data in 'data' field, which may include 'attributes' for each post
    const blogPosts = response.data.data.map((post: any) => ({
      id: post.id,
      title: post.attributes.title,
      slug: post.attributes.slug,
      date: post.attributes.date,
      poster: post.attributes.poster,  // Adjust based on Strapi's image format
      excerpt: post.attributes.excerpt,
      content: post.attributes.content,  // Adjust based on how Strapi stores rich text
    }));
    
    return blogPosts;
  } catch (error) {
    console.error('Error fetching blog posts from Strapi:', error);
    return [];
  }
}

export { getBlogPosts, type BlogPost };
