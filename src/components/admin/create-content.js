import React, { Component } from 'react';

export default class CreateContent extends Component {
  constructor(props) {
    super(props);

    this.state = {
      title: '',
      summary: '',
      body: '',
      type: '',
      image: ''
    }
  }

  onSubmit(e) {
    e.preventDefault();

    console.log("Form submited");
  }
  render() {
    return(
      <div>
        <h1>Create New Content</h1>
        <form onSubmit={this.onSubmit}>
          <div className="form-group">
            <label htmlFor="title">Title</label>
            <input type="text" required className="form-control" id="title" name="title"></input>
          </div>
          <div className="form-group">
            <label htmlFor="summary">Summary</label>
            <textarea className="form-control" id="summary" rows="3" name="summary"></textarea>
          </div>
          <div className="form-group">
            <label htmlFor="body">Body</label>
            <textarea className="form-control" id="body" rows="10" name="body"></textarea>
          </div>
          <div className="form-group">
            <label htmlFor="type">Type</label>
            <select className="form-control" id="type" defaultValue="" required>
              <option disabled value="">--Select type--</option>
              <option value="page">Page</option>
              <option value="product">Product</option>
              <option value="service">Service</option>
              <option value="facility">Facility</option>
            </select>
          </div>
          <div className="form-group">
            <label htmlFor="image">Image</label>
            <input type="url" className="form-control" id="image" name="image" aria-describedby="imageHelp"></input>
            <small id="imageHelp" className="form-text text-muted">Url or link to an image.</small>
          </div>
          <button type="submit" className="btn btn-outline-success" name="create">Create</button>
        </form>
      </div>
    );
  }
}
