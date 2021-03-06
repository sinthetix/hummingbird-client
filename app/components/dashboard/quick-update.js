import Component from 'ember-component';
import service from 'ember-service/inject';
import get from 'ember-metal/get';
import set, { setProperties } from 'ember-metal/set';
import computed from 'ember-computed';
import { typeOf } from 'ember-utils';
import { task } from 'ember-concurrency';
import { scheduleOnce } from 'ember-runloop';
import { storageFor } from 'ember-local-storage';
import FlickityActionsMixin from 'client/mixins/flickity-actions';

export default Component.extend(FlickityActionsMixin, {
  classNames: ['quick-update'],
  filterOptions: ['all', 'anime', 'manga'],
  pageLimit: 12,
  notify: service(),
  session: service(),
  store: service(),
  lastUsed: storageFor('last-used'),

  remaining: computed('initialEntries.length', function() {
    return 3 - (get(this, 'initialEntries.length') || 0);
  }).readOnly(),

  getEntriesTask: task(function* () {
    const type = get(this, 'filter') !== 'all' ? get(this, 'filter') : undefined;
    const includes = type || 'anime,manga';
    return yield get(this, 'store').query('library-entry', {
      include: `${includes},nextUnit`,
      filter: {
        kind: type,
        user_id: get(this, 'session.account.id'),
        status: 'current,planned'
      },
      sort: 'status,-updated_at',
      page: { limit: get(this, 'pageLimit') }
    });
  }).drop(),

  init() {
    this._super(...arguments);
    const filter = get(this, 'lastUsed.quickUpdateFilter') || 'all';
    set(this, 'filter', filter);
    this._getEntries();
  },

  _getEntries() {
    set(this, 'initialEntries', []);
    get(this, 'getEntriesTask').perform().then((entries) => {
      set(this, 'initialEntries', entries);
    }).catch((error) => {
      get(this, 'raven').logException(error);
    });
  },

  _appendToFlickty() {
    scheduleOnce('afterRender', () => {
      if (get(this, 'isDestroyed') || get(this, 'isDestroying')) { return; }
      const index = this.$('.carousel').data('flickity').cells.length - 1;
      this.$('.carousel').flickity('insert', this.$('.new-entries').children(), index);
    });
  },

  actions: {
    updateNextPage(records, links) {
      set(this, 'newEntries', records);
      set(this, 'initialEntries.links', links);
      this._appendToFlickty();
    },

    updateEntry(entry, property, value) {
      if (get(this, 'isFlickityDraging')) { return; }
      if (typeOf(property) === 'object') {
        setProperties(entry, property);
      } else {
        set(entry, property, value);
      }
      return entry.save().catch(() => {
        entry.rollbackAttributes();
      });
    },

    reloadUnit(entry) {
      const idWas = get(entry, 'nextUnit.id');
      return entry.belongsTo('nextUnit').reload().then((unit) => {
        // if the id hasn't changed then that means the API returned a `null` value
        const value = get(unit, 'id') === idWas ? null : unit;
        set(entry, 'nextUnit', value);
      }).catch(() => {
        set(entry, 'nextUnit', null);
      });
    },

    changeFilter(option) {
      if (get(this, 'filter') === option) { return; }
      set(this, 'filter', option);
      set(this, 'lastUsed.quickUpdateFilter', option);
      this._getEntries();
    }
  }
});
