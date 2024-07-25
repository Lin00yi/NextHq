// This file contains placeholder data that you'll be replacing with real data in the Data Fetching chapter:

// https://nextjs.org/learn/dashboard-app/fetching-data
const users = [
  {
    id: '410544b2-4001-4271-9855-fec4b6a6442a',
    name: 'User',
    email: 'user@nextmail.com',
    password: '123456'
  },
  {
    id: '410544b2-4001-4271-9855-fec4b6a6444c',
    name: 'Admin',
    email: '1765861423@qq.com',
    password: '123456'
  }
];

const tags = [
  {
    id: '410544b2-4001-4271-9855-fec4b6a6412a',
    name: '编译构建',
    color: 'blue',
    link: 'build'
  },
  {
    id: '110544b2-4001-4271-9855-fec4b6a64f4c',
    name: 'CSS',
    color: 'green',
    link: 'css'
  },
  {
    id: '210544b2-4001-4271-9855-fec4b6a6344c',
    name: '前端框架',
    color: 'yellow',
    link: 'fronend-framework'
  },
  {
    id: '310544b2-4001-4271-9855-fec6b6a6444c',
    name: '代码检查',
    color: 'red',
    link: 'lint'
  },
  {
    id: '410544b2-4001-4272-9855-fec4b6a6444c',
    name: '小程序',
    color: 'orange',
    link: 'miniprogram'
  },
  {
    id: '510544b2-4001-4271-9855-fec4b6a6444c',
    name: 'Node.js & Deno',
    color: 'purple',
    link: 'node'
  },
  {
    id: '610544b2-4001-4271-9855-fec4b6a6444c',
    name: 'React',
    color: 'blue',
    link: 'react'
  },
  {
    id: '710544b2-4001-4271-9855-fec4b6a6444c',
    name: 'React 组件库',
    color: 'teal',
    link: 'react-components'
  },
  {
    id: '810544b2-4001-4271-9855-fec4b6a6444c',
    name: '语言文档和规范',
    color: 'green',
    link: 'standard'
  },
  {
    id: '910544b2-4001-4271-9855-fec4b6a6444c',
    name: '测试工具',
    color: 'red',
    link: 'test'
  },
  {
    id: '1010544b2-4001-4271-9855-fec4b6a6444c',
    name: '可视化工具',
    color: 'yellow',
    link: 'visualization'
  },
  {
    id: '1110544b2-4001-4271-9855-fec4b6a6444c',
    name: 'Vue',
    color: 'green',
    link: 'vue'
  }
];

//构建工具
const items = [
  {
    id: '410544b2-4001-1234-9855-fec4b6a64598',
    name: 'Vite',
    description: '下一代前端构建工具',
    link: 'https://cn.vitejs.dev',
    githubLink: 'https://github.com/vitejs/docs-cn',
    tagId: '410544b2-4001-4271-9855-fec4b6a6412a'
  },
  {
    id: '410544b2-4001-1234-5688-fec4b6a63412',
    name: 'Rollup',
    description: '新一代JavaScript模块打包器',
    link: 'https://rollup.docschina.org',
    githubLink: 'https://github.com/docschina/rollupjs.org',
    tagId: '410544b2-4001-4271-9855-fec4b6a6412a'
  },
  {
    id: '410544b2-4001-1234-5688-fec4b6a61111',
    name: 'Webpack',
    description: '用于现代JavaScript应用程序的静态模块打包工具',
    link: 'https://webpack.docschina.org',
    githubLink: 'https://github.com/docschina/webpack.js.org',
    tagId: '410544b2-4001-4271-9855-fec4b6a6412a'
  },
  {
    id: '410544b2-4001-1234-5688-fec4b6a62222',
    name: 'Grunt',
    description: 'JavaScript世界的构建工具',
    link: 'https://grunt.docschina.org',
    githubLink: '',
    tagId: '410544b2-4001-4271-9855-fec4b6a6412a'
  },
  {
    id: '410544b2-4001-1234-5688-fec4b6a63333',
    name: 'turborepo',
    description: 'webPack创始人下一代构建工具',
    link: 'https://turbo.build',
    githubLink: 'https://github.com/vercel/turbo',
    tagId: '410544b2-4001-4271-9855-fec4b6a6412a'
  },
  {
    id: '410544b2-4001-1234-5688-fec4b6a64444',
    name: 'Gulp',
    description: '基于流的自动化构建工具',
    link: 'https://www.gulpjs.com.cn',
    githubLink: '',
    tagId: '410544b2-4001-4271-9855-fec4b6a6412a'
  },
  {
    id: '410544b2-4001-1234-5688-fec4b6a65555',
    name: 'Gulp',
    description: '一个编译工具，让你可以项目中直接使用下一代 JavaScript',
    link: 'https://babel.docschina.org',
    githubLink: 'https://github.com/docschina/babeljs.io',
    tagId: '410544b2-4001-4271-9855-fec4b6a6412a'
  },
  {
    id: '410544b2-4001-1234-5688-fec4b6a6666',
    name: 'Lerna',
    description: '用于管理有多个包的 JavaScript 项目的工具',
    link: 'https://lerna.js.org',
    githubLink: '',
    tagId: '410544b2-4001-4271-9855-fec4b6a6412a'
  }
];

module.exports = {
  users,
  tags,
  items
};
