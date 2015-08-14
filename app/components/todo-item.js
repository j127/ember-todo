import Ember from 'ember';

export default Ember.Component.extend({
    actions: {
        editTodo: function () {
            this.set('isEditing', true);
        }
    }
});
