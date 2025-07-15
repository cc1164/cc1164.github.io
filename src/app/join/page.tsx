import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Separator } from "@/components/ui/separator"
import { Navigation } from "@/components/navigation"
import { Users, GraduationCap, Mail, ExternalLink, CheckCircle, AlertCircle } from "lucide-react"
import Link from "next/link"

export default function JoinPage() {
  const positions = [
    {
      type: "Ph.D. Students",
      status: "Open",
      description: "Seeking motivated Ph.D. students to work on cutting-edge research in computer vision, generative AI, and medical imaging.",
      requirements: [
        "Master's degree in computer science, electrical engineering, or related fields",
        "Experience with machine learning and computer vision (coursework or projects)",
        "Proficiency in Python and deep learning frameworks (PyTorch, TensorFlow)",
        "Strong mathematical foundation (linear algebra, calculus, statistics)",
        "Research experience demonstrated through publications, projects, or thesis",
        "Excellent communication and writing skills in English"
      ],
      benefits: [
        "Research assistantship with competitive stipend",
        "Health insurance and benefits",
        "Conference travel funding",
        "Access to state-of-the-art computing resources",
        "Mentorship and career development opportunities"
      ]
    },
    {
      type: "M.S. Students",
      status: "Open",
      description: "Master's students interested in thesis research in computer vision and AI applications.",
      requirements: [
        "Bachelor's degree in computer science or related field",
        "Strong programming skills in Python/C++",
        "Background in mathematics and statistics",
        "Interest in research and problem-solving"
      ],
      benefits: [
        "Research or teaching assistantship opportunities",
        "Industry connections and internship opportunities",
        "Access to research labs and facilities",
        "Professional development workshops"
      ]
    },
    {
      type: "Postdocs",
      status: "Limited",
      description: "Postdoctoral researchers with expertise in computer vision, machine learning, or related areas.",
      requirements: [
        "Ph.D. in computer science, electrical engineering, or related field",
        "Strong publication record in top-tier venues",
        "Independent research experience",
        "Excellent communication and collaboration skills"
      ],
      benefits: [
        "Competitive salary and benefits",
        "Research independence and mentoring opportunities",
        "Access to industry collaborations",
        "Professional development support"
      ]
    }
  ]

  const applicationProcess = [
    {
      step: "1",
      title: "Prepare Application Materials",
      details: [
        "Updated CV/Resume with publications",
        "Statement of purpose (research interests and goals)",
        "Transcripts from previous institutions",
        "3 letters of recommendation",
        "Representative publications or projects"
      ]
    },
    {
      step: "2",
      title: "Submit University Application",
      details: [
        "Apply through UCF Graduate School online portal",
        "Submit GRE scores (recommended but not always required)",
        "TOEFL/IELTS scores for international students",
        "Official transcripts from all previous institutions",
        "Pay $30 application fee"
      ]
    },
    {
      step: "3",
      title: "Contact Dr. Chen",
      details: [
        "Send email with CV and research interests",
        "Include specific projects you'd like to work on",
        "Mention relevant experience and skills",
        "Be specific about your timeline and goals"
      ]
    }
  ]

  const researchAreas = [
    {
      area: "Generative AI",
      topics: ["Text-to-Motion", "Image and Video Generation", "3D Scene Editing", "Diffusion Models"]
    },
    {
      area: "Computer Vision",
      topics: ["3D Human Pose Estimation", "Cross-view Geolocalization", "Object Detection", "Action Recognition"]
    },
    {
      area: "Medical Image Computing",
      topics: ["Medical Image Segmentation", "Brain Tumor Analysis", "Foundation Models", "Healthcare AI"]
    },
    {
      area: "Machine Learning",
      topics: ["Federated Learning", "Multimodal Learning", "Self-supervised Learning", "Video Understanding"]
    },
    {
      area: "Image Processing",
      topics: ["Image Restoration", "Super-Resolution", "Video Frame Interpolation", "Denoising"]
    },
    {
      area: "Remote Sensing",
      topics: ["Hyperspectral Analysis", "Satellite Imaging", "Geospatial Applications", "Environmental Monitoring"]
    }
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-white">
      <Navigation />

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Page Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-slate-900 mb-4">Join Our Research Group</h1>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            We're looking for motivated researchers to join our team working on cutting-edge AI and computer vision projects
          </p>
        </div>

        {/* Important Notice */}
        <Card className="mb-12 border-blue-200 bg-blue-50">
          <CardContent className="pt-6">
            <div className="flex items-start gap-3">
              <AlertCircle className="w-5 h-5 text-blue-600 flex-shrink-0 mt-1" />
              <div>
                <h3 className="font-semibold text-blue-900 mb-2">Application Notice</h3>
                <p className="text-blue-800 leading-relaxed">
                  Due to high volume of applications, please read this page carefully and ensure you meet the requirements
                  before contacting Dr. Chen. Only applications that demonstrate strong alignment with our research areas,
                  clear preparation, and specific research interests will receive responses. Generic emails without specific
                  research focus will not be answered.
                </p>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Research Areas */}
        <Card className="mb-12">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <GraduationCap className="w-5 h-5" />
              Research Areas
            </CardTitle>
            <CardDescription>Current research focus areas and opportunities</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid md:grid-cols-3 gap-6">
              {researchAreas.map((area, index) => (
                <div key={index} className="bg-slate-50 p-4 rounded-lg border border-slate-200">
                  <h3 className="font-semibold text-slate-900 mb-3 text-center">{area.area}</h3>
                  <div className="flex flex-wrap gap-2 justify-center">
                    {area.topics.map((topic, idx) => (
                      <Badge key={idx} variant="outline" className="text-xs">
                        {topic}
                      </Badge>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Available Positions */}
        <Card className="mb-12">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Users className="w-5 h-5" />
              Available Positions
            </CardTitle>
            <CardDescription>Current openings for different levels</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-8">
              {positions.map((position, index) => (
                <div key={index} className="border-l-4 border-blue-200 pl-6">
                  <div className="flex items-center gap-3 mb-3">
                    <h3 className="text-xl font-semibold text-slate-900">{position.type}</h3>
                    <Badge className={position.status === 'Open' ? 'bg-green-600' : 'bg-amber-600'}>
                      {position.status}
                    </Badge>
                  </div>

                  <p className="text-slate-700 mb-4 leading-relaxed">{position.description}</p>

                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <h4 className="font-medium text-slate-700 mb-3">Requirements:</h4>
                      <ul className="space-y-2">
                        {position.requirements.map((req, idx) => (
                          <li key={idx} className="flex items-start gap-2 text-sm text-slate-600">
                            <CheckCircle className="w-4 h-4 text-green-600 flex-shrink-0 mt-0.5" />
                            {req}
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div>
                      <h4 className="font-medium text-slate-700 mb-3">Benefits:</h4>
                      <ul className="space-y-2">
                        {position.benefits.map((benefit, idx) => (
                          <li key={idx} className="flex items-start gap-2 text-sm text-slate-600">
                            <CheckCircle className="w-4 h-4 text-blue-600 flex-shrink-0 mt-0.5" />
                            {benefit}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Application Process */}
        <Card className="mb-12">
          <CardHeader>
            <CardTitle>Application Process</CardTitle>
            <CardDescription>How to apply to join our research group</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-8">
              {applicationProcess.map((step, index) => (
                <div key={index} className="flex gap-4">
                  <div className="flex-shrink-0 w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center font-semibold">
                    {step.step}
                  </div>
                  <div className="flex-1">
                    <h3 className="font-semibold text-slate-900 mb-2">{step.title}</h3>
                    <ul className="space-y-1">
                      {step.details.map((detail, idx) => (
                        <li key={idx} className="text-sm text-slate-600 flex items-start gap-2">
                          <span className="w-1 h-1 bg-slate-400 rounded-full flex-shrink-0 mt-2"></span>
                          {detail}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        <Separator className="mb-12" />

        {/* Contact Information */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Mail className="w-5 h-5" />
              Contact Information
            </CardTitle>
            <CardDescription>How to get in touch</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="font-semibold text-slate-900 mb-4">For Prospective Students</h3>
                <div className="space-y-3">
                  <p className="text-slate-700">
                    <strong>Email:</strong> chen.chen@crcv.ucf.edu
                  </p>
                  <p className="text-slate-700">
                    <strong>Subject Line:</strong> "Prospective [PhD/MS] Student - [Your Name]"
                  </p>
                  <div className="bg-slate-50 p-4 rounded-lg text-sm text-slate-700">
                    <p className="mb-2"><strong>Please include in your email:</strong></p>
                    <ul className="list-disc list-inside space-y-1">
                      <li>Updated CV with publications (if any)</li>
                      <li>Brief statement of research interests</li>
                      <li>Specific research topics from our group that interest you</li>
                      <li>Your background and relevant experience</li>
                      <li>Expected timeline for starting your program</li>
                    </ul>
                  </div>
                </div>
              </div>

              <div>
                <h3 className="font-semibold text-slate-900 mb-4">Useful Links</h3>
                <div className="space-y-3">
                  <Button variant="outline" asChild className="w-full justify-start">
                    <Link href="https://graduate.ucf.edu/applying-to-ucf/" target="_blank" className="flex items-center gap-2">
                      <ExternalLink className="w-4 h-4" />
                      UCF Graduate School Application
                    </Link>
                  </Button>
                  <Button variant="outline" asChild className="w-full justify-start">
                    <Link href="https://www.cs.ucf.edu/" target="_blank" className="flex items-center gap-2">
                      <ExternalLink className="w-4 h-4" />
                      Department of Computer Science
                    </Link>
                  </Button>
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
