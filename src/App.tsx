/** @format */

import { Header } from "./components/Header";
import "./global.css";
import Post from "./components/Post";
import styles from "./App.module.css";
import Sidebar from "./components/Sidebar";

function App() {
  const posts = [
    {
      id: 1,
      author: {
        avatarUrl: "https://github.com/pansani.png",
        name: "Joao Claudio",
        role: "Dev Front-End",
      },
      content: [
        { type: "paragraph", content: "Fala galeraa 👋" },

        {
          type: "paragraph",
          content:
            "Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀",
        },

        { type: "link", content: "👉 jane.design/doctorcare" },
      ],
      publishedAt: new Date("2024-02-18 10:00:00"),
    },

    {
      id: 2,
      author: {
        avatarUrl: "https://github.com/JoaoAugustoPansani.png",
        name: "Joao Augusto",
        role: "Dev Back-End",
      },
      content: [
        { type: "paragraph", content: "Fala galeraa 👋" },

        {
          type: "paragraph",
          content:
            "Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀",
        },

        { type: "link", content: "👉 jane.design/doctorcare" },
      ],
      publishedAt: new Date("2024-02-02 20:00:00"),
    },
  ];

  return (
    <div>
      <Header />

      <div className={styles.wrapper}>
        <Sidebar />
        <main>
          {posts.map((post) => {
            return (
              <Post
                key={post.id}
                author={post.author}
                content={post.content}
                publishedAt={post.publishedAt}
              />
            );
          })}
        </main>
      </div>
    </div>
  );
}

export default App;
