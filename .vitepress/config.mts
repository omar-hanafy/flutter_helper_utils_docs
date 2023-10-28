import { defineConfig } from 'vitepress'

export default defineConfig({
  title: 'Flutter Helper Utils',
  description: "Flutter Helper Utils is a comprehensive package aimed to augment Dart and Flutter's core functionalities. With a rich set of extensions and helper methods, this package boosts productivity and simplifies coding in Flutter projects.",
  themeConfig: {
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Getting Started', link: '/documentation/getting-started' },
    ],
    sidebar: [
      {
        text: 'Home',
        link: '/'
      },
      {
        text: 'Getting Started',
        link: '/documentation/getting-started'
      },
      {
        text: 'Extensions',
        items: [
          { text: 'String Extension', link: '/documentation/string-extension' },
          { text: 'Number Extension', link: '/documentation/number-extension' },
          { text: 'Bool Extension', link: '/documentation/bool-extension' },
          { text: 'Date-Time Extension', link: '/documentation/date-time-extension' },
          { text: 'Color Extension', link: '/documentation/color-extension' },
          { text: 'Theme Extension', link: '/documentation/theme-extension' },
          { text: 'Media Query Extension', link: '/documentation/media-query-extension' },
          { text: 'Focus Scope Extension', link: '/documentation/focus-scope-extension' },
          { text: 'Navigator Extension', link: '/documentation/navigator-extension' }
        ]
      },
      {
        text: 'Helper Utilities',
        items: [
          { text: 'Convert Object', link: '/documentation/convert-object' },
          { text: 'DateTime Helper', link: '/documentation/date-time-helper' }
        ]
      }
    ],
    socialLinks: [
      { icon: 'github', link: 'https://github.com/omar-hanafy/flutter_helper_utils' } // Update the GitHub link here as well
    ]
  }
})
