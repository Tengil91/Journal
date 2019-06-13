export let EntrySummary = (props) => {
    return (
      <a href="#"><div>
        <h2>{props.summary.title}</h2>
        <p>{props.summary.date}</p>
      </div></a>
    )
}