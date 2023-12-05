import "./App.css";
import TitlePage from "./TitlePage";
import BlogSection from "./BlogSection";
import img2 from "./assets/images/components.png";
import img3 from "./assets/images/state.png";
import img4 from "./assets/images/events.png";

function App() {
  const concepts = [
    {
      title: "Components",
      concept_image: img2,
      concept_content:
        "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Enim magni earum reiciendis nobis, ducimus consequuntur obcaecati facere libero commodi, laboriosam perferendis quasi! Nobis, dicta voluptatem. Vel maiores quas accusamus modi!",
    },
    {
      title: "State",
      concept_image: img3,
      concept_content:
        "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Enim magni earum reiciendis nobis, ducimus consequuntur obcaecati facere libero commodi, laboriosam perferendis quasi! Nobis, dicta voluptatem. Vel maiores quas accusamus modi!",
    },
    {
      title: "Events",
      concept_image: img4,
      concept_content:
        "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Enim magni earum reiciendis nobis, ducimus consequuntur obcaecati facere libero commodi, laboriosam perferendis quasi! Nobis, dicta voluptatem. Vel maiores quas accusamus modi!",
    },
  ];
  return (
    <>
      <TitlePage />
      <BlogSection data={concepts} />
    </>
  );
}

export default App;
