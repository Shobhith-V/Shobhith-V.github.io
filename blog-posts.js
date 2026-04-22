// ── BLOG POST REGISTRY ───────────────────────────────────────────────────
// To add a new post:
//   1. Create blog/your-post-slug.html
//   2. Add an entry here (newest first)
// ─────────────────────────────────────────────────────────────────────────

window.BLOG_POSTS = [
  {
    slug: "neural-odes-continuous-time",
    title: "Neural ODEs: Teaching Machines to Think in Continuous Time",
    date: "2025-04-10",
    tags: ["Computational Neuroscience", "Deep Learning", "Neural ODE"],
    excerpt: "Backpropagation assumes the world is discrete — a sequence of layers, a chain of operations. But the brain doesn't think in layers. Here's why Neural ODEs change the picture, and what they reveal about learning in continuous time.",
    readTime: "9 min read",
    featured: true,
  },
  {
    slug: "predictive-coding-what-it-got-right",
    title: "What Predictive Coding Got Right (and What It's Still Missing)",
    date: "2025-03-18",
    tags: ["Neuroscience", "Predictive Coding", "Bayesian Brain"],
    excerpt: "The predictive coding hypothesis has been around since Helmholtz. It's now the hottest framework in computational neuroscience. Here's an honest look at what the theory genuinely explains — and where it quietly sweeps things under the rug.",
    readTime: "11 min read",
    featured: false,
  },
  {
    slug: "building-prosthetic-feedback",
    title: "What I Learned Building a Feedback System for a Prosthetic Limb",
    date: "2025-02-05",
    tags: ["Neurotechnology", "Cybathlon", "Engineering"],
    excerpt: "We competed at Cybathlon 2024 in Zurich — the only Indian team. I built the closed-loop vibrotactile feedback system. Here's what the textbooks don't tell you about building hardware that has to work under pressure, on a person, in a competition.",
    readTime: "8 min read",
    featured: false,
  },
];
