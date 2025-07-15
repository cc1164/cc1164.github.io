'use client'

import { Card, CardContent } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { Navigation } from '@/components/navigation'
import { ExternalLink, FileText, Calendar, Users } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'

interface Patent {
  title: string
  inventors: string
  patentNumber: string
  issueDate?: string
  publicationDate?: string
  link: string
  thumbnail: string
  status: 'issued' | 'published'
}

export default function PatentsPage() {
  const patents: Patent[] = [
    {
      title: "Image Diffusion Framework for Text- Guided Video Editing",
      inventors: "Nazmul Karim, Nazanin Rahnavard, Umar Khalid, Chen Chen",
      patentNumber: "U.S. Patent No. 12,334,116",
      issueDate: "Jun. 17, 2025",
      link: "#",
      thumbnail: "/img/thumbnail/text-to-video.png",
      status: "issued"
    },
    {
      title: "Self-Supervised Privacy Preservation Action Recognition System",
      inventors: "Ishan Rajendrakumar Dave, Chen Chen, Mubarak Shah",
      patentNumber: "US20240331389A1",
      publicationDate: "Oct. 3, 2024",
      link: "https://patentimages.storage.googleapis.com/2e/e6/61/6b24a8149de609/US20240331389A1.pdf",
      thumbnail: "/img/thumbnail/privacy-act.png",
      status: "published"
    },
    {
      title: "Fusion of inertial and depth sensors for movement measurements and recognition",
      inventors: "Nasser Kehtarnavaz, Roozbeh Jafari, Kui Liu, Chen Chen, Jian Wu",
      patentNumber: "US Patent #10432842",
      issueDate: "October 2019",
      link: "https://patents.google.com/patent/US20160292497",
      thumbnail: "/img/thumbnail/patent2.jpg",
      status: "issued"
    },
    {
      title: "Wearable medication adherence monitoring",
      inventors: "Roozbeh Jafari, Nasser Kehtarnavaz, Chen Chen",
      patentNumber: "US Patent # 9971874",
      issueDate: "May 2018",
      link: "https://patents.google.com/patent/US9971874B2/en?oq=9971874",
      thumbnail: "/img/thumbnail/patent1.jpg",
      status: "issued"
    }
  ]

  const PatentCard = ({ patent }: { patent: Patent }) => (
    <Card className="mb-6 hover:shadow-lg transition-shadow duration-200">
      <CardContent className="p-6">
        <div className="flex flex-col md:flex-row gap-6">
          {/* Thumbnail */}
          <div className="flex-shrink-0">
            <div className="w-48 h-28 bg-gray-100 rounded-lg overflow-hidden">
              <Image
                src={patent.thumbnail}
                alt={patent.title}
                width={192}
                height={112}
                className="w-full h-full object-cover"
                onError={(e) => {
                  const target = e.target as HTMLImageElement;
                  target.src = '/api/placeholder/192/112';
                }}
              />
            </div>
          </div>

          {/* Content */}
          <div className="flex-1 space-y-3">
            <div className="flex items-start justify-between gap-4">
              <h3 className="text-lg font-semibold text-gray-900 leading-snug">
                {patent.title}
              </h3>
              <Badge
                variant={patent.status === 'issued' ? 'default' : 'secondary'}
                className={patent.status === 'issued' ? 'bg-green-100 text-green-800' : 'bg-blue-100 text-blue-800'}
              >
                {patent.status === 'issued' ? 'Issued' : 'Published'}
              </Badge>
            </div>

            <div className="flex items-center gap-2 text-sm text-gray-600">
              <Users className="h-4 w-4" />
              <span>{patent.inventors}</span>
            </div>

            <div className="flex items-center gap-2 text-sm font-medium text-blue-700">
              <FileText className="h-4 w-4" />
              <span>{patent.patentNumber}</span>
            </div>

            <div className="flex items-center gap-2 text-sm text-gray-600">
              <Calendar className="h-4 w-4" />
              <span>
                {patent.status === 'issued' && patent.issueDate
                  ? `Date of Patent: ${patent.issueDate}`
                  : patent.status === 'published' && patent.publicationDate
                  ? `Publication Date: ${patent.publicationDate}`
                  : 'Date not available'
                }
              </span>
            </div>

            <div className="pt-2">
              {patent.link && patent.link !== "#" && (
                <Button
                  variant="outline"
                  size="sm"
                  className="h-8 px-3"
                  onClick={() => window.open(patent.link, '_blank')}
                >
                  <ExternalLink className="h-3 w-3 mr-1" />
                  View Patent
                </Button>
              )}
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  )

  const issuedPatents = patents.filter(p => p.status === 'issued')
  const publishedPatents = patents.filter(p => p.status === 'published')

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
      <Navigation />

      <main className="container mx-auto px-4 py-12">
        <div className="max-w-5xl mx-auto">
          {/* Header */}
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold text-gray-900 mb-4">Patents</h1>
            <p className="text-lg text-gray-600">
              Intellectual property and innovations in computer vision, machine learning, and sensor technologies
            </p>
          </div>

          {/* Statistics */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            <Card>
              <CardContent className="p-6 text-center">
                <div className="text-3xl font-bold text-blue-600 mb-2">{patents.length}</div>
                <div className="text-sm text-gray-600">Total Patents</div>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-6 text-center">
                <div className="text-3xl font-bold text-green-600 mb-2">{issuedPatents.length}</div>
                <div className="text-sm text-gray-600">Issued Patents</div>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-6 text-center">
                <div className="text-3xl font-bold text-orange-600 mb-2">{publishedPatents.length}</div>
                <div className="text-sm text-gray-600">Published Applications</div>
              </CardContent>
            </Card>
          </div>

          {/* Patents List */}
          <div className="space-y-8">
            {/* Recent Patents */}
            <div>
              <h2 className="text-2xl font-semibold text-gray-900 mb-6">All Patents & Applications</h2>
              <div className="space-y-6">
                {patents.map((patent, index) => (
                  <PatentCard key={index} patent={patent} />
                ))}
              </div>
            </div>
          </div>

          {/* Research Areas */}
          <div className="mt-12 pt-8 border-t border-gray-200">
            <h3 className="text-xl font-semibold text-gray-900 mb-4">Patent Research Areas</h3>
            <div className="flex flex-wrap gap-2">
              <Badge variant="outline" className="px-3 py-1">Computer Vision</Badge>
              <Badge variant="outline" className="px-3 py-1">Machine Learning</Badge>
              <Badge variant="outline" className="px-3 py-1">Sensor Fusion</Badge>
              <Badge variant="outline" className="px-3 py-1">Healthcare Technology</Badge>
              <Badge variant="outline" className="px-3 py-1">Video Processing</Badge>
              <Badge variant="outline" className="px-3 py-1">Privacy Preservation</Badge>
              <Badge variant="outline" className="px-3 py-1">Wearable Devices</Badge>
              <Badge variant="outline" className="px-3 py-1">Human Activity Recognition</Badge>
            </div>
          </div>
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
