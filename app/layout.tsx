export default function PortfolioWebsite() {
  const projects = [
    {
      title: 'HRTech AI RAG Platform',
      description:
        'Enterprise-grade recruitment intelligence system using Azure OpenAI, FAISS, hybrid retrieval, and AKS.',
      stack: ['Azure OpenAI', 'FAISS', 'FastAPI', 'AKS', 'Terraform'],
      github: 'https://github.com/mridulmoitra/azure-hrtech-rag-platform',
    },
    {
      title: 'Distributed FAISS Search Engine',
      description:
        'Scalable vector retrieval platform with HNSW, IVF, PQ, reranking, and streaming ingestion.',
      stack: ['FAISS', 'Kafka', 'Redis', 'Python', 'Docker'],
      github: 'https://github.com/mridulmoitra/distributed-faiss-hybrid-search',
    },
    {
      title: 'Graph Talent Intelligence',
      description:
        'Graph-based recommendation and talent intelligence system using Neo4j and GNN models.',
      stack: ['Neo4j', 'PyTorch Geometric', 'FastAPI', 'Redis'],
      github: 'https://github.com/mridulmoitra/graph-talent-intelligence',
    },
    {
      title: 'Real-Time Recommendation Engine',
      description:
        'Streaming recommendation architecture with online learning and low-latency inference.',
      stack: ['Kafka', 'Spark Streaming', 'Feast', 'PyTorch'],
      github: 'https://github.com/mridulmoitra/realtime-ml-recommendation-system',
    },
  ]

  const skills = [
    'Python',
    'FastAPI',
    'Azure OpenAI',
    'FAISS',
    'Kafka',
    'Redis',
    'Terraform',
    'Docker',
    'Kubernetes',
    'Neo4j',
    'PyTorch',
    'Azure AI Search',
  ]

  return (
    <div className="min-h-screen bg-black text-white font-sans">
      {/* Hero Section */}
      <section className="relative overflow-hidden border-b border-zinc-800">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 via-purple-500/10 to-cyan-500/10" />

        <div className="relative max-w-7xl mx-auto px-6 py-28">
          <div className="grid lg:grid-cols-2 gap-14 items-center">
            <div>
              <div className="inline-flex items-center rounded-full border border-cyan-400/30 bg-cyan-400/10 px-4 py-2 text-sm text-cyan-300 mb-6">
                AI / ML Engineer Portfolio
              </div>

              <h1 className="text-5xl md:text-7xl font-bold leading-tight mb-8">
                Building
                <span className="bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-400 text-transparent bg-clip-text">
                  {' '}Enterprise AI Systems
                </span>
              </h1>

              <p className="text-zinc-400 text-lg leading-relaxed max-w-2xl mb-10">
                Specialized in production-grade Generative AI platforms,
                distributed vector retrieval, Azure AI architecture,
                graph intelligence, and real-time ML systems.
              </p>

              <div className="flex flex-wrap gap-4">
                <a
                  href="https://github.com/mridulmoitra"
                  target="_blank"
                  className="rounded-2xl bg-cyan-500 hover:bg-cyan-400 transition-all px-6 py-4 text-black font-semibold shadow-2xl"
                >
                  GitHub
                </a>

                <a
                  href="https://linkedin.com/in/mridul-moitra"
                  target="_blank"
                  className="rounded-2xl border border-zinc-700 hover:border-zinc-500 transition-all px-6 py-4"
                >
                  LinkedIn
                </a>

                <a
                  href="/resume.pdf"
                  className="rounded-2xl border border-zinc-700 hover:border-zinc-500 transition-all px-6 py-4"
                >
                  Resume
                </a>
              </div>
            </div>

            <div>
              <div className="rounded-3xl border border-zinc-800 bg-zinc-900/70 backdrop-blur-xl p-8 shadow-2xl">
                <div className="flex items-center justify-between mb-6">
                  <h2 className="text-2xl font-bold">Core Expertise</h2>
                  <div className="h-3 w-3 rounded-full bg-green-400 animate-pulse" />
                </div>

                <div className="grid grid-cols-2 gap-4">
                  {skills.map((skill) => (
                    <div
                      key={skill}
                      className="rounded-2xl border border-zinc-800 bg-black/50 px-4 py-4 text-center text-sm hover:border-cyan-500 transition-all"
                    >
                      {skill}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="max-w-7xl mx-auto px-6 py-24">
        <div className="grid lg:grid-cols-2 gap-14">
          <div>
            <h2 className="text-4xl font-bold mb-8">About Me</h2>

            <p className="text-zinc-400 leading-relaxed text-lg mb-6">
              I design and build scalable AI systems focused on retrieval,
              reasoning, search infrastructure, recommendation systems,
              and production ML platforms.
            </p>

            <p className="text-zinc-400 leading-relaxed text-lg mb-6">
              My work combines distributed systems engineering with modern
              Generative AI architectures including RAG pipelines,
              vector databases, graph intelligence, and cloud-native MLOps.
            </p>

            <p className="text-zinc-400 leading-relaxed text-lg">
              Current focus areas include enterprise GenAI, distributed FAISS,
              Azure AI architecture, event-driven ML systems, and scalable
              inference infrastructure.
            </p>
          </div>

          <div className="grid gap-6">
            <div className="rounded-3xl border border-zinc-800 bg-zinc-900/60 p-8">
              <h3 className="text-2xl font-semibold mb-4">AI Engineering</h3>
              <p className="text-zinc-400 leading-relaxed">
                Production RAG systems, semantic retrieval, LLM orchestration,
                reranking pipelines, and enterprise GenAI architectures.
              </p>
            </div>

            <div className="rounded-3xl border border-zinc-800 bg-zinc-900/60 p-8">
              <h3 className="text-2xl font-semibold mb-4">Distributed Systems</h3>
              <p className="text-zinc-400 leading-relaxed">
                Streaming architectures, vector indexing at scale, caching,
                event-driven systems, and multi-region deployments.
              </p>
            </div>

            <div className="rounded-3xl border border-zinc-800 bg-zinc-900/60 p-8">
              <h3 className="text-2xl font-semibold mb-4">Cloud + MLOps</h3>
              <p className="text-zinc-400 leading-relaxed">
                Azure AI services, Kubernetes, Terraform, CI/CD pipelines,
                observability, and production deployment automation.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section className="border-t border-zinc-800 bg-zinc-950/40">
        <div className="max-w-7xl mx-auto px-6 py-24">
          <div className="flex items-center justify-between mb-14 flex-wrap gap-6">
            <div>
              <h2 className="text-4xl font-bold mb-4">Featured Projects</h2>
              <p className="text-zinc-400 text-lg">
                Enterprise AI systems, distributed search, and scalable ML platforms.
              </p>
            </div>
          </div>

          <div className="grid lg:grid-cols-2 gap-8">
            {projects.map((project) => (
              <div
                key={project.title}
                className="rounded-3xl border border-zinc-800 bg-black/60 p-8 hover:border-cyan-500 transition-all shadow-xl"
              >
                <div className="flex items-start justify-between gap-6 mb-6">
                  <h3 className="text-2xl font-bold leading-tight">
                    {project.title}
                  </h3>

                  <div className="h-3 w-3 rounded-full bg-cyan-400 mt-3" />
                </div>

                <p className="text-zinc-400 leading-relaxed mb-8">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-3 mb-8">
                  {project.stack.map((item) => (
                    <div
                      key={item}
                      className="rounded-full border border-zinc-700 px-4 py-2 text-sm text-zinc-300"
                    >
                      {item}
                    </div>
                  ))}
                </div>

                <div className="flex gap-4">
                  <a
                    href={project.github}
                    target="_blank"
                    className="rounded-2xl bg-white text-black px-5 py-3 font-medium hover:opacity-90 transition-all"
                  >
                    View Repository
                  </a>

                  <button className="rounded-2xl border border-zinc-700 px-5 py-3 hover:border-zinc-500 transition-all">
                    Architecture
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Metrics Section */}
      <section className="max-w-7xl mx-auto px-6 py-24">
        <div className="grid md:grid-cols-4 gap-8">
          {[
            ['10M+', 'Vector Embeddings'],
            ['<100ms', 'Retrieval Latency'],
            ['99.9%', 'Service Reliability'],
            ['Multi-Region', 'Cloud Deployment'],
          ].map(([value, label]) => (
            <div
              key={label}
              className="rounded-3xl border border-zinc-800 bg-zinc-900/60 p-8 text-center"
            >
              <div className="text-4xl font-bold text-cyan-400 mb-4">
                {value}
              </div>

              <div className="text-zinc-400 text-lg">
                {label}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Contact Section */}
      <section className="border-t border-zinc-800 bg-zinc-950/40">
        <div className="max-w-4xl mx-auto px-6 py-24 text-center">
          <h2 className="text-5xl font-bold mb-8">
            Let’s Build AI Systems
          </h2>

          <p className="text-zinc-400 text-xl leading-relaxed mb-10 max-w-2xl mx-auto">
            Interested in enterprise AI architecture, scalable ML systems,
            distributed retrieval, or production GenAI platforms?
          </p>

          <div className="flex flex-wrap justify-center gap-6">
            <a
              href="mailto:midulmoitra@gmail.com"
              className="rounded-2xl bg-cyan-500 text-black px-8 py-4 font-semibold hover:bg-cyan-400 transition-all"
            >
              Contact Me
            </a>

            <a
              href="https://github.com/yourusername"
              target="_blank"
              className="rounded-2xl border border-zinc-700 px-8 py-4 hover:border-zinc-500 transition-all"
            >
              GitHub Profile
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-zinc-800 py-10 text-center text-zinc-500">
        <p>
          © 2026 Mridul Moitra — AI/ML Engineer Portfolio
        </p>
      </footer>
    </div>
  )
}
