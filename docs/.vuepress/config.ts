import { defaultTheme, defineUserConfig } from "vuepress";
import { registerComponentsPlugin } from "@vuepress/plugin-register-components";
import { searchPlugin } from "@vuepress/plugin-search";
import { getDirname, path } from "@vuepress/utils";
import { glob } from "glob";

module.exports = {
  title: 'My VuePress Blog',  // Tiêu đề trang web
  description: 'A simple blog built with VuePress',  // Mô tả trang web
  base: '/',  // Đường dẫn gốc của trang web (thường để mặc định)

  themeConfig: {
    logo: '/images/logo.png',  // Đường dẫn tới logo (nếu có)
    navbar: true,  // Bật/tắt thanh điều hướng

    // Điều hướng chính (Navigation bar)
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Blog', link: '/blog/' },
      { text: 'About', link: '/about/' },  // Trang giới thiệu
      {
        text: 'Links',
        items: [
          { text: 'GitHub', link: 'https://github.com/username' },
          { text: 'Netlify', link: 'https://www.netlify.com/' }
        ]
      }
    ],

    // Sidebar (Thanh bên trái)
    sidebar: {
      '/blog/': [
        {
          title: 'Blog Posts',
          collapsable: false,
          children: [
            '',  // Tương ứng với README.md trong thư mục blog
            'first-post',
            'second-post'
          ]
        }
      ],
      // Sidebar cho các trang khác (như About)
      '/about/': [
        {
          title: 'About',
          collapsable: false,
          children: [
            ''
          ]
        }
      ]
    },

    // Tính năng bổ sung
    searchPlaceholder: 'Search...',  // Placeholder của ô tìm kiếm
    lastUpdated: 'Last Updated',  // Hiển thị thời gian cập nhật cuối cùng của bài viết
    smoothScroll: true,  // Bật cuộn mượt

    // Tích hợp Google Analytics (nếu cần)
    googleAnalytics: {
      id: 'UA-XXXXXX-X'
    }
  },

  // Cấu hình các plugin (nếu có)
  plugins: [
    '@vuepress/back-to-top',  // Plugin "Back to Top"
    '@vuepress/medium-zoom',  // Plugin phóng to hình ảnh
    '@vuepress/nprogress'     // Plugin hiển thị thanh tiến trình khi tải trang
  ],

  // Cấu hình Markdown
  markdown: {
    lineNumbers: true,  // Hiển thị số dòng trong các block code
  },

  // Cấu hình thư mục và build
  dest: 'dist',  // Thư mục build khi chạy `npm run build`
  extraWatchFiles: ['.vuepress/config.js']  // Tự động tải lại khi config.js thay đổi
};
