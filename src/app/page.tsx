"use client"

import { useState } from "react"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Separator } from "@/components/ui/separator"
import { Navigation } from "@/components/navigation"
import { ExternalLink, Mail, MapPin, Phone, Award, BookOpen, Users, GraduationCap, ChevronDown, ChevronUp, Calendar } from "lucide-react"
import Link from "next/link"

export default function HomePage() {
  const [showAllNews, setShowAllNews] = useState(false)

  const researchInterests = [
    "Computer Vision",
    "Generative AI",
    "Image and Video Processing"
  ]

  const allNews = [
    {
      date: "07/2025",
      content: "1 paper accepted by ACM Multimedia 2025."
    },
    {
      date: "06/2025",
      content: "4 papers accepted by ICCV 2025."
    },
    {
      date: "05/2025",
      content: "2 papers accepted by ACL 2025 (Main Track)."
    },
    {
      date: "04/2025",
      content: "I'm honored to receive the Excellence in Faculty Academic Advising Award."
    },
    {
      date: "02/2025",
      content: "3 papers accepted by CVPR 2025."
    },
    {
      date: "01/2025",
      content: "2 papers accepted by ICLR 2025."
    },
    {
      date: "12/2024",
      content: "We will organize the 4th Workshop on Federated Learning for Computer Vision (FedVision-2025), in conjunction with CVPR 2025.",
      link: "https://fedvision.github.io/fedvision2025/"
    },
    {
      date: "12/2024",
      content: "We will organize a tutorial on \"Cross-View Geo-Localization: Current Challenges and Future Frontiers with GenAI\", in conjunction with WACV 2025.",
      link: "https://zxh009123.github.io/WACV25_CVGL_Tutorial/"
    },
    {
      date: "11/2024",
      content: "We will organize the 2nd CV4Smalls Workshop - Computer Vision with Small Data: A Focus on Infants, Toddlers, and the Elderly, in conjunction with WACV 2025.",
      link: "https://cv4smalls2025.sites.northeastern.edu/"
    },
    {
      date: "10/2024",
      content: "I received the 2024 Academy of Science, Engineering and Medicine of Florida (ASEMFL) Rising Star Award in Engineering.",
      link: "https://www.asemfl.org/presenter/chen-chen/"
    },
    {
      date: "10/2024",
      content: "3 papers accepted by WACV 2025."
    },
    {
      date: "09/2024",
      content: "3 papers accepted by NeurIPS 2024."
    },
    {
      date: "07/2024",
      content: "Our BiomedGPT paper has been accepted by Nature Medicine. Congratulations to all the authors!",
      link: "https://arxiv.org/pdf/2305.17100"
    },
    {
      date: "07/2024",
      content: "5 papers accepted by ACM Multimedia 2024."
    },
    {
      date: "06/2024",
      content: "7 papers accepted by ECCV 2024."
    },
    {
      date: "02/2024",
      content: "My Ph.D. student Ce Zheng received the 2023-2024 university award for the Outstanding Dissertation in the Engineering, Physical, Mathematical, and Life Sciences category at UCF. Congratulations to Ce! His dissertation title: \"Reconstructing 3D Humans from Visual Data\"."
    },
    {
      date: "01/2024",
      content: "Our project of AI Research for Novel Agricultural Engineering Applications (in partnership with the NSF AI Institute - AgAID) was funded by NIFA.",
      link: "https://www.ucf.edu/news/ucf-researchers-lead-project-to-develop-ai-driven-technologies-for-agriculture/"
    },
    {
      date: "01/2024",
      content: "I was honored to deliver a presentation titled \"AI in Healthcare: From Image Analysis to Generative Models in Biomedicine\" at the Mayo Clinic Florida, as part of the Cancer Biology Seminar Series."
    },
    {
      date: "01/2024",
      content: "1 paper accepted by ICLR 2024 (Parameter-Efficient Fine-Tuning in Deep Metric Learning)."
    },
    {
      date: "12/2023",
      content: "We were selected as a finalist for the MICCAI 2023 Young Scientist Publication Impact Award for our paper titled \"TransBTS: Multimodal Brain Tumor Segmentation Using Transformer\", originally presented at MICCAI 2021.",
      link: "https://arxiv.org/pdf/2103.04430.pdf"
    },
    {
      date: "12/2023",
      content: "3 papers accepted by AAAI 2024 (1 Few Shot Segmentation, 1 Deep Metric Learning, 1 Human Motion Prediction)."
    },
    {
      date: "11/2023",
      content: "Ce Zheng has successfully completed his PhD defense. Congratulations Dr. Zheng! He also won the Outstanding Dissertation Award of CECS. He will join Carnegie Mellon University (CMU) as a Postdoc Associate in Feb. 2024.",
      link: "https://www.youtube.com/watch?v=56DL2MniJI4"
    }
  ]

  const displayedNews = showAllNews ? allNews : allNews.slice(0, 8)

  const awards = [
    {
      year: "2025",
      title: "Excellence in Faculty Academic Advising Award",
      institution: "University of Central Florida",
      link: "award.jpeg"
    },
    {
      year: "2024",
      title: "Rising Stars Award",
      institution: "Academy of Science, Engineering and Medicine of Florida (ASEMFL)",
      link: "https://www.asemfl.org/presenter/chen-chen/"
    },
    {
      year: "2022-2024",
      title: "World's top 2% scientists",
      institution: "Stanford University/Elsevier"
    },
    {
      year: "2023",
      title: "Winner of the Affordance-Centric Question-driven Task Completion Challenge",
      institution: "CVPR 2023 Long-form Video Understanding and Generation Workshop",
      highlight: "🏆 Winner",
      link: "certificate_loveu23.pdf"
    },
    {
      year: "2023",
      title: "Finalist for the MICCAI Young Scientist Publication Impact Award",
      institution: "MICCAI Conference",
      link: "MICCAI-letter.pdf"
    },
    {
      year: "2022",
      title: "CVPR Best Paper Finalists",
      institution: "IEEE/CVF Conference",
      highlight: "🏆 Best Paper Nominee",
      link: "https://arxiv.org/pdf/2111.14213"
    },
    {
      year: "2019",
      title: "UNC-Charlotte Faculty Research Award",
      institution: "University of North Carolina at Charlotte"
    },
    {
      year: "2019",
      title: "ACM Multimedia Travel Grant",
      institution: "ACM Multimedia Conference"
    },
    {
      year: "2016",
      title: "David Daniel Fellowship Award (Best Doctoral Dissertation Award)",
      institution: "University of Texas at Dallas"
    },
    {
      year: "2015",
      title: "Graduate Research Travel Award",
      institution: "University of Texas at Dallas"
    }
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-white">
      <Navigation />

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Hero Section */}
        <div className="grid lg:grid-cols-5 gap-12 mb-16">
          <div className="lg:col-span-3">
            <div className="flex flex-col md:flex-row gap-8 items-center md:items-center">
              <div className="flex-shrink-0 mx-auto md:mx-0">
                <div className="relative">
                  <div className="w-56 h-56 md:w-64 md:h-64 ring-4 ring-blue-100 shadow-xl rounded-full overflow-hidden">
                    <img
                      src="chen-photo.jpg"
                      alt="Dr. Chen Chen"
                      className="w-full h-full object-cover object-center"
                    />
                  </div>
                </div>
              </div>

              <div className="flex-1 space-y-6">
                <div>
                  <h1 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4">Chen Chen</h1>
                  <div className="mb-4">
                    <span className="text-xl text-slate-700 block mb-3">Ph.D., Associate Professor</span>
                    <div className="flex flex-wrap items-center gap-2">
                      <Badge variant="secondary" className="bg-blue-100 text-blue-800 text-sm">IEEE Senior Member</Badge>
                      <Badge variant="secondary" className="bg-purple-100 text-purple-800 text-sm">ACM Member</Badge>
                    </div>
                  </div>
                </div>

                <div className="space-y-3 text-slate-600">
                  <div className="flex items-center gap-2">
                    <BookOpen className="w-4 h-4 text-blue-600" />
                    <a
                      href="https://www.crcv.ucf.edu"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-blue-600 hover:underline"
                    >
                      Center for Research in Computer Vision (CRCV)
                    </a>
                  </div>

                  <div className="flex items-center gap-2">
                    <GraduationCap className="w-4 h-4 text-purple-600" />
                    <a
                      href="https://www.cs.ucf.edu"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-purple-600 hover:underline"
                    >
                      Department of Computer Science
                    </a>
                  </div>

                  <div className="flex items-center gap-2">
                    <MapPin className="w-4 h-4 text-green-600" />
                    <a
                      href="https://www.ucf.edu"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-green-600 hover:underline"
                    >
                      University of Central Florida
                    </a>
                  </div>

                  <div className="flex items-center gap-2">
                    <MapPin className="w-4 h-4 text-orange-600" />
                    <a
                      href="https://www.ucf.edu/location/l3harris-engineering-center/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-orange-600 hover:underline"
                    >
                      Office: HEC 221
                    </a>
                  </div>

                  <div className="flex items-center gap-2">
                    <MapPin className="w-4 h-4 text-red-600" />
                    <a
                      href="https://maps.google.com/?q=4328+Scorpius+St,+Orlando,+FL+32816"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-red-600 hover:underline"
                    >
                      Address: 4328 Scorpius St., Orlando, FL 32816-2365
                    </a>
                  </div>

                  <div className="flex items-center gap-2">
                    <Phone className="w-4 h-4 text-slate-600" />
                    <a
                      href="tel:4078231047"
                      className="hover:underline"
                    >
                      407-823-1047
                    </a>
                  </div>

                  <div className="flex items-center gap-2">
                    <Mail className="w-4 h-4 text-slate-600" />
                    <a
                      href="mailto:chen.chen@crcv.ucf.edu"
                      className="hover:underline"
                    >
                      chen.chen@crcv.ucf.edu
                    </a>
                  </div>
                </div>

                <div className="flex flex-wrap gap-3">
                  <Button variant="outline" size="sm" asChild className="hover:bg-blue-50">
                    <Link href="CV-Chen-11-24.pdf" className="flex items-center gap-2">
                      <ExternalLink className="w-4 h-4" />
                      Curriculum Vitae
                    </Link>
                  </Button>
                  <Button variant="outline" size="sm" asChild className="hover:bg-blue-50">
                    <Link href="https://scholar.google.com/citations?hl=en&user=TuEwcZ0AAAAJ" className="flex items-center gap-2">
                      <ExternalLink className="w-4 h-4" />
                      Google Scholar
                    </Link>
                  </Button>
                  <Button variant="outline" size="sm" asChild className="hover:bg-blue-50">
                    <Link href="https://www.linkedin.com/in/dennychen/" className="flex items-center gap-2">
                      <ExternalLink className="w-4 h-4" />
                      LinkedIn
                    </Link>
                  </Button>
                </div>
              </div>
            </div>
          </div>

          {/* Research Visualization */}
          <div className="lg:col-span-2">
            <Card className="h-full border-2 border-blue-100 bg-gradient-to-br from-blue-50 via-purple-50 to-white shadow-lg">
              <CardContent className="flex items-center justify-center p-8">
                <div className="relative w-full h-64 md:h-80">
                  <img
                    src="wordcloud.png"
                    alt="Research areas visualization"
                    className="w-full h-full object-contain"
                  />
                </div>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Prospective Students Alert */}
        <Card className="mb-12 border-red-200 bg-red-50 shadow-md">
          <CardHeader>
            <CardTitle className="text-red-800 flex items-center gap-2">
              <Users className="w-5 h-5" />
              Prospective Students
            </CardTitle>
          </CardHeader>
          <CardContent className="text-red-700">
            <p>
              I am always looking for highly motivated students for research. Please read this{" "}
              <Link href="#" className="font-medium underline hover:no-underline">
                Ph.D. opening document
              </Link>{"PHD-application.pdf"}
              for detailed research topics and requirements. How to apply: please visit the{" "}
              <Link href="/join" className="font-medium underline hover:no-underline">
                "Join Us"
              </Link>{" "}
              page for more information.
            </p>
          </CardContent>
        </Card>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Research Interests */}
          <Card className="shadow-md">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <BookOpen className="w-5 h-5 text-blue-600" />
                Research Interests
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                {researchInterests.map((interest, index) => (
                  <div key={index} className="flex items-center gap-3 group">
                    <div className="w-2 h-2 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full group-hover:scale-125 transition-transform" />
                    <span className="text-slate-700 group-hover:text-slate-900 transition-colors">{interest}</span>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Recent News */}
          <Card className="lg:col-span-2 shadow-md">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Calendar className="w-5 h-5 text-green-600" />
                News
              </CardTitle>
              <CardDescription>Latest updates and achievements</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4 max-h-96 overflow-y-auto pr-2">
                {displayedNews.map((news, index) => (
                  <div key={index} className="flex gap-4 pb-4 border-b border-slate-100 last:border-0 hover:bg-slate-50 -mx-2 px-2 py-2 rounded transition-colors">
                    <Badge variant="outline" className="flex-shrink-0 border-blue-200 text-blue-700">
                      {news.date}
                    </Badge>
                    <div className="text-slate-700 text-sm leading-relaxed">
                      {news.content}
                      {news.link && (
                        <Link href={news.link} target="_blank" className="ml-2 text-blue-600 hover:underline">
                          [Link]
                        </Link>
                      )}
                    </div>
                  </div>
                ))}
              </div>

              {allNews.length > 8 && (
                <div className="mt-4 pt-4 border-t border-slate-200">
                  <Button
                    variant="ghost"
                    onClick={() => setShowAllNews(!showAllNews)}
                    className="w-full flex items-center gap-2 hover:bg-blue-50"
                  >
                    {showAllNews ? (
                      <>
                        <ChevronUp className="w-4 h-4" />
                        Show Less
                      </>
                    ) : (
                      <>
                        <ChevronDown className="w-4 h-4" />
                        Read More ({allNews.length - 8} more items)
                      </>
                    )}
                  </Button>
                </div>
              )}
            </CardContent>
          </Card>
        </div>

        <Separator className="my-12" />

        {/* Awards and Honors */}
        <Card className="shadow-md">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Award className="w-5 h-5 text-yellow-600" />
              Awards and Honors
            </CardTitle>
            <CardDescription>Recognition and achievements in academic career</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid md:grid-cols-2 gap-6">
              {awards.map((award, index) => (
                <div key={index} className="flex gap-4 p-4 rounded-lg bg-gradient-to-br from-slate-50 to-white border border-slate-200 hover:shadow-md transition-all">
                  <Badge className="flex-shrink-0 bg-gradient-to-r from-blue-600 to-purple-600">{award.year}</Badge>
                  <div className="flex-1">
                    <div className="flex items-start gap-2 mb-1">
                      <h3 className="font-semibold text-slate-900 text-sm leading-tight">
                        {award.link ? (
                          <Link href={award.link} target="_blank" className="text-blue-600 hover:underline">
                            {award.title}
                          </Link>
                        ) : (
                          award.title
                        )}
                      </h3>
                      {award.highlight && (
                        <Badge variant="secondary" className="text-xs bg-amber-100 text-amber-800">
                          {award.highlight}
                        </Badge>
                      )}
                    </div>
                    <p className="text-sm text-slate-600">{award.institution}</p>
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
