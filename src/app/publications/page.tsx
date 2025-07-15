'use client'

import React, { useState } from 'react'
import { Card, CardContent } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { Navigation } from '@/components/navigation'
import { ExternalLink, Github, Play, Award } from 'lucide-react'
import Link from 'next/link'
// Removed: import Image from 'next/image'
// Removed: import getConfig from 'next/config';

interface Publication {
  title: string
  authors: string
  venue: string
  year: string
  paper?: string
  code?: string
  project?: string
  video?: string
  highlight?: string
  // Removed: image?: string
  data?: string
  demo?: string
  // Removed: topics?: string[];
}

// Removed: getPublicAssetPath function, as there are no local static assets being served from 'public' requiring dynamic basePath resolution
// All paper/code/project/video/data/demo links are now either external URLs or direct relative paths (e.g., "IOT-FL.pdf")
// For direct relative paths like "IOT-FL.pdf", they should be placed directly in the 'public' folder.

export default function PublicationsPage() {
  const [selectedYear, setSelectedYear] = useState<string>('all')

  // Publication data arrays with all years from 2014-2025 plus preprints
  const preprints: Publication[] = [
    {
      title: "VICI: VLM-Instructed Cross-view Image-localisation",
      authors: "Xiaohan Zhang, Tavis Shore, Chen Chen, Oscar Mendez, Simon Hadfield, Safwan Wshah",
      venue: "arXiv:2506.01933",
      year: "preprint",
      paper: "https://www.arxiv.org/pdf/2507.04107",
      code: "https://github.com/tavisshore/VICI",
    },
    {
      title: "E3D-Bench: A Benchmark for End-to-End 3D Geometric Foundation Models",
      authors: "Wenyan Cong, Yiqing Liang, Yancheng Zhang, Ziyi Yang, Yan Wang, Boris Ivanovic, Marco Pavone, Chen Chen, Zhangyang Wang, Zhiwen Fan",
      venue: "arXiv:2506.01933",
      year: "preprint",
      paper: "https://arxiv.org/pdf/2506.01933",
      project: "https://e3dbench.github.io/",
      code: "https://github.com/VITA-Group/E3D-Bench",
    },
    {
      title: "VERIFY: A Benchmark of Visual Explanation and Reasoning for Investigating Multimodal Reasoning Fidelity",
      authors: "Jing Bi, Junjia Guo, Susan Liang, Guangyu Sun, Luchuan Song, Yunlong Tang, Jinxi He, Jiarui Wu, Ali Vosoughi, Chen Chen, Chenliang Xu",
      venue: "arXiv:2503.11557",
      year: "preprint",
      paper: "https://arxiv.org/pdf/2503.11557",
      project: "https://verify-eqh.pages.dev/",
    },
    {
      title: "Why Reasoning Matters? A Survey of Advancements in Multimodal Reasoning",
      authors: "Jing Bi, Susan Liang, Xiaofei Zhou, Pinxin Liu, Junjia Guo, Yunlong Tang, Luchuan Song, Chao Huang, Guangyu Sun, Jinxi He, Jiarui Wu, Shu Yang, Daoan Zhang, Chen Chen, Lianggong Bruce Wen, Zhang Liu, Jiebo Luo, Chenliang Xu",
      venue: "arXiv:2504.03151",
      year: "preprint",
      paper: "https://arxiv.org/pdf/2504.03151",
    },
    {
      title: "PSF-4D: A Progressive Sampling Framework for View Consistent 4D Editing",
      authors: "Hasan Iqbal, Nazmul Karim, Umar Khalid, Azib Farooq, Zichun Zhong, Chen Chen, Jing Hua",
      venue: "arXiv:2503.11044",
      year: "preprint",
      paper: "https://arxiv.org/pdf/2503.11044",
    },
    {
      title: "UCF-MultiOrgan-Path: A Public Benchmark Dataset for Organ Classification",
      authors: "Md Sanzid Bin Hossain, Yelena Piazza, Jacob Braun, Anthony Bilic, Michael Hsieh, Samir Fouissi, Alexander Borowsky, Hatem Kaseb, Amoy Fraser, Britney-Ann Wray, Chen Chen, Liqiang Wang, Mujtaba Husain, Dexter Hadley",
      venue: "medRxiv 2024.11.05.24316736",
      year: "preprint",
      paper: "https://www.medrxiv.org/content/10.1101/2024.11.05.24316736v1.full.pdf",
      code: "https://github.com/Md-Sanzid-Bin-Hossain/UCF-WSI-Dataset",
      data: "https://stars.library.ucf.edu/ucfnecropsywsi/",
    },
    {
      title: "SAVE: Spectral-Shift-Aware Adaptation of Image Diffusion Models for Text-guided Video Editing",
      authors: "Nazmul Karim, Umar Khalid, Mohsen Joneidi, Chen Chen, Nazanin Rahnavard",
      venue: "arXiv:2305.18670",
      year: "preprint",
      paper: "https://arxiv.org/pdf/2305.18670.pdf",
      code: "https://github.com/nazmul-karim170/SAVE-Text2Video-Diffusion",
    }
  ]

  const publications2025: Publication[] = [
    {
      title: "NavigScene: Bridging Local Perception and Global Navigation for Beyond-Visual-Range Autonomous Driving",
      authors: "Qucheng Peng, Chen Bai, Guoxiang Zhang, Bo Xu, Xiaotong Liu, Xiaoyin Zheng, Chen Chen, Cheng Lu",
      venue: "ACM Multimedia (ACM MM), 2025",
      year: "2025",
      paper: "https://arxiv.org/pdf/2507.05227",
    },
    {
      title: "SuperEdit: Rectifying and Facilitating Supervision for Instruction-Based Image Editing",
      authors: "Ming Li, Xin Gu, Fan Chen, Xiaoying Xing, Longyin Wen, Chen Chen, Sijie Zhu",
      venue: "IEEE/CVF International Conference on Computer Vision (ICCV), 2025",
      year: "2025",
      paper: "https://arxiv.org/pdf/2505.02370",
      project: "https://liming-ai.github.io/SuperEdit/",
      code: "https://github.com/bytedance/SuperEdit",
      data: "https://huggingface.co/datasets/limingcv/SuperEdit-40K",
    },
    {
      title: "ControlMM: Controllable Masked Motion Generation",
      authors: "Ekkasit Pinyoanuntapong, Muhammad Usama Saleem, Korrawe Karunratanakul, Pu Wang, Hongfei Xue, Chen Chen, Chuan Guo, Junli Cao, Jian Ren, Sergey Tulyakov",
      venue: "IEEE/CVF International Conference on Computer Vision (ICCV), 2025",
      year: "2025",
      paper: "https://arxiv.org/pdf/2410.10780",
      project: "https://www.ekkasit.com/ControlMM-page/",
      code: "https://github.com/exitudio/ControlMM/",
    },
    {
      title: "TLB-VFI: Temporal-Aware Latent Brownian Bridge Diffusion for Video Frame Interpolation",
      authors: "Zonglin Lyu, Chen Chen",
      venue: "IEEE/CVF International Conference on Computer Vision (ICCV), 2025",
      year: "2025",
      paper: "https://arxiv.org/pdf/2507.04984",
      project: "https://zonglinl.github.io/tlbvfi_page/",
      code: "https://github.com/ZonglinL/TLBVFI",
    },
    {
      title: "Frequency-Semantic Enhanced Variational Autoencoder for Zero-Shot Skeleton-based Action Recognition",
      authors: "Wenhan Wu, Zhishuai Guo, Chen Chen, Hongfei Xue, Aidong Lu",
      venue: "IEEE/CVF International Conference on Computer Vision (ICCV), 2025",
      year: "2025",
      paper: "https://arxiv.org/pdf/2506.22179",
      project: "https://wenhanwu95.github.io/fsvae-project-page/",
      code: "https://github.com/wenhanwu95/FS-VAE/tree/main",
    },
    {
      title: "SignLLM: Sign Languages Production Large Language Models",
      authors: "Sen Fang, Lei Wang, Ce Zheng, Yapeng Tian, Chen Chen",
      venue: "IEEE/CVF International Conference on Computer Vision (ICCV) Workshop (CV4A11y Workshop), 2025",
      year: "2025",
      paper: "https://arxiv.org/pdf/2405.10718",
      project: "https://signllm.github.io/",
      data: "https://signllm.github.io/",
    },
    {
      title: "Predicting Through Generation: Why Generation Is Better for Prediction",
      authors: "Md Kowsher, Nusrat Jahan Prottasha, Prakash Bhat, Chun-Nam Yu, Mojtaba Soltanalian, Ivan Garibay, Ozlem Garibay, Chen Chen, Niloofar Yousefi",
      venue: "The 63rd Annual Meeting of the Association for Computational Linguistics (ACL), 2025 (Main Track)",
      year: "2025",
      paper: "https://arxiv.org/pdf/2502.17817",
      code: "https://github.com/Kowsher/PredGen",
    },
    {
      title: "RoCoFT: Efficient Finetuning of Large Language Models with Row-Column Updates",
      authors: "Md Kowsher, Tara Esmaeilbeig, Chun-Nam Yu, Chen Chen, Mojtaba Soltanalian, Niloofar Yousefi",
      venue: "The 63rd Annual Meeting of the Association for Computational Linguistics (ACL), 2025 (Main Track)",
      year: "2025",
      paper: "https://arxiv.org/pdf/2410.10075",
      code: "https://github.com/Kowsher/RoCoFT",
    },
    {
      title: "Eye-See-You: Reverse Pass-Through VR and Head Avatars",
      authors: "Ankan Dash, Jingyi Gu, Guiling Wang, Chen Chen",
      venue: "The 34th International Joint Conference on Artificial Intelligence (IJCAI), 2025 (Special Track on AI4Tech, Acceptance rate: 18%)",
      year: "2025",
      paper: "https://arxiv.org/pdf/2505.18869",
    },
    {
      title: "Multimodal Factors Affect Longitudinal Changes in Dynamic Balance in Community-Dwelling Older Adults",
      authors: "Chitra Banarjee, Jethro Raphael M Suarez, Kworweinski Lafontant, Hwan Choi, Chen Chen, Rui Xie, Ladda Thiamwong",
      venue: "Clinical Interventions in Aging, 2025",
      year: "2025",
      paper: "https://www.dovepress.com/article/download/101364",
    },
    {
      title: "Seq2Time: Sequential Knowledge Transfer for Video LLM Temporal Grounding",
      authors: "Andong Deng, Zhongpai Gao, Anwesa Choudhuri, Benjamin Planche, Meng Zheng, Bin Wang, Terrence Chen, Chen Chen, Ziyan Wu",
      venue: "IEEE Conference on Computer Vision and Pattern Recognition (CVPR), 2025",
      year: "2025",
      paper: "https://arxiv.org/pdf/2411.16932",
    },
    {
      title: "Motion-Grounded Video Reasoning: Understanding and Perceiving Motion at Pixel Level",
      authors: "Andong Deng, Tongjia Chen, Shoubin Yu, Taojiannan Yang, Lincoln Spencer, Yapeng Tian, Ajmal Saeed Mian, Mohit Bansal, Chen Chen",
      venue: "IEEE Conference on Computer Vision and Pattern Recognition (CVPR), 2025",
      year: "2025",
      paper: "https://arxiv.org/pdf/2411.09921",
      project: "https://groundmore.github.io/",
      data: "https://huggingface.co/datasets/groundmore/GroundMoRe",
    },
    {
      title: "DA-VPT: Semantic-Guided Visual Prompt Tuning for Vision Transformers",
      authors: "Li Ren, Chen Chen, Liqiang Wang, Kien A. Hua",
      venue: "IEEE Conference on Computer Vision and Pattern Recognition (CVPR), 2025",
      year: "2025",
      paper: "https://arxiv.org/",
      code: "https://github.com/Noahsark/DA-VPT",
    },
    {
      title: "IL-NeRF: Incremental Learning for Neural Radiance Fields with Camera Pose Alignment",
      authors: "Letian Zhang, Ming Li, Chen Chen, Jie Xu",
      venue: "IEEE Conference on Computer Vision and Pattern Recognition (CVPR) Workshop (CV4Metaverse2025 Workshop), 2025",
      year: "2025",
      paper: "https://arxiv.org/pdf/2312.05748.pdf",
      project: "https://ilnerf.github.io/",
    },
    {
      title: "3D Vision-Language Gaussian Splatting",
      authors: "Qucheng Peng, Benjamin Planche, Zhongpai Gao, Meng Zheng, Anwesa Choudhuri, Terrence Chen, Chen Chen, Ziyan Wu",
      venue: "International Conference on Learning Representations (ICLR), 2025",
      year: "2025",
      paper: "https://arxiv.org/pdf/2410.07577",
    },
    {
      title: "Mixture of Experts Made Personalized: Federated Prompt Learning for Vision-Language Models",
      authors: "Jun Luo, Chen Chen, Shandong Wu",
      venue: "International Conference on Learning Representations (ICLR), 2025",
      year: "2025",
      paper: "https://arxiv.org/pdf/2410.10114",
      code: "https://github.com/ljaiverson/pFedMoAP",
    },
    {
      title: "GenHMR: Generative Human Mesh Recovery",
      authors: "Muhammad Usama Saleem, Ekkasit Pinyoanuntapong, Pu Wang, Hongfei Xue, Srijan Das, Chen Chen",
      venue: "Thirty-Ninth AAAI Conference on Artificial Intelligence (AAAI), 2025",
      year: "2025",
      paper: "https://arxiv.org/pdf/2412.14444",
      project: "https://m-usamasaleem.github.io/publication/GenHMR/GenHMR.html",
    },
    {
      title: "SignDiff: Diffusion Model for American Sign Language Production",
      authors: "Sen Fang, Chunyu Sui, Yanghao Zhou, Xuedong Zhang, Hongbin Zhong, Yapeng Tian, Chen Chen",
      venue: "The 19th IEEE International Conference on Automatic Face and Gesture Recognition (FG) Workshop, 2025",
      year: "2025",
      paper: "https://arxiv.org/pdf/2308.16082",
      project: "https://signdiff.github.io//",
    },
    {
      title: "Exploiting Aggregation and Segregation of Representations for Domain Adaptive Human Pose Estimation",
      authors: "Qucheng Peng, Ce Zheng, Zhengming Ding, Pu Wang, Chen Chen",
      venue: "The 19th IEEE International Conference on Automatic Face and Gesture Recognition (FG), 2025",
      year: "2025",
      paper: "https://arxiv.org/pdf/2412.20538",
      code: "https://github.com/davidpengucf/EPIC",
    },
    {
      title: "FreqMixFormerV2: Lightweight Frequency-aware Mixed Transformer for Human Skeleton Action Recognition",
      authors: "Wenhan Wu, Pengfei Wang, Chen Chen, Aidong Lu",
      venue: "The 19th IEEE International Conference on Automatic Face and Gesture Recognition (FG), 2025",
      year: "2025",
      paper: "https://arxiv.org/pdf/2412.20621v1",
      code: "https://github.com/wenhanwu95/FreqMixFormer",
    },
    {
      title: "Cross-View Meets Diffusion: Aerial Image Synthesis with Geometry and Text Guidance",
      authors: "Ahmad Arrabi, Xiaohan Zhang, Waqas Sultani, Chen Chen, Safwan Wshah",
      venue: "IEEE/CVF Winter Conference on Applications of Computer Vision (WACV), 2025",
      year: "2025",
      paper: "https://arxiv.org/pdf/2408.04224",
      project: "https://ahmadarrabi.github.io/GPG2A_web/",
      data: "https://ahmadarrabi.github.io/GPG2A_web/",
      demo: "https://huggingface.co/spaces/ahmadarrabi/test_sketch",
    },
    {
      title: "DiffMesh: A Motion-aware Diffusion Framework for Human Mesh Recovery from Videos",
      authors: "Ce Zheng, Xianpeng Liu, Qucheng Peng, Tianfu Wu, Pu Wang, Chen Chen",
      venue: "IEEE/CVF Winter Conference on Applications of Computer Vision (WACV), 2025",
      year: "2025",
      paper: "https://arxiv.org/pdf/2303.13397.pdf",
      project: "https://zczcwh.github.io/diffmesh_page/",
    },
    {
      title: "Navigating Heterogeneity and Privacy in One-Shot Federated Learning with Diffusion Models",
      authors: "Matias Mendieta, Guangyu Sun, and Chen Chen",
      venue: "IEEE/CVF Winter Conference on Applications of Computer Vision (WACV), 2025",
      year: "2025",
      paper: "https://arxiv.org/pdf/2405.01494",
    }
  ]

  const publications2024: Publication[] = [
    {
      title: "Exploring Parameter-Efficient Fine-Tuning to Enable Foundation Models in Federated Learning",
      authors: "Guangyu Sun, Umar Khalid, Matias Mendieta, Pu Wang, Chen Chen",
      venue: "IEEE International Conference on Big Data (BigData), 2024",
      year: "2024",
      paper: "https://arxiv.org/pdf/2210.01708.pdf",
      code: "https://github.com/imguangyu/FedPEFT",
    },
    {
      title: "Federated Learning Client Pruning for Noisy Labels",
      authors: "Mahdi Morafah, Hojin Chang, Chen Chen, Bill Lin",
      venue: "ACM Transactions on Modeling and Performance Evaluation of Computing Systems, 2024",
      year: "2024",
      paper: "https://arxiv.org/pdf/2411.07391v1",
      code: "https://github.com/MMorafah/ClipFL",
    },
    {
      title: "Towards Diverse Device Heterogeneous Federated Learning via Task Arithmetic Knowledge Integration",
      authors: "Mahdi Morafah, Vyacheslav Kungurtsev, Hojin Matthew Chang, Chen Chen, Bill Lin",
      venue: "Thirty-eighth Annual Conference on Neural Information Processing Systems (NeurIPS), 2024",
      year: "2024",
      paper: "https://arxiv.org/pdf/2409.18461",
      project: "https://mmorafah.github.io/takflpage/",
      code: "https://github.com/MMorafah/TAKFL",
    },
    {
      title: "Taming Cross-Domain Representation Variance in Federated Prototype Learning with Heterogeneous Data Domains",
      authors: "Lei Wang, Jieming Bian, Letian Zhang, Chen Chen, Jie Xu",
      venue: "Thirty-eighth Annual Conference on Neural Information Processing Systems (NeurIPS), 2024",
      year: "2024",
      paper: "https://arxiv.org/pdf/2403.09048",
    },
    {
      title: "Advancing Video Anomaly Detection: A Concise Review and a New Dataset",
      authors: "Liyun Zhu, Lei Wang, Arjun Raj, Tom Gedeon, Chen Chen",
      venue: "Thirty-eighth Annual Conference on Neural Information Processing Systems (NeurIPS), 2024",
      year: "2024",
      paper: "https://arxiv.org/pdf/2402.04857",
      project: "https://msad-dataset.github.io/",
    },
    {
      title: "A Generalist Vision-Language Foundation Model for Diverse Biomedical Tasks",
      authors: "Kai Zhang, Rong Zhou, Eashan Adhikarla, Zhiling Yan, Yixin Liu, Jun Yu, Zhengliang Liu, Xun Chen, Brian Davison, Hui Ren, Jing Huang, Chen Chen, Yuyin Zhou, Sunyang Fu, Wei Liu, Tianming Liu, Xiang Li, Yong Chen, Lifang He, James Zou, Quanzheng Li, Hongfang Liu, Lichao Sun",
      venue: "Nature Medicine, 2024",
      year: "2024",
      paper: "https://arxiv.org/pdf/2305.17100",
      code: "https://github.com/taokz/BiomedGPT",
      highlight: "Impact Factor: 58.7",
    },
    {
      title: "GeoDTR+: Toward Generic Cross-view Geolocalization via Geometric Disentanglement",
      authors: "Xiaohan Zhang, Xingyu Li, Waqas Sultani, Chen Chen, Safwan Wshah",
      venue: "IEEE Transactions on Pattern Analysis and Machine Intelligence (T-PAMI), 2024",
      year: "2024",
      paper: "https://arxiv.org/pdf/2308.09624.pdf",
      code: "https://github.com/zxh009123/GeoDTR_plus",
    },
    {
      title: "Frame Interpolation with Consecutive Brownian Bridge Diffusion",
      authors: "Zonglin Lyu, Ming Li, Jianbo Jiao, and Chen Chen",
      venue: "ACM Multimedia (ACM MM), 2024",
      year: "2024",
      paper: "https://arxiv.org/pdf/2405.05953",
      project: "https://zonglinl.github.io/videointerp/",
      code: "https://github.com/ZonglinL/ConsecutiveBrownianBridge",
    },
    {
      title: "SATO: Stable Text-to-Motion Framework",
      authors: "Wenshuo Chen, Hongru Xiao, Erhang Zhang, Lijie Hu, Lei Wang, Mengyuan Liu, Chen Chen",
      venue: "ACM Multimedia (ACM MM), 2024",
      year: "2024",
      paper: "https://arxiv.org/pdf/2405.01461",
      project: "https://sato-team.github.io/Stable-Text-to-Motion-Framework/",
      code: "https://github.com/sato-team/Stable-Text-to-Motion-Framework",
    },
    {
      title: "ClickDiff: Click to Induce Semantic Contact Map for Controllable Grasp Generation with Diffusion Models",
      authors: "Peiming Li, Ziyi Wang, Mengyuan Liu, Hong Liu, Chen Chen",
      venue: "ACM Multimedia (ACM MM), 2024",
      year: "2024",
      paper: "https://arxiv.org/pdf/2407.19370v1",
      code: "https://github.com/adventurer-w/ClickDiff",
    },
    {
      title: "Frequency Guidance Matters: Skeletal Action Recognition by Frequency-Aware Mixed Transformer",
      authors: "Wenhan Wu, Ce Zheng, Zihao Yang, Chen Chen, Srijan Das, Aidong Lu",
      venue: "ACM Multimedia (ACM MM), 2024",
      year: "2024",
      paper: "https://arxiv.org/pdf/2407.12322",
      project: "https://wenhanwu95.github.io/FreqMixFormer.github.io/",
      code: "https://github.com/wenhanwu95/FreqMixFormer",
    },
    {
      title: "Multi-Modality Co-Learning for Efficient Skeleton-based Action Recognition",
      authors: "Jinfu Liu, Chen Chen, Mengyuan Liu",
      venue: "ACM Multimedia (ACM MM), 2024",
      year: "2024",
      paper: "https://arxiv.org/pdf/2407.15706",
      code: "https://github.com/liujf69/MMCL-Action",
    },
    {
      title: "LucidDreaming: Controllable Object-Centric 3D Generation",
      authors: "Zhaoning Wang, Ming Li, Chen Chen",
      venue: "European Conference on Computer Vision (ECCV) Workshop on Computer Vision For Videogames (CV2), 2024",
      year: "2024",
      paper: "https://arxiv.org/pdf/2312.00588.pdf",
      project: "https://www.zhaoningwang.com/LucidDreaming",
    },
    {
      title: "ControlNet++: Improving Conditional Controls with Efficient Consistency Feedback",
      authors: "Ming Li, Taojiannan Yang, Huafeng Kuang, Jie Wu, Zhaoning Wang, Xuefeng Xiao, Chen Chen",
      venue: "European Conference on Computer Vision (ECCV), 2024",
      year: "2024",
      paper: "https://arxiv.org/pdf/2404.07987.pdf",
      project: "https://liming-ai.github.io/ControlNet_Plus_Plus/",
      code: "https://github.com/liming-ai/ControlNet_Plus_Plus",
      demo: "https://huggingface.co/spaces/limingcv/ControlNet-Plus-Plus",
      highlight: "ControlNet++",
    },
    {
      title: "Towards Multi-modal Transformers in Federated Learning",
      authors: "Guangyu Sun, Matias Mendieta, Aritra Dutta, Xin Li, and Chen Chen",
      venue: "European Conference on Computer Vision (ECCV), 2024",
      year: "2024",
      paper: "https://arxiv.org/pdf/2404.12467.pdf",
      code: "https://github.com/imguangyu/FedCola",
    },
    {
      title: "BAMM: Bidirectional Autoregressive Motion Model",
      authors: "Ekkasit Pinyoanuntapong, Muhammad Usama Saleem, Pu Wang, Minwoo Lee, Srijan Das, Chen Chen",
      venue: "European Conference on Computer Vision (ECCV), 2024",
      year: "2024",
      paper: "https://arxiv.org/pdf/2403.19435.pdf",
      project: "https://exitudio.github.io/BAMM-page/",
    },
    {
      title: "3DEgo: 3D Editing on the Go!",
      authors: "Umar Khalid, Hasan Iqbal, Azib Farooq, Jing Hua, Chen Chen",
      venue: "European Conference on Computer Vision (ECCV), 2024",
      year: "2024",
      paper: "https://arxiv.org/pdf/2407.10102",
      project: "https://3dego.github.io/",
      video: "https://www.youtube.com/watch?v=EqiwvXJ0UAI",
    },
    {
      title: "LatentEditor: Text Driven Local Editing of 3D Scenes",
      authors: "Umar Khalid, Hasan Iqbal, Muhammad Tayyab, Md Nazmul Karim, Jing Hua, Chen Chen",
      venue: "European Conference on Computer Vision (ECCV), 2024",
      year: "2024",
      paper: "https://arxiv.org/pdf/2312.09313.pdf",
      project: "https://latenteditor.github.io/",
      video: "https://www.youtube.com/watch?v=heTmJQLknSo",
      code: "https://github.com/umarkhalidAI/LatentEditor",
    },
    {
      title: "Free-Editor: Zero-shot Text-driven 3D Scene Editing",
      authors: "Md Nazmul Karim, Hasan Iqbal, Umar Khalid, Chen Chen, Jing Hua",
      venue: "European Conference on Computer Vision (ECCV), 2024",
      year: "2024",
      paper: "https://arxiv.org/pdf/2312.13663.pdf",
      project: "https://free-editor.github.io/",
      video: "https://www.youtube.com/watch?v=P-FillEZQU0",
      code: "https://github.com/nazmul-karim170/FreeEditor-Text-to-3D-Scene-Editing",
    },
    {
      title: "Rethinking Weakly-supervised Video Temporal Grounding From a Game Perspective",
      authors: "Xiang Fang, Zeyu Xiong, Wanlong Fang, Xiaoye Qu, Chen Chen, Jianfeng Dong, Keke Tang, Pan Zhou, Yu Cheng, Daizong Liu",
      venue: "European Conference on Computer Vision (ECCV), 2024",
      year: "2024",
      paper: "https://www.crcv.ucf.edu/wp-content/uploads/2018/11/ECCV2024_Grounding_camera.pdf",
    },
    {
      title: "Sparse Points to Dense Clouds: Enhancing 3D Detection with Limited LiDAR Data",
      authors: "Aakash Kumar, Chen Chen, Ajmal Mian, Neils Lobo, Mubarak Shah",
      venue: "IEEE/RSJ International Conference on Intelligent Robots and Systems (IROS), 2024",
      year: "2024",
      paper: "https://arxiv.org/pdf/2404.06715.pdf",
      project: "https://aakashjuseja-aj.github.io/Sparse_to_Dense/",
    },
    {
      title: "CodaMal: Contrastive Domain Adaptation for Malaria Detection in Low-Cost Microscopes",
      authors: "Ishan Rajendrakumar Dave, Tristan de Blegiers, Chen Chen, Mubarak Shah",
      venue: "2024 IEEE International Conference on Image Processing (ICIP), 2024",
      year: "2024",
      paper: "https://arxiv.org/pdf/2402.10478.pdf",
      project: "https://daveishan.github.io/codamal-webpage/",
      code: "https://github.com/DAVEISHAN/CodaMal",
    },
    {
      title: "VITA: ViT Acceleration for Efficient 3D Human Mesh Recovery via Hardware-Algorithm Co-Design",
      authors: "Shilin Tian, Chase Szafranski, Ce Zheng, Fan Yao, Ahmed Louri, Chen Chen, Hao Zheng",
      venue: "Design Automation Conference (DAC), 2024",
      year: "2024",
      paper: "2024_DAC_VITA_Final.pdf",
      project: "https://shilinti.github.io/vita-demo/",
      code: "https://github.com/shilinti/VITA",
    },
    {
      title: "Med-Tuning: Exploring Parameter-Efficient Transfer Learning for Medical Volumetric Segmentation",
      authors: "Wenxuan Wang, Jiachen Shen, Chen Chen, Jianbo Jiao, Yan Zhang, Shanshan Song, Jiangyun Li",
      venue: "Medical Imaging with Deep Learning (MIDL), 2024",
      year: "2024",
      paper: "https://arxiv.org/pdf/2304.10880.pdf",
      project: "https://rubics-xuan.github.io/Med-Tuning/",
      code: "https://github.com/jessie-chen99/Med-Tuning-Official",
    },
    {
      title: "A Dual-Augmentor Framework for Domain Generalization in 3D Human Pose Estimation",
      authors: "Qucheng Peng, Ce Zheng, Chen Chen",
      venue: "IEEE Conference on Computer Vision and Pattern Recognition (CVPR), 2024",
      year: "2024",
      paper: "https://arxiv.org/pdf/2403.11310.pdf",
      code: "https://github.com/davidpengucf/DAF-DG",
    },
    {
      title: "Multi-View Attentive Contextualization for Multi-View 3D Object Detection",
      authors: "Xianpeng Liu, Ce Zheng, Ming Qian, Nan Xue, Chen Chen, Zhebin Zhang, Chen Li, Tianfu Wu",
      venue: "IEEE Conference on Computer Vision and Pattern Recognition (CVPR), 2024",
      year: "2024",
      paper: "https://arxiv.org/pdf/2405.12200",
      project: "https://xianpeng919.github.io/mvacon/",
    },
    {
      title: "Towards Surveillance Video-and-Language Understanding: New Dataset, Baselines, and Challenges",
      authors: "Tongtong Yuan, Xuange Zhang, Kun Liu, Bo Liu , Chen Chen, Jian Jin, Zhenzhen Jiao",
      venue: "IEEE Conference on Computer Vision and Pattern Recognition (CVPR), 2024",
      year: "2024",
      paper: "https://arxiv.org/pdf/2309.13925.pdf",
      project: "https://xuange923.github.io/Surveillance-Video-Understanding",
      code: "https://github.com/Xuange923/Surveillance-Video-Understanding",
      data: "https://github.com/Xuange923/Surveillance-Video-Understanding",
    },
    {
      title: "MMM: Generative Masked Motion Model",
      authors: "Ekkasit Pinyoanuntapong, Pu Wang, Minwoo Lee, Chen Chen",
      venue: "IEEE Conference on Computer Vision and Pattern Recognition (CVPR), 2024",
      year: "2024",
      paper: "https://arxiv.org/pdf/2312.03596.pdf",
      project: "https://exitudio.github.io/MMM-page/",
      code: "https://github.com/exitudio/MMM/",
    },
    {
      title: "Skeleton-in-Context: Unified Skeleton Sequence Modeling with In-Context Learning",
      authors: "Xinshun Wang, Zhongbin Fang, Xia Li, Xiangtai Li, Chen Chen, Mengyuan Liu",
      venue: "IEEE Conference on Computer Vision and Pattern Recognition (CVPR), 2024",
      year: "2024",
      paper: "https://openaccess.thecvf.com/content/CVPR2024/papers/Wang_Skeleton-in-Context_Unified_Skeleton_Sequence_Modeling_with_In-Context_Learning_CVPR_2024_paper.pdf",
      project: "https://bradleywang0416.github.io/skeletonincontext/",
      code: "https://github.com/fanglaosi/Skeleton-in-Context",
    },
    {
      title: "OST: Refining Text Knowledge with Optimal Spatio-Temporal Descriptor for General Video Recognition",
      authors: "Tongjia Chen, Hongshan Yu, Zhengeng Yang, Zechuan Li, Wei Sun, Chen Chen",
      venue: "IEEE Conference on Computer Vision and Pattern Recognition (CVPR), 2024",
      year: "2024",
      paper: "https://arxiv.org/pdf/2312.00096.pdf",
      project: "https://tomchen-ctj.github.io/OST/",
      code: "https://github.com/tomchen-ctj/OST",
    },
    {
      title: "Learning Semantic Proxies from Visual Prompts for Parameter-Efficient Fine-Tuning in Deep Metric Learning",
      authors: "Li Ren, Chen Chen, Liqiang Wang, Kien A. Hua",
      venue: "International Conference on Learning Representations (ICLR), 2024",
      year: "2024",
      paper: "https://arxiv.org/pdf/2402.02340.pdf",
      code: "https://github.com/Noahsark/ParameterEfficient-DML",
    },
    {
      title: "Language-assisted Deep Learning for Autistic Behaviors Recognition",
      authors: "Andong Deng, Taojiannan Yang, Chen Chen, Qian Chen, Leslie Neely, Sakiko Oyama",
      venue: "Smart Health, 2024",
      year: "2024",
      paper: "https://arxiv.org/pdf/2211.09310.pdf",
      project: "https://dengandong.github.io/UCF-ASD/",
    },
    {
      title: "Towards Improved Proxy-based Deep Metric Learning via Data-Augmented Domain Adaptation",
      authors: "Li Ren, Chen Chen, Liqiang Wang, Kien Hua",
      venue: "Thirty-Eighth AAAI Conference on Artificial Intelligence (AAAI), 2024",
      year: "2024",
      paper: "https://arxiv.org/pdf/2401.00617.pdf",
      code: "https://github.com/Noahsark/DADA",
    },
    {
      title: "Adaptive FSS: A Novel Few-Shot Segmentation Framework via Prototype Enhancement",
      authors: "Jing Wang, Jiangyun Li, Chen Chen, Yisi Zhang, Haoran Shen, Tianxiang Zhang",
      venue: "Thirty-Eighth AAAI Conference on Artificial Intelligence (AAAI), 2024",
      year: "2024",
      paper: "https://arxiv.org/pdf/2312.15731.pdf",
      project: "https://jingw193.github.io/AdaptiveFSS/",
      code: "https://github.com/jingw193/AdaptiveFSS",
    },
    {
      title: "GCNext: Towards the Unity of Graph Convolutions for Human Motion Prediction",
      authors: "Xinshun Wang, Qiongjie Cui, Chen Chen, Mengyuan Liu",
      venue: "Thirty-Eighth AAAI Conference on Artificial Intelligence (AAAI), 2024",
      year: "2024",
      paper: "https://arxiv.org/pdf/2312.11850.pdf",
      code: "https://github.com/BradleyWang0416/GCNext",
    },
    {
      title: "FreMIM: Fourier Transform Meets Masked Image Modeling for Medical Image Segmentation",
      authors: "Wenxuan Wang, Jing Wang, Chen Chen, Jianbo Jiao, Yuanxiu Cai, Shanshan Song, Jiangyun Li",
      venue: "IEEE/CVF Winter Conference on Applications of Computer Vision (WACV), 2024",
      year: "2024",
      paper: "https://arxiv.org/pdf/2304.10864.pdf",
      project: "https://rubics-xuan.github.io/FreMIM/",
      code: "https://github.com/Rubics-Xuan/FreMIM",
    },
    {
      title: "Med-DANet V2: A Flexible Dynamic Architecture for Efficient Medical Volumetric Segmentation",
      authors: "Haoran Shen, Yifu Zhang, Wenxuan Wang, Chen Chen, Jing Liu, Shanshan Song, Jiangyun Li",
      venue: "IEEE/CVF Winter Conference on Applications of Computer Vision (WACV), 2024",
      year: "2024",
      paper: "https://arxiv.org/pdf/2310.18656v1.pdf",
      project: "https://sevenshr.github.io/Med-DANet_V2/",
      code: "https://github.com/Rubics-Xuan/Med-DANet",
    }
  ]

  const publications2023: Publication[] = [
    {
      title: "Single 2D Pose with Context is Worth Hundreds of Frames for 3D Human Pose Estimation",
      authors: "Qitao Zhao, Ce Zheng, Mengyuan Liu, Chen Chen",
      venue: "Thirty-Seventh Annual Conference on Neural Information Processing Systems (NeurIPS), 2023",
      year: "2023",
      paper: "https://arxiv.org/pdf/2311.03312.pdf",
      code: "https://github.com/QitaoZhao/ContextAware-PoseFormer",
      project: "https://qitaozhao.github.io/ContextAware-PoseFormer",
    },
    {
      title: "Unsupervised Anomaly Detection in Medical Images Using Masked Diffusion Model",
      authors: "Hasan Iqbal, Umar Khalid, Chen Chen, Jing Hua",
      venue: "The 14th International Workshop on Machine Learning in Medical Imaging (MLMI) in conjunction with International Conference on Medical Image Computing and Computer Assisted Intervention (MICCAI), 2023",
      year: "2023",
      paper: "https://arxiv.org/pdf/2305.19867.pdf",
      code: "https://github.com/hasan1292/mDDPM",
      project: "https://mddpm.github.io/",
    },
    {
      title: "Rethinking Data Heterogeneity in Federated Learning: Introducing a New Notion and Standard Benchmarks",
      authors: "Saeed Vahidian, Mahdi Morafah, Chen Chen, Mubarak Shah, Bill Lin",
      venue: "IEEE Transactions on Artificial Intelligence (TAI), 2023",
      year: "2023",
      paper: "https://ieeexplore.ieee.org/document/10174745",
      code: "https://github.com/MMorafah/FL-SC-NIID",
    },
    {
      title: "Regress Before Construct: Regress Autoencoder for Point Cloud Self-supervised Learning",
      authors: "Yang Liu, Chen Chen, Can Wang, Xulin King, Mengyuan Liu",
      venue: "ACM Multimedia (ACM-MM), 2023",
      year: "2023",
      paper: "https://arxiv.org/pdf/2310.03670.pdf",
      code: "https://github.com/liuyyy111/Point-RAE",
    },
    {
      title: "Robin: A Novel Method to Produce Robust Interpreters for Deep Learning-Based Code Classifiers",
      authors: "Zhen Li, Ruqian Zhang, Deqing Zou, Ning Wang, Yating Li, Shouhuai Xu, Chen Chen, Hai Jin",
      venue: "38th IEEE/ACM International Conference on Automated Software Engineering (ASE), 2023 (21% acceptance rate)",
      year: "2023",
      paper: "https://arxiv.org/pdf/2309.10644.pdf",
      code: "https://github.com/CGCL-codes/Robin",
    },
    {
      title: "POSTER: A Pyramid Cross-Fusion Transformer Network for Facial Expression Recognition",
      authors: "Ce Zheng, Matias Mendieta, Chen Chen",
      venue: "11th International Workshop on Analysis and Modeling of Faces and Gestures in conjunction with IEEE/CVF International Conference on Computer Vision (ICCV), 2023",
      year: "2023",
      paper: "https://arxiv.org/pdf/2204.04083.pdf",
      code: "https://github.com/zczcwh/POSTER",
    },
    {
      title: "AlignDet: Aligning Pre-training and Fine-tuning in Object Detection",
      authors: "Ming Li, Jie Wu, Xionghui Wang, Chen Chen, Jie Qin, Xuefeng Xiao, Rui Wang, Min Zheng, Xin Pan",
      venue: "IEEE/CVF International Conference on Computer Vision (ICCV), 2023",
      year: "2023",
      paper: "https://arxiv.org/pdf/2307.11077.pdf",
      project: "https://liming-ai.github.io/AlignDet/",
      code: "https://github.com/liming-ai/AlignDet",
    },
    {
      title: "Source-free Domain Adaptive Human Pose Estimation",
      authors: "Qucheng Peng, Ce Zheng, Chen Chen",
      venue: "IEEE/CVF International Conference on Computer Vision (ICCV), 2023",
      year: "2023",
      paper: "https://arxiv.org/pdf/2308.03202.pdf",
      code: "https://github.com/davidpengucf/SFDAHPE",
    },
    {
      title: "RenderIH: A Large-scale Synthetic Dataset for 3D Interacting Hand Pose Estimation",
      authors: "Lijun Li, Linrui Tian, Xindi Zhang, Qi Wang, Bang Zhang, Liefeng Bo, Mengyuan Liu, Chen Chen",
      venue: "IEEE/CVF International Conference on Computer Vision (ICCV), 2023",
      year: "2023",
      paper: "https://arxiv.org/pdf/2309.09301.pdf",
      code: "https://github.com/adwardlee/RenderIH",
      data: "https://github.com/adwardlee/RenderIH",
      project: "https://adwardlee.github.io/view_renderih/",
    },
    {
      title: "Multi-view Self-supervised Disentanglement for General Image Denoising",
      authors: "Hao Chen, Chenyuan Qu, Chen Chen, Yu Zhang, Jianbo Jiao",
      venue: "IEEE/CVF International Conference on Computer Vision (ICCV), 2023",
      year: "2023",
      paper: "https://arxiv.org/pdf/2309.05049.pdf",
      project: "https://chqwer2.github.io/MeD/",
    },
    {
      title: "A Large-scale Study of Spatiotemporal Representation Learning with a New Benchmark on Action Recognition",
      authors: "Andong Deng, Taojiannan Yang, Chen Chen",
      venue: "IEEE/CVF International Conference on Computer Vision (ICCV), 2023",
      year: "2023",
      paper: "https://arxiv.org/pdf/2303.13505.pdf",
      project: "https://github.com/AndongDeng/BEAR",
    },
    {
      title: "Towards Geospatial Foundation Models via Continual Pretraining",
      authors: "Matias Mendieta, Boran Han, Xingjian Shi, Yi Zhu, Chen Chen, Mu Li",
      venue: "IEEE/CVF International Conference on Computer Vision (ICCV), 2023",
      year: "2023",
      paper: "https://arxiv.org/pdf/2302.04476.pdf",
      code: "https://github.com/mmendiet/GFM",
    },
    {
      title: "FedPerfix: Towards Partial Model Personalization of Vision Transformers in Federated Learning",
      authors: "Guangyu Sun, Matias Mendieta, Jun Luo, Shandong Wu, Chen Chen",
      venue: "IEEE/CVF International Conference on Computer Vision (ICCV), 2023",
      year: "2023",
      paper: "https://arxiv.org/pdf/2308.09160.pdf",
      code: "https://github.com/imguangyu/FedPerfix",
    },
    {
      title: "When Do Curricula Work in Federated Learning?",
      authors: "Saeed Vahidian, Sreevatsank Kadaveru, Woonjoon Baek, Weijia Wang, Vyacheslav Kungurtsev, Chen Chen, Mubarak Shah, Bill Lin",
      venue: "IEEE/CVF International Conference on Computer Vision (ICCV), 2023",
      year: "2023",
      paper: "https://arxiv.org/pdf/2212.12712.pdf",
    },
    {
      title: "PGFed: Personalize Each Client’s Global Objective for Federated Learning",
      authors: "Jun Luo, Matias Mendieta, Chen Chen, Shandong Wu",
      venue: "IEEE/CVF International Conference on Computer Vision (ICCV), 2023",
      year: "2023",
      paper: "https://arxiv.org/pdf/2212.01448.pdf",
      code: "https://github.com/ljaiverson/pgfed",
    },
    {
      title: "LAMP: Leveraging Language Prompts for Multi-person Pose Estimation",
      authors: "Shengnan Hu, Ce Zheng, Zixiang Zhou, Chen Chen, Gita Sukthankar",
      venue: "IEEE/RSJ International Conference on Intelligent Robots and Systems (IROS), 2023",
      year: "2023",
      paper: "https://arxiv.org/pdf/2307.11934.pdf",
      code: "https://github.com/shengnanh20/LAMP",
    },
    {
      title: "CEFHRI: A Communication Efficient Federated Learning Framework for Recognizing Industrial Human-Robot Interaction",
      authors: "Umar Khalid, Hasan Iqbal, Saeed Vahidian, Jing Hua, Chen Chen",
      venue: "IEEE/RSJ International Conference on Intelligent Robots and Systems (IROS), 2023",
      year: "2023",
      paper: "https://arxiv.org/pdf/2308.14965.pdf",
      code: "https://github.com/umarkhalidAI/CEFHRI-Efficient-Federated-Learning",
    },
    {
      title: "GaitSADA: Self-Aligned Domain Adaptation for mmWave Gait Recognition",
      authors: "Ekkasit Pinyoanuntapong, Ayman Ali, Kalvik Jakkala, Pu Wang, Minwoo Lee, Qucheng Peng, Chen Chen, Zhi Sun",
      venue: "IEEE 20th International Conference on Mobile Ad Hoc and Smart Systems (MASS), 2023",
      year: "2023",
      paper: "https://arxiv.org/pdf/2301.13384.pdf",
      project: "https://exitudio.github.io/GaitSADA/",
      data: "https://exitudio.github.io/GaitSADA/",
    },
    {
      title: "First Place Solution to the CVPR’2023 AQTC Challenge: A Function-Interaction Centric Approach with Spatiotemporal Visual-Language Alignment",
      authors: "Tom Tongjia Chen, Hongshan Yu, Zhengeng Yang, Ming Li, Zechuan Li, Jingwen Wang, Wei Miao, Wei Sun, Chen Chen",
      venue: "Winner of the Affordance-Centric Question-driven Task Completion Challenge at the CVPR 2023 Long-form Video Understanding and Generation Workshop, 2023",
      year: "2023",
      paper: "certificate_loveu23.pdf", // Assuming this PDF is in the public folder directly
      code: "https://github.com/tomchen-ctj/CVPR23-LOVEU-AQTC",
      highlight: "🏆 Winner",
    },
    {
      title: "Deep Learning-Based Human Pose Estimation: A Survey",
      authors: "Ce Zheng, Wenhan Wu, Chen Chen, Taojiannan Yang, Sijie Zhu, Ju Shen, Nasser Kehtarnavaz, Mubarak Shah",
      venue: "ACM Computing Surveys, 2023",
      year: "2023",
      paper: "https://arxiv.org/pdf/2012.13392.pdf",
      project: "https://github.com/zczcwh/DL-HPE",
    },
    {
      title: "DHA-FL: Enabling Efficient and Effective AIoT via Decentralized Hierarchical Asynchronous Federated Learning",
      authors: "Wesley Houston Huff, pinyarash pinyoanuntapong, Ravikumar Balakrishnan, Hao Feng, Minwoo Lee, Pu Wang, Chen Chen",
      venue: "MLSys 2023 Workshop on Resource-Constrained Learning in Wireless Networks, 2023",
      year: "2023",
      paper: "https://arxiv.org/",
    },
    {
      title: "Tutorial: Lessons Learned for Behavior Analysts from Data Scientists",
      authors: "Leslie Neely, Sakiko Oyama, Guenevere Chen, Amina Qutub, and Chen Chen",
      venue: "Perspectives on Behavior Science, 2023",
      year: "2023",
      paper: "Tutorial_Big_Data.pdf", // Assuming this PDF is in the public folder directly
    },
    {
      title: "Part Aware Contrastive Learning for Self-Supervised Action Recognition",
      authors: "Yilei Hua, Wenhan Wu, Ce Zheng, Aidong Lu, Mengyuan Liu, Chen Chen, Shiqian Wu",
      venue: "32nd International Joint Conference on Artificial Intelligence (IJCAI), 2023 (15% acceptance rate)",
      year: "2023",
      paper: "https://arxiv.org/pdf/2305.00666.pdf",
      code: "https://github.com/GitHubOfHyl97/SkeAttnCLR",
    },
    {
      title: "RAIN: Regularization on Input and Network for Black-Box Domain Adaptation",
      authors: "Qucheng Peng, Zhengming Ding, Lingjuan Lyu, Lichao Sun, Chen Chen",
      venue: "32nd International Joint Conference on Artificial Intelligence (IJCAI), 2023 (15% acceptance rate)",
      year: "2023",
      paper: "https://arxiv.org/pdf/2208.10531.pdf",
      code: "https://github.com/davidpengucf/RAIN",
    },
    {
      title: "R²Former: Unified Retrieval and Reranking Transformer for Place Recognition",
      authors: "Sijie Zhu, Linjie Yang, Chen Chen, Mubarak Shah, Xiaohui Shen, Heng Wang",
      venue: "IEEE Conference on Computer Vision and Pattern Recognition (CVPR), 2023",
      year: "2023",
      paper: "https://arxiv.org/pdf/2304.03410.pdf",
      code: "https://github.com/Jeff-Zilence/R2Former",
    },
    {
      title: "TopNet: Transformer-based Object Placement Network for Image Compositing",
      authors: "Sijie Zhu, Zhe Lin, Scott Cohen, Jason Kuen, Zhifei Zhang, Chen Chen",
      venue: "IEEE Conference on Computer Vision and Pattern Recognition (CVPR), 2023",
      year: "2023",
      paper: "https://arxiv.org/pdf/2304.03372.pdf",
    },
    {
      title: "TimeBalance: Temporally-Invariant and Temporally-Distinctive Video Representations for Semi-Supervised Action Recognition",
      authors: "Ishan Rajendrakumar Dave, Mamshad Nayeem Rizve, Chen Chen, Mubarak Shah",
      venue: "IEEE Conference on Computer Vision and Pattern Recognition (CVPR), 2023",
      year: "2023",
      paper: "https://arxiv.org/pdf/2303.16268.pdf",
      code: "https://github.com/DAVEISHAN/TimeBalance",
    },
    {
      title: "FeatER: An Efficient Network for Human Reconstruction via Feature Map-Based TransformER",
      authors: "Ce Zheng, Matias Mendieta, Taojiannan Yang, Guo-Jun Qi, Chen Chen",
      venue: "IEEE Conference on Computer Vision and Pattern Recognition (CVPR), 2023",
      year: "2023",
      paper: "https://arxiv.org/pdf/2205.15448.pdf",
      project: "https://zczcwh.github.io/feater_page/",
      code: "https://github.com/zczcwh/FeatER",
    },
    {
      title: "POTTER: Pooling Attention Transformer for Efficient Human Mesh Recovery",
      authors: "Ce Zheng, Xianpeng Liu, Guo-Jun Qi, Chen Chen",
      venue: "IEEE Conference on Computer Vision and Pattern Recognition (CVPR), 2023",
      year: "2023",
      paper: "https://arxiv.org/pdf/2303.13357.pdf",
      project: "https://zczcwh.github.io/potter_page/",
      code: "https://github.com/zczcwh/POTTER",
    },
    {
      title: "PoseFormerV2: Exploring Frequency Domain for Efficient and Robust 3D Human Pose Estimation",
      authors: "Qitao Zhao, Ce Zheng, Mengyuan Liu, Pichao Wang, Chen Chen",
      venue: "IEEE Conference on Computer Vision and Pattern Recognition (CVPR), 2023",
      year: "2023",
      paper: "https://arxiv.org/pdf/2303.17472.pdf",
      project: "https://qitaozhao.github.io/PoseFormerV2",
      code: "https://github.com/QitaoZhao/PoseFormerV2",
    },
    {
      title: "GaitMixer: Skeleton-based Gait Representation Learning via Wide-spectrum Multi-axial Mixer",
      authors: "Ekkasit Pinyoanuntapong, Ayman Ali, Pu Wang, Minwoo Lee, Chen Chen",
      venue: "IEEE International Conference on Acoustics, Speech and Signal Processing (ICASSP), 2023",
      year: "2023",
      paper: "https://arxiv.org/pdf/2210.15491.pdf",
      code: "https://github.com/exitudio/gaitmixer",
    },
    {
      title: "AIM: Adapting Image Models for Efficient Video Action Recognition",
      authors: "Taojiannan Yang, Yi Zhu, Yusheng Xie, Aston Zhang, Chen Chen, Mu Li",
      venue: "International Conference on Learning Representations (ICLR), 2023",
      year: "2023",
      paper: "https://arxiv.org/pdf/2302.03024.pdf",
      project: "https://adapt-image-models.github.io/",
    },
    {
      title: "Efficient Distribution Similarity Identification in Clustered Federated Learning via Principal Angles Between Client Data Subspaces",
      authors: "Saeed Vahidian, Mahdi Morafah, Weijia Wang, Vyacheslav Kungurtsev, Chen Chen, Mubarak Shah, Bill Lin",
      venue: "AAAI Conference on Artificial Intelligence (AAAI), 2023 (Acceptance Rate = 19.6%)",
      year: "2023",
      paper: "https://arxiv.org/pdf/2209.10526.pdf",
      code: "https://github.com/MMorafah/PACFL",
    },
    {
      title: "Refined Semantic Enhancement Towards Frequency Diffusion for Video Captioning",
      authors: "Xian Zhong, Zipeng Li, Shuqin Chen, Kui Jiang, Chen Chen, Mang Ye",
      venue: "AAAI Conference on Artificial Intelligence (AAAI), 2023",
      year: "2023",
      paper: "https://arxiv.org/pdf/2211.15076.pdf",
      code: "https://github.com/lzp870/RSFD",
    },
    {
      title: "Novel Motion Patterns Matter for Practical Skeleton-based Action Recognition",
      authors: "Mengyuan Liu, Fanyang Meng, Chen Chen, Songtao Wu",
      venue: "AAAI Conference on Artificial Intelligence (AAAI), 2023",
      year: "2023",
      paper: "https://ojs.aaai.org/index.php/AAAI/article/view/25258",
    },
    {
      title: "Revisiting Training-free NAS Metrics: An Efficient Training-based Method",
      authors: "Taojiannan Yang, Linjie Yang, Xiaojie Jin, Chen Chen",
      venue: "IEEE/CVF Winter Conference on Applications of Computer Vision (WACV), 2023",
      year: "2023",
      paper: "https://arxiv.org/pdf/2211.08666.pdf",
      code: "https://github.com/taoyang1122/Revisit_TrainingFree_NAS",
    }
  ]

  const publications2022: Publication[] = [
    {
      title: "EdgeML: Towards Network-Accelerated Federated Learning over Wireless Edge",
      authors: "Pinyarash Pinyoanuntapong, Prabhu Janakaraj, Ravikumar Balakrishnan, Minwoo Lee, Chen Chen, Pu Wang",
      venue: "Computer Networks, 2022",
      year: "2022",
      paper: "https://arxiv.org/pdf/2111.09410.pdf",
    },
    {
      title: "GALA: Toward Geometry-and-Lighting-Aware Object Search for Compositing",
      authors: "Sijie Zhu, Zhe Lin, Scott Cohen, Jason Kuen, Zhifei Zhang, Chen Chen",
      venue: "European Conference on Computer Vision (ECCV), 2022",
      year: "2022",
      paper: "https://arxiv.org/pdf/2204.00125.pdf",
      video: "https://youtu.be/xmLdfCUf2-Y",
    },
    {
      title: "GAMa: Cross-view Video Geo-localization",
      authors: "Shruti Vyas, Chen Chen, Mubarak Shah",
      venue: "European Conference on Computer Vision (ECCV), 2022",
      year: "2022",
      paper: "https://arxiv.org/pdf/2207.02431.pdf",
      code: "https://github.com/svyas23/GAMa",
      data: "https://github.com/svyas23/GAMa",
    },
    {
      title: "Med-DANet: Dynamic Architecture Network for Efficient Medical Volumetric Segmentation",
      authors: "Wenxuan Wang, Chen Chen, Jing Wang, Sen Zha, Yan Zhang, Jiangyun Li",
      venue: "European Conference on Computer Vision (ECCV), 2022",
      year: "2022",
      paper: "https://arxiv.org/pdf/2206.06575.pdf",
      code: "https://github.com/Wenxuan-1119/Med-DANet",
    },
    {
      title: "A Lightweight Graph Transformer Network for Human Mesh Reconstruction from 2D Human Pose",
      authors: "Ce Zheng, Matias Mendieta, Pu Wang, Aidong Lu, Chen Chen",
      venue: "ACM Multimedia (ACM MM), 2022",
      year: "2022",
      paper: "https://arxiv.org/pdf/2111.12696.pdf",
      code: "https://github.com/zczcwh/GTRS",
    },
    {
      title: "Magic ELF: Image Deraining Meets Association Learning and Transformer",
      authors: "Kui Jiang, Zhongyuan Wang, Chen Chen, Zheng Wang, Laizhong Cui, Chia-Wen Lin",
      venue: "ACM Multimedia (ACM MM), 2022",
      year: "2022",
      paper: "https://arxiv.org/pdf/2207.10455.pdf",
      code: "https://github.com/kuijiang94/Magic-ELF",
    },
    {
      title: "Local Learning Matters: Rethinking Data Heterogeneity in Federated Learning",
      authors: "Matias Mendieta, Taojiannan Yang, Pu Wang, Minwoo Lee, Zhengming Ding, Chen Chen",
      venue: "IEEE Conference on Computer Vision and Pattern Recognition (CVPR), 2022",
      year: "2022",
      paper: "https://arxiv.org/pdf/2111.14213.pdf",
      code: "https://github.com/mmendiet/FedAlign",
      highlight: "🏆 Best Paper Nominee (33 out of 8,161)",
    },
    {
      title: "TransGeo: Transformer Is All You Need for Cross-view Image Geo-localization",
      authors: "Sijie Zhu, Mubarak Shah, Chen Chen",
      venue: "IEEE Conference on Computer Vision and Pattern Recognition (CVPR), 2022",
      year: "2022",
      paper: "https://arxiv.org/pdf/2204.00097.pdf",
      code: "https://github.com/Jeff-Zilence/TransGeo2022",
    },
    {
      title: "SPAct: Self-supervised Privacy Preservation for Action Recognition",
      authors: "Ishan Rajendrakumar Dave, Chen Chen, Mubarak Shah",
      venue: "IEEE Conference on Computer Vision and Pattern Recognition (CVPR), 2022",
      year: "2022",
      paper: "https://arxiv.org/pdf/2203.15205.pdf",
      code: "https://github.com/DAVEISHAN/SPAct",
    },
    {
      title: "Consistency-based Active Learning for Object Detection",
      authors: "Weiping Yu, Sijie Zhu, Taojiannan Yang, Chen Chen",
      venue: "Workshop on Learning with Limited Labelled Data for Image and Video Understanding (L3DIVU) in conjunction with IEEE Conference on Computer Vision and Pattern Recognition (CVPR), 2022",
      year: "2022",
      paper: "https://arxiv.org/pdf/2103.10374.pdf",
      code: "https://github.com/we1pingyu/CALD",
    },
    {
      title: "Multi-modal Transformer for Nurse Activity Recognition",
      authors: "Momal Ijaz, Renato Diaz, Chen Chen",
      venue: "The Fifth International Workshop on Computer Vision for Physiological Measurement (CVPM) in conjunction with IEEE Conference on Computer Vision and Pattern Recognition (CVPR), 2022",
      year: "2022",
      paper: "https://arxiv.org/pdf/2204.04564.pdf",
      code: "https://github.com/Momilijaz96/MMT_for_NCRC",
    },
    {
      title: "Attention Guided Global Enhancement and Local Refinement Network for Semantic Segmentation",
      authors: "Jiangyun Li, Sen Zha, Chen Chen, Meng Ding, Tianxiang Zhang, Hong Yu",
      venue: "IEEE Transactions on Image Processing (TIP), 2022",
      year: "2022",
      paper: "https://arxiv.org/pdf/2204.04363.pdf",
      code: "https://github.com/zhasen1996/AGLN",
    },
    {
      title: "Towards Scalable and Robust AIoT via Decentralized Federated Learning",
      authors: "Pinyarash Pinyoanuntapong, Wesley Houston Huff, Minwoo Lee, Chen Chen, and Pu Wang",
      venue: "IEEE Internet of Things Magazine, 2022",
      year: "2022",
      paper: "IOT-FL.pdf", // Assuming this PDF is in the public folder directly
    },
    {
      title: "Category Guided Attention Network for Brain Tumor Segmentation in MRI",
      authors: "Jiangyun Li, Hong Yu, Chen Chen, Meng Ding, Sen Zha",
      venue: "Physics in Medicine and Biology, 2022",
      year: "2022",
      paper: "https://arxiv.org/pdf/2203.15383.pdf",
      code: "https://github.com/delugewalker/CGA-U-Net",
    },
    {
      title: "Dense Traffic Detection at Highway-Railroad Grade Crossings",
      authors: "Feng Guo, Zhuocheng Jiang, Yi Wang, Chen Chen, Yu Qian",
      venue: "IEEE Transactions on Intelligent Transportation Systems (T-ITS), 2022",
      year: "2022",
      paper: "https://ieeexplore.ieee.org/document/9686603",
    },
    {
      title: "RoPGen: Towards Robust Code Authorship Attribution via Automatic Coding Style Transformation",
      authors: "Zhen Li, Qian Chen, Chen Chen, Yayi Zou, Shouhuai Xu",
      venue: "44th International Conference on Software Engineering (ICSE), 2022 (Acceptance Rate = 26%)",
      year: "2022",
      paper: "https://arxiv.org/pdf/2202.06043.pdf",
      code: "https://github.com/RoPGen/RoPGen",
    },
    {
      title: "Degrade is Upgrade: Learning Degradation for Low-light Image Enhancement",
      authors: "Kui Jiang, Zhongyuan Wang, Zheng Wang, Chen Chen, Peng Yi, Tao Lu, Chia-Wen Lin",
      venue: "AAAI Conference on Artificial Intelligence (AAAI), 2022 (Acceptance Rate = 15% (1349/9020))",
      year: "2022",
      paper: "https://arxiv.org/pdf/2103.10621.pdf",
      code: "https://github.com/kuijiang0802/DRGN",
    },
    {
      title: "MutualNet: Adaptive ConvNet via Mutual Learning from Different Model Configurations",
      authors: "Taojiannan Yang, Sijie Zhu, Matias Mendieta, Pu Wang, Ravikumar Balakrishnan, Minwoo Lee, Tao Han, Mubarak Shah, Chen Chen",
      venue: "IEEE Transactions on Pattern Analysis and Machine Intelligence (T-PAMI), 2022",
      year: "2022",
      paper: "https://arxiv.org/pdf/2105.07085.pdf",
      code: "https://github.com/taoyang1122/MutualNet",
    }
  ]

  const publications2021: Publication[] = [
    {
      title: "Sim-to-Real Transfer in Multi-agent Reinforcement Networking for Federated Edge Computing",
      authors: "Pinyarash Pinyoanuntapong, Tagore Pothuneedi, Ravikumar Balakrishnan, Minwoo Lee, Chen Chen, Pu Wang",
      venue: "ACM/IEEE 6th Symposium on Edge Computing (SEC), 2021",
      year: "2021",
      paper: "https://arxiv.org/pdf/2110.08952.pdf",
    },
    {
      title: "Multi-Scale Hybrid Fusion Network for Single Image Deraining",
      authors: "Kui Jiang, Zhongyuan Wang, Peng Yi, Chen Chen, Guangcheng Wang, Zhen Han, Junjun Jiang, Zixiang Xiong",
      venue: "IEEE Transactions on Neural Networks and Learning Systems, 2021",
      year: "2021",
      paper: "https://ieeexplore.ieee.org/document/9547423",
      code: "https://github.com/kuihua/MSHFN",
    },
    {
      title: "A Dataset and Benchmark for Malaria Life-Cycle Classification in Thin Blood Smear Images",
      authors: "Qazi Ammar Arshad, Mohsen Ali, Saeed-ul Hassan, Chen Chen, Ayisha Imran, Ghulam Rasul, Waqas Sultani",
      venue: "Neural Computing and Applications, 2021",
      year: "2021",
      paper: "https://arxiv.org/pdf/2102.08708.pdf",
      data: "https://github.com/QaziAmmar/A-Dataset-and-Benchmark-for-Malaria-Life-Cycle-Classification-in-Thin-Blood-Smear-Images",
    },
    {
      title: "3D Human Pose Estimation with Spatial and Temporal Transformers",
      authors: "Ce Zheng, Sijie Zhu, Matias Mendieta, Taojiannan Yang, Chen Chen, Zhengming Ding",
      venue: "IEEE/CVF International Conference on Computer Vision (ICCV), 2021",
      year: "2021",
      paper: "https://arxiv.org/pdf/2103.10455.pdf",
      code: "https://github.com/zczcwh/PoseFormer",
      video: "https://www.youtube.com/watch?v=z8HWOdXjGR8",
    },
    {
      title: "Visual Explanation for Deep Metric Learning",
      authors: "Sijie Zhu, Taojiannan Yang, Chen Chen",
      venue: "IEEE Transactions on Image Processing, 2021",
      year: "2021",
      paper: "https://arxiv.org/pdf/1909.12977.pdf",
      code: "https://github.com/Jeff-Zilence/Explain_Metric_Learning",
    },
    {
      title: "Semi-supervised Domain Adaptive Retrieval via Discriminative Hashing Learning",
      authors: "Haifeng Xia, Taotao Jing, Chen Chen, Zhengming Ding",
      venue: "ACM Multimedia (ACM MM), 2021",
      year: "2021",
      paper: "DHLing_MM_2021.pdf", // Assuming this PDF is in the public folder directly
      highlight: "Oral",
    },
    {
      title: "A3D: Adaptive 3D Networks for Video Action Recognition",
      authors: "Sijie Zhu, Taojiannan Yang, Matias Mendieta, Chen Chen",
      venue: "arXiv:2011.12384",
      year: "2021",
      paper: "https://arxiv.org/pdf/2011.12384.pdf",
    },
    {
      title: "Rain-free and Residue Hand-in-Hand: A Progressive Coupled Network for Real-Time Image Deraining",
      authors: "Kui Jiang, Zhongyuan Wang, Peng Yi, Chen Chen, Zheng Wang, Xiao Wang, Junjun Jiang, Chia-Wen Lin",
      venue: "IEEE Transactions on Image Processing, 2021",
      year: "2021",
      paper: "https://ieeexplore.ieee.org/document/9515582",
      code: "https://github.com/kuijiang0802/PCNet",
    },
    {
      title: "TransBTS: Multimodal Brain Tumor Segmentation Using Transformer",
      authors: "Wenxuan Wang, Chen Chen, Meng Ding, Jiangyun Li, Hong Yu, Sen Zha",
      venue: "International Conference on Medical Image Computing and Computer Assisted Intervention (MICCAI), 2021",
      year: "2021",
      paper: "https://arxiv.org/pdf/2103.04430.pdf",
      code: "https://github.com/Wenxuan-1119/TransBTS",
      highlight: "Finalist for the MICCAI 2023 Young Scientist Publication Impact Award",
    },
    {
      title: "VIGOR: Cross-View Image Geo-localization beyond One-to-one Retrieval",
      authors: "Sijie Zhu, Taojiannan Yang, Chen Chen",
      venue: "IEEE Conference on Computer Vision and Pattern Recognition (CVPR), 2021",
      year: "2021",
      paper: "https://arxiv.org/pdf/2011.12172.pdf",
      code: "https://github.com/Jeff-Zilence/VIGOR",
      data: "https://github.com/Jeff-Zilence/VIGOR",
    },
    {
      title: "Learning Normal Dynamics in Videos with Meta Prototype Network",
      authors: "Hui Lv, Chen Chen, Zhen Cui, Chunyan Xu, Yong Li, Jian Yang",
      venue: "IEEE Conference on Computer Vision and Pattern Recognition (CVPR), 2021",
      year: "2021",
      paper: "https://arxiv.org/pdf/2104.06689.pdf",
      code: "https://github.com/ktr-hubrt/MPN/",
    },
    {
      title: "BDANet: Multiscale Convolutional Neural Network with Cross-directional Attention for Building Damage Assessment from Satellite Images",
      authors: "Yu Shen, Sijie Zhu, Taojiannan Yang, Chen Chen, Delu Pan, Jianyu Chen, Liang Xiao, Qian Du",
      venue: "IEEE Transactions on Geoscience and Remote Sensing, 2021",
      year: "2021",
      paper: "https://arxiv.org/pdf/2105.07364.pdf",
      code: "https://github.com/ShaneShen/BDANet-Building-Damage-Assessment",
    },
    {
      title: "ArcNet: Series AC Arc Fault Detection Based on Raw Current and Convolutional Neural Network",
      authors: "Yao Wang, Linming Hou, Kamal Chandra Paul, Yunsheng Ban, Chen Chen, Tiefu Zhao",
      venue: "IEEE Transactions on Industrial Informatics, 2021",
      year: "2021",
      paper: "https://ieeexplore.ieee.org/document/9392282",
    },
    {
      title: "Enhanced 3D Human Pose Estimation from Videos by Using Attention-Based Neural Network with Dilated Convolutions",
      authors: "Ruixu Liu, Ju Shen, He Wang, Chen Chen, Sen-ching Cheung, Vijayan Asari",
      venue: "International Journal of Computer Vision (IJCV), 2021",
      year: "2021",
      paper: "https://arxiv.org/pdf/2103.03170.pdf",
      code: "https://github.com/lrxjason/Attention3DHumanPose",
    },
    {
      title: "Efficient Unsupervised Monocular Depth Estimation Using Attention Guided Generative Adversarial Network",
      authors: "Sumanta Bhattacharyya, Ju Shen, Stephen Welch, Chen Chen",
      venue: "Journal of Real-Time Image Processing, 2021",
      year: "2021",
      paper: "https://link.springer.com/content/pdf/10.1007/s11554-021-01092-0.pdf",
    },
    {
      title: "Bilateral Attention Decoder: A Lightweight Decoder for Real-time Semantic Segmentation",
      authors: "Chengli Peng, Jiayi Ma, Chen Chen, Xiaojie Guo",
      venue: "Neural Networks, 2021",
      year: "2021",
      paper: "https://www.sciencedirect.com/science/article/pii/S0893608021000290",
    },
    {
      title: "Multi-level Memory Compensation Network for Rain Removal via Divide-and-Conquer Strategy",
      authors: "Kui Jiang, Zhongyuan Wang, Peng Yi, Chen Chen, Xiaofen Wang, Junjun Jiang, Zixiang Xiong",
      venue: "IEEE Journal of Selected Topics in Signal Processing, 2021",
      year: "2021",
      paper: "derain-JSTSP.pdf",
    },
    {
      title: "Revisiting Street-to-Aerial View Image Geo-localization and Orientation Estimation",
      authors: "Sijie Zhu, Taojiannan Yang, Chen Chen",
      venue: "IEEE/CVF Winter Conference on Applications of Computer Vision (WACV), 2021",
      year: "2021",
      paper: "https://arxiv.org/pdf/2005.11592.pdf",
    }
  ]

  const publications2020: Publication[] = [
    {
      title: "Decomposition Makes Better Rain Removal: An Improved Attention-guided Deraining Network",
      authors: "Kui Jiang, Zhongyuan Wang, Peng Yi, Chen Chen, Zhen Han, Tao Lu, Baojin Huang, Junjun Jiang",
      venue: "IEEE Transactions on Circuits and Systems for Video Technology, 2020",
      year: "2020",
      paper: "IADN.pdf",
      code: "https://github.com/kuihua/IADN",
    },
    {
      title: "GradAug: A New Regularization Method for Deep Neural Networks",
      authors: "Taojiannan Yang, Sijie Zhu, Chen Chen",
      venue: "Thirty-fourth Conference on Neural Information Processing Systems (NeurIPS), 2020 (Acceptance Rate = 20% (1900/9454))",
      year: "2020",
      paper: "https://arxiv.org/pdf/2006.07989.pdf",
      code: "https://github.com/taoyang1122/GradAug",
      highlight: "Acceptance Rate = 20%",
    },
    {
      title: "Cross-directional Feature Fusion Network for Building Damage Assessment from Satellite Imagery",
      authors: "Yu Shen, Sijie Zhu, Taojiannan Yang, Chen Chen",
      venue: "Artificial Intelligence for Humanitarian Assistance and Disaster Response Workshop (AI + HADR) @ Thirty-fourth Conference on Neural Information Processing Systems (NeurIPS), 2020",
      year: "2020",
      paper: "https://arxiv.org/pdf/2010.14014.pdf",
    },
    {
      title: "Detecting Plant Invasion in Urban Parks with Aerial Image Time Series and Residual Neural Network",
      authors: "Dipanwita Dutta, Gang Chen, Chen Chen, Sara A. Gagne, Changlin Li, Christa Rogers, Christopher Matthews",
      venue: "Remote Sensing, 2020",
      year: "2020",
      paper: "https://www.mdpi.com/2072-4292/12/21/3493#",
    },
    {
      title: "NDVI-Net: A Fusion Network for Generating High-Resolution Normalized Difference Vegetation Index in Remote Sensing",
      authors: "Hao Zhang, Jiayi Ma, Chen Chen, Xin Tian",
      venue: "ISPRS Journal of Photogrammetry and Remote Sensing, 2020",
      year: "2020",
      paper: "ISPRS-NDVI-2020.pdf",
    },
    {
      title: "Efficient Deep Learning of Non-local Features for Hyperspectral Image Classification",
      authors: "Yu Shen, Sijie Zhu, Chen Chen, Qian Du, Liang Xiao, Jianyu Chen, Delu Pan",
      venue: "IEEE Transactions on Geoscience and Remote Sensing, 2020",
      year: "2020",
      paper: "https://arxiv.org/pdf/2008.00542.pdf",
      code: "https://github.com/ShaneShen/ENL-FCN",
    },
    {
      title: "MutualNet: Adaptive ConvNet via Mutual Learning from Network Width and Resolution",
      authors: "Taojiannan Yang, Sijie Zhu, Chen Chen, Yan Shen, Mi Zhang, Andrew Willis",
      venue: "European Conference on Computer Vision (ECCV), 2020 (Oral) (Acceptance Rate = 2% (104/5205))",
      year: "2020",
      paper: "https://arxiv.org/pdf/1909.12978.pdf",
      code: "https://github.com/taoyang1122/MutualNet",
      video: "https://www.youtube.com/watch?v=RzzxhkJConk",
      highlight: "Oral (Acceptance Rate = 2%)",
    },
    {
      title: "VisDrone-DET2020: The Vision Meets Drone Object Detection in Image Challenge Results",
      authors: "Dawei Du, et al.",
      venue: "ECCV 2020 Workshop \"Vision Meets Drone: A Challenge\"",
      year: "2020",
      paper: "https://link.springer.com/content/pdf/10.1007%2F978-3-030-66823-5_42.pdf",
      highlight: "Our solution ranked 7th",
    },
    {
      title: "FedAir: Towards Multi-hop Federated Learning Over-the-Air",
      authors: "Pinyarash Pinyoanuntapong, Prabhu Janakaraj, Pu Wang, Minwoo Lee, Chen Chen",
      venue: "IEEE 21st International Workshop on Signal Processing Advances in Wireless Communications (SPAWC), 2020",
      year: "2020",
      paper: "Multi-hop_FL.pdf",
    },
    {
      title: "Video Anomaly Detection for Smart Surveillance",
      authors: "Sijie Zhu, Chen Chen, Waqas Sultani",
      venue: "Book Chapter of Computer Vision: A Reference Guide",
      year: "2020",
      paper: "https://arxiv.org/pdf/2004.00222.pdf",
    },
    {
      title: "Action Recognition in Real-World Videos",
      authors: "Waqas Sultani, Qazi Ammar Arshad, Chen Chen",
      venue: "Book Chapter of Computer Vision: A Reference Guide",
      year: "2020",
      paper: "https://arxiv.org/pdf/2004.10774.pdf",
    },
    {
      title: "Pan-GAN: An Unsupervised Learning Method for Pan-sharpening Using a Generative Adversarial Network",
      authors: "Jiayi Ma, Wei Yu, Chen Chen, Pengwei Liang, Xiaojie Guo, Junjun Jiang",
      venue: "Information Fusion, 2020.",
      year: "2020",
      paper: "Pan-GAN.pdf",
      code: "https://github.com/jiayi-ma/PanGAN",
    },
    {
      title: "CP-NAS: Child-Parent Neural Architecture Search for 1-bit CNNs",
      authors: "Li'an Zhuo, Baochang Zhang, Hanlin Chen, Linlin Yang, Chen Chen, Yanjun Zhu, David Doermann",
      venue: "International Joint Conference on Artificial Intelligence (IJCAI), 2020 (Acceptance Rate = 12.6%)",
      year: "2020",
      paper: "https://arxiv.org/pdf/2005.00057.pdf",
    },
    {
      title: "Density Map Guided Object Detection in Aerial Image",
      authors: "Changlin Li, Taojiannan Yang, Sijie Zhu, Chen Chen, Shanyue Guan",
      venue: "IEEE Conference on Computer Vision and Pattern Recognition (CVPR) (EarthVision Workshop), 2020",
      year: "2020",
      paper: "https://arxiv.org/pdf/2004.05520.pdf",
      code: "https://github.com/Cli98/DMNet",
    },
    {
      title: "Attention Mechanism Exploits Temporal Contexts: Real-time 3D Human Pose Reconstruction",
      authors: "Ruixu Liu, Ju Shen, He Wang, Chen Chen, Sen-ching Cheung, Vijayan Asari",
      venue: "IEEE Conference on Computer Vision and Pattern Recognition (CVPR), 2020 (Oral) (Acceptance Rate = 5.7%)",
      year: "2020",
      paper: "3D-pose.pdf",
      code: "https://github.com/lrxjason/Attention3DHumanPose",
      video: "https://sites.google.com/a/udayton.edu/jshen1/pose3d",
      highlight: "Oral (Acceptance Rate = 5.7%)",
    },
    {
      title: "Multi-Scale Progressive Fusion Network for Single Image Deraining",
      authors: "Kui Jiang, Zhongyuan Wang, Peng Yi, Chen Chen, Baojin Huang, Yimin Luo, Jiayi Ma, Junjun Jiang",
      venue: "IEEE Conference on Computer Vision and Pattern Recognition (CVPR), 2020",
      year: "2020",
      paper: "https://arxiv.org/pdf/2003.10985.pdf",
      code: "https://github.com/kuihua/MSPFN",
    },
    {
      title: "Automated Monitoring for Security Camera Networks: Promise from Computer Vision Labs",
      authors: "Chen Chen, Raymond Surette, Mubarak Shah",
      venue: "Security Journal, 2020.",
      year: "2020",
      paper: "Chen2020_Article_AutomatedMonitoringForSecurity.pdf",
    }
  ]

  const publications2019: Publication[] = [
    {
      title: "Real-Time Dense Semantic Labeling with Dual-Path Framework for High-Resolution Remote Sensing Image",
      authors: "Yuhao Wang, Chen Chen, Meng Ding, Jiangyun Li",
      venue: "Remote Sensing, 2019.",
      year: "2019",
      paper: "RS-2019.pdf",
    },
    {
      title: "Infrared and Visible Image Fusion via Detail Preserving Adversarial Learning",
      authors: "Jiayi Ma, Pengwei Liang, Wei Yu, Chen Chen, Xiaojie Guo, Jia Wu, Junjun Jiang",
      venue: "Information Fusion, 2019.",
      year: "2019",
      paper: "IF2019.pdf",
      code: "https://github.com/jiayi-ma/ResNetFusion",
    },
    {
      title: "SmokeNet: Satellite Smoke Scene Detection Using Convolutional Neural Network with Spatial and Channel-Wise Attention",
      authors: "Rui Ba, Chen Chen, Jiang Yuan, Weiguo Song, Siuming Lo",
      venue: "Remote Sensing, 2019.",
      year: "2019",
      paper: "smokenet.pdf",
      project: "http://complex.ustc.edu.cn/2019/0802/c18202a389656/page.htm",
      data: "https://onedrive.live.com/?authkey=%21AFYQkl1tP%2DQh3Ek&id=2B888FC2F8F47809%21857&cid=2B888FC2F8F47809",
    },
    {
      title: "3D Dilated Multi-Fiber Network for Real-time Brain Tumor Segmentation in MRI",
      authors: "Chen Chen, Xiaopeng Liu, Meng Ding, Junfeng Zheng, Jiangyun Li",
      venue: "International Conference on Medical Image Computing and Computer Assisted Intervention (MICCAI), 2019.",
      year: "2019",
      paper: "https://arxiv.org/pdf/1904.03355.pdf",
      code: "https://github.com/China-LiuXiaopeng/BraTS-DMFNet",
    },
    {
      title: "An Efficient 3D CNN for Action/Object Segmentation in Video",
      authors: "Rui Hou, Chen Chen, Mubarak Shah, Rahul Sukthankar",
      venue: "British Machine Vision Conference (BMVC), 2019.",
      year: "2019",
      paper: "https://arxiv.org/pdf/1907.08895.pdf",
      project: "objseg.html",
    },
    {
      title: "Deep Manifold Structure Transfer for Action Recognition",
      authors: "Ce Li, Baochang Zhang, Chen Chen, Qixiang Ye, Jungong Han, Rongrong Ji",
      venue: "IEEE Transactions on Image Processing, 2019.",
      year: "2019",
      paper: "tip2019.pdf",
    },
    {
      title: "S3D: Scalable Pedestrian Detection via Score Scale Surface Discrimination",
      authors: "Xiao Wang, Chao Liang, Chen Chen, Jun Chen, Zheng Wang, Zhen Han, Chunxia Xiao",
      venue: "IEEE Transactions on Circuits and Systems for Video Technology, 2019.",
      year: "2019",
      paper: "tcsvt2019.pdf",
    },
    {
      title: "GEOCAPSNET: Ground to Aerial View Image Geo-localization Using Capsule Network",
      authors: "Bin Sun, Chen Chen, Yingying Zhu, Jianmin Jiang",
      venue: "IEEE International Conference on Multimedia and Expo (ICME) 2019. (Oral)",
      year: "2019",
      paper: "GeoCapsNet.pdf",
      highlight: "Oral",
    },
    {
      title: "Joint Dynamic Pose Image and Space Time Reversal for Human Action Recognition from Videos",
      authors: "Mengyuan Liu, Fanyang Meng, Chen Chen, Songtao Wu",
      venue: "33rd AAAI Conference on Artificial Intelligence (AAAI), 2019. (Oral)",
      year: "2019",
      paper: "AAAI2019_action_recognition.pdf",
      video: "https://nkliuyifang.github.io/images/AAAI2019.mp4",
      highlight: "Oral",
    },
    {
      title: "Calibrated Stochastic Gradient Descent for Convolutional Neural Networks",
      authors: "Li'an Zhuo, Baochang Zhang, Chen Chen, David Doermann, Jianzhuang Liu, Qixiang Ye",
      venue: "33rd AAAI Conference on Artificial Intelligence (AAAI), 2019.",
      year: "2019",
      paper: "AAAI-CSGD.pdf",
    },
    {
      title: "Semi-Supervised Discriminant Multi-Manifold Analysis for Action Recognition",
      authors: "Zengmin Xu, Ruimin Hu, Jun Chen, Chen Chen, Junjun Jiang, Jiaofen Li, Hongyang Li",
      venue: "IEEE Transactions on Neural Networks and Learning Systems (TNNLS), 2019",
      year: "2019",
      paper: "tnnls-19.pdf",
      code: "SourceCode.zip",
    }
  ]

  const publications2018: Publication[] = [
    {
      title: "Hyperspectral Image Classification in the Presence of Noisy Labels",
      authors: "Junjun Jiang, Jiayi Ma, Zheng Wang, Chen Chen, and Xianming Liu",
      venue: "IEEE Transactions on Geoscience and Remote Sensing, 2018",
      year: "2018",
      paper: "TGRS-noisy-label.pdf",
      code: "https://github.com/junjun-jiang/RLPA",
    },
    {
      title: "JRTIP Special Issue Editorial: Special Issue on Advances in Real-Time Image Processing for Remote Sensing",
      authors: "Chen Chen, Wei Li, Lianru Gao, Hengchao Li, Javier Plaza",
      venue: "Journal of Real-Time Image Processing",
      year: "2018",
      paper: "JRTIP-editorial.pdf",
    },
    {
      title: "An End-to-end 3D Convolutional Neural Network for Action Detection and Segmentation in Videos",
      authors: "Rui Hou, Chen Chen, Mubarak Shah",
      venue: "arXiv preprint",
      year: "2018",
      paper: "https://arxiv.org/pdf/1712.01111.pdf",
      code: "https://github.com/ilikepistachio/TCNN_STCNN",
    },
    {
      title: "SLR: Semi-coupled Locality Constrained Representation for Very Low Resolution Face Recognition and Super Resolution",
      authors: "Tao Lu, Xitong Chen, Yanduo Zhang, Chen Chen, Zixiang Xiong",
      venue: "IEEE Access",
      year: "2018",
      paper: "Face-SR-IEEE-Access.pdf",
      code: "SLRCode.zip",
    },
    {
      title: "Memory Attention Networks for Skeleton-based Action Recognition",
      authors: "Chunyu Xie, Ce Li, Baochang Zhang, Chen Chen, Jungong Han, Changqing Zou, Jianzhuang Liu",
      venue: "International Joint Conference on Artificial Intelligence (IJCAI), 2018",
      year: "2018",
      paper: "https://arxiv.org/pdf/1804.08254.pdf",
    },
    {
      title: "Real-world Anomaly Detection in Surveillance Videos",
      authors: "Waqas Sultani, Chen Chen, Mubarak Shah",
      venue: "IEEE Conference on Computer Vision and Pattern Recognition (CVPR), 2018",
      year: "2018",
      paper: "https://arxiv.org/pdf/1801.04264.pdf",
      video: "https://www.youtube.com/watch?v=qS1iPiSW3RE",
      project: "https://www.crcv.ucf.edu/research/real-world-anomaly-detection-in-surveillance-videos/",
      data: "https://visionlab.uncc.edu/downloads_new/cchen62/data/",
      highlight: "Note: The \"Anomaly_Train.txt\" file in the zip file is corrupted, please down it here: Anomaly_Train.txt",
    },
    {
      title: "Gabor Convolutional Networks",
      authors: "Shangzhen Luan, Chen Chen, Baochang Zhang, Jungong Han, Jianzhuang Liu",
      venue: "IEEE Transactions on Image Processing, 2018",
      year: "2018",
      paper: "TIP-2018.pdf",
      code: "https://github.com/bczhangbczhang/Gabor-Convolutional-Networks",
    },
    {
      title: "One-two-one Networks for Compression Artifacts Reduction in Remote Sensing",
      authors: "Baochang Zhang, Jiaxin Gu, Chen Chen, Jungong Han, Xiangbo Su, Xianbin Cao, Jianzhuang Liu",
      venue: "ISPRS Journal of Photogrammetry and Remote Sensing, 2018",
      year: "2018",
      paper: "https://arxiv.org/pdf/1804.00256.pdf",
    },
    {
      title: "Multispectral Satellite Image Denoising via Adaptive Cuckoo Search-Based Wiener Filter",
      authors: "Shilpa Suresh, Shyam Lal, Chen Chen, Turgay Celik",
      venue: "IEEE Transactions on Geoscience and Remote Sensing, 2018",
      year: "2018",
      paper: "paper/TGRS-multispectral-2018.pdf", // Path needs to be from public folder
    },
    {
      title: "SuperPCA: A Superpixelwise Principal Component Analysis Approach for Unsupervised Feature Extraction of Hyperspectral Imagery",
      authors: "Junjun Jiang, Jiayi Ma, Chen Chen, Zhongyuan Wang, Lizhe Wang",
      venue: "IEEE Transactions on Geoscience and Remote Sensing, 2018",
      year: "2018",
      paper: "paper/SuperPCA.pdf", // Path needs to be from public folder
      code: "https://github.com/junjun-jiang/SuperPCA",
    }
  ]

  const publications2017: Publication[] = [
    {
      title: "Tube Convolutional Neural Network (T-CNN) for Action Detection in Videos",
      authors: "Rui Hou, Chen Chen, Mubarak Shah",
      venue: "International Conference on Computer Vision (ICCV), 2017",
      year: "2017",
      paper: "https://arxiv.org/pdf/1703.10664.pdf",
      project: "https://www.crcv.ucf.edu/research/tube-convolutional-neural-network-t-cnn-for-action-detection-in-videos/",
      code: "https://github.com/ilikepistachio/tcnn",
    },
    {
      title: "Cross-View Image Matching for Geo-localization in Urban Environments",
      authors: "Yicong Tian, Chen Chen, Mubarak Shah",
      venue: "IEEE Conference on Computer Vision and Pattern Recognition (CVPR), 2017",
      year: "2017",
      paper: "https://arxiv.org/pdf/1703.07815.pdf",
      project: "https://www.crcv.ucf.edu/research/cross-view-image-matching-for-geo-localization-in-urban-environments/",
      data: "https://www.crcv.ucf.edu/research/cross-view-image-matching-for-geo-localization-in-urban-environments/",
      code: "https://www.crcv.ucf.edu/research/cross-view-image-matching-for-geo-localization-in-urban-environments/",
    },
    {
      title: "Binary Coding for Partial Action Analysis with Limited Observation Ratios",
      authors: "Jie Qin, Li Liu, Ling Shao, Bingbing Ni, Chen Chen, Fumin Shen, Yunhong Wang",
      venue: "IEEE Conference on Computer Vision and Pattern Recognition (CVPR), 2017",
      year: "2017",
      paper: "paper/binary-action-CVPR2017.pdf", // Path needs to be from public folder
    },
    {
      title: "Manifold Constrained Low-Rank Decomposition",
      authors: "Chen Chen, Baochang Zhang, Alessio Del Bue, Vittorio Murino",
      venue: "International Conference on Computer Vision Workshop (ICCV) Workshop, 2017",
      year: "2017",
      paper: "https://arxiv.org/pdf/1708.01846.pdf",
    },
    {
      title: "Multi-Temporal Depth Motion Maps-Based Local Binary Patterns for 3-D Human Action Recognition",
      authors: "Chen Chen, Mengyuan Liu, Hong Liu, Baochang Zhang, Jungong Han, Nasser Kehtarnavaz",
      venue: "IEEE Access, 2017",
      year: "2017",
      paper: "https://ieeexplore.ieee.org/document/8055546",
    },
    {
      title: "Robust 3D Action Recognition through Sampling Local Appearances and Global Distributions",
      authors: "Mengyuan Liu, Hong Liu, Chen Chen",
      venue: "IEEE Transactions on Multimedia, 2017",
      year: "2017",
      paper: "https://arxiv.org/pdf/1712.01090.pdf",
    },
    {
      title: "Latent Constrained Correlation Filter",
      authors: "Baochang Zhang, Shangzhen Luan, Chen Chen, Jungong Han, Wei Wang, Alessandro Perina, Ling Shao",
      venue: "IEEE Transactions on Image Processing, 2017",
      year: "2017",
      paper: "LCCF.pdf", // Assuming this PDF is in the public folder directly
      code: "https://github.com/bczhangbczhang/Latent-Constrained-Correlation-Filter",
    },
    {
      title: "Person Re-identification via Discrepancy Matrix and Matrix Metric",
      authors: "Zheng Wang, Ruimin Hu, Chen Chen, Yi Yu, Junjun Jiang, Chao Liang, Shin'ichi Satoh",
      venue: "IEEE Transactions on Cybernetics, 2017",
      year: "2017",
      paper: "TCYB-Re-ID-2017.pdf", // Assuming this PDF is in the public folder directly
    },
    {
      title: "Image Reconstruction via Manifold Constrained Convolutional Sparse Coding for Image Sets",
      authors: "Linlin Yang, Ce Li, Jungong Han, Chen Chen, Qixiang Ye, Baochang Zhang, Xianbin Cao, Wanquan Liu",
      venue: "IEEE Journal of Selected Topics in Signal Processing, 2017",
      year: "2017",
      paper: "STSP-2017.pdf", // Assuming this PDF is in the public folder directly
    },
    {
      title: "Fusing Local and Global Features for High-Resolution Scene Classification",
      authors: "Xiaoyong Bian, Chen Chen, Long Tian, Qian Du",
      venue: "IEEE Journal of Selected Topics in Applied Earth Observations and Remote Sensing, 2017",
      year: "2017",
      paper: "JSTARS-2017.pdf", // Assuming this PDF is in the public folder directly
    },
    {
      title: "Enhanced Skeleton Visualization for View Invariant Human Action Recognition",
      authors: "Mengyuan Liu, Hong Liu, Chen Chen",
      venue: "Pattern Recognition, 2017",
      year: "2017",
      paper: "PR_2017.pdf", // Assuming this PDF is in the public folder directly
      code: "https://github.com/nkliuyifang/Skeleton-based-Human-Action-Recognition",
    },
    {
      title: "Action Recognition Using 3D histograms of Texture and A Multi-class Boosting Classifier",
      authors: "Baochang Zhang, Yun Yang, Chen Chen, Linlin Yang, Jungong Han, Ling Shao",
      venue: "IEEE Transactions on Image Processing, 2017",
      year: "2017",
      paper: "TIP-2017.pdf", // Assuming this PDF is in the public folder directly
    },
    {
      title: "3D Action Recognition Using Multi-scale Energy-based Global Ternary Image",
      authors: "Mengyuan Liu, Hong liu, Chen Chen",
      venue: "IEEE Transactions on Circuits and Systems for Video Technology, 2017",
      year: "2017",
      paper: "TCSVT_2017.pdf", // Assuming this PDF is in the public folder directly
    },
    {
      title: "Spatial-Aware Collaborative Representation for Hyperspectral Remote Sensing Image Classification",
      authors: "Junjun Jiang, Chen Chen, Yi Yu, Xinwei Jiang, Jiayi Ma",
      venue: "IEEE Geoscience and Remote Sensing Letters, 2017",
      year: "2017",
      paper: "GRSL_2017.pdf", // Assuming this PDF is in the public folder directly
      code: "https://github.com/junjun-jiang/JSaCR",
    },
    {
      title: "Single Image Super-Resolution via Locally Regularized Anchored Neighborhood Regression and Nonlocal Means",
      authors: "Junjun Jiang, Xiang Ma, Chen Chen, Tao Lu, Zhongyuan Wang, Jiayi Ma",
      venue: "IEEE Transactions on Multimedia, 2017",
      year: "2017",
      paper: "TMM_Image_SR_2016.pdf", // Assuming this PDF is in the public folder directly
    },
    {
      title: "Noise Robust Face Image Super-resolution through Smooth Sparse Representation",
      authors: "Junjun Jiang, Jiayi Ma, Chen Chen, Xinwei Jiang, Zheng Wang",
      venue: "IEEE Transactions on Cybernetics, 2017",
      year: "2017",
      paper: "TCYB_2016.pdf", // Assuming this PDF is in the public folder directly
      code: "http://www.escience.cn/people/jiangjunjun/Project_Code.html",
    },
    {
      title: "Output Constraint Transfer for Kernelized Correlation Filter in Tracking",
      authors: "Baochang Zhang, Zhigang Li, Xianbin Cao, Qixiang Ye, Chen Chen, Linlin Shen, Alessandro Perina, Rongrong Ji",
      venue: "IEEE Transactions on Systems, Man, and Cybernetics: Systems, 2017",
      year: "2017",
      paper: "OCT_Tracking.pdf", // Assuming this PDF is in the public folder directly
      code: "https://github.com/bczhangbczhang/OCT-KCF",
    },
    {
      title: "SRLSP: A Face Image Super-Resolution Algorithm Using Smooth Regression with Local Structure Prior",
      authors: "Junjun Jiang, Chen Chen, Jiayi Ma, Zheng Wang, Zhongyuan Wang, Ruimin Hu",
      venue: "IEEE Transactions on Multimedia, 2017",
      year: "2017",
      paper: "TMM_FaceSR_2016.pdf", // Assuming this PDF is in the public folder directly
      code: "https://github.com/junjun-jiang/LANR-NLM",
    },
    {
      title: "Action Recognition from Depth Sequences Using Weighted Fusion of 2D and 3D Auto-Correlation of Gradients Features",
      authors: "Chen Chen, Baochang Zhang, Zhenjie Hou, Junjun Jiang, Mengyuan Liu, Yun Yang",
      venue: "Multimedia Tools and Applications, 2017",
      year: "2017",
      paper: "MTAP-2016-1.pdf", // Assuming this PDF is in the public folder directly
    },
    {
      title: "A Survey of Depth and Inertial Sensor Fusion for Human Action Recognition",
      authors: "Chen Chen, Roozbeh Jafari, Nasser Kehtarnavaz",
      venue: "Multimedia Tools and Applications, 2017",
      year: "2017",
      paper: "MTA2015.pdf", // Assuming this PDF is in the public folder directly
    },
    {
      title: "Real-time Continuous Action Detection and Recognition Using Depth Images and Inertial Signals",
      authors: "Neha Dawar, Chen Chen, Roozbeh Jafari, Nasser Kehtarnavaz",
      venue: "IEEE International Symposium on Industrial Electronics, Edinburgh, United Kingdom, 2017",
      year: "2017",
      paper: "ISIE2017.pdf", // Assuming this PDF is in the public folder directly
      demo: "http://www.utdallas.edu/~kehtar/ContinuousAction.avi",
    },
    {
      title: "Weighted Fusion of Depth and Inertial Data to Improve View Invariance for Real-time Human Action Recognition",
      authors: "Chen Chen, Huiyan Hao, Roozbeh Jafari, Nasser Kehtarnavaz",
      venue: "SPIE Conference on Real-Time Image and Video Processing, Anaheim, California, 2017",
      year: "2017",
      paper: "ProcSPIE-Chen.pdf", // Assuming this PDF is in the public folder directly
      data: "http://www.utdallas.edu/~kehtar/UTD-MHAD.html",
    }
  ]

  const publications2016: Publication[] = [
    {
      title: "Remote Sensing Image Scene Classification Using Multi-scale Completed Local Binary Patterns and Fisher Vectors",
      authors: "Longhui Huang, Chen Chen, Wei Li, Qian Du",
      venue: "Remote Sensing, 2016",
      year: "2016",
      paper: "RS2016.pdf", // Assuming this PDF is in the public folder directly
      code: "MS_CLBP_Scene_Classification.zip", // Assuming this zip is in the public folder directly
    },
    {
      title: "Scene Classification Using Local and Global Features with Collaborative Representation Fusion",
      authors: "Jinyi Zou, Wei Li, Chen Chen, Qian Du",
      venue: "Information Sciences, 2016",
      year: "2016",
      paper: "INS2016.pdf", // Assuming this PDF is in the public folder directly
    },
    {
      title: "A Real-Time Human Action Recognition System Using Depth and Inertial Sensor Fusion",
      authors: "Chen Chen, Roozbeh Jafari, Nasser Kehtarnavaz",
      venue: "IEEE Sensors Journal, 2016",
      year: "2016",
      paper: "Sensors-2015.pdf", // Assuming this PDF is in the public folder directly
    },
    {
      title: "Land-Use Scene Classification Using Multi-Scale Completed Local Binary Patterns",
      authors: "Chen Chen, Baochang Zhang, Hongjun Su, Wei Li, Lu Wang",
      venue: "Signal, Image and Video Processing, 2016",
      year: "2016",
      paper: "MS_CLBP.pdf", // Assuming this PDF is in the public folder directly
    },
    {
      title: "Real-Time Human Action Recognition Based on Depth Motion Maps",
      authors: "Chen Chen, Kui Liu, Nasser Kehtarnavaz",
      venue: "Journal of Real-Time Image Processing, 2016",
      year: "2016",
      paper: "JRTIP-Action_Recognition.pdf", // Assuming this PDF is in the public folder directly
      code: "DMM_CRC.zip", // Assuming this zip is in the public folder directly
    },
    {
      title: "3D Action Recognition Using Multi-temporal Depth Motion Maps and Fisher Vector",
      authors: "Chen Chen, Mengyuan Liu, Baochang Zhang, Jungong Han, Junjun Jiang, Hong Liu",
      venue: "International Joint Conference on Artificial Intelligence (IJCAI), 2016",
      year: "2016",
      paper: "IJCAI2016.pdf", // Assuming this PDF is in the public folder directly
    },
    {
      title: "Energy-Based Global Ternary Image for Action Recognition Using Sole Depth Sequences",
      authors: "Mengyuan Liu, Hong Liu, Chen Chen, Maryam Najafian",
      venue: "IEEE International Conference on 3D Vision (3DV), 2016",
      year: "2016",
      paper: "3DV_2016.pdf", // Assuming this PDF is in the public folder directly
    },
    {
      title: "A Computationally Efficient Denoising and Hole-filling Method for Depth Image Enhancement",
      authors: "Suolan Liu, Chen Chen, Nasser Kehtarnavaz",
      venue: "SPIE Conference on Real-Time Image and Video Processing, Brussels, Belgium, 2016",
      year: "2016",
      paper: "SPIE2016.pdf", // Assuming this PDF is in the public folder directly
    },
    {
      title: "Fusion of Depth, Skeleton, and Inertial Data for Human Action Recognition",
      authors: "Chen Chen, Roozbeh Jafari, Nasser Kehtarnavaz",
      venue: "IEEE International Conference on Acoustics, Speech and Signal Processing (ICASSP), 2016",
      year: "2016",
      paper: "ICASSP2016-1.pdf", // Assuming this PDF is in the public folder directly
    },
    {
      title: "Hyperspectral Image Classification Using Set-to-Set Distance",
      authors: "Junjun Jiang, Chen Chen, Xin Song, Zhihua Cai",
      venue: "IEEE International Conference on Acoustics, Speech and Signal Processing (ICASSP), 2016",
      year: "2016",
      paper: "ICASSP2016-2.pdf", // Assuming this PDF is in the public folder directly
      code: "https://github.com/junjun-jiang/ssd",
    },
    {
      title: "L1-L1 Norms for Face Super-Resolution with Mixed Gaussian-Impulse Noise",
      authors: "Junjun Jiang, Zhongyuan Wang, Chen Chen, Tao Lu",
      venue: "IEEE International Conference on Acoustics, Speech and Signal Processing (ICASSP), 2016",
      year: "2016",
      paper: "ICASSP2016-3.pdf", // Assuming this PDF is in the public folder directly
    }
  ]

  const publications2015: Publication[] = [
    {
      title: "Local Binary Patterns and Extreme Learning Machine for Hyperspectral Imagery Classification",
      authors: "Wei Li, Chen Chen, Hongjun Su, Qian Du",
      venue: "IEEE Transactions on Geoscience and Remote Sensing, 2015",
      year: "2015",
      paper: "TGRS_2015.pdf", // Assuming this PDF is in the public folder directly
      code: "Indian_ELM_LBP_test.zip", // Assuming this zip is in the public folder directly
    },
    {
      title: "Improving Human Action Recognition Using Fusion of Depth Camera and Inertial Sensors",
      authors: "Chen Chen, Roozbeh Jafari, Nasser Kehtarnavaz",
      venue: "IEEE Transactions on Human-Machine Systems, 2015",
      year: "2015",
      paper: "THMS2015.pdf", // Assuming this PDF is in the public folder directly
    },
    {
      title: "Gradient Local Auto-Correlations and Extreme Learning Machine for Depth-Based Activity Recognition",
      authors: "Chen Chen, Zhenjie Hou, Baochang Zhang, Junjun Jiang, Yun Yang",
      venue: "International Symposium on Visual Computing (ISVC), 2015",
      year: "2015",
      paper: "ISVC2015.pdf", // Assuming this PDF is in the public folder directly
    },
    {
      title: "UTD-MHAD: A Multimodal Dataset for Human Action Recognition Utilizing a Depth Camera and a Wearable Inertial Sensor",
      authors: "Chen Chen, Roozbeh Jafari, Nasser Kehtarnavaz",
      venue: "IEEE International Conference on Image Processing (ICIP), 2015",
      year: "2015",
      paper: "ICIP2015-Chen-Final.pdf", // Assuming this PDF is in the public folder directly
      project: "http://www.utdallas.edu/~kehtar/UTD-MHAD.html",
    },
    {
      title: "Gabor-Filtering-Based Completed Local Binary Patterns for Land-Use Scene Classification",
      authors: "Chen Chen, Libing Zhou, Jianzhong Guo, Wei Li, Hongjun Su, Fangda Guo",
      venue: "IEEE International Conference on Multimedia Big Data, 2015",
      year: "2015",
      paper: "BigMM_2015_Final.pdf", // Assuming this PDF is in the public folder directly
    },
    {
      title: "Action Recognition from Depth Sequences Using Depth Motion Maps-based Local Binary Patterns",
      authors: "Chen Chen, Roozbeh Jafari, Nasser Kehtarnavaz",
      venue: "IEEE Winter Conference on Applications of Computer Vision (WACV), 2015",
      year: "2015",
      paper: "WACV2015.pdf", // Assuming this PDF is in the public folder directly
      code: "DMM-LBP.zip", // Assuming this zip is in the public folder directly
    }
  ]

  const publications2014: Publication[] = [
    {
      title: "Fusion of Inertial and Depth Sensor Data for Robust Hand Gesture Recognition",
      authors: "Kui Liu, Chen Chen, Roozbeh Jafari, Nasser Kehtarnavaz",
      venue: "IEEE Sensors Journal, 2014",
      year: "2014",
      paper: "sensors_fusion.pdf", // Assuming this PDF is in the public folder directly
    },
    {
      title: "Spectral-Spatial Classification of Hyperspectral Image based on Kernel Extreme Learning Machine",
      authors: "Chen Chen, Wei Li, Hongjun Su, Kui Liu",
      venue: "Remote Sensing, 2014",
      year: "2014",
      paper: "remotesensing-06-05795.pdf", // Assuming this PDF is in the public folder directly
    },
    {
      title: "Spectral-Spatial Preprocessing Using Multihypothesis Prediction for Noise-Robust Hyperspectral Image Classification",
      authors: "Chen Chen, Wei Li, Eric W. Tramel, Minshan Cui, Saurabh Prasad, James E. Fowler",
      venue: "IEEE Journal of Selected Topics in Applied Earth Observations and Remote Sensing, 2014",
      year: "2014",
      paper: "JSTARS_2014.pdf", // Assuming this PDF is in the public folder directly
    },
    {
      title: "Reconstruction of Hyperspectral Imagery from Random Projections Using Multihypothesis Prediction",
      authors: "Chen Chen, Wei Li, Eric W. Tramel, James E. Fowler",
      venue: "IEEE Transactions on Geoscience and Remote Sensing, 2014",
      year: "2014",
      paper: "CLT2014.pdf", // Assuming this PDF is in the public folder directly
      project: "http://my.ece.msstate.edu/faculty/fowler/CPPCA/",
      code: "mh-cppca-1.0-1.zip", // Assuming this zip is in the public folder directly
      highlight: "A benchmark algorithm for compressed sensing image reconstruction",
    },
    {
      title: "Multi-HMM Classification for Hand Gesture Recognition Using Two Differing Modality Sensors",
      authors: "Kui Liu, Chen Chen, Roozbeh Jafari, Nasser Kehtarnavaz",
      venue: "IEEE Dallas Circuits and Systems Conference, 2014",
      year: "2014",
      paper: "DCAS2014.pdf", // Assuming this PDF is in the public folder directly
    },
    {
      title: "Home-based Senior Fitness Test Measurement System Using Collaborative Inertial and Depth Sensors",
      authors: "Chen Chen, Kui Liu, Roozbeh Jafari, Nasser Kehtarnavaz",
      venue: "IEEE Engineering in Medicine and Biology Society (EMBC), 2014",
      year: "2014",
      paper: "EMBC2014-SFT.pdf", // Assuming this PDF is in the public folder directly
      demo: "http://www.utdallas.edu/~nxk019000/SFT_video_demo/",
    },
    {
      title: "A Medication Adherence Monitoring System for Pill Bottles Based on a Wearable Inertial Sensor",
      authors: "Chen Chen, Roozbeh Jafari, Nasser Kehtarnavaz",
      venue: "IEEE Engineering in Medicine and Biology Society (EMBC), 2014",
      year: "2014",
      paper: "EMBC2014-MedAdherence.pdf", // Assuming this PDF is in the public folder directly
    },
    {
      title: "Compressed-Sensing Recovery of Images and Video Using Multihypothesis Predictions",
      authors: "Chen Chen, Eric W. Tramel, and James E. Fowler",
      venue: "IEEE Asilomar Conference on Signals, Systems, and Computers, 2014",
      year: "2014",
      paper: "CTF2011.pdf", // Assuming this PDF is in the public folder directly
      project: "http://my.ece.msstate.edu/faculty/fowler/BCSSPL/",
      code: "MH-CS.zip", // Assuming this zip is in the public folder directly
      highlight: "A benchmark algorithm for compressed sensing image reconstruction",
    }
  ]

  // Combine all publications for filtering
  const allPublications = [
    ...preprints,
    ...publications2025,
    ...publications2024,
    ...publications2023,
    ...publications2022,
    ...publications2021,
    ...publications2020,
    ...publications2019,
    ...publications2018,
    ...publications2017,
    ...publications2016,
    ...publications2015,
    ...publications2014
  ]

  // Get filtered publications based on selected year
  const getFilteredPublications = () => {
    if (selectedYear === 'all') {
      // Sort all publications by year in descending order, then by title
      return [...allPublications].sort((a, b) => {
        // Handle 'preprint' as the most recent for sorting purposes
        const yearA = a.year === 'preprint' ? 9999 : parseInt(a.year);
        const yearB = b.year === 'preprint' ? 9999 : parseInt(b.year);

        if (yearB !== yearA) return yearB - yearA; // Sort by year descending
        return a.title.localeCompare(b.title); // Secondary sort by title ascending
      });
    }
    // Filter by selected year, then sort alphabetically by title
    return allPublications.filter(pub => pub.year === selectedYear).sort((a,b) => a.title.localeCompare(b.title));
  }

  // Timeline years (reversed for display in descending order, with 'preprint' at top)
  const years = ['all', 'preprint', '2025', '2024', '2023', '2022', '2021', '2020', '2019', '2018', '2017', '2016', '2015', '2014']

  // Research topics extracted from your publication.html and converted to a slug format for URLs
  // These will be external links to separate HTML pages you will provide.
  const researchTopics = [
    { name: "GenAI", path: "gen-ai.html" },
    { name: "Video Understanding", path: "video-understanding.html" },
    { name: "Other Computer Vision Tasks", path: "other-computer-vision-tasks.html" },
    { name: "Medical Image Computing & Healthcare Applications", path: "medical-imaging-healthcare-applications.html" },
    { name: "Image and Video Processing", path: "image-and-video-processing.html" },
    { name: "Geospatial Analysis and Remote Sensing", path: "geospatial-analysis-remote-sensing.html" },
    { name: "Machine Learning", path: "machine-learning.html" },
  ];

  // Function to get the correct path for local HTML files (research topic pages)
  const getLocalHtmlPath = (htmlFileName: string) => {
    // This assumes the HTML topic files will be directly under the /chenchen/ directory
    // alongside your main Next.js index.html and publications/index.html
    const basePath = process.env.NEXT_PUBLIC_BASE_PATH || '';
    return `${basePath}/${htmlFileName}`;
  }


  // Publication count by year
  const getPublicationCount = (year: string) => {
    if (year === 'all') return allPublications.length
    return allPublications.filter(pub => pub.year === year).length
  }

  const PublicationCard = ({ publication }: { publication: Publication }) => {
    // Define variables for URLs, ensuring they are always strings or undefined
    // For paper/code/project/video/data/demo:
    // If it's an external URL (starts with http), use it directly.
    // Otherwise, assume it's a local file in the public folder and prepend basePath.
    const getLocalAssetPath = (path: string) => {
        const basePath = process.env.NEXT_PUBLIC_BASE_PATH || '';
        // Ensure no double slashes and prepend base path for local assets
        const cleanedPath = path.startsWith('/') ? path.substring(1) : path;
        return `${basePath}/${cleanedPath}`;
    };

    const paperUrl = publication.paper && publication.paper !== "#"
      ? (publication.paper.startsWith('http') ? publication.paper : getLocalAssetPath(publication.paper))
      : undefined;

    const codeUrl = publication.code && publication.code !== "#"
      ? (publication.code.startsWith('http') ? publication.code : getLocalAssetPath(publication.code))
      : undefined;

    const projectUrl = publication.project
      ? (publication.project.startsWith('http') ? publication.project : getLocalAssetPath(publication.project))
      : undefined;

    const videoUrl = publication.video
      ? (publication.video.startsWith('http') ? publication.video : getLocalAssetPath(publication.video))
      : undefined;

    const dataUrl = publication.data
      ? (publication.data.startsWith('http') ? publication.data : getLocalAssetPath(publication.data))
      : undefined;

    const demoUrl = publication.demo
      ? (publication.demo.startsWith('http') ? publication.demo : getLocalAssetPath(publication.demo))
      : undefined;

    return (
      <Card className="mb-6 hover:shadow-lg transition-shadow duration-200">
        <CardContent className="p-6 flex items-start space-x-4">
          <div className="flex-grow space-y-3">
            <h3 className="text-lg font-semibold text-gray-900 leading-snug">
              {publication.title}
            </h3>

            <p className="text-sm text-gray-600">
              {publication.authors}
            </p>

            <p className="text-sm font-medium text-blue-700">
              {publication.venue}
            </p>

            {publication.highlight && (
              <div className="flex items-center gap-2">
                <Award className="h-4 w-4 text-amber-500" />
                <Badge variant="secondary" className="bg-amber-50 text-amber-700 border-amber-200">
                  {publication.highlight}
                </Badge>
              </div>
            )}

            <div className="flex flex-wrap gap-2 pt-2">
              {paperUrl && (
                <Button
                  variant="outline"
                  size="sm"
                  className="h-8 px-3"
                  onClick={() => window.open(paperUrl, '_blank')}
                >
                  <ExternalLink className="h-3 w-3 mr-1" />
                  Paper
                </Button>
              )}

              {codeUrl && (
                <Button
                  variant="outline"
                  size="sm"
                  className="h-8 px-3"
                  onClick={() => window.open(codeUrl, '_blank')}
                >
                  <Github className="h-3 w-3 mr-1" />
                  Code
                </Button>
              )}

              {projectUrl && (
                <Button
                  variant="outline"
                  size="sm"
                  className="h-8 px-3"
                  onClick={() => window.open(projectUrl, '_blank')}
                >
                  <ExternalLink className="h-3 w-3 mr-1" />
                  Project
                </Button>
              )}

              {videoUrl && (
                <Button
                  variant="outline"
                  size="sm"
                  className="h-8 px-3"
                  onClick={() => window.open(videoUrl, '_blank')}
                >
                  <Play className="h-3 w-3 mr-1" />
                  Video
                </Button>
              )}
              {dataUrl && (
                <Button
                  variant="outline"
                  size="sm"
                  className="h-8 px-3"
                  onClick={() => window.open(dataUrl, '_blank')}
                >
                  <ExternalLink className="h-3 w-3 mr-1" />
                  Dataset
                </Button>
              )}
              {demoUrl && (
                <Button
                  variant="outline"
                  size="sm"
                  className="h-8 px-3"
                  onClick={() => window.open(demoUrl, '_blank')}
                >
                  <Play className="h-3 w-3 mr-1" />
                  Demo
                </Button>
              )}
            </div>
          </div>
        </CardContent>
      </Card>
    )
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
      <Navigation />

      <main className="container mx-auto px-4 py-12">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold text-gray-900 mb-4">Publications</h1>
            <p className="text-lg text-gray-600">
              Research publications in computer vision, machine learning, and artificial intelligence
            </p>
          </div>

          {/* Timeline Navigation */}
          <div className="mb-8">
            <h2 className="text-xl font-semibold text-gray-900 mb-4">Publications by Year</h2>
            <div className="flex flex-wrap gap-2">
              {years.map((year) => (
                <Button
                  key={year}
                  variant={selectedYear === year ? "default" : "outline"}
                  size="sm"
                  onClick={() => {
                    console.log(`Filtering by year: ${year}`)
                    setSelectedYear(year)
                  }}
                  className="h-8 px-3"
                >
                  {year === 'all' ? 'All' : year === 'preprint' ? 'Preprints' : year}
                  <span className="ml-1 text-xs opacity-70">
                    ({getPublicationCount(year)})
                  </span>
                </Button>
              ))}
            </div>
          </div>

          {/* New: Publications by Research Topics Section */}
          <div className="mb-8">
            <h2 className="text-xl font-semibold text-gray-900 mb-4">Publications by Research Topic</h2>
            <div className="flex flex-wrap gap-2">
              {researchTopics.map((topic) => (
                <Link key={topic.path} href={getLocalHtmlPath(topic.path)} passHref>
                  <Button
                    variant="outline"
                    size="sm"
                    className="h-8 px-3"
                  >
                    {topic.name}
                  </Button>
                </Link>
              ))}
            </div>
          </div>

          {/* Chronological publications content */}
          <div className="space-y-6">
            <div className="flex items-center justify-between">
              <h2 className="text-2xl font-semibold text-gray-900">
                {selectedYear === 'all'
                  ? `All Publications (${getFilteredPublications().length})`
                  : selectedYear === 'preprint'
                  ? `Preprints (${getFilteredPublications().length})`
                  : `Publications in ${selectedYear} (${getFilteredPublications().length})`
                }
              </h2>
            </div>

            <div className="grid grid-cols-1 gap-6">
              {getFilteredPublications().map((publication, index) => (
                <PublicationCard key={index} publication={publication} />
              ))}
            </div>

            {getFilteredPublications().length === 0 && (
              <div className="text-center py-12">
                <p className="text-gray-500">No publications found for the selected year.</p>
              </div>
            )}
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