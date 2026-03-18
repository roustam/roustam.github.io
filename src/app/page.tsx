import Image from "next/image"
import TopNavbar from "./components/TopNavbar"
import SiteFooter from "./components/Footer"
import ProjectCard from "./components/ProjectCard"

export default function Home() {
  return (
    <main className="flex w-2/3 flex-col justify-between items-center mx-auto">
      <TopNavbar />
      <div className="flex flex-nowrap justify-between px-4 py-4 bg-white mt-4 rounded-xl">
        <div className="flex max-xl:flex-row justify-between flex-nowrap">
          <div>
            <p>Hello, my name is Roustam.</p>          
            
            <p className=" py-3 tracking-wide">
Full-stack Software Engineer (React/Next.js, Django/FastAPI) with 8+ years of commercial experience, building and
shipping web products end-to-end. Known for bridging gaps between dev, DevOps, design, and management
teams - turning unclear requirements into shipped products. Brings the same direct communication style to customers,
cutting through back-and-forth to keep projects moving.
            </p>


          
          </div>

          <Image src={'/img/photo-small.png'} className="max-lg: hidden" alt="my photo" height={0} width={0}  
          style={{ width: 'auto', height: 'auto', borderRadius:"100%" }}  />
          
        </div>
      </div>
      <div className="flex-col justify-start w-full mb-auto py-4"> 
        <h2 className="pb-3">Recent projects</h2>
        <div className="grid xl:grid-cols-3 lg:grid-cols-2 md:grid-cols-1 md:gap-3 gap-4 rounded-xl">
        <ProjectCard 
            projectName="HELLO portal frontend" 
            usedLibs={['ReactJS', 'MaterialUI']}
            sourceLink="https://github.com/roustam/hello_portal" 
            demoLink="https://hello-portal-ruddy.vercel.app/"
            description="Demo site for social network content creators." 
            imageUrl='/img/website-icon.svg'/>
          <ProjectCard 
            projectName="Good deeds tracker." 
            usedLibs={['NextJS','OAuth','Prisma']}
            sourceLink="https://github.com/roustam/thankb"
            demoLink="https://test.thankband.com/"
            description="Mobile website that help people to track good deeds and share links via QR code." 
            imageUrl='/img/website-icon.svg'/>

          <ProjectCard 
            projectName="Django image gallery app" 
            usedLibs={['python', 'django', 'javascript']}
            sourceLink="https://github.com/roustam/test-job-image-portal" 
            demoLink=""
            description="Small image gallery web app where you can upload and view images.
            App validates the filetypes you can upload." 
            imageUrl='/img/gallery-portal.svg'/>
    
          <ProjectCard
            projectName="Geo calculator" 
            usedLibs={['leafletjs', 'djangogis', 'docker']}
            sourceLink="https://github.com/roustam/geos_test" 
            
            description="Small web app that builds a network of points and can calculate distance on a world map." 
            imageUrl='/img/country-location-icon.svg'/>
          
          <ProjectCard 
            projectName="Yandex.practicum tasks" 
            usedLibs={['FastAPI', 'ElasticSearch', 'API']}
            sourceLink="https://github.com/roustam/async_api_sprint_team_22"
            
            description="Movies database search engine API." 
            imageUrl='/img/python-logo.svg'/>

          <ProjectCard 
            projectName="ASYNC Python scripts." 
            usedLibs={['python', 'django', 'javascript']}
            sourceLink="https://github.com/roustam/geos_test" 

            description="Python script that filters dictionary for same id operations and returns ones with latest timestamp. Another script uploads specified files to directory.  " 
            imageUrl='/img/python-logo.svg'/>
        </div>
      </div>
    <SiteFooter />
    </main>
  )
}
