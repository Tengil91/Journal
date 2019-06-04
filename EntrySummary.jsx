export class EntrySummary extends React.Component {
  render(){
    return (
      <a href="#"><div>
        <h2>{this.props.summary.title}</h2>
        <p>{this.props.summary.date}</p>
      </div></a>
    )
  }
}