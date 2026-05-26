import BorderGlow from '../../components/BorderGlow';

function ProjectCard({ cover, title, description, linkProj, linkSorce, tags }: { cover: string, title: string, description: string, linkProj: string, linkSorce: string | null, tags: string[] }) {
  return (
    <BorderGlow
      edgeSensitivity={30}
      glowColor="40 80 80"
      backgroundColor="#120F17"
      borderRadius={28}
      glowRadius={40}
      glowIntensity={1}
      coneSpread={25}
      animated={false}
      colors={['#c084fc', '#f472b6', '#c538f8']}
      className='zoom w-full'
    >
      <div className='p-3 md:p-5 relative'>
        <div className="image-card">
          <img src={cover} alt={title} style={{ aspectRatio: "16/9", objectFit: "cover" }} />

          <a
            href={linkProj}
            target="_blank"
            rel="noopener noreferrer"
            className="open-btn"
          >
            Open Project
          </a>
        </div>
        <div className="flex items-center justify-center gap-2 flex-wrap mt-4">
          {tags.map((tag, index) => (
            <div key={index} className='tag'>
              {tag}
            </div>
          ))}
        </div>
        <h2 className="text-2xl font-bold text-black dark:text-zinc-50 text-left">{title}</h2>
        <p className="text-lg text-black dark:text-zinc-50 text-left pr-4">{description}</p>
        <a href={linkSorce ?? linkProj} target="_blank" rel="noopener noreferrer"><i className='bi bi-github absolute right-5 bottom-5'></i></a>
      </div>
    </BorderGlow>
  )
};

export default ProjectCard;