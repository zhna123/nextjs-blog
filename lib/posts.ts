import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';

type Metadata = {
  date: string; 
  excerpt: string; 
  coverImage: string; 
  title: string
}

const postsDirectory = path.join(process.cwd(), 'posts');

function getSortedPostsData() {
  // Get file names under /posts
  const fileNames = fs.readdirSync(postsDirectory);
  const allPostsData = fileNames.map((fileName) => {
    // Remove ".mdx" from file name to get id
    const id = fileName.replace(/\.mdx$/, '');

    // Read markdown file as string
    const fullPath = path.join(postsDirectory, fileName);
    const fileContents = fs.readFileSync(fullPath, 'utf8');

    // Use gray-matter to parse the post metadata section
    const matterResult = matter(fileContents);
    
    // Combine the data with the id
    return {
      id,
      ...(matterResult.data as Metadata),
    };
  });
  // Sort posts by date
  return allPostsData.sort((a, b) => {
    if (a.date < b.date) {
      return 1;
    } else {
      return -1;
    }
  });
}

export async function getPaginatedPostsData(
  {
    limit,
    page,
  }: {
    limit: number
    page: number
  }
) {
  const allPosts = getSortedPostsData()
  const paginatedPosts = allPosts.slice((page - 1) * limit, page * limit)
  return { posts: paginatedPosts, total: allPosts.length }
}

export function getAllPostIds() {
  const fileNames = fs.readdirSync(postsDirectory);

  // Returns an array that looks like this:
  // [
  //   {
  //     params: {
  //       id: 'ssg-ssr'
  //     }
  //   },
  //   {
  //     params: {
  //       id: 'pre-rendering'
  //     }
  //   }
  // ]
  return fileNames.map((fileName) => {
    return {
      params: {
        id: fileName.replace(/\.mdx$/, ''),
      },
    };
  });
}

export async function getPostData(id) {
  const fullPath = path.join(postsDirectory, `${id}.mdx`);
  const fileContents = fs.readFileSync(fullPath, 'utf8');

  // Use gray-matter to parse the post metadata section
  const matterResult = matter(fileContents);

  // Combine the data with the id
  return {
    id,
    content: matterResult.content,
    ...(matterResult.data as Metadata),
  };
}