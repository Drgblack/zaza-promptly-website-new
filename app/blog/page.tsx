import Link from 'next/link'
import { SEOHead } from '@/components/seo-head'
import { getAllPosts } from '@/lib/blog'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Calendar, User, Tag, ArrowRight } from 'lucide-react'

export default function BlogPage() {
  const posts = getAllPosts()

  return (
    <>
      <SEOHead pageType="blog" />
      <div className="min-h-screen bg-gradient-to-br from-orange-50 via-amber-50 to-yellow-50 py-20">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-800 mb-6">
            Learning <span className="bg-gradient-to-r from-orange-600 to-amber-600 bg-clip-text text-transparent">Centre</span>
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Discover insights, tips, and stories from educators using AI to transform their teaching practice.
          </p>
        </div>

        {posts.length === 0 ? (
          <div className="bg-white rounded-3xl shadow-2xl p-8 lg:p-12 mb-12">
            <div className="text-center">
              <h2 className="text-3xl font-bold text-gray-800 mb-6">Coming Soon</h2>
              <p className="text-lg text-gray-600 mb-8">
                Our blog is under construction. We&apos;ll be sharing valuable content about AI in education, teaching tips, and success stories from our community.
              </p>
              <Link 
                href="/"
                className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-orange-500 to-amber-500 hover:from-orange-600 hover:to-amber-600 text-white font-semibold rounded-full shadow-lg transform hover:scale-105 transition-all duration-200"
              >
                Back to Home
              </Link>
            </div>
          </div>
        ) : (
          <div className="space-y-8">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {posts.map((post) => (
                <Card key={post.slug} className="overflow-hidden hover:shadow-xl transition-all duration-300 transform hover:scale-105">
                  <div className="aspect-video bg-gradient-to-br from-orange-100 to-amber-100 flex items-center justify-center">
                    <div className="text-orange-500 text-4xl">📚</div>
                  </div>
                  <CardHeader>
                    <div className="flex items-center gap-2 mb-2">
                      <Calendar className="w-4 h-4 text-gray-500" />
                      <span className="text-sm text-gray-500">
                        {new Date(post.date).toLocaleDateString('en-US', {
                          year: 'numeric',
                          month: 'long',
                          day: 'numeric'
                        })}
                      </span>
                    </div>
                    <CardTitle className="text-xl font-bold text-gray-800 line-clamp-2">
                      {post.title}
                    </CardTitle>
                    <CardDescription className="line-clamp-3">
                      {post.description}
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="flex items-center justify-between mb-4">
                      <div className="flex items-center gap-2">
                        <User className="w-4 h-4 text-gray-500" />
                        <span className="text-sm text-gray-600">{post.author}</span>
                      </div>
                    </div>
                    
                    <div className="flex flex-wrap gap-2 mb-4">
                      {post.tags.slice(0, 3).map((tag) => (
                        <Badge key={tag} variant="secondary" className="text-xs">
                          <Tag className="w-3 h-3 mr-1" />
                          {tag}
                        </Badge>
                      ))}
                    </div>
                    
                    <Link 
                      href={`/blog/${post.slug}`}
                      className="inline-flex items-center text-orange-600 hover:text-orange-700 font-semibold text-sm transition-colors"
                    >
                      Read More
                      <ArrowRight className="w-4 h-4 ml-1" />
                    </Link>
                  </CardContent>
                </Card>
              ))}
            </div>
            
            <div className="text-center mt-12">
              <Link 
                href="/"
                className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-orange-500 to-amber-500 hover:from-orange-600 hover:to-amber-600 text-white font-semibold rounded-full shadow-lg transform hover:scale-105 transition-all duration-200"
              >
                Back to Home
              </Link>
            </div>
          </div>
        )}
      </div>
    </div>
    </>
  )
} 