import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CheckService {

  public Data = [
    {
      name: 'harden the security',
      description: `All products developed by deltacodes are secure from malicious entities and attackers trying to gain access to the engine. we take care of more than 100 security vulnerabilities making sure each and every product that get's out of DeltaCodes is safe from all these threats.`,
      topic: 'Threats Neutralised',
      highName: 'Threat level',
      children: [
        {
          name: 'XSS Attack Protection',
          description: 'Exploits the vulnerability in client side to gain access to the page',
          highValue: 'High'
        },
        {
          name: 'SQL Injection Attack',
          description: 'Placement of malicious code in SQL Statement via page input to gain access to database',
          highValue: 'High'
        },
        {
          name: 'Path Traversal Attack',
          description: 'Directory Traversal aims to access files and directories that are stored outside the web root folder by manipulating variables that reference files.',
          highValue: 'High'
        },
        {
          name: 'DoS & DDoS Attack',
          description: 'DDoS attack is an attempt to make an online service unavailable by overwhelming it with traffic from multiple sources.',
          highValue: 'Moderate'
        },
        {
          name: 'Man in the middle Attack',
          description: 'Man-in-the-middle is a type of eavesdropping attack that occurs when a malicious actor inserts himself as a relay/proxy into a communication session between people or systems.',
          highValue: 'High'
        },
        {
          name: 'Flood Attack',
          description: 'The attacker aims to disrupt a targeted machine by sending a packet larger than the maximum allowable size, causing the target machine to freeze or crash.',
          highValue: 'High'
        },
        {
          name: 'Eavesdropping Attack',
          description: 'The attack takes advantage of unsecured network communications to access data as it is being sent or received by its user',
          highValue: 'High'
        },
        {
          name: 'Brute-force Attack',
          description: `A brute force attack is an attempt to crack a password or username or find a hidden web page, or find the key used to encrypt a message, using a trial and error approach and hoping, eventually, to guess correctly.`,
          highValue: 'High'
        },
        {
          name: 'Malware Attack',
          description: 'a common cyberattack where malware (normally malicious software) executes unauthorized actions on the victim’s system',
          highValue: 'High'
        },
        {
          name: 'Birthday Attack',
          description: 'It exploits the mathematics behind the birthday problem in probability theory. The success of this attack largely depends upon the higher likelihood of collisions found between random attack attempts and a fixed degree of permutations.',
          highValue: 'High'
        },
        {
          name: 'Session Hijacking',
          description: 'A security attack on a user session over a protected network. The most common method of session hijacking is called IP spoofing, when an attacker uses source-routed IP packets to insert commands into an active communication between two nodes on a network and disguising itself as one of the authenticated users',
          highValue: 'High'
        },
        {
          name: 'Misconfiguration Attacks',
          description: 'Good security requires a secure configuration defined and deployed for the application, web server, database server, and platform',
          highValue: 'High'
        },
        {
          name: 'Information Leak Attack',
          description: 'A software vulnerabilities in which information is unintentionally disclosed to end-users, potentially aiding attackers in their efforts to breach application security',
          highValue: 'High'
        },
      ]
    },
    {
      name: 'protect against spam',
      description: `All products developed by deltacodes are secure from malicious entities and attackers trying gain access to the engine. we take care of more than 100 security checkpoints making sure each and every product that get's out of DeltaCodes is safe from all these threats.`,
      topic: 'Vectors Neutralised',
      highName: 'Threat Level',
      children: [
        {
          name: 'Comment Spam Attack',
          description: 'spam bot postings which abuse web-based forms to post unsolicited advertisements as comments on forums, blogs, wikis and online guest books',
          highValue: 'High'
        },
        {
          name: 'Trackback Spam Attack',
          description: 'trackbacks spam is generated by spammers who use automated scripts to send millions of trackbacks to website',
          highValue: 'High'
        },
        {
          name: 'Negative SEO Attack',
          description: 'A practice of using black hat and unethical techniques to sabotage a competitors rankings in search engines',
          highValue: 'High'
        },
        {
          name: 'Spiders & Bots Attack',
          description: 'Botnet attacks include malicious activities such as credentials leaks, unauthorized access, data theft and DDoS attacks',
          highValue: 'High'
        },
        {
          name: 'E-mail Spam Attack',
          description: 'An email bombing is an attack on your inbox that involves sending massive amounts of messages to your address',
          highValue: 'High'
        }
      ]
    },
    {
      name: 'Add firewall',
      description: `All products developed by deltacodes are secure from malicious entities and attackers trying gain access to the engine. we take care of more than 100 security checkpoints making sure each and every product that get's out of DeltaCodes is safe from all these threats.`,
      topic: 'Provides',
      highName: 'Priority',
      children: [
        {
          name: 'Prevents From Malicious Entities',
          description: 'Adds an extra layer of security which validates each session by analysing multiple parameters of the request.',
          highValue: 'High'
        },
        {
          name: 'Realtime Protection',
          description: 'Peotects aggainst multiple types of attacks even before the attacker Injects malware or proceeds his attack.',
          highValue: 'High'
        },
        {
          name: 'Realtime Traffic Assessment',
          description: 'Protects against DDoS and many other attacks in realtime giving access to only real humans',
          highValue: 'High'
        },
      ]
    },
    {
      name: 'add analytics',
      description: `All products developed by deltacodes are secure from malicious entities and attackers trying gain access to the engine. we take care of more than 100 security checkpoints making sure each and every product that get's out of DeltaCodes is safe from all these threats.`,
      topic: 'Helps Analyse',
      highName: 'Priority',
      children: [
        {
          name: 'User Behaviour',
          description: 'Understand and analyse the behaviour of users visiting your portal.',
          highValue: 'High'
        },
        {
          name: 'User Demographics',
          description: 'Know the pin point demographics of users visiting your website or portal.',
          highValue: 'High'
        },
        {
          name: 'Event Statistics',
          description: 'Know all the events happening in an engaged sessoin and create valuable insights.',
          highValue: 'High'
        },
        {
          name: 'Engaged Sessions',
          description: 'Get detailed information of each engaged session and time spent on your platform.',
          highValue: 'High'
        },
        {
          name: 'Devices used',
          description: 'Get information of the device used by your visitors and generate valuable insights',
          highValue: 'High'
        },
        {
          name: 'Platform Type',
          description: 'Get information on the platform used to visit your portal eg: web | app etc.',
          highValue: 'High'
        },
        {
          name: 'Realtime Traffic Assessment',
          description: 'Get detailed information of realtime visitors accessing your postal.',
          highValue: 'High'
        }
      ]
    },
    {
      name: 'cross browser compatibility',
      description: `All products developed by deltacodes are secure from malicious entities and attackers trying gain access to the engine. we take care of more than 100 security checkpoints making sure each and every product that get's out of DeltaCodes is safe from all these threats.`,
      topic: 'Quality Checks',
      highName: 'Priority',
      children: [
        {
          name: 'Supported Styles',
          description: 'Check for styles and layout uniformity on all the browsers.',
          highValue: 'High'
        },
        {
          name: 'Supported Scripts',
          description: 'Check if the page scripts and functions work properly on all browsers',
          highValue: 'High'
        },
        {
          name: 'Performance Test',
          description: 'Check for performance of the portal on different old and outdated browsers.',
          highValue: 'High'
        }
      ]
    },
    {
      name: 'ssl certificate validation',
      description: `All products developed by deltacodes are secure from malicious entities and attackers trying gain access to the engine. we take care of more than 100 security checkpoints making sure each and every product that get's out of DeltaCodes is safe from all these threats.`,
      topic: 'Ensures',
      highName: 'Priority',
      children: [
        {
          name: 'Encrypted Channel Communication',
          description: 'Ensures all the communication to and from the server are secure and encrypted.',
          highValue: 'High'
        },
        {
          name: 'Secure Connection',
          description: 'Adds a secure badge to website making it rank better on seo and ensures the authenticity of portal',
          highValue: 'High'
        },
      ]
    },
    {
      name: 'Test on 30 different devices',
      description: `All products developed by deltacodes are secure from malicious entities and attackers trying gain access to the engine. we take care of more than 100 security checkpoints making sure each and every product that get's out of DeltaCodes is safe from all these threats.`,
      topic: 'Devices',
      highName: 'Device Popularity',
      children: [
        {
          name: `Iphone's`,
          description: 'Test on all Iphones of different screen size and resolutions.',
          highValue: 'High'
        },
        {
          name: `Ipad's`,
          description: 'Test on all Ipads of different screen size and resolutions.',
          highValue: 'High'
        },
        {
          name: `Android Phones`,
          description: 'Test on multiple Android devices of different screen size and resolutions.',
          highValue: 'High'
        },
        {
          name: `Android Tablets`,
          description: 'Test on multiple Android tablets of different screen size and resolutions.',
          highValue: 'High'
        },
        {
          name: `Desktops`,
          description: 'Test on Desktops of different screen size and resolutions.',
          highValue: 'High'
        },
        {
          name: `Laptops`,
          description: 'Test on multiple Laptops of different screen size and resolutions.',
          highValue: 'High'
        },
        {
          name: `Linux Devices`,
          description: 'Test on multiple linux devices of different screen size and resolutions.',
          highValue: 'High'
        },
        {
          name: `Television's`,
          description: 'Test on multiple televisions of different screen size and resolutions.',
          highValue: 'High'
        },
        {
          name: `Wearable devices on select cases`,
          description: 'Test on different wearable devices of different screen size and resolutions.',
          highValue: 'High'
        },
        {
          name: `Mac's`,
          description: 'Test on multiple Imac of different screen size and resolutions.',
          highValue: 'High'
        },
      ]
    },
    {
      name: 'Secure data at rest & transmission',
      description: `All products developed by deltacodes are secure from malicious entities and attackers trying gain access to the engine. we take care of more than 100 security checkpoints making sure each and every product that get's out of DeltaCodes is safe from all these threats.`,
      topic: 'Encryption Levels',
      highName: 'Encryption Level',
      children: [
        {
          name: '3DES',
          description: 'for secure off the grid internal network communications',
          highValue: 'Weak'
        },
        {
          name: 'AES-128',
          description: 'for secure low level data transmission',
          highValue: 'Average'
        },
        {
          name: 'AES-192',
          description: 'for secure two way communications of light sensetive data',
          highValue: 'Good'
        },
        {
          name: 'AES-256',
          description: 'for securing highly sensetive data at rest and at transmission',
          highValue: 'Excellent'
        },
        {
          name: 'Twofish',
          description: 'for secure off the grid internal network communications',
          highValue: 'Weak'
        },
        {
          name: 'RSA',
          description: 'for secure multi channel communication of sensitive data',
          highValue: 'Excellent'
        },
        {
          name: 'Diffie-Hellman key exchange',
          description: 'A safe and highly secure way for public key exchange',
          highValue: 'High'
        },
        {
          name: 'ElGamal Encryption',
          description: 'asymmetric key encryption algorithm for public-key cryptography which is based on the Diffie–Hellman',
          highValue: 'High'
        },
        {
          name: 'Elliptic Curve Cryptography',
          description: 'an approach to public-key cryptography based on the algebraic structure of elliptic curves over finite fields.',
          highValue: 'Excellent'
        }
      ]
    },
    {
      name: 'media optimization',
      description: `All products developed by deltacodes are secure from malicious entities and attackers trying gain access to the engine. we take care of more than 100 security checkpoints making sure each and every product that get's out of DeltaCodes is safe from all these threats.`,
      topic: 'Optimization',
      highName: 'Priority',
      children: [
        {
          name: 'Large Media Files',
          description: 'Optimize large media files and documents for faster serving speeds',
          highValue: 'High'
        },
        {
          name: 'Image Size',
          description: 'Use loss less compression techniques to improve the serving time and reduce network load',
          highValue: 'High'
        },
        {
          name: 'Video Quality',
          description: 'Use loss less compression techniques to improve the serving time and reduce network load',
          highValue: 'High'
        },
        {
          name: 'Optimized for Network Speed',
          description: 'Use of secure content delivery network for faster ping time and load time',
          highValue: 'High'
        },
      ]
    },
    {
      name: 'search engine indexing',
      description: `All products developed by deltacodes are secure from malicious entities and attackers trying gain access to the engine. we take care of more than 100 security checkpoints making sure each and every product that get's out of DeltaCodes is safe from all these threats.`,
      topic: 'Indexed On',
      highName: 'Priority',
      children: [
        {
          name: 'Google Search',
          description: 'Ensure proper indexing on Google search',
          highValue: 'High'
        },
        {
          name: 'Bing Search',
          description: 'Ensure proper indexing on Bing search',
          highValue: 'High'
        },
        {
          name: 'Yahoo Search',
          description: 'Ensure proper indexing on Yahoo search',
          highValue: 'High'
        },
        {
          name: 'DuckDuckGo Search',
          description: 'Ensure proper indexing on DuckDuckGo search',
          highValue: 'High'
        },
        {
          name: 'Yandex Search',
          description: 'Ensure proper indexing on yandex search',
          highValue: 'Medium'
        },
        {
          name: 'Baidu Search',
          description: 'Ensure proper indexing on Baidu search',
          highValue: 'Medium'
        },
      ]
    },
    {
      name: 'configure seo',
      description: `All products developed by deltacodes are secure from malicious entities and attackers trying gain access to the engine. we take care of more than 100 security checkpoints making sure each and every product that get's out of DeltaCodes is safe from all these threats.`,
      topic: 'Key Points',
      highName: 'Priority',
      children: [
        {
          name: 'Dynamic Title Tags',
          description: 'Ensure all pages have dynamic title tags',
          highValue: 'High'
        },
        {
          name: 'Dynamic Meta Tags',
          description: 'Ensure all pages have dynamic meta tags',
          highValue: 'High'
        },
        {
          name: 'Open Graph Protocol',
          description: 'Proper implementation of open graph protocol',
          highValue: 'High'
        },
        {
          name: 'Site Map',
          description: 'Ensure the Portal has proper site map defining all the different routes',
          highValue: 'High'
        },
        {
          name: 'Proof Read Content',
          description: 'Proof read content for errors and other mistakes.',
          highValue: 'High'
        },
        {
          name: 'Search Engine Indexing',
          description: 'Ensure proper indexingof website  on multiple search engines',
          highValue: 'High'
        },
        {
          name: 'Web Crawler Friendly',
          description: 'Ensure all the pages are readable by bots and have a proper structure',
          highValue: 'High'
        },
        {
          name: 'Page load Time',
          description: 'Ensure faster page poad time to retain organic visitors.',
          highValue: 'High'
        },
        {
          name: 'Premium Keywords',
          description: 'Use of premium and related keywords for all the pages.',
          highValue: 'High'
        }
      ]
    },
    {
      name: 'social share optimisation',
      description: `All products developed by deltacodes are secure from malicious entities and attackers trying gain access to the engine. we take care of more than 100 security checkpoints making sure each and every product that get's out of DeltaCodes is safe from all these threats.`,
      topic: 'Key Points',
      highName: 'Priority',
      children: [
        {
          name: 'Shocial Share Image',
          description: 'Ensure peoper sizing of social share image',
          highValue: 'HIgh'
        },
        {
          name: 'Shocial Share Description',
          description: 'Ensure proper description of pages for social sharing',
          highValue: 'High'
        },
        {
          name: 'Twitter Compatible',
          description: 'Ensure the website is configured for twitter cards',
          highValue: 'HIgh'
        },
        {
          name: 'Facebook Compatible',
          description: 'Ensure proper display of website on facebook portal',
          highValue: 'High'
        },
        {
          name: 'Linkedin Compatible',
          description: 'Ensure proper link sharing display image and description on linkedin',
          highValue: 'High'
        },
      ]
    },
    {
      name: 'Backup',
      description: `All products developed by deltacodes are secure from malicious entities and attackers trying gain access to the engine. we take care of more than 100 security checkpoints making sure each and every product that get's out of DeltaCodes is safe from all these threats.`,
      topic: 'Threats Neutralised',
      highName: 'Priority',
      children: [
        {
          name: 'Secure Code Backup',
          description: 'Ensure proper backup of all the codes on deltacodes encrypted database.',
          highValue: 'High'
        },
        {
          name: 'Secure Documents Backup',
          description: 'Ensure all documents and media files are encrypted and backed up securely',
          highValue: 'HIgh'
        },
        {
          name: 'Media Backup',
          description: 'Ensure all media files used in development are backed up on secure servers',
          highValue: 'High'
        },
        {
          name: 'Private Repository',
          description: 'Ensure private code repository for development cycle',
          highValue: 'High'
        }
      ]
    },
    {
      name: 'secure admin',
      description: `All products developed by deltacodes are secure from malicious entities and attackers trying gain access to the engine. we take care of more than 100 security checkpoints making sure each and every product that get's out of DeltaCodes is safe from all these threats.`,
      topic: 'Key Points',
      highName: 'Level',
      children: [
        {
          name: 'Secure Admin Panel',
          description: `Admin Panel of your product that's completely cafe from all online threats.`,
          highValue: 'High'
        },
        {
          name: 'Safe Authentication',
          description: 'Super secure user authentication and session for admin panel.',
          highValue: 'High'
        },
        {
          name: 'Cyber Threat Safe',
          description: 'Secure from multiple new age cyber threats.',
          highValue: 'High'
        },
        {
          name: '2-Factor Authentication',
          description: '2 Factor Authentication for added layer of security',
          highValue: 'High'
        },
        {
          name: 'Private Source',
          description: `A completely private application code that browers can not see and bot's can not read.`,
          highValue: 'High'
        },
        {
          name: 'Firewall Security - Max',
          description: 'Firewall security pushed up to highest level of security.',
          highValue: 'High'
        },
        {
          name: 'Full Content Management',
          description: 'Admin panel that can control and analyse every section of the product.',
          highValue: 'Medium'
        },
        {
          name: 'RealTime Threat Detection',
          description: 'Added realtime threat detection for your admin panel.',
          highValue: 'High'
        },
        {
          name: 'Role Management',
          description: 'A role based user(sub admin) authentication system so that not everyone has access to every controls and data of your panel.',
          highValue: 'High'
        },
        {
          name: 'Integrated Analytics',
          description: 'Integrated advanced analytics on the dashboard so that you can analyse every aspect of the product.',
          highValue: 'High'
        },
      ]
    },
    {
      name: 'performance test - google audit',
      description: `All products developed by deltacodes are secure from malicious entities and attackers trying gain access to the engine. we take care of more than 100 security checkpoints making sure each and every product that get's out of DeltaCodes is safe from all these threats.`,
      topic: 'Threats Neutralised',
      highName: 'Priority',
      children: [
        {
          name: '2G Network',
          description: 'Accelerated 2G network testing for load time and performance.',
          highValue: 'High'
        },
        {
          name: '3G Network',
          description: 'Accelerated 3G network testing for load time and performance.',
          highValue: 'High'
        },
        {
          name: '4G Network',
          description: 'Accelerated 4G network testing for load time and performance.',
          highValue: 'High'
        },
        {
          name: 'Mobile First Design',
          description: 'Google audit for mobile first design of the product.',
          highValue: 'High'
        },
        {
          name: 'Page Load Time',
          description: 'Google audit and extensive tests for page load time and delay.',
          highValue: 'High'
        },
        {
          name: 'Page Performance',
          description: 'Audit and tests for performance of the page.',
          highValue: 'High'
        },
        {
          name: 'Low End Devices',
          description: 'Test the product on multiple low spec devices for consumers who own low-end devices.',
          highValue: 'High'
        },
        {
          name: 'Mid Range Devices',
          description: 'Test the product on multiple mid spec devices for consumers who own mid-range devices.',
          highValue: 'High'
        },
        {
          name: 'Low Resolution Devices',
          description: 'Test the product on multiple devices with low to super low screen resolution.',
          highValue: 'High'
        },
        {
          name: 'Super High Resolution Devices',
          description: 'Test the product on multiple devices with high to super high screen resolution.',
          highValue: 'High'
        }
      ]
    },
  ];


  constructor() { }

  public getData() {
    return this.Data;
  }
}
