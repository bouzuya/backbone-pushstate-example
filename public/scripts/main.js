$(document).ready(function() {

  var UserModel = Backbone.Model.extend({});

  var UserView = Backbone.View.extend({
    template: _.template('name: <%- name %>'),
    initialize: function() {
      this.listenTo(this.model, 'change', this.render);
    },
    render: function() {
      this.$el.html(this.template(this.model.toJSON()));
      return this;
    },
  });

  var AppView = Backbone.View.extend({
    tagName: 'div',
    id: 'app',
    template: _.template('<ul><li><a href="/users/user1">user1</a></li><li><a href="/users/user2">user2</a></li></ul><div id="user"></div>'),
    render: function() {
      $('.loading').hide();
      this.$el.html(this.template());
      new UserView({ model: userModel, el: this.$('#user') }).render();
      return this;
    },
  });

  var AppRouter = Backbone.Router.extend({
    routes: {
      '': 'root',
      'users(/:user)': 'users'
    },
    initialize: function() {
    },
    root: function() {
      console.log('route /');
    },
    users: function(user) {
      console.log('route /users/' + user);
      userModel.set('name', user);
    }
  });

  $(document).on('click', 'a[href^="/"]', function(e) {
    e.preventDefault();
    var href = $(e.currentTarget).attr('href');
    console.log('click ' + href);
    Backbone.history.navigate(href, { trigger: true });
  });

  var userModel = new UserModel({ name: 'no name' });
  new AppView().render().$el.appendTo('body');
  new AppRouter();
  Backbone.history.start({ pushState: true, root: '/' });

});
