import Controller from 'ember-controller';
import service from 'ember-service/inject';
import { alias } from 'ember-computed';

export default Controller.extend({
  session: service(),
  user: alias('session.account')
});
