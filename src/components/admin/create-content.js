import React, { Component } from 'react';

export default class CreateContent extends Component {
  constructor(props) {
    super(props);

    this.onChangeTitle = this.onChangeTitle.bind(this);
    this.onChangeSummary = this.onChangeSummary.bind(this);
    this.onChangeBody = this.onChangeBody.bind(this);
    this.onChangeType = this.onChangeType.bind(this);
    this.onChangeImage = this.onChangeImage.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);

    this.state = {
      title: '',
      summary: '',
      body: '',
      type: '',
      image: ''
    };
  }

  handleSubmit(e) {
    e.preventDefault();

    const content = {
      title: this.state.title,
      summary: this.state.summary,
      body: this.state.body,
      type: this.state.type,
      image: this.state.image
    }

    console.log(content);
  }

  onChangeTitle(e) {
    this.setState({
      title: e.target.value
    });
  }

  onChangeSummary(e) {
    this.setState({
      summary: e.target.value
    });
  }

  onChangeBody(e) {
    this.setState({
      body: e.target.value
    });
  }

  onChangeType(e) {
    this.setState({
      type: e.target.value
    });
  }

  onChangeImage(e) {
    this.setState({
      image: e.target.value
    });
  }

  render() {
    return(
      <div>
        <h1>Create New Content</h1>
        <form onSubmit={this.handleSubmit}>
          <div className="form-group">
            <label htmlFor="title">Title</label>
            <input type="text" required className="form-control" id="title" name="title" onChange={this.onChangeTitle}></input>
          </div>
          <div className="form-group">
            <label htmlFor="summary">Summary</label>
            <textarea className="form-control" id="summary" rows="3" name="summary" onChange={this.onChangeSummary}></textarea>
          </div>
          <div className="form-group">
            <label htmlFor="body">Body</label>
            <textarea className="form-control" id="body" rows="10" name="body" onChange={this.onChangeBody}></textarea>
          </div>
          <div className="form-group">
            <label htmlFor="type">Type</label>
            <select className="form-control" id="type" defaultValue="" required onChange={this.onChangeType}>
              <option disabled value="">--Select type--</option>
              <option value="page">Page</option>
              <option value="product">Product</option>
              <option value="service">Service</option>
              <option value="facility">Facility</option>
            </select>
          </div>
          <div className="form-group">
            <label htmlFor="image">Image</label>
            <input type="url" className="form-control" id="image" name="image" aria-describedby="imageHelp" onChange={this.onChangeImage}></input>
            <small id="imageHelp" className="form-text text-muted">Url or link to an image.</small>
          </div>
          <button type="submit" className="btn btn-outline-success" name="create">Create</button>
        </form>
      </div>
    );
  }
}
