import styles from './App.module.css'
import { Navbar } from './components/Navbar/Navbar';

function App() {

  return (
    // apply a style
    <div className={styles.App}>
      
      <Navbar />
    </div>
  )
}

export default App
