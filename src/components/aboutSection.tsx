import AboutMeCode from "@/components/aboutMeCodeWedgit";

export default function aboutSection() {
  return (
    <section id='AboutUS'>
      <div className='aboutsection flex items-center justify-center gap-5 w-full not-sm:flex-col not-sm:items-center not-sm:justify-center not-sm:gap-0 not-sm:w-full not-sm:p-0 not-sm:m-0'>
        <img src="/Images/me.png" alt="Me" className="w-90 md:w-80 h-auto rounded-2xl float-left me flying-circle not-sm:absolute" />
        <div className="spliterr not-sm:hidden"></div>
        <AboutMeCode />
      </div>
    </section>
  );
};