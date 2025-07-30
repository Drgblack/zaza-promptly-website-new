import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'

export interface BlogPost {
  title: string
  description: string
  date: string
  slug: string
  tags: string[]
  image: string
  author: string
  content: string
  excerpt?: string
}

const postsDirectory = path.join(process.cwd(), 'content/posts')

export function getAllPosts(): BlogPost[] {
  // Check if the directory exists
  if (!fs.existsSync(postsDirectory)) {
    return []
  }

  const fileNames = fs.readdirSync(postsDirectory)
  const allPostsData = fileNames
    .filter((fileName) => fileName.endsWith('.mdx'))
    .map((fileName) => {
      // Remove ".mdx" from file name to get slug
      const slug = fileName.replace(/\.mdx$/, '')

      // Read markdown file as string
      const fullPath = path.join(postsDirectory, fileName)
      const fileContents = fs.readFileSync(fullPath, 'utf8')

      // Use gray-matter to parse the post metadata section
      const matterResult = matter(fileContents)

      // Create excerpt from content
      const content = matterResult.content
      const excerpt = content
        .replace(/[#*`]/g, '') // Remove markdown formatting
        .substring(0, 160) // Limit to 160 characters
        .trim() + '...'

      return {
        slug,
        content,
        excerpt,
        ...(matterResult.data as Omit<BlogPost, 'slug' | 'content' | 'excerpt'>),
      }
    })

  // Sort posts by date
  return allPostsData.sort((a, b) => (a.date < b.date ? 1 : -1))
}

export function getPostBySlug(slug: string): BlogPost | null {
  try {
    const fullPath = path.join(postsDirectory, `${slug}.mdx`)
    
    if (!fs.existsSync(fullPath)) {
      return null
    }

    const fileContents = fs.readFileSync(fullPath, 'utf8')
    const matterResult = matter(fileContents)

    return {
      slug,
      content: matterResult.content,
      ...(matterResult.data as Omit<BlogPost, 'slug' | 'content'>),
    }
  } catch (error) {
    console.error(`Error reading post ${slug}:`, error)
    return null
  }
}

export function getPostsByTag(tag: string): BlogPost[] {
  const allPosts = getAllPosts()
  return allPosts.filter((post) => 
    post.tags.some((postTag) => 
      postTag.toLowerCase() === tag.toLowerCase()
    )
  )
}

export function getAllTags(): string[] {
  const allPosts = getAllPosts()
  const tags = new Set<string>()
  
  allPosts.forEach((post) => {
    post.tags.forEach((tag) => tags.add(tag))
  })
  
  return Array.from(tags).sort()
}

export function getRecentPosts(limit: number = 5): BlogPost[] {
  const allPosts = getAllPosts()
  return allPosts.slice(0, limit)
} 