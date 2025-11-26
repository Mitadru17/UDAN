"use client"

import { useState, useEffect } from "react"
import { PageLayout } from "@/components/page-layout"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Avatar, AvatarFallback } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { MessageSquare, ThumbsUp, Send, Users, TrendingUp, AlertCircle } from "lucide-react"

interface CommunityPost {
  id: string
  author: string
  authorInitials: string
  timestamp: string
  category: "road" | "water" | "health" | "general"
  title: string
  content: string
  likes: number
  replies: number
  isLiked: boolean
}

export default function CommunityPage() {
  const [posts, setPosts] = useState<CommunityPost[]>([
    {
      id: "1",
      author: "Rajesh Kumar",
      authorInitials: "RK",
      timestamp: "2 hours ago",
      category: "road",
      title: "Road blocked near Mussoorie - Alternative route available",
      content: "The main highway near Mussoorie is blocked due to landslide. Taking the bypass through Kempty Falls is safe and clear. Travel time adds 20 minutes but much safer.",
      likes: 24,
      replies: 5,
      isLiked: false,
    },
    {
      id: "2",
      author: "Priya Sharma",
      authorInitials: "PS",
      timestamp: "5 hours ago",
      category: "water",
      title: "Clean water available at community center",
      content: "For anyone in the Dehradun valley area, the community center is distributing clean drinking water today from 10 AM to 6 PM. Bring your own containers.",
      likes: 42,
      replies: 12,
      isLiked: false,
    },
    {
      id: "3",
      author: "Dr. Amit Singh",
      authorInitials: "AS",
      timestamp: "1 day ago",
      category: "health",
      title: "Free medical camp this weekend",
      content: "Mobile medical unit will be in Tehri district this Saturday and Sunday. Free checkups and basic medicines available. Timing: 9 AM to 5 PM.",
      likes: 67,
      replies: 18,
      isLiked: false,
    },
  ])

  const [newPost, setNewPost] = useState({
    title: "",
    content: "",
    category: "general" as "road" | "water" | "health" | "general",
  })

  const [activeTab, setActiveTab] = useState("all")

  const handleLike = (postId: string) => {
    setPosts(posts.map(post => 
      post.id === postId 
        ? { ...post, likes: post.isLiked ? post.likes - 1 : post.likes + 1, isLiked: !post.isLiked }
        : post
    ))
  }

  const handleSubmitPost = () => {
    if (!newPost.title || !newPost.content) return

    const post: CommunityPost = {
      id: Date.now().toString(),
      author: "You",
      authorInitials: "YO",
      timestamp: "Just now",
      category: newPost.category,
      title: newPost.title,
      content: newPost.content,
      likes: 0,
      replies: 0,
      isLiked: false,
    }

    setPosts([post, ...posts])
    setNewPost({ title: "", content: "", category: "general" })
  }

  const filteredPosts = activeTab === "all" 
    ? posts 
    : posts.filter(post => post.category === activeTab)

  const getCategoryColor = (category: string) => {
    switch (category) {
      case "road": return "bg-orange-100 text-orange-700 dark:bg-orange-900/30 dark:text-orange-400"
      case "water": return "bg-blue-100 text-blue-700 dark:bg-blue-900/30 dark:text-blue-400"
      case "health": return "bg-emerald-100 text-emerald-700 dark:bg-emerald-900/30 dark:text-emerald-400"
      default: return "bg-gray-100 text-gray-700 dark:bg-gray-900/30 dark:text-gray-400"
    }
  }

  return (
    <PageLayout>
      <div className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mb-8">
          <div className="mb-4 flex items-center gap-3">
            <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-purple-100 text-purple-600 dark:bg-purple-900/30 dark:text-purple-400">
              <Users className="h-6 w-6" />
            </div>
            <div>
              <h1 className="text-3xl font-bold">Community Forum</h1>
              <p className="text-muted-foreground">Share updates, ask questions, and help your community</p>
            </div>
          </div>

          <div className="flex items-center gap-2 rounded-lg bg-blue-50 p-4 text-sm text-blue-800 dark:bg-blue-900/20 dark:text-blue-300">
            <AlertCircle className="h-5 w-5 flex-shrink-0" />
            <p>
              This is a community space for sharing updates and helping each other. For emergencies, always call <strong>108</strong> or use the Emergency section.
            </p>
          </div>
        </div>

        <div className="grid gap-6 lg:grid-cols-3">
          {/* Main Content */}
          <div className="space-y-6 lg:col-span-2">
            {/* Create Post */}
            <Card>
              <CardHeader>
                <CardTitle>Create a Post</CardTitle>
                <CardDescription>Share updates or ask for help from the community</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-2">
                  <Input
                    placeholder="Post title..."
                    value={newPost.title}
                    onChange={(e) => setNewPost({ ...newPost, title: e.target.value })}
                  />
                </div>
                <div className="space-y-2">
                  <Textarea
                    placeholder="What's happening in your area?"
                    value={newPost.content}
                    onChange={(e) => setNewPost({ ...newPost, content: e.target.value })}
                    rows={3}
                  />
                </div>
                <div className="flex items-center justify-between">
                  <div className="flex gap-2">
                    <Badge
                      variant={newPost.category === "general" ? "default" : "outline"}
                      className="cursor-pointer"
                      onClick={() => setNewPost({ ...newPost, category: "general" })}
                    >
                      General
                    </Badge>
                    <Badge
                      variant={newPost.category === "road" ? "default" : "outline"}
                      className="cursor-pointer"
                      onClick={() => setNewPost({ ...newPost, category: "road" })}
                    >
                      Road
                    </Badge>
                    <Badge
                      variant={newPost.category === "water" ? "default" : "outline"}
                      className="cursor-pointer"
                      onClick={() => setNewPost({ ...newPost, category: "water" })}
                    >
                      Water
                    </Badge>
                    <Badge
                      variant={newPost.category === "health" ? "default" : "outline"}
                      className="cursor-pointer"
                      onClick={() => setNewPost({ ...newPost, category: "health" })}
                    >
                      Health
                    </Badge>
                  </div>
                  <Button onClick={handleSubmitPost} disabled={!newPost.title || !newPost.content}>
                    <Send className="mr-2 h-4 w-4" />
                    Post
                  </Button>
                </div>
              </CardContent>
            </Card>

            {/* Filter Tabs */}
            <Tabs value={activeTab} onValueChange={setActiveTab}>
              <TabsList className="grid w-full grid-cols-5">
                <TabsTrigger value="all">All</TabsTrigger>
                <TabsTrigger value="road">Road</TabsTrigger>
                <TabsTrigger value="water">Water</TabsTrigger>
                <TabsTrigger value="health">Health</TabsTrigger>
                <TabsTrigger value="general">General</TabsTrigger>
              </TabsList>
            </Tabs>

            {/* Posts Feed */}
            <div className="space-y-4">
              {filteredPosts.map((post) => (
                <Card key={post.id}>
                  <CardContent className="pt-6">
                    <div className="flex gap-4">
                      <Avatar>
                        <AvatarFallback>{post.authorInitials}</AvatarFallback>
                      </Avatar>
                      <div className="flex-1">
                        <div className="mb-2 flex items-center justify-between">
                          <div>
                            <p className="font-semibold">{post.author}</p>
                            <p className="text-xs text-muted-foreground">{post.timestamp}</p>
                          </div>
                          <Badge className={getCategoryColor(post.category)}>
                            {post.category.charAt(0).toUpperCase() + post.category.slice(1)}
                          </Badge>
                        </div>
                        <h3 className="mb-2 text-lg font-semibold">{post.title}</h3>
                        <p className="mb-4 text-muted-foreground">{post.content}</p>
                        <div className="flex items-center gap-4">
                          <Button
                            variant="ghost"
                            size="sm"
                            onClick={() => handleLike(post.id)}
                            className={post.isLiked ? "text-primary" : ""}
                          >
                            <ThumbsUp className={`mr-2 h-4 w-4 ${post.isLiked ? "fill-current" : ""}`} />
                            {post.likes}
                          </Button>
                          <Button variant="ghost" size="sm">
                            <MessageSquare className="mr-2 h-4 w-4" />
                            {post.replies}
                          </Button>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Community Stats */}
            <Card>
              <CardHeader>
                <CardTitle className="text-base">Community Stats</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-center justify-between">
                  <span className="text-sm text-muted-foreground">Active Members</span>
                  <span className="text-2xl font-bold">1,247</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-sm text-muted-foreground">Posts Today</span>
                  <span className="text-2xl font-bold">43</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-sm text-muted-foreground">Active Discussions</span>
                  <span className="text-2xl font-bold">28</span>
                </div>
              </CardContent>
            </Card>

            {/* Trending Topics */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-base">
                  <TrendingUp className="h-4 w-4" />
                  Trending Topics
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  <div className="flex items-start gap-2">
                    <span className="text-xs font-semibold text-muted-foreground">#1</span>
                    <div>
                      <p className="text-sm font-medium">Road Safety Updates</p>
                      <p className="text-xs text-muted-foreground">87 posts</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-2">
                    <span className="text-xs font-semibold text-muted-foreground">#2</span>
                    <div>
                      <p className="text-sm font-medium">Water Distribution</p>
                      <p className="text-xs text-muted-foreground">56 posts</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-2">
                    <span className="text-xs font-semibold text-muted-foreground">#3</span>
                    <div>
                      <p className="text-sm font-medium">Medical Camps</p>
                      <p className="text-xs text-muted-foreground">42 posts</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Guidelines */}
            <Card className="border-amber-200 bg-amber-50/50 dark:border-amber-800 dark:bg-amber-900/20">
              <CardHeader className="pb-3">
                <CardTitle className="text-base">Community Guidelines</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-xs text-muted-foreground">
                  <li className="flex items-start gap-2">
                    <span className="mt-1 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-amber-500" />
                    Be respectful and helpful to others
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="mt-1 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-amber-500" />
                    Share accurate and verified information
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="mt-1 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-amber-500" />
                    For emergencies, always call 108
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="mt-1 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-amber-500" />
                    Report inappropriate content
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </PageLayout>
  )
}
