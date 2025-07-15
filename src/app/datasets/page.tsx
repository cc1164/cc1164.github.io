'use client'

import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { Navigation } from '@/components/navigation'
import { ExternalLink, Github, Play, Download, FileText, Database, Video, MapPin, Activity } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'

interface Dataset {
  title: string
  description: string
  details: string
  authors: string
  venue: string
  year: string
  paper?: string
  code?: string
  project?: string
  video?: string
  dataset?: string
  website?: string
  note?: string
  thumbnail: string
  type: 'video' | 'image' | 'multimodal' | 'geolocalization'
  downloadOptions?: {
    primary?: string
    secondary?: string
    note?: string
  }
}

export default function DatasetsPage() {
  const datasets: Dataset[] = [
    {
      title: "Video Anomaly Detection Dataset",
      description: "UCF-Crime dataset is a new large-scale first of its kind dataset of 128 hours of videos. It consists of 1900 long and untrimmed real-world surveillance videos, with 13 realistic anomalies including Abuse, Arrest, Arson, Assault, Road Accident, Burglary, Explosion, Fighting, Robbery, Shooting, Stealing, Shoplifting, and Vandalism.",
      details: "These anomalies are selected because they have a significant impact on public safety. This dataset can be used for two tasks. First, general anomaly detection considering all anomalies in one group and all normal activities in another group. Second, for recognizing each of 13 anomalous activities.",
      authors: "Waqas Sultani, Chen Chen, Mubarak Shah",
      venue: "IEEE Conference on Computer Vision and Pattern Recognition (CVPR)",
      year: "2018",
      paper: "https://arxiv.org/pdf/1801.04264.pdf",
      video: "https://www.youtube.com/watch?v=qS1iPiSW3RE",
      project: "https://www.crcv.ucf.edu/research/real-world-anomaly-detection-in-surveillance-videos/",
      code: "https://github.com/WaqasSultani/AnomalyDetectionCVPR2018",
      thumbnail: "/api/placeholder/400/300",
      type: "video",
      downloadOptions: {
        primary: "www.crcv.ucf.edu/data1/chenchen/UCF_Crimes.zip",
        secondary: "https://www.dropbox.com/sh/75v5ehq4cdg5g5g/AABvnJSwZI7zXb8_myBA0CLHa?dl=0",
        note: 'The "Anomaly_Train.txt" file in the zip file is corrupted, please download it here: Anomaly_Train.txt'
      }
    },
    {
      title: "VIGOR: Cross-View Image Geo-localization beyond One-to-one Retrieval",
      description: "Cross-view image geo-localization aims to determine the locations of street-view query images by matching with GPS-tagged reference images from aerial view. Recent works have achieved surprisingly high retrieval accuracy on city-scale datasets.",
      details: "However, these results rely on the assumption that there exists a reference image exactly centered at the location of any query image, which is not applicable for practical scenarios. In this paper, we redefine this problem with a more realistic assumption that the query image can be arbitrary in the area of interest and the reference images are captured before the queries emerge. This assumption breaks the one-to-one retrieval setting of existing datasets as the queries and reference images are not perfectly aligned pairs, and there may be multiple reference images covering one query location. To bridge the gap between this realistic setting and existing datasets, we propose a new large-scale benchmark –VIGOR– for crossView Image Geo-localization beyond One-to-one Retrieval.",
      authors: "Sijie Zhu, Taojiannan Yang, Chen Chen",
      venue: "IEEE Conference on Computer Vision and Pattern Recognition (CVPR)",
      year: "2021",
      paper: "https://arxiv.org/pdf/2011.12172.pdf",
      code: "https://github.com/Jeff-Zilence/VIGOR",
      thumbnail: "/api/placeholder/400/300",
      type: "geolocalization"
    },
    {
      title: "Cross-View Geolocalization Dataset",
      description: "UCF cross-view geolocalization dataset is created for the geo-localization task using cross-view image matching. The dataset has street view and bird's eye view image pairs around downtown Pittsburgh, Orlando and part of Manhattan.",
      details: "There are 1,586, 1,324 and 5,941 GPS locations in Pittsburgh, Orlando and Manhattan, respectively. We utilize DualMaps to generate side-by-side street view and bird's eye view images at each GPS location with the same heading direction. The street view images are from Google and the overhead 45 degree bird's eye view images are from Bing. For each GPS location, four image pairs are generated with camera heading directions of 0 degree, 90 degree, 180 degree and 270 degree. In order to learn the deep network for building matching, we annotate corresponding buildings in every street view and bird's eye view image pair.",
      authors: "Yicong Tian, Chen Chen, Mubarak Shah",
      venue: "IEEE Conference on Computer Vision and Pattern Recognition (CVPR)",
      year: "2017",
      paper: "https://arxiv.org/pdf/1703.07815.pdf",
      project: "https://www.crcv.ucf.edu/research/cross-view-image-matching-for-geo-localization-in-urban-environments/",
      thumbnail: "/api/placeholder/400/300",
      type: "geolocalization"
    },
    {
      title: "UTD-MHAD Dataset",
      description: "UTD-MHAD dataset was collected as part of our research on human action recognition using fusion of depth and inertial sensor data. The objective of this research has been to develop algorithms for more robust human action recognition using fusion of data from differing modality sensors.",
      details: "The UTD-MHAD dataset consists of 27 different actions: (1) right arm swipe to the left, (2) right arm swipe to the right, (3) right hand wave, (4) two hand front clap, (5) right arm throw, (6) cross arms in the chest, (7) basketball shoot, (8) right hand draw x, (9) right hand draw circle (clockwise), (10) right hand draw circle (counter clockwise), (11) draw triangle, (12) bowling (right hand), (13) front boxing, (14) baseball swing from right, (15) tennis right hand forehand swing, (16) arm curl (two arms), (17) tennis serve, (18) two hand push, (19) right hand knock on door, (20) right hand catch an object, (21) right hand pick up and throw, (22) jogging in place, (23) walking in place, (24) sit to stand, (25) stand to sit, (26) forward lunge (left foot forward), (27) squat (two arms stretch out).",
      authors: "Chen Chen, Roozbeh Jafari, Nasser Kehtarnavaz",
      venue: "IEEE International Conference on Image Processing (ICIP)",
      year: "2015",
      paper: "ICIP2015-Chen-Final.pdf",
      website: "http://www.utdallas.edu/~kehtar/UTD-MHAD.html",
      thumbnail: "/api/placeholder/400/300",
      type: "multimodal"
    }
  ]

  const getTypeIcon = (type: string) => {
    switch (type) {
      case 'video': return <Video className="h-4 w-4" />
      case 'geolocalization': return <MapPin className="h-4 w-4" />
      case 'multimodal': return <Activity className="h-4 w-4" />
      default: return <Database className="h-4 w-4" />
    }
  }

  const getTypeColor = (type: string) => {
    switch (type) {
      case 'video': return 'bg-purple-100 text-purple-800'
      case 'geolocalization': return 'bg-green-100 text-green-800'
      case 'multimodal': return 'bg-orange-100 text-orange-800'
      default: return 'bg-blue-100 text-blue-800'
    }
  }

  const DatasetCard = ({ dataset }: { dataset: Dataset }) => (
    <Card className="mb-8 hover:shadow-lg transition-shadow duration-200">
      <CardHeader>
        <div className="flex items-start justify-between gap-4">
          <div className="flex-1">
            <CardTitle className="text-xl font-bold text-gray-900 mb-2">
              {dataset.title}
            </CardTitle>
            <div className="flex items-center gap-2 mb-3">
              <Badge variant="secondary" className={getTypeColor(dataset.type)}>
                {getTypeIcon(dataset.type)}
                <span className="ml-1 capitalize">{dataset.type}</span>
              </Badge>
            </div>
          </div>
        </div>
      </CardHeader>

      <CardContent className="space-y-4">
        {/* Thumbnail */}
        <div className="w-full h-48 bg-gray-100 rounded-lg overflow-hidden">
          <Image
            src={dataset.thumbnail}
            alt={dataset.title}
            width={400}
            height={300}
            className="w-full h-full object-cover"
            onError={(e) => {
              const target = e.target as HTMLImageElement;
              target.src = '/api/placeholder/400/300';
            }}
          />
        </div>

        {/* Description */}
        <div className="space-y-3">
          <p className="text-gray-700 leading-relaxed">
            {dataset.description}
          </p>
          <p className="text-gray-600 text-sm leading-relaxed">
            {dataset.details}
          </p>
        </div>

        {/* Paper Info */}
        <div className="bg-gray-50 p-4 rounded-lg space-y-2">
          <h4 className="font-semibold text-gray-900">{dataset.title}</h4>
          <p className="text-sm text-gray-600">{dataset.authors}</p>
          <p className="text-sm font-medium text-blue-700">
            {dataset.venue}, {dataset.year}
          </p>
        </div>

        {/* Links */}
        <div className="flex flex-wrap gap-2">
          {dataset.paper && (
            <Button
              variant="outline"
              size="sm"
              className="h-8 px-3"
              onClick={() => window.open(dataset.paper, '_blank')}
            >
              <FileText className="h-3 w-3 mr-1" />
              Paper
            </Button>
          )}

          {dataset.code && (
            <Button
              variant="outline"
              size="sm"
              className="h-8 px-3"
              onClick={() => window.open(dataset.code, '_blank')}
            >
              <Github className="h-3 w-3 mr-1" />
              {dataset.code.includes('VIGOR') ? 'Dataset & Code' : 'Code'}
            </Button>
          )}

          {dataset.project && (
            <Button
              variant="outline"
              size="sm"
              className="h-8 px-3"
              onClick={() => window.open(dataset.project, '_blank')}
            >
              <ExternalLink className="h-3 w-3 mr-1" />
              Project
            </Button>
          )}

          {dataset.video && (
            <Button
              variant="outline"
              size="sm"
              className="h-8 px-3"
              onClick={() => window.open(dataset.video, '_blank')}
            >
              <Play className="h-3 w-3 mr-1" />
              Video
            </Button>
          )}

          {dataset.website && (
            <Button
              variant="outline"
              size="sm"
              className="h-8 px-3"
              onClick={() => window.open(dataset.website, '_blank')}
            >
              <ExternalLink className="h-3 w-3 mr-1" />
              Dataset Website
            </Button>
          )}
        </div>

        {/* Download Options */}
        {dataset.downloadOptions && (
          <div className="bg-blue-50 p-4 rounded-lg space-y-2">
            <h5 className="font-medium text-blue-900 flex items-center gap-2">
              <Download className="h-4 w-4" />
              Download Options
            </h5>

            {dataset.downloadOptions.primary && (
              <div className="space-y-1">
                <p className="text-sm font-medium text-blue-800">Primary Download:</p>
                <p className="text-sm text-blue-700 font-mono bg-white px-2 py-1 rounded">
                  {dataset.downloadOptions.primary}
                </p>
              </div>
            )}

            {dataset.downloadOptions.secondary && (
              <div className="space-y-1">
                <p className="text-sm font-medium text-blue-800">Alternative Download (Dropbox):</p>
                <Button
                  variant="outline"
                  size="sm"
                  className="h-8 px-3 text-blue-700"
                  onClick={() => window.open(dataset.downloadOptions!.secondary, '_blank')}
                >
                  <Download className="h-3 w-3 mr-1" />
                  Multiple Files
                </Button>
              </div>
            )}

            {dataset.downloadOptions.note && (
              <div className="bg-amber-50 border border-amber-200 p-2 rounded text-sm text-amber-800">
                <strong>Note:</strong> {dataset.downloadOptions.note}
              </div>
            )}
          </div>
        )}
      </CardContent>
    </Card>
  )

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
      <Navigation />

      <main className="container mx-auto px-4 py-12">
        <div className="max-w-5xl mx-auto">
          {/* Header */}
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold text-gray-900 mb-4">Datasets</h1>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Research datasets for computer vision, human action recognition, and geo-localization.
              All data is only for research purposes, unless stated differently. Please make sure to reference the authors properly when using the data.
            </p>
          </div>

          {/* Statistics */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-12">
            <Card>
              <CardContent className="p-6 text-center">
                <div className="text-3xl font-bold text-blue-600 mb-2">{datasets.length}</div>
                <div className="text-sm text-gray-600">Total Datasets</div>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-6 text-center">
                <div className="text-3xl font-bold text-purple-600 mb-2">
                  {datasets.filter(d => d.type === 'video').length}
                </div>
                <div className="text-sm text-gray-600">Video Datasets</div>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-6 text-center">
                <div className="text-3xl font-bold text-green-600 mb-2">
                  {datasets.filter(d => d.type === 'geolocalization').length}
                </div>
                <div className="text-sm text-gray-600">Geo-localization</div>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-6 text-center">
                <div className="text-3xl font-bold text-orange-600 mb-2">
                  {datasets.filter(d => d.type === 'multimodal').length}
                </div>
                <div className="text-sm text-gray-600">Multimodal</div>
              </CardContent>
            </Card>
          </div>

          {/* Dataset Categories */}
          <div className="space-y-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-6">Research Datasets</h2>

            {datasets.map((dataset, index) => (
              <DatasetCard key={index} dataset={dataset} />
            ))}
          </div>

          {/* Usage Notice */}
          <div className="mt-12 bg-amber-50 border border-amber-200 rounded-lg p-6">
            <h3 className="text-lg font-semibold text-amber-900 mb-2">Important Notice</h3>
            <p className="text-amber-800">
              All datasets provided here are intended for research purposes only. Please ensure proper citation
              of the original authors and papers when using these datasets in your research. Commercial use may
              require separate licensing agreements.
            </p>
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
