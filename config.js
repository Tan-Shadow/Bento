// ╔╗ ╔═╗╔╗╔╔╦╗╔═╗
// ╠╩╗║╣ ║║║ ║ ║ ║
// ╚═╝╚═╝╝╚╝ ╩ ╚═╝
// ┌─┐┌─┐┌┐┌┌─┐┬┌─┐┬ ┬┬─┐┌─┐┌┬┐┬┌─┐┌┐┌
// │  │ ││││├┤ ││ ┬│ │├┬┘├─┤ │ ││ ││││
// └─┘└─┘┘└┘└  ┴└─┘└─┘┴└─┴ ┴ ┴ ┴└─┘┘└┘

const CONFIG = {
  // ┌┐ ┌─┐┌─┐┬┌─┐┌─┐
  // ├┴┐├─┤└─┐││  └─┐
  // └─┘┴ ┴└─┘┴└─┘└─┘

  // General
  name: 'Tan',
  imageBackground: false,
  openInNewTab: true,
  twelveHourFormat: false,

  // Greetings
  greetingMorning: 'Ohayo~!',
  greetingAfternoon: 'Good afternoon,',
  greetingEvening: 'Good evening,',
  greetingNight: 'Go to sleep!',

  // Weather
//   weatherKey: 'InsertYourAPIKeyHere123456',
//   weatherIcons: 'OneDark', // 'Nord', 'Dark', 'White'
//   weatherUnit: 'C', // 'F', 'C'
//   language: 'en', // More languages in https://openweathermap.org/current#multi

//   trackLocation: true, // If false or an error occurs, the app will use the lat/lon below
//   defaultLatitude: '37.775',
//   defaultLongitude: '-122.419',

  // ┌─┐┌─┐┬─┐┌┬┐┌─┐
  // │  ├─┤├┬┘ ││└─┐
  // └─┘┴ ┴┴└──┴┘└─┘

  // Links
  cards: [
    {
      id: '1',
      name: 'Github',
      icon: 'github',
      link: 'https://github.com/',
    },
    {
      id: '2',
      name: 'Mail',
      icon: 'mail',
      link: 'https://mail.protonmail.com/',
    },
    {
      id: '3',
      name: 'Todoist',
      icon: 'trello',
      link: 'https://todoist.com',
    },
    {
      id: '4',
      name: 'Calendar',
      icon: 'calendar',
      link: 'https://calendar.google.com/calendar/r',
    },
    {
      id: '5',
      name: 'Reddit',
      icon: 'glasses',
      link: 'https://reddit.com',
    },
    {
      id: '6',
      name: 'Odysee',
      icon: 'youtube',
      link: 'https://odysee.com/',
    },
  ],

  // ┬  ┬┌─┐┌┬┐┌─┐
  // │  │└─┐ │ └─┐
  // ┴─┘┴└─┘ ┴ └─┘

  //Icons
  firstListIcon: 'music',
  secondListIcon: 'coffee',

  // Links
  lists: {
    firstList: [
      {
        name: 'BugsWriter',
        link: 'https://www.youtube.com/c/BugsWriter0x1337',
      },
      {
        name: 'Broddie',
        link: 'https://www.youtube.com/c/BrodieRobertson',
      },
      {
        name: 'Ben Awad',
        link: 'https://www.youtube.com/c/BenAwad97',
      },
      {
        name: 'Linux Cast',
        link: 'https://www.youtube.com/results?search_query=linux+cast',
      },
    ],
    secondList: [
      {
        name: 'Smash karts',
        link: 'https://smashkarts.io/',
      },
      {
        name: 'Umgbhalla Dotstow',
        link: 'https://github.com/umgbhalla/dotstow//',
      },
      {
        name: 'Kshgrk Dotfiles',
        link: 'https://github.com/kshgrk/linux_dotfiles/',
      },
      {
        name: 'Hxyro Dotstow',
        link: 'https://github.com/hxyro/Dot_files',
      },
    ],
  },
};
