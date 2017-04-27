class LibraryEntry extends React.Component {

  render() {
    return (
      <div className="library-entry">
        <div onClick={ () => (this.props.onTitleClick(this.props.photo))}>
          {this.props.photo.title}
        </div>
      </div>
    )
  }
}