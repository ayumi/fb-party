// not ES6 because it's not precompiled because I don't feel like updating build.rb

// console.log("In frame.js");

function getQueryParam(param) {
  var query = window.location.search.substring(1);
  var vars = query.split("&");
  for (var i=0; i < vars.length; i++) {
    var pair = vars[i].split("=");
    if (pair[0] === param) {
      return pair[1];
    }
  }
  return(null);
}

var App = {

  El: {
  },

  Cfg: {

  },

  Fn: {
    init: function() {
      App.El = {
        emailList: document.getElementById("email-list"),
        inviteButton: document.getElementById("invite-button"),
        emailsPerRun: document.getElementById("emails-per-run")
      };

      App.El.inviteButton.addEventListener("click", App.Fn.inviteButtonPressed);
    },

    inviteButtonPressed: function(event) {
      var emails = App.Fn.shiftEmails();
      App.Fn.invitePeeps(emails);
    },

    shiftEmails: function(count) {
      var
        emails = [],
        emailBuffer,
        newLineIndex;
      var firstLineIndex
      if (!count) {
        count = App.El.emailsPerRun.value;
      }
      for (var i = 0; i < count; i++) {
        newLineIndex = App.El.emailList.value.indexOf("\n");
        emailBuffer = App.El.emailList.value.substring(
          0,
          newLineIndex - 1
        );
        emails.push(emailBuffer);
        App.El.emailList.value = App.El.emailList.value.substring(
          newLineIndex + 1,
          App.El.emailList.value.length
        );
      }
      return emails;
    },

    invitePeeps: function(emails) {
      for (var i = 0; i < emails.length; i++) {
        App.Fn.invitePeep(emails[i]);
      }
    },

    invitePeep: function(email) {
      var inputBox = document.querySelector("input[placeholder='Search for people to invite'");
      // inputBox.value = email;
      inputBox.focus();
      var event = document.createEvent('Event'); event.initEvent('keydown', true, true);
      event.keyCode = 76;
    }
  }

};
