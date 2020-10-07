
const positions = [
  {
    company: 'IQVIA',
    position: 'Associate Director, Project Management Organization',
    link: 'https://www.iqvia.com',
    daterange: 'March 2020 - Present',
    points: [
      'TBD',
    ],
  },
  
  {
    company: 'IQVIA',
    position: 'Senior Project Manager',
    link: 'https://www.iqvia.com',
    daterange: 'December 2018 - February 2020',
    points: [
      'TBD',
    ],
  }, {
    company: 'Amazon',
    position: 'Program Manager',
    link: 'https://www.amazon.com',
    daterange: 'June 2017 - September 2018',
    points: [
      'Lead PM for the Developer Advocate team supporting all 3P Alexa Skill developers with an inbound case resolution of ~450 cases a week',
      'Provided data analysis used to drive headcount forecasting and process efficiency for increased case deflection and decreased AHT',
      'Built and managed an ongoing bi-weekly Scrum sprint process including creation of dynamic documentation and JIRA ticketing standards',
      'Successfully migrated our entire CS knowledge base and case management software to a brand new stack with zero down time',
      'Built and managed processes, reporting and documentation for all net new and iterative product launches coming out of Alexa for the publishing and CS teams',
      'Acted as the SME for all internal team tools including JIRA, Confluence, Tableau, and our internal case management software',
    ],
  }, {
    company: 'Tableau',
    position: 'Technical Program Manager',
    link: 'http://www.tableau.com',
    daterange: 'March 2015 - May 2017',
    points: [
      'Managed relationship between internal Marketing organization and Operations',
      'Key POC for Marketing Operations department, designing solutions to their business needs of our internal software stack',
      'Shepherd development requests through full ticket life cycle using a combination of both agile and waterfall methodologies',
      'Worked with Operations development team to prioritize and solution based on needs of our Marketing team',
      'Worked with database engineering team to design and implement efficiencies in our internal reporting databases based on the needs of our Marketing team',
      'Managed break-fix solutioning and deployment to address urgent customer bugs in our software',
      'Create detailed documentation including process flow diagrams, project proposals, tickets with requirements for development and QA, and customer communications of new features',
      'Use Tableau Desktop and Tableau Server daily to root cause issues, create daily reporting, and communicate work impact at sell-in and and post deployment',
    ],
  }, {
    company: 'HTC',
    position: 'Community Manager',
    link: 'http://www.htc.com',
    daterange: 'August 2014 - March 2015',
    points: [
      'Developed the ongoing strategy for Twitter, Facebook, Instagram, Tumblr and Zoe social networks for the Zoe brand (@madewithzoe)',
      'Grew social accounts via a combination of paid and organic activity (Twitter 0-2k, Facebook 0-15k, Instagram 0-1k)',
      'Partnered with a marketing agency to establish regular content production from highly influential Instagram users on Zoe',
      'Managed the relationship with content creators and influencers within the Zoe community to maintain high quality content in the Zoe community',
      'Worked with the engineering team to build and establish a Zoe blog. Wrote stories, how-to and user highlight posts and built the associated digital assets to tell compelling stories',
      'Maintained a connection from the engineering/UX teams directly to the user base. Providing invaluable feedback on a day-to-day basis on the real world usage of our product to change our roadmap and priorities.',
      'Worked on the go to market strategy behind future Creative Labs projects',
      'Developed a structure for ongoing customer service within the Creative Labs group, including toolset recommendations, staffing requirements and associated costs.',
      'Worked directly with the engineering team to build professional level API additions in to Zoe for usage in larger social engagements platforms to help the future of the Zoe platform in its adoption by major brands',
    ],
  }, {
    company: 'HTC',
    position: 'Digital Customer Experience Manager',
    link: 'http://www.htc.com',
    daterange: 'September 2012 - July 2014',
    points: [
      'Deployed SAP as well as a number of plugins for use in building new customer service infrastructure. Integrating our call centers, a new knowledge base and experimental online/social media customer service agents',
      'Defined new script and customer service practices to fill out the new digital arm of the customer service division. Provided system and process integration into the existing service organization, and new customer touch points for customer service.',
      'Trained and managed a group of 5 call center agents to provide direct customer service on Facebook and Twitter in order to triage and action 10k tickets per month. Tone of voice, social media expertise, PR writing tactics and top notch customer service skills were all required of the agents.',
    ],
  }, {
    company: 'HTC',
    position: 'Social Marketing Manager',
    link: 'http://www.htc.com',
    daterange: 'May 2011 - September 2012',
    points: [
      'Helped hire and partnered with our Director of Social Marketing to hire, train, and build the Social Marketing division at HTC from 1 to a team of 6.',
      'Managed and trained social agencies and internal marketing heads on day-to-day engagement, social media best practices, campaigns, and redesigns of channels. This involved training summits in EMEA and APAC, training all regions on Social 101 as well as how HTC specifically approaches social (tone of voice, messaging cadence, etc).',
      'Provided fundamental strategy to the larger product, marketing, and PR portions of HTC via expertise in social and key understandings about our customers via direct engagement. This included software and hardware feedback (timely reporting of issues and resolution suggestions), as well as fundamental business decisions and direction (changes to software update cycles, open bootloader polices).',
    ],
  }, {
    company: 'HTC',
    position: 'Social Media Coordinator',
    link: 'http://www.htc.com',
    daterange: 'July 2009 - April 2011',
    points: [
      'Managed day-to-day operations of all of HTC social media accounts (Twitter, Facebook, YouTube).',
      'Established tone of voice and rules for engagement for HTC social media',
      'Grew HTC social channels (Twitter 15k-450k, Facebook 15k-2mil) through strategic day-to-day engagement. Management of a conversation calendar for better strategy and reporting and for heavy coordination with other areas of the company and their milestone dates.',
      'Significant experience planning consumer ‘meet-up’ events, allowing customers hands on experience with new products, generating buzz and conversation volume for GTM plans.',
      'Significant additional work on global product launches, marketing campaign asset creation (both digital, photography, and video), PR crisis communication, training of digital customer service representatives.',
    ],
  }, /* {
    company: 'SEDS-USA',
    position: 'At Large Board Member',
    link: 'http://seds.org',
    daterange: 'October 2013 - October 2014',
    points: [
      'Elected to Board of Directors of the USA’s largest student space advocacy group based on 5+ years of work with SEDS.',
      'Responsibilities included: organizational strategy, conference presentations, fundraising, special projects, promoting SEDS nationally and internationally, and photographing conferences.',
    ],
  },
  {
    company: 'UB Nanosatellite Program',
    position: 'Cofounder, Program Manager',
    link: 'https://ubnl.space/',
    daterange: 'October 2010 – June 2012',
    points: [
      'Coauthored grant to build a multispectral imaging satellite as part of the AFRL University Nanosatellite Program.',
      'Lead a team of 60 students through satellite development life cycle. Served as a technical expert, acquired intimate working knowledge of satellite subsystems.  Solicited funding through NASA, AFOSR, and several corporate sponsors.',
    ],
  }, */
];

export default positions;
