class Form extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      url: '',
      title: ''
    }
    this.onChangeUrl = this.onChangeUrl.bind(this);
    this.onChangeTitle = this.onChangeTitle.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }


  onChangeUrl(e) {
    this.setState({
      url: e.target.value
    });
  }

  onChangeTitle(e) {
    this.setState({
      title: e.target.value
    });
  }

  onSubmit() {
    this.props.handleSubmit(this.state.url, this.state.title);
  }

  render() {
    return (
      <div className="form">
        <input value={this.state.url} onChange={this.onChangeUrl}/>
        <input value={this.state.title} onChange={this.onChangeTitle}/>
        <button onClick={this.onSubmit}> Submit </button>
      </div>
    )
  }
}