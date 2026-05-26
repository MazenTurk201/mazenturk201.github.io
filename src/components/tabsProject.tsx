"use client";

import { useEffect, useState } from "react";
import ProjectCard from "./projectCardWedgit";

const projects = [
    {
        cover: "/Images/lc.png",
        title: "Love Choice?",
        description: "Flutter game truth and dare.",
        linkProj: "https://mazenturk201.github.io/Love-Choice",
        linkSorce: "https://github.com/MazenTurk201/Love-Choice",
        tags: ["Flutter", "Dart", "Game", "Android"],
    },
    
    {
        cover: "https://raw.githubusercontent.com/MazenTurk201/Turk-Translate/refs/heads/main/TTransBanner.png",
        title: "Turk Translate",
        description: "Copy text to translate it in Notification.",
        linkProj: "https://www.linkedin.com/posts/mazen-sameh-19a0a2302_windows-productivity-tools-ugcPost-7445418414610944000-U903/?utm_source=share&utm_medium=member_desktop&rcm=ACoAAE1BWIYBlS9Ww9vbk5W_0td3exW7u2EjUuQ",
        linkSorce: "https://github.com/MazenTurk201/Turk-Translate",
        tags: ["Flet", "Cross-Platform", "Python"],
    },

    {
        cover: "/Images/wpbe.png",
        title: "ResWA",
        description: "Restore Whatsapp Chats.",
        linkProj: "https://mazenturk201.github.io/ResWA/",
        linkSorce: "https://github.com/MazenTurk201/ResWA",
        tags: ["Flutter", "Dart", "APP"],
    },

    {
        cover: "/Images/tworm.png",
        title: "MT",
        description: "Android pentest script.",
        linkProj: "https://mazenturk201.github.io/MT",
        linkSorce: null,
        tags: ["Linux", "Security", "Bash"],
    },

    {
        cover: "https://geekpython.in/wp-content/uploads/2023/08/FlaskxDB.png",
        title: "Management System",
        description: "Project Management DB.",
        linkProj: "https://github.com/MazenTurk201/ProjectManagementDB",
        linkSorce: null,
        tags: ["Flask", "Back-End", "MySql"],
    },

    {
        cover: "/Images/turkcover.png",
        title: "Easy Command",
        description: "Flutter game truth and dare.",
        linkProj: "https://github.com/MazenTurk201/Easy-Command",
        linkSorce: null,
        tags: ["Flet"],
    },
];

export default function ProjectsSlider() {
    const [page, setPage] = useState(0);
    const [mobile, setMobile] = useState(false);

    // detect screen size
    useEffect(() => {
        const check = () => {
            setMobile(window.innerWidth < 1024);
        };

        check();

        window.addEventListener("resize", check);

        return () =>
            window.removeEventListener("resize", check);
    }, []);

    // 1 mobile / 2 desktop
    const projectsPerPage = mobile ? 1 : 2;

    const maxPage = Math.ceil(
        projects.length / projectsPerPage
    );

    const visibleProjects = projects.slice(
        page * projectsPerPage,
        page * projectsPerPage + projectsPerPage
    );

    return (
        <section id='Projects' className="max-w-7xl mx-auto px-4 py-14 scroll-mt-5">

            {/* Cards */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                {visibleProjects.map((project, index) => (
                    <ProjectCard
                        key={index}
                        cover={project.cover}
                        title={project.title}
                        description={project.description}
                        linkProj={project.linkProj}
                        linkSorce={project.linkSorce}
                        tags={project.tags}
                    />
                ))}
            </div>

            {/* Controls */}
            <div className="flex items-center justify-center gap-4 mt-10">
                <button
                    disabled={page === 0}
                    onClick={() => setPage((prev) => prev - 1)}
                    className="px-5 py-3 rounded-xl bg-zinc-900 hover:bg-zinc-800 disabled:opacity-40 transition"
                >
                    Prev
                </button>

                <span className="text-zinc-400">
                    {page + 1} / {maxPage}
                </span>

                <button
                    disabled={page + 1 >= maxPage}
                    onClick={() => setPage((prev) => prev + 1)}
                    className="px-5 py-3 rounded-xl bg-zinc-900 hover:bg-zinc-800 disabled:opacity-40 transition"
                >
                    Next
                </button>
            </div>
        </section>
    );
}