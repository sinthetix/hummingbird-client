export default {
  // Keys of `titles` must match the route name
  titles: {
    anime: {
      index: 'Explore Anime'
    },
    manga: {
      index: 'Explore Manga'
    },
    'not-found': '404',
    'server-error': '500',
    users: {
      index: '{{user}}\'s Profile',
      library: '{{user}}\'s Library',
      reviews: '{{user}}\'s Reviews',
      followers: '{{user}}\'s Followers',
      following: 'Followed by {{user}}'
    },
    posts: 'Post by {{user}}',
    comments: 'Comment by {{user}}',
    reviews: 'Review by {{user}}',
    notifications: 'Notifications',
    trending: 'Trending',
    admin: {
      index: 'Admin',
      reports: 'Reports'
    }
  },
  auth: {
    signUp: {
      submit: {
        base: 'Let\'s get some basic info first',
        first: 'Very witty - email is next!',
        second: 'Looks legit, how about a password?',
        last: 'Cool - Let\'s create that account'
      }
    }
  },
  dashboard: {
    quickUpdate: {
      filter: {
        all: 'All',
        anime: 'Anime',
        manga: 'Manga'
      },
      hint: {
        text: 'Media you\'ve added or updated within your {{link}} willl show up here for you to quickly update.',
        library: 'Library',
        discover: 'Discover Media'
      },
      mark: 'Mark',
      progress: {
        anime: 'Ep. {{num}}',
        manga: 'Ch. {{num}}'
      },
      complete: 'Complete',
      reviews: {
        write: 'Write Review',
        edit: 'Edit Review'
      }
    },
    streamOnboarding: {
      welcome: 'Hey {{user}}, welcome to Kitsu!',
      about: `This is the global activity feed. It's populated by the recent activity from all of Kitsu's users - even you!
        Once you've had a chance to follow a few more interesting users, we'll switch your default feed from Global to Following.`,
      action: 'Why don\'t you try creating a feed post to introduce yourself using the form below? You can say something as simple as \'Hey everyone, I\'m new to Kitsu\', or you can show us how creative and witty you are!'
    }
  },
  media: {
    anime: {
      name: 'Anime',
      type: {
        TV: 'TV',
        special: 'Special',
        ONA: 'ONA',
        OVA: 'OVA',
        movie: 'Movie',
        music: 'Music'
      }
    },
    manga: {
      name: 'Manga',
      type: {
        manga: 'Manga',
        novel: 'Novel',
        manhua: 'Manhua',
        oneshot: 'One-shot',
        doujin: 'Doujin'
      }
    },
    routes: {
      index: {
        filter: {
          year: 'Year',
          score: 'Score',
          seasons: 'Seasons',
          streamers: 'Streamers (U.S.)',
          episodes: 'Episodes',
          rating: 'Rating',
          genres: 'Categories',
          search: 'Search by title, character, or staff...'
        }
      },
      show: {
        nav: {
          summary: 'Summary',
          episodes: 'Episodes',
          characters: 'Characters',
          reviews: 'Reviews',
          quotes: 'Quotes'
        },
        characters: {
          title: '{{title}} Characters',
          subtitle: {
            anime: 'The following is a full list of characters and their {{language}} voice actors from the anime {{title}}',
            manga: 'The following is a full list of characters for the manga {{title}}'
          }
        },
        ranking: {
          popularity: {
            anime: 'Rank #{{rank}} (Most Popular Anime)',
            manga: 'Rank #{{rank}} (Most Popular Manga)'
          },
          rating: {
            anime: 'Rank #{{rank}} (Highest Rated Anime)',
            manga: 'Rank #{{rank}} (Highest Rated Manga)'
          }
        },
        relationships: {
          sequel: 'Sequel',
          prequel: 'Prequel',
          alternative_setting: 'Alt. setting',
          alternative_version: 'Alt. version',
          side_story: 'Side story',
          parent_story: 'Parent story',
          summary: 'Summary',
          full_story: 'Full story',
          spinoff: 'Spin-off',
          adaptation: 'Adaptation',
          anime_adaptation: 'Anime',
          manga_adaptation: 'Manga',
          character: 'Character',
          other: 'Other'
        },
        titles: {
          en: 'English',
          en_us: 'English',
          en_jp: 'Romanized',
          ja_jp: 'Japanese',
          en_cn: 'Romanized',
          zh_cn: 'Chinese',
          en_th: 'Romanized',
          th_th: 'Thai',
          en_kr: 'Romanized',
          ko_kr: 'Korean',
          synonyms: 'Synonyms'
        },
        information: {
          type: 'Type',
          volumes: 'Volumes',
          unit: {
            anime: 'Episodes',
            manga: 'Chapters'
          },
          start: {
            anime: 'Aired',
            manga: 'Published'
          },
          status: 'Status',
          statuses: {
            anime: {
              current: 'Currently Airing',
              finished: 'Finished Airing',
              nya: 'Not Yet Aired'
            },
            manga: {
              current: 'Publishing',
              finished: 'Finished',
              nya: 'Not Yet Published'
            }
          },
          season: 'Season',
          producers: 'Producers',
          licensors: 'Licensors',
          studios: 'Studios',
          serialization: 'Serialization',
          duration: 'Duration',
          length: {
            one: '{{length}} minutes',
            other: '{{total}} total ({{length}} minutes each)'
          },
          rating: 'Rating'
        },
        episodes: {
          episode: 'Episode'
        }
      }
    }
  },
  library: {
    remove: 'Remove from Library',
    statuses: {
      anime: {
        all: 'All',
        current: 'Currently Watching',
        planned: 'Plan To Watch',
        completed: 'Completed',
        on_hold: 'On Hold',
        dropped: 'Dropped'
      },
      manga: {
        all: 'All',
        current: 'Currently Reading',
        planned: 'Plan To Read',
        completed: 'Completed',
        on_hold: 'On Hold',
        dropped: 'Dropped'
      }
    }
  },
  reviews: {
    review: 'Review',
    reviewBy: 'Review by',
    progress: {
      anime: 'This is a review up to Episode {{num}}.',
      manga: 'This is a review up to Chapter {{num}}.'
    }
  },
  // Global header
  header: {
    library: 'Library',
    anime: 'Anime',
    manga: 'Manga',
    trending: 'Trending',
    apps: 'Apps',
    signIn: 'Sign In',
    signUp: 'Sign Up',
    user: {
      profile: 'View Profile',
      settings: 'Settings',
      admin: 'Admin',
      logout: 'Logout'
    }
  },
  // Users route text
  users: {
    following: 'Following',
    followers: 'Followers',
    follow: 'Follow',
    unfollow: 'Unfollow',
    nav: {
      activity: 'Activity',
      library: 'Library',
      reviews: 'Reviews',
      followers: 'Followers',
      following: 'Following'
    },
    streamOnboarding: {
      welcome: 'Hey {{user}}, this page is all about YOU!',
      about: `As you continue to use Kitsu your <strong>Personal Feed</strong> below will begin to populate with the anime and manga you've watched, read, completed and plan to check out.
        You can also post text, images and videos to your feed using the form below. Your posts will be seen and appreciated by your followers and users from the global feed.`,
      action: 'Make yourself at home! Upload an avatar and cover image! Click <a href="#">Edit</a> above to get started.'
    },
    about: {
      empty: 'It\'s a secret',
      gender: {
        secret: 'It\'s a secret',
        male: 'Male',
        female: 'Female'
      }
    },
    edit: {
      editCover: 'Change your cover photo',
      aboutMe: 'About Me',
      profileLinks: 'Profile Links',
      about: {
        location: 'Location',
        locationPlaceholder: 'Where do you live?',
        birthday: 'Birthday',
        gender: 'Gender',
        genderOptions: {
          secret: 'It\'s a secret',
          male: 'Male',
          female: 'Female',
          custom: 'Custom'
        },
        genderCustom: 'How do you identify?',
        waifu: 'Waifu',
        waifuPlaceholder: 'Who is your waifu / husbando?',
        bio: 'Bio',
        bioPlaceholder: 'Tell the world your story.'
      },
      linkProfile: {
        connect: 'Connect to {{profile}}',
        disconnect: 'Disconnect from {{profile}}',
        toCrosspost: 'Connect to cross-post, find your friends and link to your profile.',
        toShowStreamAndLink: 'Connect to show when you\'re streaming and add a link to your profile.',
        toShowContentAndLink: 'Connect to automatically share your content and link to your account.',
        toAddLink: 'Enter your {{profile}} to add a link on your profile.',
        toShowLink: 'Link to your {{profile}} from your profile.',
        toShowStreaming: 'Show my followers when I\'m streaming.',
        toShowNewUploads: 'Share new content with your followers automatically.',
        placeholderProfile: '{{profile}} Profile URL',
        placeholderChannel: '{{profile}} Channel URL',
        placeholderDiscord: 'Discord Invite URL or DiscordTag#000',
      },
      availableProfiles: {
        web: 'Website',
        facebook: 'Facebook',
        twitter: 'Twitter',
        twitch: 'Twitch',
        youtube: 'Youtube',
        gplus: 'Google',
        steam: 'Steam',
        patreon: 'Patreon',
        tumblr: 'Tumblr',
        github: 'Github',
        instagram: 'Instagram',
        mobcrush: 'Mobcrush',
        raptr: 'Raptr',
        soundcloud: 'Soundcloud',
        discord: 'Discord',
        vimeo: 'Vimeo',
        dailymotion: 'Dailymotion',
        osu: 'Osu'
      },
      favorites: 'Favorites',
      favorite: {
        anime: 'Anime',
        manga: 'Manga',
        characters: 'Characters',
        remove: 'Remove Favorite?',
        add: 'Add Favorite',
        search: 'Search to add by title...'
      }
    },
    library: {
      library: '{{type}} Library',
      search: 'Search this library...',
      notes: 'Personal notes about {{title}}',
      public: 'Public',
      private: 'Private',
      reconsume: {
        anime: 'Rewatch',
        manga: 'Reread'
      },
      reconsumed: {
        anime: 'Rewatched',
        manga: 'Reread'
      },
      reconsuming: {
        anime: 'Rewatching',
        manga: 'Rereading'
      },
      times: 'times',
      emptyOwner: 'You don\'t have any titles here! Ready to start something new? {{link}}',
      emptyGuest: 'Doesn\'t look like {{user}} has anything here!',
      browse: 'Browse {{type}}'
    }
  },
  feeds: {
    filter: {
      all: 'All Activity',
      media: 'Media Activity',
      user: 'User Activity'
    },
    library: {
      updated: 'moved this to {{status}}',
      rated: 'rated it',
      progressed: {
        anime: 'watched episode {{progress}}',
        manga: 'read chapter {{progress}}'
      },
      reviewed: 'wrote a {{link}}',
      review: 'review'
    },
    spoilers: {
      anime: 'Ep. {{num}}',
      manga: 'Ch. {{num}}'
    }
  },
  // ember-power-select locale
  selects: {
    loading: 'Loading...',
    none: 'No results found',
    search: 'Type to search'
  },
  errors: {
    // ember-cp-validations default errors
    description: 'This field',
    inclusion: '{{description}} is not included in the list',
    exclusion: '{{description}} is reserved',
    invalid: '{{description}} is invalid',
    confirmation: '{{description}} doesn\'t match {{on}}',
    accepted: '{{description}} must be accepted',
    empty: '{{description}} can\'t be empty',
    blank: '{{description}} can\'t be blank',
    present: '{{description}} must be blank',
    collection: '{{description}} must be a collection',
    singular: '{{description}} can\'t be a collection',
    tooLong: '{{description}} is too long (maximum is {{max}} characters)',
    tooShort: '{{description}} is too short (minimum is {{min}} characters)',
    before: '{{description}} must be before {{before}}',
    after: '{{description}} must be after {{after}}',
    wrongDateFormat: '{{description}} must be in the format of {{format}}',
    wrongLength: '{{description}} is the wrong length (should be {{is}} characters)',
    notANumber: '{{description}} must be a number',
    notAnInteger: '{{description}} must be an integer',
    greaterThan: '{{description}} must be greater than {{gt}}',
    greaterThanOrEqualTo: '{{description}} must be greater than or equal to {{gte}}',
    equalTo: '{{description}} must be equal to {{is}}',
    lessThan: '{{description}} must be less than {{lt}}',
    lessThanOrEqualTo: '{{description}} must be less than or equal to {{lte}}',
    otherThan: '{{description}} must be other than {{value}}',
    odd: '{{description}} must be odd',
    even: '{{description}} must be even',
    positive: '{{description}} must be positive',
    date: '{{description}} must be a valid date',
    email: '{{description}} must be a valid email address',
    phone: '{{description}} must be a valid phone number',
    url: '{{description}} must be a valid url',
    // Custom errors
    user: {
      name: {
        invalid: 'This field must only contain letters, numbers, and underscores',
        numbers: 'This field must not be made up of numbers entirely',
        starts: 'This field must start with a letter or number'
      }
    },
    load: 'There was an issue loading the content.',
    contentEmpty: 'Hmm, there doesn\'t seem to be anything here yet.',
    request: 'There was an issue with the request. Please try agian.'
  }
};
