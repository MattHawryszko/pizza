import React, { Component } from 'react';

export default class App extends Component {
render() {
    return (
      <div className="bg-dark"> 
        <div className="container">
          <div className="row justify-content-center d-flex">
            <div className="col-lg-8 col-lg-offset-2">
              <form id="contact-form" role="form" className="wow fadeIn">
                <div className="messages"></div>
                  <div className="controls">
                    <div className="row">
                        <div className="col-md-12">
                            <p className="text-white"> fields marked with <strong>*</strong> are required. thank you for taking the time to fill out our application </p>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-6">
                            <div className="form-group">
                                <label className="text-white" for="form_name">Firstname *</label>
                                <input id="form_name" type="text" name="name" className="form-control" placeholder="Please enter your firstname *" required="required" data-error="Firstname is required." />
                                <div className="help-block with-errors"></div>
                              </div>
                            
                        </div>
                        <div className="col-md-6">
                            <div className="form-group">
                                <label className="text-white" for="form_lastname">Lastname *</label>
                                <input id="form_lastname" type="text" name="surname" className="form-control" placeholder="Please enter your lastname *" required="required" data-error="Lastname is required." />
                                <div className="help-block with-errors"></div>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-6">
                            <div className="form-group">
                                <label className="text-white" for="form_email">Email *</label>
                                <input id="form_email" type="email" name="email" className="form-control" placeholder="Please enter your email *" required="required" data-error="Valid email is required." />
                                <div className="help-block with-errors"></div>
                            </div>
                        </div>
                        <div className="col-md-6">
                            <div className="form-group">
                                <label className="text-white" for="form_phone">Phone</label>
                                <input id="form_phone" type="tel" name="phone" className="form-control" placeholder="Please enter your phone" />
                                <div className="help-block with-errors"></div>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-12">
                            <div className="form-group">
                                <label className="text-white" for="form_message">Message *</label>
                                <textarea id="form_message" name="message" className="form-control" placeholder="Message for us *" rows="4" required="required" data-error="Please,leave us a message."></textarea>
                                <div className="help-block with-errors"></div>
                            </div>
                        </div>
                        <div className="col-md-12 pb-5">
                          <div className="form-group">
                            <label className="text-white" for="resume">Resume *</label>
                            <input id="resume" className="form-control btn-sucsess" type="file" />
                            <div className="help-block with-errors"></div>
                          </div>
                          <input type="button" className="btn btn-success btn-send" value="Submit application" />
                        </div>
                    </div>
                  </div>
                </form>
              </div>
            </div> 
          </div> 
        </div>
      );
  }
};

