import { notFound } from 'next/navigation'
import Link from 'next/link'
import { SEOHead } from '@/components/seo-head'
import { getPostBySlug, getAllPosts } from '@/lib/blog'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { ShareButton } from '@/components/share-button'
import { Calendar, User, Tag, ArrowLeft } from 'lucide-react'

interface BlogPostPageProps {
  params: Promise<{
    slug: string
  }>
}

export async function generateStaticParams() {
  const posts = getAllPosts()
  return posts.map((post) => ({
    slug: post.slug,
  }))
}

export default async function BlogPostPage({ params }: BlogPostPageProps) {
  const { slug } = await params
  const post = getPostBySlug(slug)

  if (!post) {
    notFound()
  }

  return (
    <>
      <SEOHead 
        title={post.title}
        description={post.description}
        pageType="blog"
      />
      <div className="min-h-screen bg-gradient-to-br from-orange-50 via-amber-50 to-yellow-50 py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Back Button */}
          <div className="mb-8">
            <Link href="/blog">
              <Button variant="ghost" className="text-orange-600 hover:text-orange-700">
                <ArrowLeft className="w-4 h-4 mr-2" />
                Back to Blog
              </Button>
            </Link>
          </div>

          {/* Article Header */}
          <article className="bg-white rounded-3xl shadow-2xl overflow-hidden">
            {/* Hero Image */}
            <div className="aspect-video bg-gradient-to-br from-orange-100 to-amber-100 flex items-center justify-center">
              <div className="text-orange-500 text-6xl">📚</div>
            </div>

            {/* Article Content */}
            <div className="p-8 lg:p-12">
              {/* Meta Information */}
              <div className="flex flex-wrap items-center gap-4 mb-6 text-sm text-gray-500">
                <div className="flex items-center gap-2">
                  <Calendar className="w-4 h-4" />
                  <span>
                    {new Date(post.date).toLocaleDateString('en-US', {
                      year: 'numeric',
                      month: 'long',
                      day: 'numeric'
                    })}
                  </span>
                </div>
                <div className="flex items-center gap-2">
                  <User className="w-4 h-4" />
                  <span>{post.author}</span>
                </div>
              </div>

              {/* Title */}
              <h1 className="text-3xl lg:text-4xl font-bold text-gray-800 mb-6">
                {post.title}
              </h1>

              {/* Description */}
              <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                {post.description}
              </p>

              {/* Tags */}
              <div className="flex flex-wrap gap-2 mb-8">
                {post.tags.map((tag) => (
                  <Badge key={tag} variant="secondary">
                    <Tag className="w-3 h-3 mr-1" />
                    {tag}
                  </Badge>
                ))}
              </div>

              {/* Share Button */}
              <div className="mb-8">
                <ShareButton 
                  title={post.title}
                  description={post.description}
                />
              </div>

              {/* Article Content */}
              <div className="prose prose-lg max-w-none">
                <div 
                  className="text-gray-700 leading-relaxed space-y-6"
                  dangerouslySetInnerHTML={{
                    __html: post.content
                      .replace(/\n/g, '<br>')
                      .replace(/#{1,6}\s+(.+)/g, (match, text) => {
                        const level = match.match(/^#{1,6}/)?.[0]?.length || 1
                        return `<h${level} class="text-${level === 1 ? '3xl' : level === 2 ? '2xl' : 'xl'} font-bold text-gray-800 mt-8 mb-4">${text}</h${level}>`
                      })
                      .replace(/\*\*(.+?)\*\*/g, '<strong class="font-semibold">$1</strong>')
                      .replace(/\*(.+?)\*/g, '<em class="italic">$1</em>')
                      .replace(/- (.+)/g, '<li class="ml-4">$1</li>')
                      .replace(/(\d+)\. (.+)/g, '<li class="ml-4">$1. $2</li>')
                      .replace(/---/g, '<hr class="my-8 border-gray-200">')
                  }}
                />
              </div>

              {/* Call to Action */}
              <div className="mt-12 p-6 bg-gradient-to-r from-orange-50 to-amber-50 rounded-2xl text-center">
                <h3 className="text-xl font-bold text-gray-800 mb-4">
                  Ready to Transform Your Teaching?
                </h3>
                <p className="text-gray-600 mb-6">
                  Try Zaza Promptly&apos;s AI-powered tools and see how much time you can save on student feedback.
                </p>
                <Link href="/stripe-test">
                  <Button className="bg-gradient-to-r from-orange-500 to-amber-500 hover:from-orange-600 hover:to-amber-600 text-white font-semibold px-8 py-3 rounded-full shadow-lg transform hover:scale-105 transition-all duration-200">
                    Start Free Trial
                  </Button>
                </Link>
              </div>
            </div>
          </article>

          {/* Back to Blog */}
          <div className="text-center mt-12">
            <Link href="/blog">
              <Button variant="outline" className="border-orange-200 text-orange-600 hover:bg-orange-50">
                <ArrowLeft className="w-4 h-4 mr-2" />
                Back to Blog
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </>
  )
} 