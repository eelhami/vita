/* =================================================================
   PAPERS DATA
   -----------------------------------------------------------------
   This is the only file you need to edit to add papers.
   Each entry follows this schema:

     {
       title:     "Paper title",                  // required
       authors:   "A. Author, B. Author, ...",    // required
       venue:     "CVPR",                         // venue acronym
       year:      2024,                           // publication year
       categories: ["temporal-action-segmentation", ...],  // see slugs below
       links: {
         pdf:     "https://...",     // arXiv or paper PDF
         code:    "https://...",     // GitHub repo (optional)
         project: "https://...",     // project page (optional)
       },
       tldr:      "One-line summary in your own words." // optional
     }

   VALID CATEGORY SLUGS (must match exactly):
     temporal-action-segmentation
     action-detection
     progress-estimation
     mistake-recognition
     action-anticipation
     skill-assessment
     vision-language
     egocentric
     augmented-reality
     dataset

   Note: the entries below are starter examples drawn from foundational
   work in the area. Please verify bibliographic details before publishing
   and replace with your own curated list.
   ================================================================= */

const CATEGORIES = {
  "temporal-action-segmentation": "Temporal Action Segmentation",
  "action-detection":             "Action Detection",
  "progress-estimation":          "Progress Estimation",
  "mistake-recognition":          "Mistake Recognition",
  "action-anticipation":          "Action Anticipation",
  "skill-assessment":             "Skill Assessment",
  "vision-language":              "Vision–Language",
  "egocentric":                   "Egocentric Video",
  "augmented-reality":            "Augmented Reality",
  "dataset":                      "Dataset / Benchmark",
};

const LAST_UPDATED = "May 2026";

const PAPERS = [

  /* ----- starter examples — verify and edit before publishing ----- */

  {
    title: "Ego-Exo4D: Understanding Skilled Human Activity from First- and Third-Person Perspectives",
    authors: "K. Grauman, A. Westbury, L. Torresani, K. Kitani, J. Malik, et al.",
    venue: "CVPR",
    year: 2024,
    categories: ["dataset", "egocentric", "skill-assessment"],
    links: {
      pdf: "https://arxiv.org/abs/2311.18259",
      project: "https://ego-exo4d-data.org/",
    },
    tldr: "Large-scale paired egocentric and exocentric video dataset of skilled activities, with benchmarks for proficiency estimation, keystep recognition, and more."
  },

  {
    title: "HoloAssist: An Egocentric Human Interaction Dataset for Interactive AI Assistants in the Real World",
    authors: "X. Wang, T. Kwon, M. Rad, B. Pan, et al.",
    venue: "ICCV",
    year: 2023,
    categories: ["dataset", "egocentric", "mistake-recognition", "augmented-reality"],
    links: {
      pdf: "https://arxiv.org/abs/2309.17024",
      project: "https://holoassist.github.io/",
    },
    tldr: "Mixed-reality recordings of an instructor guiding a learner through real-world tasks, with annotations for mistakes, interventions, and instructions."
  },

  {
    title: "Ego4D: Around the World in 3,000 Hours of Egocentric Video",
    authors: "K. Grauman, A. Westbury, E. Byrne, Z. Chavis, et al.",
    venue: "CVPR",
    year: 2022,
    categories: ["dataset", "egocentric", "action-anticipation"],
    links: {
      pdf: "https://arxiv.org/abs/2110.07058",
      project: "https://ego4d-data.org/",
    },
    tldr: "Massive-scale egocentric video dataset with benchmarks covering episodic memory, hands-and-objects, AV diarization, social, and forecasting tasks."
  },

  {
    title: "Assembly101: A Large-Scale Multi-View Video Dataset for Understanding Procedural Activities",
    authors: "F. Sener, D. Chatterjee, D. Shelepov, K. He, et al.",
    venue: "CVPR",
    year: 2022,
    categories: ["dataset", "temporal-action-segmentation", "mistake-recognition"],
    links: {
      pdf: "https://arxiv.org/abs/2203.14712",
      project: "https://assembly-101.github.io/",
    },
    tldr: "Multi-view dataset of people (dis)assembling toy vehicles, annotated with fine-grained actions and mistakes."
  },

  {
    title: "ActionFormer: Localizing Moments of Actions with Transformers",
    authors: "C. Zhang, J. Wu, Y. Li",
    venue: "ECCV",
    year: 2022,
    categories: ["action-detection"],
    links: {
      pdf: "https://arxiv.org/abs/2202.07925",
      code: "https://github.com/happyharrycn/actionformer_release",
    },
    tldr: "Single-stage transformer that localizes action instances in untrimmed video with multi-scale feature pyramids."
  },

  {
    title: "ASFormer: Transformer for Action Segmentation",
    authors: "F. Yi, H. Wen, T. Jiang",
    venue: "BMVC",
    year: 2021,
    categories: ["temporal-action-segmentation"],
    links: {
      pdf: "https://arxiv.org/abs/2110.08568",
      code: "https://github.com/ChinaYi/ASFormer",
    },
    tldr: "Transformer architecture for frame-level action segmentation with hierarchical local attention and a refinement decoder."
  },

  {
    title: "MS-TCN: Multi-Stage Temporal Convolutional Network for Action Segmentation",
    authors: "Y. Abu Farha, J. Gall",
    venue: "CVPR",
    year: 2019,
    categories: ["temporal-action-segmentation"],
    links: {
      pdf: "https://arxiv.org/abs/1903.01945",
      code: "https://github.com/yabufarha/ms-tcn",
    },
    tldr: "Foundational dilated TCN with stage-wise refinement — long the standard baseline for temporal action segmentation."
  },

  /* ----- add your papers below this line ----- */

];
