module.exports = {
  apps: [
    {
      name: 'next-blog',
      script: 'npm',
      args: 'start -p 3000'
      //   cwd: '/path/to/your/project', // 更新为你的项目路径
      //   instances: 1,
      //   autorestart: true,
      //   watch: false,
      //   max_memory_restart: '1G'
    }
  ]
};
