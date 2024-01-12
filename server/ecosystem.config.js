import dotenv from 'dotenv';

dotenv.config();
/* 
module.exports = {
  apps : [{
    script: 'index.js',
    watch: '.'
  }, {
    script: './service-worker/',
    watch: ['./service-worker']
  }],

  deploy : {
    production : {
      user : process.env.SSH_USERNAME,
      host : process.env.SSH_HOSTMACHINE,
      ref  : 'origin/development',
      repo : process.env.GIT_REPOSITORY,
      path : process.env.DESTINATION_PATH,
      'pre-deploy-local': '',
      'post-deploy' : 'npm install && pm2 reload ecosystem.config.js --env production',
      'pre-setup': ''
    }
  }
}; */
