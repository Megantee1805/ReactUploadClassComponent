import React from 'react';
import axios from 'axios';
import { AnyMxRecord } from 'dns';
import Router, { withRouter } from 'next/router'


interface IProps {
  /**
   * A string that defines the file types the file input should accept.
   * This string is a comma-separated list of unique file type specifiers.
   *
   * https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input/file#accept
   * https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input/file#Unique_file_type_specifiers
   */
  acceptedFileTypes?: string;
  allowMultipleFiles?: boolean;
  id?: number;
  formData?: any;
  onChange?: any;
  uploadFileName?: string;
  /**
   * Text to display as the button text
   */
}

/* You can store the files inside the state in an array, provided you specify it) 

interface IState { 
  uploadFilesName?: any;
  fileList?:any;
  fileType?: string;
}

const config = {
  headers: { 'content-type': 'multipart/form-data' },
  onUploadProgress: (event) => {
    console.log(`Current progress:`, Math.round((event.loaded * 100) / event.total));
  },
};


export default class UIFile extends React.Component <IProps, IState> {
  ref: any; 
  constructor(props: IProps) { 
    super(props)
    this.state = { 
      uploadFilesName: [],
      fileList: [], 
      formData: {},
    }
    this.onClickHandler = this.onClickHandler.bind(this)
  }


/* This if the functioned called when the form is submitted.
  async onClickHandler(event) { 
  /* This is to prevent the default function 
    event.preventDefault()
   var name = await this.props.uploadFileName
    var fileType = this.state.fileType
   
    /* Specify each file as a Blob, and this would map them each time and allow it to be submitted
    await Array.from(fileList).forEach((file: Blob) => {
        formData.append(name, file)
      });
    /* This would call the function in the function component 
    await this.props.onChange(formData);
  }


  render() { 
    return(
      <>
      <div className="container">
        <h1> Upload Files For Agent</h1>
        <h4>This can apply for both videos and images</h4>
        <form className="form-control" onSubmit={this.onClickHandler}> 
          <input type="file" className="btn btn-primary col-md-12" 
          accept={this.props.acceptedFileTypes} 
          multiple={this.props.allowMultipleFiles} 
          name={this.props.uploadFileName}
          />
          <br></br>
          <button className="btn btn-primary" type="submit"> Submit</button>
        </form>
      </div>
      </>
    )
  }
}

