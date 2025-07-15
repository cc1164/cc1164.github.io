import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Separator } from "@/components/ui/separator"
import { Navigation } from "@/components/navigation"
import { ExternalLink, Calendar, MapPin, GraduationCap, Award, BookOpen, Users, Building, Trophy } from "lucide-react"
import Link from "next/link"

export default function BiographyPage() {
  const timeline = [
    {
      period: "Current",
      position: "Associate Professor",
      institution: "Center for Research in Computer Vision (CRCV)",
      university: "University of Central Florida",
      location: "Orlando, FL",
      description: "Leading research in computer vision, generative AI, and image processing. IEEE Senior Member.",
      current: true,
      url: "http://crcv.ucf.edu/"
    },
    {
      period: "August 2018 - June 2021",
      position: "Assistant Professor",
      institution: "Department of Electrical and Computer Engineering",
      university: "University of North Carolina at Charlotte",
      location: "Charlotte, NC",
      description: "Established research lab focusing on computer vision and machine learning applications.",
      url: "https://ece.uncc.edu/"
    },
    {
      period: "July 2016 - June 2018",
      position: "Postdoctoral Research Associate",
      institution: "Center for Research in Computer Vision (CRCV)",
      university: "University of Central Florida",
      location: "Orlando, FL",
      description: "Conducted advanced research in computer vision and deep learning.",
      url: "http://crcv.ucf.edu/"
    }
  ]

  const education = [
    {
      degree: "Ph.D. in Electrical Engineering",
      university: "The University of Texas at Dallas",
      period: "May 2016",
      advisors: [
        { name: "Dr. Nasser Kehtarnavaz", role: "Advisor", url: "http://www.utdallas.edu/~kehtar/" },
        { name: "Dr. Roozbeh Jafari", role: "Co-advisor", url: "http://jafari.tamu.edu/rjafari/", institution: "Texas A&M University" }
      ],
      award: "David Daniel Fellowship Award (Best Doctoral Dissertation Award for ECS)",
      awardYear: "2016",
      awardUrl: "https://engineering.utdallas.edu/engineering/news/archive/2016-summer/ee-student-receives-dissertation-award/"
    },
    {
      degree: "M.S. in Electrical Engineering",
      university: "Mississippi State University",
      period: "2012",
      advisors: [
        { name: "Dr. James E. Fowler", role: "Thesis Advisor", url: "http://www.ece.msstate.edu/~fowler/" }
      ]
    }
  ]

  const editorialRoles = [
    {
      role: "Associate Editor",
      journal: "IEEE Transactions on Circuits and Systems for Video Technology (T-CSVT)",
      url: "https://ieeexplore.ieee.org/xpl/RecentIssue.jsp?punumber=76"
    },
    {
      role: "Associate Editor",
      journal: "Journal of Real-Time Image Processing",
      url: "https://www.springer.com/computer/image+processing/journal/11554"
    }
  ]

  const achievements = [
    {
      year: "2025",
      title: "Excellence in Faculty Academic Advising Award",
      institution: "University of Central Florida",
      icon: "🏆"
    },
    {
      year: "2024",
      title: "Rising Stars Award",
      institution: "Academy of Science, Engineering and Medicine of Florida (ASEMFL)",
      icon: "⭐",
      url: "https://www.asemfl.org/presenter/chen-chen/"
    },
    {
      year: "2022-2024",
      title: "World's Top 2% Scientists",
      institution: "Stanford University/Elsevier",
      icon: "🌍"
    },
    {
      year: "2023",
      title: "Finalist for MICCAI Young Scientist Publication Impact Award",
      institution: "MICCAI Conference",
      icon: "🎯"
    },
    {
      year: "2022",
      title: "CVPR Best Paper Nominee",
      institution: "IEEE/CVF Conference",
      icon: "📄",
      url: "https://arxiv.org/pdf/2111.14213"
    },
    {
      year: "2019",
      title: "UNC-Charlotte Faculty Research Award",
      institution: "University of North Carolina at Charlotte",
      icon: "🔬"
    },
    {
      year: "2016",
      title: "David Daniel Fellowship Award (Best Doctoral Dissertation)",
      institution: "University of Texas at Dallas",
      icon: "🎓",
      url: "https://engineering.utdallas.edu/engineering/news/archive/2016-summer/ee-student-receives-dissertation-award/"
    }
  ]

  const memberships = [
    {
      organization: "IEEE",
      status: "Senior Member",
      since: "2019"
    },
    {
      organization: "ACM",
      status: "Member",
      since: "2016"
    }
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-white">
      <Navigation />

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Page Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-slate-900 mb-4">Biography</h1>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            Academic journey and professional development in computer vision and artificial intelligence research
          </p>
        </div>

        {/* Overview */}
        <Card className="mb-12 border-blue-100 bg-blue-50">
          <CardHeader>
            <CardTitle className="text-blue-900">Professional Overview</CardTitle>
          </CardHeader>
          <CardContent className="text-blue-800">
            <p className="text-lg leading-relaxed">
              Dr. Chen Chen is currently an Associate Professor at the{" "}
              <Link href="http://crcv.ucf.edu/" className="font-semibold underline hover:no-underline" target="_blank">
                Center for Research in Computer Vision (CRCV)
              </Link>
              ,{" "}
              <Link href="http://www.ucf.edu/" className="font-semibold underline hover:no-underline" target="_blank">
                University of Central Florida
              </Link>
              . He is an IEEE Senior Member.
            </p>
          </CardContent>
        </Card>

        <div className="grid lg:grid-cols-2 gap-8 mb-12">
          {/* Career Timeline */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Building className="w-5 h-5" />
                Career Timeline
              </CardTitle>
              <CardDescription>Professional positions and academic appointments</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-6">
                {timeline.map((item, index) => (
                  <div key={index} className="relative pl-8">
                    <div className={`absolute left-0 w-3 h-3 rounded-full ${item.current ? 'bg-green-500' : 'bg-blue-500'} -translate-x-1.5`} />
                    {index < timeline.length - 1 && (
                      <div className="absolute left-0 top-3 w-0.5 h-full bg-slate-200 -translate-x-1" />
                    )}

                    <div className="space-y-2">
                      <div className="flex items-center gap-2">
                        <Badge variant={item.current ? "default" : "secondary"}>
                          {item.period}
                        </Badge>
                        {item.current && (
                          <Badge className="bg-green-600">Current</Badge>
                        )}
                      </div>

                      <h3 className="font-semibold text-slate-900">{item.position}</h3>
                      {item.url ? (
                        <Link href={item.url} target="_blank" className="text-sm text-blue-600 hover:underline">
                          {item.institution}
                        </Link>
                      ) : (
                        <p className="text-sm text-slate-600">{item.institution}</p>
                      )}
                      <p className="text-sm font-medium text-slate-700">
                        {item.university === "University of Central Florida" ? (
                          <Link href="http://www.ucf.edu/" target="_blank" className="text-blue-600 hover:underline">
                            {item.university}
                          </Link>
                        ) : item.university === "University of North Carolina at Charlotte" ? (
                          <Link href="https://www.uncc.edu/" target="_blank" className="text-blue-600 hover:underline">
                            {item.university}
                          </Link>
                        ) : (
                          item.university
                        )}
                      </p>

                      <div className="flex items-center gap-2 text-xs text-slate-500">
                        <MapPin className="w-3 h-3" />
                        {item.location}
                      </div>

                      <p className="text-sm text-slate-600 leading-relaxed">{item.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Professional Memberships */}
          <div className="space-y-8">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Users className="w-5 h-5" />
                  Professional Memberships
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {memberships.map((membership, index) => (
                    <div key={index} className="flex justify-between items-center p-3 bg-slate-50 rounded-lg">
                      <div>
                        <div className="font-semibold text-slate-900">{membership.organization}</div>
                        <div className="text-sm text-slate-600">{membership.status}</div>
                      </div>
                      <Badge variant="outline">Since {membership.since}</Badge>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <BookOpen className="w-5 h-5" />
                  Editorial Board Service
                </CardTitle>
                <CardDescription>Associate Editor roles for prestigious journals</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {editorialRoles.map((role, index) => (
                    <div key={index} className="p-4 border border-slate-200 rounded-lg">
                      <h3 className="font-semibold text-slate-900 mb-2">{role.role}</h3>
                      <Link
                        href={role.url}
                        target="_blank"
                        className="text-blue-600 hover:underline text-sm leading-relaxed block"
                      >
                        {role.journal} <ExternalLink className="w-3 h-3 inline ml-1" />
                      </Link>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Education */}
        <Card className="mb-12">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <GraduationCap className="w-5 h-5" />
              Education
            </CardTitle>
            <CardDescription>Academic background and degree information</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-8">
              {education.map((edu, index) => (
                <div key={index} className="border-l-4 border-blue-200 pl-6 py-2">
                  <div className="flex flex-wrap items-center gap-3 mb-3">
                    <h3 className="text-lg font-semibold text-slate-900">{edu.degree}</h3>
                    <Badge>{edu.period}</Badge>
                  </div>

                  <p className="text-slate-700 font-medium mb-3">
                    {edu.university === "The University of Texas at Dallas" ? (
                      <Link href="http://www.utdallas.edu/" target="_blank" className="text-blue-600 hover:underline">
                        {edu.university}
                      </Link>
                    ) : edu.university === "Mississippi State University" ? (
                      <Link href="http://www.msstate.edu/" target="_blank" className="text-blue-600 hover:underline">
                        {edu.university}
                      </Link>
                    ) : (
                      edu.university
                    )}
                  </p>

                  <div className="space-y-2 mb-4">
                    {edu.advisors.map((advisor, idx) => (
                      <div key={idx} className="text-sm text-slate-600">
                        <span className="font-medium">{advisor.role}:</span>{" "}
                        <Link href={advisor.url} target="_blank" className="text-blue-600 hover:underline">
                          {advisor.name}
                        </Link>
                        {(advisor as any).institution && (
                          <span className="text-slate-500"> (
                            {(advisor as any).institution === "Texas A&M University" ? (
                              <Link href="http://www.tamu.edu/" target="_blank" className="text-blue-600 hover:underline">
                                {(advisor as any).institution}
                              </Link>
                            ) : (
                              (advisor as any).institution
                            )}
                          )</span>
                        )}
                      </div>
                    ))}
                  </div>

                  {edu.award && (
                    <div className="bg-amber-50 border border-amber-200 rounded-lg p-3">
                      <div className="flex items-center gap-2 text-amber-800">
                        <Trophy className="w-4 h-4" />
                        <span className="font-semibold">Award Recognition</span>
                      </div>
                      <p className="text-amber-700 mt-1">
                        <Link href={edu.awardUrl || "#"} target="_blank" className="hover:underline">
                          {edu.award} ({edu.awardYear})
                        </Link>
                      </p>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Awards and Recognition */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Award className="w-5 h-5" />
              Awards and Recognition
            </CardTitle>
            <CardDescription>Honors and achievements throughout academic career</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid md:grid-cols-2 gap-4">
              {achievements.map((achievement, index) => (
                <div key={index} className="flex gap-4 p-4 rounded-lg bg-slate-50 hover:bg-slate-100 transition-colors">
                  <div className="text-2xl">{achievement.icon}</div>
                  <div className="flex-1">
                    <div className="flex items-center gap-2 mb-1">
                      <Badge className="bg-slate-600">{achievement.year}</Badge>
                    </div>
                    <h3 className="font-semibold text-slate-900 mb-1">
                      {achievement.url ? (
                        <Link href={achievement.url} target="_blank" className="text-blue-600 hover:underline">
                          {achievement.title}
                        </Link>
                      ) : (
                        achievement.title
                      )}
                    </h3>
                    <p className="text-sm text-slate-600">{achievement.institution}</p>
                  </div>
                </div>
              ))}
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
          </div>
        </div>
      </footer>
    </div>
  )
}
