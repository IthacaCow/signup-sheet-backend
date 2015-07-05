var express      = require('express');
var path         = require('path');
var favicon      = require('serve-favicon');
var logger       = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser   = require('body-parser');
var sign_up      = require('./routes/sign_up');
var mongoose     = require('mongoose');
var app          = express();

/******************************/
// Route path

app.post("/sign_up/add_record",      sign_up.add_record);

app.delete("/sign_up/delete_record", sign_up.delete_record);

app.get("/sign_up/record/:id",       sign_up.get_specific_record);

app.get("/sign_up/record",           sign_up.get_all_records);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});

/******************************/




// error handlers

// development error handler
// will print stacktrace
if (app.get('env') === 'development') {
  app.use(function(err, req, res, next) {
    res.status(err.status || 500);
    res.render('error', {
      message: err.message,
      error: err
    });
  });
}

// production error handler
// no stacktraces leaked to user
app.use(function(err, req, res, next) {
  res.status(err.status || 500);
  res.render('error', {
    message: err.message,
    error: {}
  });
});


module.exports = app;
