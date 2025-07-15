import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Separator } from "@/components/ui/separator"
import { Navigation } from "@/components/navigation"
import { BookOpen, Users, Calendar, Award, ExternalLink, MapPin } from "lucide-react"
import Link from "next/link"

export default function TeachingPage() {
  const ucfCourses = [
    {
      semester: "Spring 2024",
      code: "CAP 5516",
      title: "Medical Image Computing",
      link: null
    },
    {
      semester: "Spring 2023",
      code: "CAP 5516",
      title: "Medical Image Computing",
      link: null
    },
    {
      semester: "Spring 2022",
      code: "CAP 5516",
      title: "Medical Image Computing",
      link: "https://www.crcv.ucf.edu/chenchen/cap5516-spring2022.html"
    },
    {
      semester: "Spring 2018",
      code: "CAP4453",
      title: "Robot Vision",
      note: "44 students, online course",
      link: null
    }
  ]

  const unccCourses = [
    {
      semester: "Spring 2021",
      courses: [
        {
          code: "ECGR 6090/8090",
          title: "Special Topics: Deep Learning in Computer Vision",
          link: null
        }
      ]
    },
    {
      semester: "Fall 2020",
      courses: [
        {
          code: "ECGR 3090/4090",
          title: "Introduction to Machine Learning",
          note: "new course developed at UNCC",
          link: null
        },
        {
          code: "ECGR 6119/8119",
          title: "Applied Artificial Intelligence",
          link: null
        }
      ]
    },
    {
      semester: "Spring 2020",
      courses: [
        {
          code: "ECGR 4124/5124",
          title: "Digital Signal Processing",
          link: null
        }
      ]
    },
    {
      semester: "Fall 2019",
      courses: [
        {
          code: "ECGR 6090/8090",
          title: "Special Topics: Deep Learning in Computer Vision",
          link: "https://sites.google.com/site/unccdlcv/home"
        }
      ]
    },
    {
      semester: "Spring 2019",
      courses: [
        {
          code: "ECGR 6119/8119",
          title: "Applied Artificial Intelligence",
          link: null
        }
      ]
    },
    {
      semester: "Fall 2018",
      courses: [
        {
          code: "ECGR 6090/8090",
          title: "Special Topics: Deep Learning in Computer Vision",
          note: "new course developed at UNCC",
          link: "https://sites.google.com/site/unccdlcv/home"
        }
      ]
    }
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-white">
      <Navigation />

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Page Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-slate-900 mb-4">Teaching</h1>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            Courses taught at University of Central Florida and UNC-Charlotte
          </p>
        </div>

        {/* University of Central Florida */}
        <Card className="mb-12">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <MapPin className="w-5 h-5" />
              University of Central Florida (UCF)
            </CardTitle>
            <CardDescription>
              Current courses and past teaching experience at UCF
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-6">
              {ucfCourses.map((course, index) => (
                <div key={index} className="border-l-4 border-blue-200 pl-6">
                  <div className="flex flex-wrap items-center gap-3 mb-3">
                    <Badge className="bg-blue-600">{course.semester}</Badge>
                    <Badge variant="outline">{course.code}</Badge>
                  </div>

                  <div className="flex items-center gap-4">
                    <h3 className="text-lg font-semibold text-slate-900">
                      {course.link ? (
                        <Link
                          href={course.link}
                          className="text-blue-600 hover:text-blue-800 hover:underline"
                          target="_blank"
                        >
                          {course.title}
                        </Link>
                      ) : (
                        course.title
                      )}
                    </h3>
                  </div>

                  {course.note && (
                    <p className="text-sm text-slate-600 mt-2">({course.note})</p>
                  )}
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* UNC-Charlotte */}
        <Card className="mb-12">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <MapPin className="w-5 h-5" />
              UNC-Charlotte
            </CardTitle>
            <CardDescription>
              Previous teaching experience at University of North Carolina at Charlotte
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-8">
              {unccCourses.map((semesterData, index) => (
                <div key={index} className="border-l-4 border-green-200 pl-6">
                  <div className="mb-4">
                    <Badge className="bg-green-600 mb-3">{semesterData.semester}</Badge>
                  </div>

                  <div className="space-y-4">
                    {semesterData.courses.map((course, courseIndex) => (
                      <div key={courseIndex} className="bg-slate-50 p-4 rounded-lg">
                        <div className="flex flex-wrap items-center gap-2 mb-2">
                          <Badge variant="outline">{course.code}</Badge>
                          {(course as any).note && (
                            <Badge variant="secondary" className="text-xs">
                              {(course as any).note}
                            </Badge>
                          )}
                        </div>

                        <h4 className="font-semibold text-slate-900">
                          {course.link ? (
                            <Link
                              href={course.link}
                              className="text-blue-600 hover:text-blue-800 hover:underline"
                              target="_blank"
                            >
                              {course.title}
                            </Link>
                          ) : (
                            course.title
                          )}
                        </h4>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Teaching Philosophy */}
        <Card className="mb-12">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <BookOpen className="w-5 h-5" />
              Teaching Philosophy
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-slate-700 leading-relaxed mb-4">
              My teaching approach emphasizes bridging theoretical foundations with practical applications in computer vision,
              machine learning, and medical image computing. I believe in fostering critical thinking through hands-on projects
              and collaborative learning experiences.
            </p>
            <p className="text-slate-700 leading-relaxed">
              I strive to create an inclusive learning environment where students can explore cutting-edge research topics,
              develop technical skills, and gain the confidence to tackle real-world challenges in artificial intelligence
              and computer vision.
            </p>
          </CardContent>
        </Card>

        {/* Course Development */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Award className="w-5 h-5" />
              Course Development
            </CardTitle>
            <CardDescription>New courses developed and special contributions</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="bg-amber-50 border border-amber-200 rounded-lg p-4">
                <h3 className="font-semibold text-slate-900 mb-2">Introduction to Machine Learning</h3>
                <p className="text-sm text-slate-700 mb-2">
                  <strong>ECGR 3090/4090</strong> - Fall 2020
                </p>
                <p className="text-slate-600 text-sm">
                  Developed new undergraduate/graduate course at UNC-Charlotte covering machine learning fundamentals,
                  algorithms, and practical applications.
                </p>
              </div>

              <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
                <h3 className="font-semibold text-slate-900 mb-2">Special Topics: Deep Learning in Computer Vision</h3>
                <p className="text-sm text-slate-700 mb-2">
                  <strong>ECGR 6090/8090</strong> - Fall 2018, Fall 2019, Spring 2021
                </p>
                <p className="text-slate-600 text-sm">
                  Created specialized graduate course focusing on deep learning applications in computer vision,
                  covering state-of-the-art neural network architectures and research methodologies.
                </p>
                <Button variant="outline" size="sm" className="mt-3" asChild>
                  <Link href="https://sites.google.com/site/unccdlcv/home" target="_blank">
                    <ExternalLink className="w-3 h-3 mr-1" />
                    Course Website
                  </Link>
                </Button>
              </div>
            </div>
          </CardContent>
        </Card>
      </main>

      {/* Footer */}
      <footer className="bg-slate-900 text-white py-12 mt-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h3 className="text-lg font-semibold mb-4">Dr. Chen Chen</h3>
            <p className="text-slate-400 mb-4">
              Associate Professor, Center for Research in Computer Vision<br />
              University of Central Florida
            </p>
            <div className="flex justify-center space-x-6">
              <Link href="https://scholar.google.com/citations?hl=en&user=TuEwcZ0AAAAJ" target="_blank" className="text-slate-400 hover:text-white transition-colors">
                <ExternalLink className="w-5 h-5" />
              </Link>
              <Link href="https://www.linkedin.com/in/dennychen/" target="_blank" className="text-slate-400 hover:text-white transition-colors">
                <ExternalLink className="w-5 h-5" />
              </Link>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}
