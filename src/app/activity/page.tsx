import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Separator } from "@/components/ui/separator"
import { Navigation } from "@/components/navigation"
import { BookOpen, Users, Calendar, Award, ExternalLink, Edit } from "lucide-react"
import Link from "next/link"

export default function ActivityPage() {
  const editorialBoards = [
    {
      journal: "IEEE Transactions on Circuits and Systems for Video Technology (T-CSVT)",
      role: "Associate Editor",
      term: "1/1/2022 - 12/31/2025",
      url: "https://ieeexplore.ieee.org/xpl/RecentIssue.jsp?punumber=76"
    },
    {
      journal: "Journal of Real-Time Image Processing",
      role: "Associate Editor",
      term: "2019 - ",
      url: "https://www.springer.com/computer/image+processing/journal/11554"
    }
  ]

  const workshopOrganizer = [
    {
      title: "4th Workshop on Federated Learning for Computer Vision (FedVision-2025)",
      venue: "CVPR 2025",
      url: "https://fedvision.github.io/fedvision2025/"
    },
    {
      title: "2nd CV4Smalls Workshop - Computer Vision with Small Data: A Focus on Infants, Toddlers, and the Elderly",
      venue: "WACV 2025",
      url: "https://cv4smalls2025.sites.northeastern.edu/"
    },
    {
      title: "The 2nd Workshop on UAVs in Multimedia: Capturing the World from a New Perspective",
      venue: "ACM Multimedia (MM) 2024",
      url: "https://www.zdzheng.xyz/ACMMM2024Workshop-UAV/"
    },
    {
      title: "3rd Workshop on Federated Learning for Computer Vision (FedVision-2024)",
      venue: "CVPR 2024",
      url: "https://fedvision.github.io/fedvision2024/"
    },
    {
      title: "The Workshop on Computer Vision with Small Data: A Focus on Infants and Endangered Animals (CV4Smalls)",
      venue: "WACV 2024",
      url: "https://cv4smalls.sites.northeastern.edu/"
    },
    {
      title: "Workshop on Federated Learning in Medical Imaging and Vision",
      venue: "ICIAP 2023 Udine, Italy, September 11-15, 2023",
      url: "https://fedmedw.github.io/"
    },
    {
      title: "2nd International Workshop on Federated Learning for Computer Vision (FedVision-2023)",
      venue: "CVPR 2023",
      url: "https://fedvision.github.io/fedvision-workshop/"
    },
    {
      title: "The 1st Workshop on Capturing, Interpreting & Visualizing Indoor Living Spaces (CIVILS)",
      venue: "CVPR 2023",
      url: "https://sites.google.com/view/cvprcivils2023"
    },
    {
      title: "The 2nd Workshop on Dynamic Neural Networks Meet Computer Vision (DNetCV)",
      venue: "CVPR 2022",
      url: "https://sites.google.com/view/cvpr2022-dnetcv/"
    },
    {
      title: "International Workshop on Federated Learning for Computer Vision (FedVision)",
      venue: "CVPR 2022",
      url: "https://sites.google.com/view/fedvision"
    }
  ]

  const tutorialOrganizer = [
    {
      title: "Cross-View Geo-Localization: Current Challenges and Future Frontiers with GenAI",
      venue: "WACV 2025",
      url: "https://zxh009123.github.io/WACV25_CVGL_Tutorial/"
    },
    {
      title: "A Comprehensive Tour and Recent Advancements toward Real-world Visual Geo-Localization",
      venue: "CVPR 2023",
      url: "https://www.sri.com/computer-vision/cvpr-2023-a-comprehensive-tour-and-recent-advancements-toward-real-world-visual-geo-localization/"
    },
    {
      title: "Holographic Networking: A New Frontier in Communication",
      venue: "IEEE International Conference on Communications (ICC) 2022",
      url: "https://icc2022.ieee-icc.org/program/tutorials.html#tut-18"
    },
    {
      title: "Cross-view and Cross-modal Visual Geo-Localization",
      venue: "CVPR 2021",
      url: "https://www.sri.com/computer-vision/cvpr-2021-tutorial-on-cross-view-and-cross-modal-visual-geo-localization/"
    }
  ]

  const conferenceRoles = [
    { role: "Area Chair", venue: "ICCV 2025" },
    { role: "Area Chair", venue: "NeurIPS 2024 (Dataset and Benchmark Track)" },
    { role: "Area Chair", venue: "ACCV 2024" },
    { role: "Area Chair", venue: "ECCV 2022" },
    { role: "Area Chair", venue: "CVPR 2022" },
    { role: "Area Chair", venue: "ACM Multimedia 2019, 2020, 2021, 2022, 2023" },
    { role: "Area Chair", venue: "WACV 2019, 2024, 2025" },
    { role: "Area Chair", venue: "ICME 2021, 2022, 2023" },
    { role: "PC Member", venue: "CVPR, ICCV, ECCV, NeurIPS, ICLR, IJCAI, AAAI, MICCAI, BMVC, ACM Multimedia" }
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-white">
      <Navigation />

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Page Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-slate-900 mb-4">Activities</h1>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            Professional service activities including editorial boards, conference organization, and academic leadership
          </p>
        </div>

        {/* Editorial Board */}
        <Card className="mb-12">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Edit className="w-5 h-5" />
              Editorial Board
            </CardTitle>
            <CardDescription>Dr. Chen serves as an Associate Editor for the following journals:</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-6">
              {editorialBoards.map((board, index) => (
                <div key={index} className="border-l-4 border-blue-200 pl-6 py-2">
                  <div className="flex flex-wrap items-center gap-2 mb-2">
                    <Badge className="bg-blue-600">{board.role}</Badge>
                    <Badge variant="outline">{board.term}</Badge>
                  </div>
                  <h3 className="font-semibold text-slate-900 mb-2">
                    <Link href={board.url} target="_blank" className="hover:text-blue-600">
                      {board.journal}
                    </Link>
                  </h3>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Conference Workshop Organizer */}
        <Card className="mb-12">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Users className="w-5 h-5" />
              Conference Workshop Organizer/Co-organizer
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {workshopOrganizer.map((workshop, index) => (
                <div key={index} className="border-l-4 border-green-200 pl-4">
                  <h3 className="font-semibold text-slate-900 mb-1">
                    <Link href={workshop.url} target="_blank" className="hover:text-blue-600">
                      {workshop.title}
                    </Link>
                  </h3>
                  <p className="text-sm text-slate-600">in conjunction with {workshop.venue}</p>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Conference Tutorial Organizer */}
        <Card className="mb-12">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <BookOpen className="w-5 h-5" />
              Conference Tutorial Organizer
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {tutorialOrganizer.map((tutorial, index) => (
                <div key={index} className="border-l-4 border-purple-200 pl-4">
                  <h3 className="font-semibold text-slate-900 mb-1">
                    <Link href={tutorial.url} target="_blank" className="hover:text-blue-600">
                      Tutorial on "{tutorial.title}"
                    </Link>
                  </h3>
                  <p className="text-sm text-slate-600">in conjunction with {tutorial.venue}</p>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Conference Program Committee Member / Area Chair */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Award className="w-5 h-5" />
              Conference Program Committee Member / Area Chair
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h3 className="font-semibold text-slate-900 mb-4">Area Chair Roles:</h3>
                <div className="space-y-3">
                  {conferenceRoles.filter(role => role.role === "Area Chair").map((role, index) => (
                    <div key={index} className="flex items-center gap-3">
                      <Badge variant="secondary" className="flex-shrink-0">{role.role}</Badge>
                      <span className="text-slate-700 text-sm">{role.venue}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div>
                <h3 className="font-semibold text-slate-900 mb-4">Program Committee Member:</h3>
                <div className="space-y-3">
                  {conferenceRoles.filter(role => role.role === "PC Member").map((role, index) => (
                    <div key={index} className="flex items-center gap-3">
                      <Badge variant="outline" className="flex-shrink-0">{role.role}</Badge>
                      <span className="text-slate-700 text-sm">{role.venue}</span>
                    </div>
                  ))}
                </div>
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
          </div>
        </div>
      </footer>
    </div>
  )
}
