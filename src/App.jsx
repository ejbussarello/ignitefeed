import { Post } from "./Post";
import { Header } from "./components/Header";

import './global.css';

import styles from './App.module.css'
import { Sidebar } from "./components/Sidebar";

export function App() {
  return (
    <div>
      <Header />

      <div className={styles.wrapper}>
        <Sidebar />
        <main>
          <Post 
          author='Eduardo Bussarello' 
          content='Lorem ipsum dolor sit amet consectetur, adipisicing elit. Qui, illo? Laborum, quasi. Eveniet quos, aut architecto omnis corrupti molestias odit fugiat culpa ducimus, ea laboriosam nam repellat voluptatibus perspiciatis consectetur.'
          />
          <Post 
          author='Diego Fernantes' 
          content='Um post muito legal.'
          />
        </main>
      </div>
      
    </div>
  )
}

