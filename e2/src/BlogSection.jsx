const BlogSection = (data) => {
  return (
    <div className="BlogSection">
      <ul>
        <li>
          <img src={data[0].concept_image} />
          <h2>{data[0].title}</h2>
          <p>{data[0].concept_content}</p>
        </li>
        <li>
          <img src={data[1].concept_image} />
          <h2>{data[1].title}</h2>
          <p>{data[1].concept_content}</p>
        </li>
        <li>
          <img src={data[2].concept_image} />
          <h2>{data[2].title}</h2>
          <p>{data[2].concept_content}</p>
        </li>
      </ul>
    </div>
  );
};

export default BlogSection;
