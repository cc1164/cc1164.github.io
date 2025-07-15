import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Navigation } from "@/components/navigation"
import { ExternalLink, Mail, Users, GraduationCap, Calendar } from "lucide-react"
import Link from "next/link"

export default function GroupPage() {
  const currentPhdStudents = [
    {
      name: "Guangyu Sun",
      image: "/student/Guangyu.jpg",
      website: "https://imguangyu.github.io/",
      interests: ["Computer Vision", "Machine Learning"]
    },
    {
      name: "Qucheng Peng",
      image: "/student/pqc.jpg",
      website: "http://davidpengiupui.github.io",
      interests: ["Computer Vision", "Deep Learning"]
    },
    {
      name: "Andong Deng",
      image: "/student/andong.jpg",
      website: "https://dengandong.github.io/",
      interests: ["Computer Vision", "AI"]
    },
    {
      name: "Ming Li",
      image: "/student/mingli.jpg",
      website: "https://liming-ai.github.io/",
      interests: ["Machine Learning", "Computer Vision"]
    },
    {
      name: "Anthony Bilic",
      image: "/student/anthony.png",
      website: "https://irulenot.github.io/",
      interests: ["Computer Vision", "AI"]
    },
    {
      name: "Xuechu Yu",
      image: "/student/Xuechu.jpg",
      website: "https://xuechuyu.github.io/",
      interests: ["Machine Learning", "Computer Vision"]
    },
    {
      name: "Zonglin Lyu",
      image: "/student/zonglin-lyu.png",
      website: "https://zonglinl.github.io/",
      interests: ["Computer Vision", "Deep Learning"]
    },
    {
      name: "Yancheng Zhang",
      image: "/student/yancheng-zhang.jpg",
      website: "https://yanchengzhang.com/",
      interests: ["Computer Vision", "Machine Learning"]
    },
    {
      name: "Md Kowsher",
      image: "/student/Md.jpg",
      website: "https://kowsher.github.io/",
      interests: ["Computer Vision", "AI"]
    },
    {
      name: "Yuanhao Zou",
      image: "/student/yuanhao.jpg",
      website: "https://alexco1d.github.io/",
      interests: ["Machine Learning", "Computer Vision"]
    },
    {
      name: "Patrick Kwon",
      image: "/student/patrick.jpg",
      website: "https://yj7082126.github.io/",
      interests: ["Computer Vision", "Deep Learning"]
    },
    {
      name: "Wenhan Wu",
      image: "/student/wenhan.png",
      website: "https://sites.google.com/view/wenhanwu/",
      interests: ["Computer Vision", "Machine Learning"],
      note: "Co-advising with Dr. Aidong Lu at UNCC"
    }
  ]

  const phdAlumni = [
    {
      name: "Dr. Umar Khalid",
      graduation: "December 2024",
      thesis: "Effective and Efficient Use of Diffusion Models for Editing in Computer Vision",
      currentPosition: "Research Scientist",
      website: "https://umarkhalid.com/"
    },
    {
      name: "Dr. Matias Mendieta",
      graduation: "August 2024",
      thesis: "Efficient and Effective Deep Learning Methods for Computer Vision in Centralized and Distributed Applications",
      currentPosition: "Research Scientist, Apple Inc.",
      website: "https://mmendiet.github.io/"
    },
    {
      name: "Dr. Ce Zheng",
      graduation: "December 2023",
      thesis: "Reconstructing 3D Humans from Visual Data",
      currentPosition: "Postdoc, Carnegie Mellon University (CMU)",
      award: "Outstanding Dissertation Award",
      website: "https://zczcwh.github.io/",
      defenseVideo: "https://www.youtube.com/watch?v=56DL2MniJI4"
    },
    {
      name: "Dr. Taojiannan Yang",
      graduation: "August 2023",
      thesis: "Towards Efficient and Effective Representation Learning for Image and Video Understanding",
      currentPosition: "Research Scientist, AWS AI Lab, CA",
      website: "https://taoyang1122.github.io/",
      defenseVideo: "https://www.youtube.com/watch?v=mQMc7a3lOKM"
    },
    {
      name: "Dr. Sijie Zhu",
      graduation: "December 2022",
      thesis: "Toward Real-World Cross-View Image Geo-Localization",
      currentPosition: "Research Scientist, Bytedance AI Lab, CA",
      award: "Outstanding Dissertation Award",
      website: "https://jeff-zilence.github.io/",
      defenseVideo: "https://www.youtube.com/watch?v=QtXRHc5Htow"
    }
  ]

  const masterAlumni = [
    {
      name: "Zhaoning Wang",
      graduation: "May 2024",
      program: "Master in Computer Vision",
      website: "https://zhaoningwang.com"
    },
    {
      name: "Changlin Li",
      graduation: "December 2020",
      program: "Master's in Computer Vision",
      institution: "UNCC",
      thesis: "Object Detection in Aerial Imagery"
    },
    {
      name: "Sumanta Bhattacharyya",
      graduation: "December 2019",
      program: "Master's in Computer Vision",
      institution: "UNCC",
      thesis: "Efficient Unsupervised Monocular Depth Estimation Using Attention Guided Generative Adversarial Network"
    },
    {
      name: "Talal Alatiah",
      graduation: "May 2020",
      program: "Master's in Computer Vision",
      institution: "UNCC",
      thesis: "Recognizing Exercises and Counting Repetitions in Real Time"
    }
  ]

  const undergraduatePrograms = [
    "CRCV REU Program",
    "Senior Design Project"
  ]

  const undergraduatePublications = [
    {
      authors: "Momal Ijaz, Renato Diaz, Chen Chen",
      title: "Multi-modal Transformer for Nurse Activity Recognition",
      venue: "The Fifth International Workshop on Computer Vision for Physiological Measurement (CVPM), in conjunction with CVPR 2022",
      paper: "https://arxiv.org/pdf/2204.04564.pdf"
    },
    {
      authors: "Ethan Frakes, Umar Khalid, Chen Chen",
      title: "Efficient and consistent zero-shot video generation with diffusion models",
      venue: "Real-Time Image Processing and Deep Learning 2024. Vol. 13034. SPIE, 2024",
      paper: "https://www.spiedigitallibrary.org/conference-proceedings-of-spie/13034/1303407/Efficient-and-consistent-zero-shot-video-generation-with-diffusion-models/10.1117/12.3013575.short#_=_"
    }
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-white">
      <Navigation />

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Page Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-slate-900 mb-4">Research Group</h1>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            Meet our talented research team working on cutting-edge computer vision and AI projects
          </p>
        </div>

        {/* Principal Investigator */}
        <Card className="mb-12">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Users className="w-5 h-5" />
              Principal Investigator
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="flex flex-col md:flex-row gap-8">
              <div className="flex-shrink-0 mx-auto md:mx-0">
                <Avatar className="w-32 h-32">
                  <AvatarImage src="/chenchen.jpg" alt="Dr. Chen Chen" />
                  <AvatarFallback className="text-2xl">CC</AvatarFallback>
                </Avatar>
              </div>
              <div className="flex-1 text-center md:text-left">
                <h3 className="text-xl font-bold text-slate-900 mb-2">
                  <Link href="https://www.crcv.ucf.edu/chenchen/" target="_blank" className="hover:text-blue-600 underline">
                    Chen Chen
                  </Link>
                </h3>
                <p className="text-slate-700 mb-2">Ph.D., Associate Professor</p>
                <div className="space-y-1 text-slate-600 mb-4">
                  <p>
                    <Link href="https://www.crcv.ucf.edu/" target="_blank" className="hover:text-blue-600 underline">
                      Center for Research in Computer Vision (CRCV)
                    </Link>
                  </p>
                  <p>
                    <Link href="https://www.cs.ucf.edu/" target="_blank" className="hover:text-blue-600 underline">
                      Department of Computer Science
                    </Link>
                  </p>
                  <p>
                    <Link href="https://www.ucf.edu/" target="_blank" className="hover:text-blue-600 underline">
                      University of Central Florida
                    </Link>
                  </p>
                  <p>Office: HEC 221</p>
                  <p>Address: 4328 Scorpius St., Orlando, FL 32816-2365</p>
                  <p>Email: chen.chen@crcv.ucf.edu</p>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Current Ph.D. Students */}
        <Card className="mb-12">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <GraduationCap className="w-5 h-5" />
              Ph.D. Students
            </CardTitle>
            <CardDescription>Current doctoral students in the research group</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {currentPhdStudents.map((student, index) => (
                <Card key={index} className="border-2 hover:border-blue-200 transition-colors">
                  <CardContent className="pt-6">
                    <div className="text-center mb-4">
                      <Avatar className="w-20 h-20 mx-auto mb-3">
                        <AvatarImage src={student.image} alt={student.name} />
                        <AvatarFallback className="text-sm">
                          {student.name.split(' ').map(n => n[0]).join('')}
                        </AvatarFallback>
                      </Avatar>
                      <h3 className="font-semibold text-slate-900 text-sm">{student.name}</h3>
                      {student.note && (
                        <p className="text-xs text-slate-600 mt-1">{student.note}</p>
                      )}
                    </div>

                    <div className="space-y-2">
                      <div className="flex flex-wrap gap-1">
                        {student.interests.map((interest, idx) => (
                          <Badge key={idx} variant="outline" className="text-xs">
                            {interest}
                          </Badge>
                        ))}
                      </div>

                      <Button size="sm" variant="outline" asChild className="w-full">
                        <Link href={student.website} target="_blank" className="flex items-center gap-1">
                          <ExternalLink className="w-3 h-3" />
                          Website
                        </Link>
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Undergraduate Research */}
        <Card className="mb-12">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Users className="w-5 h-5" />
              Research for Undergraduate Students
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div>
                <h3 className="font-semibold text-slate-900 mb-2">Programs:</h3>
                <ul className="space-y-1">
                  {undergraduatePrograms.map((program, index) => (
                    <li key={index} className="flex items-center gap-2 text-slate-700">
                      <div className="w-2 h-2 bg-blue-500 rounded-full" />
                      {program === "CRCV REU Program" ? (
                        <Link href="https://www.crcv.ucf.edu/nsf-projects/reu/" className="hover:text-blue-600 underline">
                          {program}
                        </Link>
                      ) : (
                        program
                      )}
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <h3 className="font-semibold text-slate-900 mb-3">Publications by undergraduate students:</h3>
                <div className="space-y-4">
                  {undergraduatePublications.map((pub, index) => (
                    <div key={index} className="border-l-4 border-green-200 pl-4">
                      <p className="text-sm text-slate-700 mb-1">
                        <span className="font-medium">{pub.authors}</span>, "{pub.title}"
                      </p>
                      <p className="text-sm text-slate-600 mb-2">{pub.venue}</p>
                      <Button size="sm" variant="outline" asChild>
                        <Link href={pub.paper} target="_blank" className="flex items-center gap-1">
                          <ExternalLink className="w-3 h-3" />
                          Paper
                        </Link>
                      </Button>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Alumni */}
        <div className="grid lg:grid-cols-2 gap-8">
          {/* Ph.D. Alumni */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <GraduationCap className="w-5 h-5" />
                Ph.D. Alumni
              </CardTitle>
              <CardDescription>Former doctoral students</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-6">
                {phdAlumni.map((alum, index) => (
                  <div key={index} className="border-l-4 border-blue-200 pl-4 py-2">
                    <div className="flex flex-wrap items-center gap-2 mb-2">
                      <h3 className="font-semibold text-slate-900">
                        <Link href={alum.website} target="_blank" className="hover:text-blue-600">
                          {alum.name}
                        </Link>
                      </h3>
                      <Badge variant="outline" className="text-xs">{alum.graduation}</Badge>
                      {alum.award && (
                        <Badge className="bg-amber-100 text-amber-800 text-xs">
                          {alum.award}
                        </Badge>
                      )}
                    </div>
                    <p className="text-sm text-slate-700 mb-1">Dissertation: {alum.thesis}</p>
                    <p className="text-sm text-slate-600 mb-2">Current: {alum.currentPosition}</p>
                    {alum.defenseVideo && (
                      <Button size="sm" variant="outline" asChild>
                        <Link href={alum.defenseVideo} target="_blank" className="flex items-center gap-1">
                          <ExternalLink className="w-3 h-3" />
                          Defense Presentation
                        </Link>
                      </Button>
                    )}
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Master's Alumni */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <GraduationCap className="w-5 h-5" />
                Master's Alumni
              </CardTitle>
              <CardDescription>Former master's students</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-6">
                {masterAlumni.map((alum, index) => (
                  <div key={index} className="border-l-4 border-green-200 pl-4 py-2">
                    <div className="flex flex-wrap items-center gap-2 mb-2">
                      <h3 className="font-semibold text-slate-900">
                        {alum.website ? (
                          <Link href={alum.website} target="_blank" className="hover:text-blue-600">
                            {alum.name}
                          </Link>
                        ) : (
                          alum.name
                        )}
                      </h3>
                      <Badge variant="outline" className="text-xs">{alum.graduation}</Badge>
                    </div>
                    <p className="text-sm text-slate-700 mb-1">{alum.program}</p>
                    {alum.institution && (
                      <p className="text-sm text-slate-600 mb-1">{alum.institution}</p>
                    )}
                    {alum.thesis && (
                      <p className="text-sm text-slate-600">Thesis: {alum.thesis}</p>
                    )}
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
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
