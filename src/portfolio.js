const header = {
  // all the properties are optional - can be left empty or deleted
  homepage: 'https://xenon789.github.io/cleanfolio/',
  title: 'XS.',
}

const about = {
  // all the properties are optional - can be left empty or deleted
  name: 'Xenon Santillan',
  role: 'Full Stack Developer',
  description:
    'A recent Full Stack Development Bootcamp Graduate, looking to broaden and extend my skills and knowledge.',
  resume: 'https://docs.google.com/document/d/1CUJSQLRf-8DQgNs_Swr8g2pHZlJx-Glo/edit?usp=sharing&ouid=115643213634257744656&rtpof=true&sd=true',
  social: {
    linkedin: 'https://www.linkedin.com/in/xenon-santillan-b2148a24a/',
    github: 'https://github.com/Xenon789/',
  },
}

const projects = [
  // projects can be added an removed
  // if there are no projects, Projects section won't show up
  {
    name: 'Wallet Watchdog',
    description:
      'You\'re a Github user and tech enthusiast looking to support new repositories while also needing an application to help you manage your finances. Introducing... Wallet Watchdog. Tell your digital dog about your finances and help manage your expenses by setting monthly goals and limits for yourself. Your wallet watchdog will help you visualize your expenses and adjust your budgets accordingly.',
    stack: ['CSS', 'Javascript', 'Handlebars.js', 'Express', 'MySQL', 'Heroku'],
    sourceCode: 'https://github.com/Xenon789/Wallet-Watchdog',
    livePreview: 'https://wallet-watchdog-1.herokuapp.com/',
  },
  {
    name: 'Crypto-Conversion-Project',
    description:
      'AS A owner of crypto currency, I WANT to be able to search and look coins at ease',
    stack: ['Javascript', 'HTML', 'CSS', 'BULMA'],
    sourceCode: 'https://github.com/Xenon789/Crypto-conversion-project',
    livePreview: 'https://xenon789.github.io/Crypto-conversion-project/',
  },
  {
    name: 'Workday Scheduler',
    description:
      'A web application that you can use to scheduler your daily events for work.',
    stack: ['HTML', 'CSS', 'Javascript'],
    sourceCode: 'https://github.com/Xenon789/workday-scheduler',
    livePreview: 'https://xenon789.github.io/workday-scheduler/',
  },
]

const skills = [
  // skills can be added or removed
  // if there are no skills, Skills section won't show up
  'HTML',
  'CSS',
  'JavaScript',
  'TypeScript',
  'NodeJS',
  'Express',
  'React',
  'Regex',
  'SASS',
  'Bootstrap',
  'Git',
  'CI/CD',
  'Jest',
  'Tailwind CSS',
  'C++',
  'Java',
  'Python',
  'Handlebars.js',
  'Agile Software Development',
  'Wire Framing',
  'UI/UX',
  'Adobe Photoshop',
  'Adobe Lightroom'
]

const contact = {
  // email is optional - if left empty Contact section won't show up
  email: 'xenonxpo@gmail.com',
}

export { header, about, projects, skills, contact }
