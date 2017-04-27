class App extends React.Component {
  constructor() {
    var missingPhotos = {
        title: 'upload a file',
        url: 'http://longwhiteclouds.com/wp-content/themes/longwhiteclouds/images/missing-image-640x360.png',
        rating: 'NA'
      }
    super();
    this.state = {
      photos: [],
      currentPhoto: this.photos ? this.photos[0] : missingPhotos
    };

    this.onTitleClick = this.onTitleClick.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  onTitleClick(photo) {
    this.setState({
      currentPhoto: photo
    });
  }

  handleSubmit(url, title) {
    $.ajax({
      type: 'POST',
      url: 'http://127.0.0.1:3000',
      data: {
        title: title,
        url: url,
        rating: 0
      },
      success: function(data) {
        console.log('hi...')
      },
      error: function(data){
        console.log('error');
      }
    })
        $.get('http://127.0.0.1:3000', (data) => {
        this.setState({
          photos: data,
          currentPhoto: data[0]
        })
      })

  }

  componentWillMount() {
    $.get('http://127.0.0.1:3000', (data) => {
        this.setState({
          photos: data
        })
      })
  }

  render() {
    return (
      <div>
      <Form handleSubmit={this.handleSubmit}/>
      <div className="wrapper">
        <div className="three">
          <h3>Images</h3>
          <Library onTitleClick={this.onTitleClick} photos={this.state.photos}/>
        </div>
        <div className="two">
          <PhotoViewer currentPhoto={this.state.currentPhoto}/>
        </div>
      </div>
      </div>
    )
  }
}