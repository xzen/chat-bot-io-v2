export default [{
  id: 'sansa-123',
  name: 'Sansa Stark',
  avatar: 'https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/theory-1552510536.jpg?crop=0.501xw:1.00xh;0.0173xw,0&resize=480:*',
  version: '1.0.0',
  description: 'L\'hiver vient',
  actions: [{
    title: 'heure',
    keyWords: ['/sansa heure', '/sansa hour', '/sansa time'],
    response: () => {
      const date = new Date();

      return date.toLocaleString();
    },
  }, {
    title: 'devise',
    keyWords: ['devise', '/sansa devise'],
    response: () => 'L\'hiver vient',
  }],
}, {
  id: 'tyrion-123',
  name: 'Tyrion Lannister',
  avatar: 'https://www.my-citations.com/images/auteurs/114_tyrion-lannister_s.jpeg',
  version: '1.0.0',
  description: 'Un Lannister paye toujours ses dettes',
  actions: [{
    keyWords: ['devise'],
    response: () => 'Un Lannister paye toujours ses dettes',
  }],
}];
