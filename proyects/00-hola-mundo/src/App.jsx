import "./App.css";
import { TwitterFollowCard } from "./TwitterFollowCard";

export function App() {
  return (
    <section className="App">
      <TwitterFollowCard userName="elenatorro" name="Elena Francisca Torro" />
      <TwitterFollowCard userName="midudev" name="Miguel Angel Sanchez" />
      <TwitterFollowCard
        userName="MatiBorderlaje"
        name="Matias Jose Martinez"
      />
    </section>
  );
}
