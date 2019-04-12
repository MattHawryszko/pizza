import React, { Component } from 'react';

export default class App extends Component {
render() {
    return (
      <div class="bg-dark"> 
        <div class="container">
          <div class="row justify-content-center d-flex">
            <div class="col-lg-8 col-lg-offset-2">
              <form id="contact-form" role="form" className="wow fadeIn">
                <div class="messages"></div>
                  <div class="controls">
                    <div class="row">
                        <div class="col-md-12">
                            <p class="text-white"> fields marked with <strong>*</strong> are required. thank you for taking the time to fill out our application </p>
                        </div>
                    </div>
                    <div class="row">
                        <div class="col-md-6">
                            <div class="form-group">
                                <label className="text-white" for="form_name">Firstname *</label>
                                <input id="form_name" type="text" name="name" class="form-control" placeholder="Please enter your firstname *" required="required" data-error="Firstname is required." />
                                <div class="help-block with-errors"></div>
                              </div>
                            
                        </div>
                        <div class="col-md-6">
                            <div class="form-group">
                                <label className="text-white" for="form_lastname">Lastname *</label>
                                <input id="form_lastname" type="text" name="surname" class="form-control" placeholder="Please enter your lastname *" required="required" data-error="Lastname is required." />
                                <div class="help-block with-errors"></div>
                            </div>
                        </div>
                    </div>
                    <div class="row">
                        <div class="col-md-6">
                            <div class="form-group">
                                <label className="text-white" for="form_email">Email *</label>
                                <input id="form_email" type="email" name="email" class="form-control" placeholder="Please enter your email *" required="required" data-error="Valid email is required." />
                                <div class="help-block with-errors"></div>
                            </div>
                        </div>
                        <div class="col-md-6">
                            <div class="form-group">
                                <label className="text-white" for="form_phone">Phone</label>
                                <input id="form_phone" type="tel" name="phone" class="form-control" placeholder="Please enter your phone" />
                                <div class="help-block with-errors"></div>
                            </div>
                        </div>
                    </div>
                    <div class="row">
                        <div class="col-md-12">
                            <div class="form-group">
                                <label className="text-white" for="form_message">Message *</label>
                                <textarea id="form_message" name="message" class="form-control" placeholder="Message for us *" rows="4" required="required" data-error="Please,leave us a message."></textarea>
                                <div class="help-block with-errors"></div>
                            </div>
                        </div>
                        <div class="col-md-12 pb-5">
                          <div class="form-group">
                            <label className="text-white" for="resume">Resume *</label>
                            <input id="resume" class="form-control btn-sucsess" type="file" />
                            <div class="help-block with-errors"></div>
                          </div>
                          <input type="button" class="btn btn-success btn-send" value="Submit application" />
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

