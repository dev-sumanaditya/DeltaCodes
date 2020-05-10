import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CheckService {

  public Data = [
    {
      name: 'harden the security',
      description: `All products developed by deltacodes are secure from malicious entities and attackers trying gain access to the engine. we take care of more than 100 security vulnerabilities making sure each and every product that get's out of DeltaCodes is safe from all these threats.`,
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
          description: 'Exploits the vulnerability in client side to gain access to the page',
          highValue: 'High'
        },
        {
          name: 'Path Traversal Attack',
          description: 'Exploits the vulnerability in client side to gain access to the page',
          highValue: 'High'
        },
        {
          name: 'DoS & DDoS Attack',
          description: 'Exploits the vulnerability in client side to gain access to the page',
          highValue: 'High'
        },
        {
          name: 'Man in the middle Attack',
          description: 'Exploits the vulnerability in client side to gain access to the page',
          highValue: 'High'
        },
        {
          name: 'Ping Of Death Attack',
          description: 'Exploits the vulnerability in client side to gain access to the page',
          highValue: 'High'
        },
        {
          name: 'Eavesdropping Attack',
          description: 'Exploits the vulnerability in client side to gain access to the page',
          highValue: 'High'
        },
        {
          name: 'Brute-force Attack',
          description: 'Exploits the vulnerability in client side to gain access to the page',
          highValue: 'High'
        },
        {
          name: 'Malware Attack',
          description: 'Exploits the vulnerability in client side to gain access to the page',
          highValue: 'High'
        },
        {
          name: 'Birthday Attack',
          description: 'Exploits the vulnerability in client side to gain access to the page',
          highValue: 'High'
        },
        {
          name: 'Session Highjacking',
          description: 'Exploits the vulnerability in client side to gain access to the page',
          highValue: 'High'
        },
        {
          name: 'Misconfiguration Attacks',
          description: 'Exploits the vulnerability in client side to gain access to the page',
          highValue: 'High'
        },
        {
          name: 'Information Leak Attack',
          description: 'Exploits the vulnerability in client side to gain access to the page',
          highValue: 'High'
        },
      ]
    },
    {
      name: 'protect against spam',
      description: `All products developed by deltacodes are secure from malicious entities and attackers trying gain access to the engine. we take care of more than 100 security checkpoints making sure each and every product that get's out of DeltaCodes is safe from all these threats.`,
      topic: 'Vectors Neutralised',
      children: [
        {
          name: 'Comment Spam Attack',
          description: '',
          highName: '',
          highValue: ''
        },
        {
          name: 'Trackback Spam Attack',
          description: '',
          highName: '',
          highValue: ''
        },
        {
          name: 'Negative SEO Attack',
          description: '',
          highName: '',
          highValue: ''
        },
        {
          name: 'Spiders & Bots Attack',
          description: '',
          highName: '',
          highValue: ''
        },
        {
          name: 'E-mail Spam Attack',
          description: '',
          highName: '',
          highValue: ''
        }
      ]
    },
    {
      name: 'Add firewall',
      description: `All products developed by deltacodes are secure from malicious entities and attackers trying gain access to the engine. we take care of more than 100 security checkpoints making sure each and every product that get's out of DeltaCodes is safe from all these threats.`,
      topic: 'Provides',
      children: [
        {
          name: 'Prevents From Malicious Entities',
          description: '',
          highName: '',
          highValue: ''
        },
        {
          name: 'Realtime Protection',
          description: '',
          highName: '',
          highValue: ''
        },
        {
          name: 'Realtime Traffic Assessment',
          description: '',
          highName: '',
          highValue: ''
        },
      ]
    },
    {
      name: 'add analytics',
      description: `All products developed by deltacodes are secure from malicious entities and attackers trying gain access to the engine. we take care of more than 100 security checkpoints making sure each and every product that get's out of DeltaCodes is safe from all these threats.`,
      topic: 'Helps Analyse',
      children: [
        {
          name: 'User Behaviour',
          description: '',
          highName: '',
          highValue: ''
        },
        {
          name: 'User Demographics',
          description: '',
          highName: '',
          highValue: ''
        },
        {
          name: 'Event Statistics',
          description: '',
          highName: '',
          highValue: ''
        },
        {
          name: 'Engaged Sessions',
          description: '',
          highName: '',
          highValue: ''
        },
        {
          name: 'Devices used',
          description: '',
          highName: '',
          highValue: ''
        },
        {
          name: 'Platform Type',
          description: '',
          highName: '',
          highValue: ''
        },
        {
          name: 'Realtime Trafic Assessment',
          description: '',
          highName: '',
          highValue: ''
        }
      ]
    },
    {
      name: 'cross browser compatibility',
      description: `All products developed by deltacodes are secure from malicious entities and attackers trying gain access to the engine. we take care of more than 100 security checkpoints making sure each and every product that get's out of DeltaCodes is safe from all these threats.`,
      topic: 'Quality Checks',
      children: [
        {
          name: 'Supported Styles',
          description: '',
          highName: '',
          highValue: ''
        },
        {
          name: 'Supported Scripts',
          description: '',
          highName: '',
          highValue: ''
        },
        {
          name: 'Performance Test',
          description: '',
          highName: '',
          highValue: ''
        }
      ]
    },
    {
      name: 'ssl certificate validation',
      description: `All products developed by deltacodes are secure from malicious entities and attackers trying gain access to the engine. we take care of more than 100 security checkpoints making sure each and every product that get's out of DeltaCodes is safe from all these threats.`,
      topic: 'Ensures',
      children: [
        {
          name: 'Encrypted Channel Communication',
          description: '',
          highName: '',
          highValue: ''
        },
        {
          name: 'Secure Connection',
          description: '',
          highName: '',
          highValue: ''
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
          description: '',
          highValue: ''
        },
        {
          name: `Ipad's`,
          description: '',
          highValue: ''
        },
        {
          name: `Android Phones`,
          description: '',
          highValue: ''
        },
        {
          name: `Android Tablets`,
          description: '',
          highValue: ''
        },
        {
          name: `Desktops`,
          description: '',
          highValue: ''
        },
        {
          name: `Laptops`,
          description: '',
          highValue: ''
        },
        {
          name: `Linux Devices`,
          description: '',
          highValue: ''
        },
        {
          name: `Television's`,
          description: '',
          highValue: ''
        },
        {
          name: `Wearable devices on select cases`,
          description: '',
          highValue: ''
        },
        {
          name: `Mac's`,
          description: '',
          highValue: ''
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
          description: 'for secure off the grid internal network communications',
          highValue: 'Weak'
        },
        {
          name: 'AES-192',
          description: 'for secure off the grid internal network communications',
          highValue: 'Weak'
        },
        {
          name: 'AES-256',
          description: 'for secure off the grid internal network communications',
          highValue: 'Weak'
        },
        {
          name: 'Twofish',
          description: 'for secure off the grid internal network communications',
          highValue: 'Weak'
        },
        {
          name: 'RSA',
          description: 'for secure off the grid internal network communications',
          highValue: 'Weak'
        },
        {
          name: 'Diffie-Hellman key exchange',
          description: 'for secure off the grid internal network communications',
          highValue: 'Weak'
        },
        {
          name: 'ElGamal Encryption',
          description: 'for secure off the grid internal network communications',
          highValue: 'Weak'
        },
        {
          name: 'Elliptic Curve Cryptography',
          description: 'for secure off the grid internal network communications',
          highValue: 'Weak'
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
          description: '',
          highValue: ''
        },
        {
          name: 'Image Size',
          description: '',
          highValue: ''
        },
        {
          name: 'Video Quality',
          description: '',
          highValue: ''
        },
        {
          name: 'Network Speed',
          description: '',
          highValue: ''
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
          description: '',
          highValue: ''
        },
        {
          name: 'Bing Search',
          description: '',
          highValue: ''
        },
        {
          name: 'Yahoo Search',
          description: '',
          highValue: ''
        },
        {
          name: 'DuckDuckGo Search',
          description: '',
          highValue: ''
        },
        {
          name: 'Yandex Search',
          description: '',
          highValue: ''
        },
        {
          name: 'Baidu Search',
          description: '',
          highValue: ''
        },
      ]
    },
    {
      name: 'configure seo',
      description: `All products developed by deltacodes are secure from malicious entities and attackers trying gain access to the engine. we take care of more than 100 security checkpoints making sure each and every product that get's out of DeltaCodes is safe from all these threats.`,
      topic: 'Threats Neutralised',
      children: [
        {
          name: '',
          description: '',
          highName: '',
          highValue: ''
        }
      ]
    },
    {
      name: 'social share optimisation',
      description: `All products developed by deltacodes are secure from malicious entities and attackers trying gain access to the engine. we take care of more than 100 security checkpoints making sure each and every product that get's out of DeltaCodes is safe from all these threats.`,
      topic: 'Threats Neutralised',
      children: [
        {
          name: '',
          description: '',
          highName: '',
          highValue: ''
        }
      ]
    },
    {
      name: 'check for broken links',
      description: `All products developed by deltacodes are secure from malicious entities and attackers trying gain access to the engine. we take care of more than 100 security checkpoints making sure each and every product that get's out of DeltaCodes is safe from all these threats.`,
      topic: 'Threats Neutralised',
      children: [
        {
          name: '',
          description: '',
          highName: '',
          highValue: ''
        }
      ]
    },
    {
      name: 'Backup',
      description: `All products developed by deltacodes are secure from malicious entities and attackers trying gain access to the engine. we take care of more than 100 security checkpoints making sure each and every product that get's out of DeltaCodes is safe from all these threats.`,
      topic: 'Threats Neutralised',
      children: [
        {
          name: '',
          description: '',
          highName: '',
          highValue: ''
        }
      ]
    },
    {
      name: 'secure admin',
      description: `All products developed by deltacodes are secure from malicious entities and attackers trying gain access to the engine. we take care of more than 100 security checkpoints making sure each and every product that get's out of DeltaCodes is safe from all these threats.`,
      topic: 'Threats Neutralised',
      children: [
        {
          name: '',
          description: '',
          highName: '',
          highValue: ''
        }
      ]
    },
    {
      name: 'performance test - google audit',
      description: `All products developed by deltacodes are secure from malicious entities and attackers trying gain access to the engine. we take care of more than 100 security checkpoints making sure each and every product that get's out of DeltaCodes is safe from all these threats.`,
      topic: 'Threats Neutralised',
      children: [
        {
          name: '',
          description: '',
          highName: '',
          highValue: ''
        }
      ]
    },
  ];


  constructor() { }

  public getData() {
    return this.Data;
  }
}
