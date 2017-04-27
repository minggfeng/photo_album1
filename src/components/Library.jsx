class Library extends React.Component {
  render() {
    return (
      <div className="library">
      {this.props.photos.map((photo) =>
      <LibraryEntry onTitleClick={this.props.onTitleClick} className="libraryEntry" key={photo.title} photo={photo} />
    )}
      </div>
    )
  }
} 