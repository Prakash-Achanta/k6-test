// Creator: k6 Browser Recorder 0.6.2

import { sleep, group } from 'k6'
import http from 'k6/http'

export const options = {
  vus: 10,
  duration: '30s'
}

export default function main() {
  let response

  group(
    'page_1 - https://gluestack.io/?utm_source=geekyants-website&utm_medium=banner+&utm_campaign=banner-cta&utm_id=geekyants-campaign-banner',
    function () {
      response = http.get(
        'https://gluestack.io/_next/image?url=%2Ficon%2Ffavicons%2Fui.svg&w=48&q=75',
        {
          headers: {
            referer:
              'https://gluestack.io/?utm_source=geekyants-website&utm_medium=banner+&utm_campaign=banner-cta&utm_id=geekyants-campaign-banner',
            'user-agent':
              'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/119.0.0.0 Safari/537.36',
            'sec-ch-ua': '"Brave";v="119", "Chromium";v="119", "Not?A_Brand";v="24"',
            'sec-ch-ua-mobile': '?0',
            'sec-ch-ua-platform': '"macOS"',
          },
        }
      )
      response = http.get(
        'https://gluestack.io/_next/image?url=%2Ficon%2Ffavicons%2Fstyle.svg&w=48&q=75',
        {
          headers: {
            referer:
              'https://gluestack.io/?utm_source=geekyants-website&utm_medium=banner+&utm_campaign=banner-cta&utm_id=geekyants-campaign-banner',
            'user-agent':
              'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/119.0.0.0 Safari/537.36',
            'sec-ch-ua': '"Brave";v="119", "Chromium";v="119", "Not?A_Brand";v="24"',
            'sec-ch-ua-mobile': '?0',
            'sec-ch-ua-platform': '"macOS"',
          },
        }
      )
      response = http.get(
        'https://gluestack.io/_next/image?url=%2Ficon%2Ffavicons%2Fpro.svg&w=48&q=75',
        {
          headers: {
            referer:
              'https://gluestack.io/?utm_source=geekyants-website&utm_medium=banner+&utm_campaign=banner-cta&utm_id=geekyants-campaign-banner',
            'user-agent':
              'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/119.0.0.0 Safari/537.36',
            'sec-ch-ua': '"Brave";v="119", "Chromium";v="119", "Not?A_Brand";v="24"',
            'sec-ch-ua-mobile': '?0',
            'sec-ch-ua-platform': '"macOS"',
          },
        }
      )
      response = http.get(
        'https://gluestack.io/_next/image?url=%2Fimages%2Fproducts-dropdown%2Fball-tip.png&w=128&q=75',
        {
          headers: {
            referer:
              'https://gluestack.io/?utm_source=geekyants-website&utm_medium=banner+&utm_campaign=banner-cta&utm_id=geekyants-campaign-banner',
            'user-agent':
              'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/119.0.0.0 Safari/537.36',
            'sec-ch-ua': '"Brave";v="119", "Chromium";v="119", "Not?A_Brand";v="24"',
            'sec-ch-ua-mobile': '?0',
            'sec-ch-ua-platform': '"macOS"',
          },
        }
      )
      response = http.get(
        'https://gluestack.io/_next/static/chunks/pages/ui/docs/overview/introduction-07e5955d88b6cd3d.js',
        {
          headers: {
            referer: '',
            'user-agent':
              'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/119.0.0.0 Safari/537.36',
            'sec-ch-ua': '"Brave";v="119", "Chromium";v="119", "Not?A_Brand";v="24"',
            'sec-ch-ua-mobile': '?0',
            'sec-ch-ua-platform': '"macOS"',
          },
        }
      )
      response = http.get('https://gluestack.io/_next/static/chunks/6759-64e0f53a2fb7630e.js', {
        headers: {
          referer: '',
          'user-agent':
            'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/119.0.0.0 Safari/537.36',
          'sec-ch-ua': '"Brave";v="119", "Chromium";v="119", "Not?A_Brand";v="24"',
          'sec-ch-ua-mobile': '?0',
          'sec-ch-ua-platform': '"macOS"',
        },
      })
      response = http.get('https://gluestack.io/_next/static/chunks/407-97b20ea74bec8865.js', {
        headers: {
          referer: '',
          'user-agent':
            'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/119.0.0.0 Safari/537.36',
          'sec-ch-ua': '"Brave";v="119", "Chromium";v="119", "Not?A_Brand";v="24"',
          'sec-ch-ua-mobile': '?0',
          'sec-ch-ua-platform': '"macOS"',
        },
      })
      response = http.get(
        'https://gluestack.io/_next/static/chunks/pages/style-f76719785564417b.js',
        {
          headers: {
            referer: '',
            'user-agent':
              'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/119.0.0.0 Safari/537.36',
            'sec-ch-ua': '"Brave";v="119", "Chromium";v="119", "Not?A_Brand";v="24"',
            'sec-ch-ua-mobile': '?0',
            'sec-ch-ua-platform': '"macOS"',
          },
        }
      )
      response = http.get(
        'https://gluestack.io/_next/static/chunks/pages/starter-kit-a5c3d698c9859c01.js',
        {
          headers: {
            referer: '',
            'user-agent':
              'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/119.0.0.0 Safari/537.36',
            'sec-ch-ua': '"Brave";v="119", "Chromium";v="119", "Not?A_Brand";v="24"',
            'sec-ch-ua-mobile': '?0',
            'sec-ch-ua-platform': '"macOS"',
          },
        }
      )
      response = http.get(
        'https://gluestack.io/_next/static/chunks/pages/ui/docs/guides/building-design-systems-3e7c47d50a70fc67.js',
        {
          headers: {
            referer: '',
            'user-agent':
              'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/119.0.0.0 Safari/537.36',
            'sec-ch-ua': '"Brave";v="119", "Chromium";v="119", "Not?A_Brand";v="24"',
            'sec-ch-ua-mobile': '?0',
            'sec-ch-ua-platform': '"macOS"',
          },
        }
      )
      response = http.get(
        'https://gluestack.io/_next/static/chunks/pages/ui/docs/overview/introduction-07e5955d88b6cd3d.js',
        {
          headers: {
            referer:
              'https://gluestack.io/?utm_source=geekyants-website&utm_medium=banner+&utm_campaign=banner-cta&utm_id=geekyants-campaign-banner',
            'user-agent':
              'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/119.0.0.0 Safari/537.36',
            'sec-ch-ua': '"Brave";v="119", "Chromium";v="119", "Not?A_Brand";v="24"',
            'sec-ch-ua-mobile': '?0',
            'sec-ch-ua-platform': '"macOS"',
          },
        }
      )
      response = http.get(
        'https://gluestack.io/_next/static/chunks/pages/ui/docs/guides/building-design-systems-3e7c47d50a70fc67.js',
        {
          headers: {
            referer:
              'https://gluestack.io/?utm_source=geekyants-website&utm_medium=banner+&utm_campaign=banner-cta&utm_id=geekyants-campaign-banner',
            'user-agent':
              'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/119.0.0.0 Safari/537.36',
            'sec-ch-ua': '"Brave";v="119", "Chromium";v="119", "Not?A_Brand";v="24"',
            'sec-ch-ua-mobile': '?0',
            'sec-ch-ua-platform': '"macOS"',
          },
        }
      )
      response = http.get(
        'https://gluestack.io/_next/static/chunks/pages/starter-kit-a5c3d698c9859c01.js',
        {
          headers: {
            referer:
              'https://gluestack.io/?utm_source=geekyants-website&utm_medium=banner+&utm_campaign=banner-cta&utm_id=geekyants-campaign-banner',
            'user-agent':
              'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/119.0.0.0 Safari/537.36',
            'sec-ch-ua': '"Brave";v="119", "Chromium";v="119", "Not?A_Brand";v="24"',
            'sec-ch-ua-mobile': '?0',
            'sec-ch-ua-platform': '"macOS"',
          },
        }
      )
      response = http.get('https://gluestack.io/_next/static/chunks/6759-64e0f53a2fb7630e.js', {
        headers: {
          referer:
            'https://gluestack.io/?utm_source=geekyants-website&utm_medium=banner+&utm_campaign=banner-cta&utm_id=geekyants-campaign-banner',
          'user-agent':
            'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/119.0.0.0 Safari/537.36',
          'sec-ch-ua': '"Brave";v="119", "Chromium";v="119", "Not?A_Brand";v="24"',
          'sec-ch-ua-mobile': '?0',
          'sec-ch-ua-platform': '"macOS"',
        },
      })
      response = http.get('https://gluestack.io/_next/static/chunks/407-97b20ea74bec8865.js', {
        headers: {
          referer:
            'https://gluestack.io/?utm_source=geekyants-website&utm_medium=banner+&utm_campaign=banner-cta&utm_id=geekyants-campaign-banner',
          'user-agent':
            'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/119.0.0.0 Safari/537.36',
          'sec-ch-ua': '"Brave";v="119", "Chromium";v="119", "Not?A_Brand";v="24"',
          'sec-ch-ua-mobile': '?0',
          'sec-ch-ua-platform': '"macOS"',
        },
      })
      response = http.get(
        'https://gluestack.io/_next/static/chunks/pages/style-f76719785564417b.js',
        {
          headers: {
            referer:
              'https://gluestack.io/?utm_source=geekyants-website&utm_medium=banner+&utm_campaign=banner-cta&utm_id=geekyants-campaign-banner',
            'user-agent':
              'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/119.0.0.0 Safari/537.36',
            'sec-ch-ua': '"Brave";v="119", "Chromium";v="119", "Not?A_Brand";v="24"',
            'sec-ch-ua-mobile': '?0',
            'sec-ch-ua-platform': '"macOS"',
          },
        }
      )
      response = http.get('https://gluestack.io/favicon.ico', {
        headers: {
          referer: 'https://gluestack.io/enterprise',
          'user-agent':
            'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/119.0.0.0 Safari/537.36',
          'sec-ch-ua': '"Brave";v="119", "Chromium";v="119", "Not?A_Brand";v="24"',
          'sec-ch-ua-mobile': '?0',
          'sec-ch-ua-platform': '"macOS"',
        },
      })
      response = http.get(
        'https://gluestack.io/_next/image?url=%2Ficon%2Flogo%2Fgluestack%2Fdark-mode.svg&w=384&q=75',
        {
          headers: {
            referer: 'https://gluestack.io/enterprise',
            'user-agent':
              'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/119.0.0.0 Safari/537.36',
            'sec-ch-ua': '"Brave";v="119", "Chromium";v="119", "Not?A_Brand";v="24"',
            'sec-ch-ua-mobile': '?0',
            'sec-ch-ua-platform': '"macOS"',
          },
        }
      )
      response = http.get('https://gluestack.io/_next/image?url=%2Ficon%2Fcall.svg&w=32&q=75', {
        headers: {
          referer: 'https://gluestack.io/enterprise',
          'user-agent':
            'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/119.0.0.0 Safari/537.36',
          'sec-ch-ua': '"Brave";v="119", "Chromium";v="119", "Not?A_Brand";v="24"',
          'sec-ch-ua-mobile': '?0',
          'sec-ch-ua-platform': '"macOS"',
        },
      })
      response = http.get('https://gluestack.io/favicon.ico', {
        headers: {
          referer: 'https://gluestack.io/enterprise',
          'user-agent':
            'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/119.0.0.0 Safari/537.36',
          'sec-ch-ua': '"Brave";v="119", "Chromium";v="119", "Not?A_Brand";v="24"',
          'sec-ch-ua-mobile': '?0',
          'sec-ch-ua-platform': '"macOS"',
        },
      })
      response = http.get(
        'https://gluestack.io/_next/image?url=%2Ficon%2Flogo%2Fui%2Fdark-mode.svg&w=384&q=75',
        {
          headers: {
            referer: 'https://gluestack.io/ui/docs/getting-started/installation',
            'user-agent':
              'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/119.0.0.0 Safari/537.36',
            'sec-ch-ua': '"Brave";v="119", "Chromium";v="119", "Not?A_Brand";v="24"',
            'sec-ch-ua-mobile': '?0',
            'sec-ch-ua-platform': '"macOS"',
          },
        }
      )
      response = http.get('https://gluestack.io/favicon.ico', {
        headers: {
          referer: 'https://gluestack.io/ui/docs/getting-started/installation',
          'user-agent':
            'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/119.0.0.0 Safari/537.36',
          'sec-ch-ua': '"Brave";v="119", "Chromium";v="119", "Not?A_Brand";v="24"',
          'sec-ch-ua-mobile': '?0',
          'sec-ch-ua-platform': '"macOS"',
        },
      })
      response = http.get(
        'https://gluestack.io/_next/image?url=%2Ficon%2Fsocial%2Fgithub-dark.svg&w=48&q=75',
        {
          headers: {
            referer: 'https://gluestack.io/ui/docs/getting-started/installation',
            'user-agent':
              'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/119.0.0.0 Safari/537.36',
            'sec-ch-ua': '"Brave";v="119", "Chromium";v="119", "Not?A_Brand";v="24"',
            'sec-ch-ua-mobile': '?0',
            'sec-ch-ua-platform': '"macOS"',
          },
        }
      )
      response = http.get(
        'https://gluestack.io/_next/image?url=%2Ficon%2Fsocial%2Ffigma.svg&w=48&q=75',
        {
          headers: {
            referer: 'https://gluestack.io/ui/docs/getting-started/installation',
            'user-agent':
              'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/119.0.0.0 Safari/537.36',
            'sec-ch-ua': '"Brave";v="119", "Chromium";v="119", "Not?A_Brand";v="24"',
            'sec-ch-ua-mobile': '?0',
            'sec-ch-ua-platform': '"macOS"',
          },
        }
      )
      response = http.get(
        'https://gluestack.io/_next/image?url=%2Ficon%2Fsocial%2Fdiscord-dark.svg&w=48&q=75',
        {
          headers: {
            referer: 'https://gluestack.io/ui/docs/getting-started/installation',
            'user-agent':
              'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/119.0.0.0 Safari/537.36',
            'sec-ch-ua': '"Brave";v="119", "Chromium";v="119", "Not?A_Brand";v="24"',
            'sec-ch-ua-mobile': '?0',
            'sec-ch-ua-platform': '"macOS"',
          },
        }
      )
      response = http.get('https://gluestack.io/favicon.ico', {
        headers: {
          referer: 'https://gluestack.io/ui/docs/getting-started/installation',
          'user-agent':
            'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/119.0.0.0 Safari/537.36',
          'sec-ch-ua': '"Brave";v="119", "Chromium";v="119", "Not?A_Brand";v="24"',
          'sec-ch-ua-mobile': '?0',
          'sec-ch-ua-platform': '"macOS"',
        },
      })
      response = http.get('https://gluestack.io/manifest.json', {
        headers: {
          referer: 'https://gluestack.io/ui/docs/getting-started/installation',
          'user-agent':
            'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/119.0.0.0 Safari/537.36',
          'sec-ch-ua': '"Brave";v="119", "Chromium";v="119", "Not?A_Brand";v="24"',
          'sec-ch-ua-mobile': '?0',
          'sec-ch-ua-platform': '"macOS"',
        },
      })
      response = http.get('https://gluestack.io/_next/static/chunks/3063-a175d217e092e08a.js', {
        headers: {
          referer: '',
          'user-agent':
            'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/119.0.0.0 Safari/537.36',
          'sec-ch-ua': '"Brave";v="119", "Chromium";v="119", "Not?A_Brand";v="24"',
          'sec-ch-ua-mobile': '?0',
          'sec-ch-ua-platform': '"macOS"',
        },
      })
      response = http.get('https://gluestack.io/_next/static/chunks/5684-f148b0f2814bc524.js', {
        headers: {
          referer: '',
          'user-agent':
            'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/119.0.0.0 Safari/537.36',
          'sec-ch-ua': '"Brave";v="119", "Chromium";v="119", "Not?A_Brand";v="24"',
          'sec-ch-ua-mobile': '?0',
          'sec-ch-ua-platform': '"macOS"',
        },
      })
      response = http.get('https://gluestack.io/_next/static/chunks/8202-7f5f9cdddcb089bf.js', {
        headers: {
          referer: '',
          'user-agent':
            'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/119.0.0.0 Safari/537.36',
          'sec-ch-ua': '"Brave";v="119", "Chromium";v="119", "Not?A_Brand";v="24"',
          'sec-ch-ua-mobile': '?0',
          'sec-ch-ua-platform': '"macOS"',
        },
      })
      response = http.get('https://gluestack.io/_next/static/chunks/2038-bb41fe1e3cb75a68.js', {
        headers: {
          referer: '',
          'user-agent':
            'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/119.0.0.0 Safari/537.36',
          'sec-ch-ua': '"Brave";v="119", "Chromium";v="119", "Not?A_Brand";v="24"',
          'sec-ch-ua-mobile': '?0',
          'sec-ch-ua-platform': '"macOS"',
        },
      })
      response = http.get('https://gluestack.io/_next/static/chunks/2688-2e32d1d0ac9945d5.js', {
        headers: {
          referer: '',
          'user-agent':
            'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/119.0.0.0 Safari/537.36',
          'sec-ch-ua': '"Brave";v="119", "Chromium";v="119", "Not?A_Brand";v="24"',
          'sec-ch-ua-mobile': '?0',
          'sec-ch-ua-platform': '"macOS"',
        },
      })
      response = http.get(
        'https://gluestack.io/_next/static/chunks/pages/ui/docs/overview/all-components-7882ca12e49f761f.js',
        {
          headers: {
            referer: '',
            'user-agent':
              'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/119.0.0.0 Safari/537.36',
            'sec-ch-ua': '"Brave";v="119", "Chromium";v="119", "Not?A_Brand";v="24"',
            'sec-ch-ua-mobile': '?0',
            'sec-ch-ua-platform': '"macOS"',
          },
        }
      )
      response = http.get(
        'https://gluestack.io/_next/static/chunks/pages/ui/docs/getting-started/increamental-adoption-44e7394d7d25128f.js',
        {
          headers: {
            referer: '',
            'user-agent':
              'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/119.0.0.0 Safari/537.36',
            'sec-ch-ua': '"Brave";v="119", "Chromium";v="119", "Not?A_Brand";v="24"',
            'sec-ch-ua-mobile': '?0',
            'sec-ch-ua-platform': '"macOS"',
          },
        }
      )
      response = http.get(
        'https://gluestack.io/_next/static/chunks/pages/ui/docs/getting-started/vscode-extensions-a93680297ef0813a.js',
        {
          headers: {
            referer: '',
            'user-agent':
              'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/119.0.0.0 Safari/537.36',
            'sec-ch-ua': '"Brave";v="119", "Chromium";v="119", "Not?A_Brand";v="24"',
            'sec-ch-ua-mobile': '?0',
            'sec-ch-ua-platform': '"macOS"',
          },
        }
      )
      response = http.get(
        'https://gluestack.io/_next/static/chunks/pages/ui/docs/getting-started/figma-ui-kit-7e0a744a8b21b05f.js',
        {
          headers: {
            referer: '',
            'user-agent':
              'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/119.0.0.0 Safari/537.36',
            'sec-ch-ua': '"Brave";v="119", "Chromium";v="119", "Not?A_Brand";v="24"',
            'sec-ch-ua-mobile': '?0',
            'sec-ch-ua-platform': '"macOS"',
          },
        }
      )
      response = http.get(
        'https://gluestack.io/_next/static/chunks/pages/ui/docs/core-concepts/themed-library-795ed2dc508acde0.js',
        {
          headers: {
            referer: '',
            'user-agent':
              'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/119.0.0.0 Safari/537.36',
            'sec-ch-ua': '"Brave";v="119", "Chromium";v="119", "Not?A_Brand";v="24"',
            'sec-ch-ua-mobile': '?0',
            'sec-ch-ua-platform': '"macOS"',
          },
        }
      )
      response = http.get(
        'https://gluestack.io/_next/static/chunks/pages/ui/docs/core-concepts/unstyled-library-544909821e24f3c7.js',
        {
          headers: {
            referer: '',
            'user-agent':
              'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/119.0.0.0 Safari/537.36',
            'sec-ch-ua': '"Brave";v="119", "Chromium";v="119", "Not?A_Brand";v="24"',
            'sec-ch-ua-mobile': '?0',
            'sec-ch-ua-platform': '"macOS"',
          },
        }
      )
      response = http.get(
        'https://gluestack.io/_next/static/chunks/pages/ui/docs/overview/accessibility-df4a39ca7f047ea7.js',
        {
          headers: {
            referer: '',
            'user-agent':
              'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/119.0.0.0 Safari/537.36',
            'sec-ch-ua': '"Brave";v="119", "Chromium";v="119", "Not?A_Brand";v="24"',
            'sec-ch-ua-mobile': '?0',
            'sec-ch-ua-platform': '"macOS"',
          },
        }
      )
      response = http.get(
        'https://gluestack.io/_next/static/chunks/pages/ui/docs/core-concepts/universal-66e79eeea782a751.js',
        {
          headers: {
            referer: '',
            'user-agent':
              'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/119.0.0.0 Safari/537.36',
            'sec-ch-ua': '"Brave";v="119", "Chromium";v="119", "Not?A_Brand";v="24"',
            'sec-ch-ua-mobile': '?0',
            'sec-ch-ua-platform': '"macOS"',
          },
        }
      )
      response = http.get(
        'https://gluestack.io/_next/static/chunks/pages/ui/docs/guides/install-nextjs-03a0c6a5153cfe84.js',
        {
          headers: {
            referer: '',
            'user-agent':
              'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/119.0.0.0 Safari/537.36',
            'sec-ch-ua': '"Brave";v="119", "Chromium";v="119", "Not?A_Brand";v="24"',
            'sec-ch-ua-mobile': '?0',
            'sec-ch-ua-platform': '"macOS"',
          },
        }
      )
      response = http.get(
        'https://gluestack.io/_next/static/chunks/pages/ui/docs/guides/install-expo-24d9ca155b612e79.js',
        {
          headers: {
            referer: '',
            'user-agent':
              'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/119.0.0.0 Safari/537.36',
            'sec-ch-ua': '"Brave";v="119", "Chromium";v="119", "Not?A_Brand";v="24"',
            'sec-ch-ua-mobile': '?0',
            'sec-ch-ua-platform': '"macOS"',
          },
        }
      )
      response = http.get(
        'https://gluestack.io/_next/static/chunks/pages/ui/docs/guides/install-rn-6a488c3987257ae3.js',
        {
          headers: {
            referer: '',
            'user-agent':
              'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/119.0.0.0 Safari/537.36',
            'sec-ch-ua': '"Brave";v="119", "Chromium";v="119", "Not?A_Brand";v="24"',
            'sec-ch-ua-mobile': '?0',
            'sec-ch-ua-platform': '"macOS"',
          },
        }
      )
      response = http.get('https://gluestack.io/_next/static/chunks/3063-a175d217e092e08a.js', {
        headers: {
          referer: 'https://gluestack.io/ui/docs/getting-started/installation',
          'user-agent':
            'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/119.0.0.0 Safari/537.36',
          'sec-ch-ua': '"Brave";v="119", "Chromium";v="119", "Not?A_Brand";v="24"',
          'sec-ch-ua-mobile': '?0',
          'sec-ch-ua-platform': '"macOS"',
        },
      })
      response = http.get('https://gluestack.io/_next/static/chunks/5684-f148b0f2814bc524.js', {
        headers: {
          referer: 'https://gluestack.io/ui/docs/getting-started/installation',
          'user-agent':
            'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/119.0.0.0 Safari/537.36',
          'sec-ch-ua': '"Brave";v="119", "Chromium";v="119", "Not?A_Brand";v="24"',
          'sec-ch-ua-mobile': '?0',
          'sec-ch-ua-platform': '"macOS"',
        },
      })
      response = http.get('https://gluestack.io/_next/static/chunks/8202-7f5f9cdddcb089bf.js', {
        headers: {
          referer: 'https://gluestack.io/ui/docs/getting-started/installation',
          'user-agent':
            'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/119.0.0.0 Safari/537.36',
          'sec-ch-ua': '"Brave";v="119", "Chromium";v="119", "Not?A_Brand";v="24"',
          'sec-ch-ua-mobile': '?0',
          'sec-ch-ua-platform': '"macOS"',
        },
      })
      response = http.get('https://gluestack.io/_next/static/chunks/2038-bb41fe1e3cb75a68.js', {
        headers: {
          referer: 'https://gluestack.io/ui/docs/getting-started/installation',
          'user-agent':
            'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/119.0.0.0 Safari/537.36',
          'sec-ch-ua': '"Brave";v="119", "Chromium";v="119", "Not?A_Brand";v="24"',
          'sec-ch-ua-mobile': '?0',
          'sec-ch-ua-platform': '"macOS"',
        },
      })
      response = http.get('https://gluestack.io/_next/static/chunks/2688-2e32d1d0ac9945d5.js', {
        headers: {
          referer: 'https://gluestack.io/ui/docs/getting-started/installation',
          'user-agent':
            'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/119.0.0.0 Safari/537.36',
          'sec-ch-ua': '"Brave";v="119", "Chromium";v="119", "Not?A_Brand";v="24"',
          'sec-ch-ua-mobile': '?0',
          'sec-ch-ua-platform': '"macOS"',
        },
      })
      response = http.get(
        'https://gluestack.io/_next/static/chunks/pages/ui/docs/overview/all-components-7882ca12e49f761f.js',
        {
          headers: {
            referer: 'https://gluestack.io/ui/docs/getting-started/installation',
            'user-agent':
              'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/119.0.0.0 Safari/537.36',
            'sec-ch-ua': '"Brave";v="119", "Chromium";v="119", "Not?A_Brand";v="24"',
            'sec-ch-ua-mobile': '?0',
            'sec-ch-ua-platform': '"macOS"',
          },
        }
      )
      response = http.get(
        'https://gluestack.io/_next/static/chunks/pages/ui/docs/getting-started/increamental-adoption-44e7394d7d25128f.js',
        {
          headers: {
            referer: 'https://gluestack.io/ui/docs/getting-started/installation',
            'user-agent':
              'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/119.0.0.0 Safari/537.36',
            'sec-ch-ua': '"Brave";v="119", "Chromium";v="119", "Not?A_Brand";v="24"',
            'sec-ch-ua-mobile': '?0',
            'sec-ch-ua-platform': '"macOS"',
          },
        }
      )
      response = http.get(
        'https://gluestack.io/_next/static/chunks/pages/ui/docs/guides/install-rn-6a488c3987257ae3.js',
        {
          headers: {
            referer: 'https://gluestack.io/ui/docs/getting-started/installation',
            'user-agent':
              'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/119.0.0.0 Safari/537.36',
            'sec-ch-ua': '"Brave";v="119", "Chromium";v="119", "Not?A_Brand";v="24"',
            'sec-ch-ua-mobile': '?0',
            'sec-ch-ua-platform': '"macOS"',
          },
        }
      )
      response = http.get(
        'https://gluestack.io/_next/static/chunks/pages/ui/docs/guides/install-expo-24d9ca155b612e79.js',
        {
          headers: {
            referer: 'https://gluestack.io/ui/docs/getting-started/installation',
            'user-agent':
              'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/119.0.0.0 Safari/537.36',
            'sec-ch-ua': '"Brave";v="119", "Chromium";v="119", "Not?A_Brand";v="24"',
            'sec-ch-ua-mobile': '?0',
            'sec-ch-ua-platform': '"macOS"',
          },
        }
      )
      response = http.get(
        'https://gluestack.io/_next/static/chunks/pages/ui/docs/guides/install-nextjs-03a0c6a5153cfe84.js',
        {
          headers: {
            referer: 'https://gluestack.io/ui/docs/getting-started/installation',
            'user-agent':
              'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/119.0.0.0 Safari/537.36',
            'sec-ch-ua': '"Brave";v="119", "Chromium";v="119", "Not?A_Brand";v="24"',
            'sec-ch-ua-mobile': '?0',
            'sec-ch-ua-platform': '"macOS"',
          },
        }
      )
      response = http.get(
        'https://gluestack.io/_next/static/chunks/pages/ui/docs/core-concepts/unstyled-library-544909821e24f3c7.js',
        {
          headers: {
            referer: 'https://gluestack.io/ui/docs/getting-started/installation',
            'user-agent':
              'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/119.0.0.0 Safari/537.36',
            'sec-ch-ua': '"Brave";v="119", "Chromium";v="119", "Not?A_Brand";v="24"',
            'sec-ch-ua-mobile': '?0',
            'sec-ch-ua-platform': '"macOS"',
          },
        }
      )
      response = http.get(
        'https://gluestack.io/_next/static/chunks/pages/ui/docs/getting-started/vscode-extensions-a93680297ef0813a.js',
        {
          headers: {
            referer: 'https://gluestack.io/ui/docs/getting-started/installation',
            'user-agent':
              'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/119.0.0.0 Safari/537.36',
            'sec-ch-ua': '"Brave";v="119", "Chromium";v="119", "Not?A_Brand";v="24"',
            'sec-ch-ua-mobile': '?0',
            'sec-ch-ua-platform': '"macOS"',
          },
        }
      )
      response = http.get(
        'https://gluestack.io/_next/static/chunks/pages/ui/docs/overview/accessibility-df4a39ca7f047ea7.js',
        {
          headers: {
            referer: 'https://gluestack.io/ui/docs/getting-started/installation',
            'user-agent':
              'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/119.0.0.0 Safari/537.36',
            'sec-ch-ua': '"Brave";v="119", "Chromium";v="119", "Not?A_Brand";v="24"',
            'sec-ch-ua-mobile': '?0',
            'sec-ch-ua-platform': '"macOS"',
          },
        }
      )
      response = http.get(
        'https://gluestack.io/_next/static/chunks/pages/ui/docs/core-concepts/themed-library-795ed2dc508acde0.js',
        {
          headers: {
            referer: 'https://gluestack.io/ui/docs/getting-started/installation',
            'user-agent':
              'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/119.0.0.0 Safari/537.36',
            'sec-ch-ua': '"Brave";v="119", "Chromium";v="119", "Not?A_Brand";v="24"',
            'sec-ch-ua-mobile': '?0',
            'sec-ch-ua-platform': '"macOS"',
          },
        }
      )
      response = http.get(
        'https://gluestack.io/_next/static/chunks/pages/ui/docs/core-concepts/universal-66e79eeea782a751.js',
        {
          headers: {
            referer: 'https://gluestack.io/ui/docs/getting-started/installation',
            'user-agent':
              'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/119.0.0.0 Safari/537.36',
            'sec-ch-ua': '"Brave";v="119", "Chromium";v="119", "Not?A_Brand";v="24"',
            'sec-ch-ua-mobile': '?0',
            'sec-ch-ua-platform': '"macOS"',
          },
        }
      )
      response = http.get(
        'https://gluestack.io/_next/static/chunks/pages/ui/docs/getting-started/figma-ui-kit-7e0a744a8b21b05f.js',
        {
          headers: {
            referer: 'https://gluestack.io/ui/docs/getting-started/installation',
            'user-agent':
              'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/119.0.0.0 Safari/537.36',
            'sec-ch-ua': '"Brave";v="119", "Chromium";v="119", "Not?A_Brand";v="24"',
            'sec-ch-ua-mobile': '?0',
            'sec-ch-ua-platform': '"macOS"',
          },
        }
      )
      response = http.get('https://gluestack.io/favicon.ico', {
        headers: {
          referer: 'https://gluestack.io/enterprise',
          'user-agent':
            'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/119.0.0.0 Safari/537.36',
          'sec-ch-ua': '"Brave";v="119", "Chromium";v="119", "Not?A_Brand";v="24"',
          'sec-ch-ua-mobile': '?0',
          'sec-ch-ua-platform': '"macOS"',
        },
      })
      response = http.get(
        'https://gluestack.io/_next/image?url=%2Fimages%2Fenterprise%2Fd-a.svg&w=48&q=75',
        {
          headers: {
            referer: 'https://gluestack.io/enterprise',
            'user-agent':
              'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/119.0.0.0 Safari/537.36',
            'sec-ch-ua': '"Brave";v="119", "Chromium";v="119", "Not?A_Brand";v="24"',
            'sec-ch-ua-mobile': '?0',
            'sec-ch-ua-platform': '"macOS"',
          },
        }
      )
      response = http.get(
        'https://gluestack.io/_next/image?url=%2Fimages%2Fenterprise%2Fd-w.svg&w=48&q=75',
        {
          headers: {
            referer: 'https://gluestack.io/enterprise',
            'user-agent':
              'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/119.0.0.0 Safari/537.36',
            'sec-ch-ua': '"Brave";v="119", "Chromium";v="119", "Not?A_Brand";v="24"',
            'sec-ch-ua-mobile': '?0',
            'sec-ch-ua-platform': '"macOS"',
          },
        }
      )
      response = http.get(
        'https://gluestack.io/_next/image?url=%2Fimages%2Fenterprise%2Ffcl-icon.svg&w=48&q=75',
        {
          headers: {
            referer: 'https://gluestack.io/enterprise',
            'user-agent':
              'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/119.0.0.0 Safari/537.36',
            'sec-ch-ua': '"Brave";v="119", "Chromium";v="119", "Not?A_Brand";v="24"',
            'sec-ch-ua-mobile': '?0',
            'sec-ch-ua-platform': '"macOS"',
          },
        }
      )
      response = http.get(
        'https://gluestack.io/_next/image?url=%2Fimages%2Fenterprise%2Fdesign-analysis.svg&w=3840&q=75',
        {
          headers: {
            referer: 'https://gluestack.io/enterprise',
            'user-agent':
              'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/119.0.0.0 Safari/537.36',
            'sec-ch-ua': '"Brave";v="119", "Chromium";v="119", "Not?A_Brand";v="24"',
            'sec-ch-ua-mobile': '?0',
            'sec-ch-ua-platform': '"macOS"',
          },
        }
      )
      response = http.get(
        'https://gluestack.io/_next/image?url=%2Fimages%2Fenterprise%2Fdw-pen.svg&w=48&q=75',
        {
          headers: {
            referer: 'https://gluestack.io/enterprise',
            'user-agent':
              'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/119.0.0.0 Safari/537.36',
            'sec-ch-ua': '"Brave";v="119", "Chromium";v="119", "Not?A_Brand";v="24"',
            'sec-ch-ua-mobile': '?0',
            'sec-ch-ua-platform': '"macOS"',
          },
        }
      )
      response = http.get(
        'https://gluestack.io/_next/image?url=%2Fimages%2Fenterprise%2Fdw-file.svg&w=48&q=75',
        {
          headers: {
            referer: 'https://gluestack.io/enterprise',
            'user-agent':
              'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/119.0.0.0 Safari/537.36',
            'sec-ch-ua': '"Brave";v="119", "Chromium";v="119", "Not?A_Brand";v="24"',
            'sec-ch-ua-mobile': '?0',
            'sec-ch-ua-platform': '"macOS"',
          },
        }
      )
      response = http.get(
        'https://gluestack.io/_next/image?url=%2Fimages%2Fenterprise%2Fdw-users.svg&w=48&q=75',
        {
          headers: {
            referer: 'https://gluestack.io/enterprise',
            'user-agent':
              'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/119.0.0.0 Safari/537.36',
            'sec-ch-ua': '"Brave";v="119", "Chromium";v="119", "Not?A_Brand";v="24"',
            'sec-ch-ua-mobile': '?0',
            'sec-ch-ua-platform': '"macOS"',
          },
        }
      )
      response = http.get(
        'https://gluestack.io/_next/image?url=%2Fimages%2Fenterprise%2Ffcl-figma.svg&w=48&q=75',
        {
          headers: {
            referer: 'https://gluestack.io/enterprise',
            'user-agent':
              'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/119.0.0.0 Safari/537.36',
            'sec-ch-ua': '"Brave";v="119", "Chromium";v="119", "Not?A_Brand";v="24"',
            'sec-ch-ua-mobile': '?0',
            'sec-ch-ua-platform': '"macOS"',
          },
        }
      )
      response = http.get(
        'https://gluestack.io/_next/image?url=%2Fimages%2Fenterprise%2Ffcl-two.svg&w=48&q=75',
        {
          headers: {
            referer: 'https://gluestack.io/enterprise',
            'user-agent':
              'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/119.0.0.0 Safari/537.36',
            'sec-ch-ua': '"Brave";v="119", "Chromium";v="119", "Not?A_Brand";v="24"',
            'sec-ch-ua-mobile': '?0',
            'sec-ch-ua-platform': '"macOS"',
          },
        }
      )
      response = http.get(
        'https://gluestack.io/_next/image?url=%2Fimages%2Fenterprise%2Ffcl-page.svg&w=48&q=75',
        {
          headers: {
            referer: 'https://gluestack.io/enterprise',
            'user-agent':
              'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/119.0.0.0 Safari/537.36',
            'sec-ch-ua': '"Brave";v="119", "Chromium";v="119", "Not?A_Brand";v="24"',
            'sec-ch-ua-mobile': '?0',
            'sec-ch-ua-platform': '"macOS"',
          },
        }
      )
      response = http.get(
        'https://gluestack.io/_next/image?url=%2Fimages%2Fenterprise%2Fcodebase-icon.svg&w=48&q=75',
        {
          headers: {
            referer: 'https://gluestack.io/enterprise',
            'user-agent':
              'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/119.0.0.0 Safari/537.36',
            'sec-ch-ua': '"Brave";v="119", "Chromium";v="119", "Not?A_Brand";v="24"',
            'sec-ch-ua-mobile': '?0',
            'sec-ch-ua-platform': '"macOS"',
          },
        }
      )
      response = http.get(
        'https://gluestack.io/_next/image?url=%2Fimages%2Fenterprise%2Fetei.svg&w=48&q=75',
        {
          headers: {
            referer: 'https://gluestack.io/enterprise',
            'user-agent':
              'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/119.0.0.0 Safari/537.36',
            'sec-ch-ua': '"Brave";v="119", "Chromium";v="119", "Not?A_Brand";v="24"',
            'sec-ch-ua-mobile': '?0',
            'sec-ch-ua-platform': '"macOS"',
          },
        }
      )
      response = http.get(
        'https://gluestack.io/_next/image?url=%2Fimages%2Fenterprise%2Fcodebase-img.svg&w=3840&q=75',
        {
          headers: {
            referer: 'https://gluestack.io/enterprise',
            'user-agent':
              'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/119.0.0.0 Safari/537.36',
            'sec-ch-ua': '"Brave";v="119", "Chromium";v="119", "Not?A_Brand";v="24"',
            'sec-ch-ua-mobile': '?0',
            'sec-ch-ua-platform': '"macOS"',
          },
        }
      )
      response = http.get(
        'https://gluestack.io/_next/image?url=%2Fimages%2Fenterprise%2Fend-to-end.svg&w=3840&q=75',
        {
          headers: {
            referer: 'https://gluestack.io/enterprise',
            'user-agent':
              'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/119.0.0.0 Safari/537.36',
            'sec-ch-ua': '"Brave";v="119", "Chromium";v="119", "Not?A_Brand";v="24"',
            'sec-ch-ua-mobile': '?0',
            'sec-ch-ua-platform': '"macOS"',
          },
        }
      )
      response = http.get(
        'https://gluestack.io/_next/image?url=%2Fimages%2Fenterprise%2Fmaintenance-icon.svg&w=48&q=75',
        {
          headers: {
            referer: 'https://gluestack.io/enterprise',
            'user-agent':
              'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/119.0.0.0 Safari/537.36',
            'sec-ch-ua': '"Brave";v="119", "Chromium";v="119", "Not?A_Brand";v="24"',
            'sec-ch-ua-mobile': '?0',
            'sec-ch-ua-platform': '"macOS"',
          },
        }
      )
      response = http.get(
        'https://gluestack.io/_next/image?url=%2Fimages%2Fenterprise%2Fmaintenance-image.svg&w=3840&q=75',
        {
          headers: {
            referer: 'https://gluestack.io/enterprise',
            'user-agent':
              'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/119.0.0.0 Safari/537.36',
            'sec-ch-ua': '"Brave";v="119", "Chromium";v="119", "Not?A_Brand";v="24"',
            'sec-ch-ua-mobile': '?0',
            'sec-ch-ua-platform': '"macOS"',
          },
        }
      )
      response = http.get(
        'https://gluestack.io/_next/image?url=%2Fimages%2Fenterprise%2Fflow-working.svg&w=3840&q=75',
        {
          headers: {
            referer: 'https://gluestack.io/enterprise',
            'user-agent':
              'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/119.0.0.0 Safari/537.36',
            'sec-ch-ua': '"Brave";v="119", "Chromium";v="119", "Not?A_Brand";v="24"',
            'sec-ch-ua-mobile': '?0',
            'sec-ch-ua-platform': '"macOS"',
          },
        }
      )
      response = http.get(
        'https://gluestack.io/_next/image?url=%2Fimages%2Fright-circle.svg&w=256&q=75',
        {
          headers: {
            referer: 'https://gluestack.io/enterprise',
            'user-agent':
              'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/119.0.0.0 Safari/537.36',
            'sec-ch-ua': '"Brave";v="119", "Chromium";v="119", "Not?A_Brand";v="24"',
            'sec-ch-ua-mobile': '?0',
            'sec-ch-ua-platform': '"macOS"',
          },
        }
      )
      response = http.get(
        'https://gluestack.io/_next/image?url=%2Fimages%2Fusers-circle.svg&w=256&q=75',
        {
          headers: {
            referer: 'https://gluestack.io/enterprise',
            'user-agent':
              'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/119.0.0.0 Safari/537.36',
            'sec-ch-ua': '"Brave";v="119", "Chromium";v="119", "Not?A_Brand";v="24"',
            'sec-ch-ua-mobile': '?0',
            'sec-ch-ua-platform': '"macOS"',
          },
        }
      )
      response = http.get(
        'https://gluestack.io/_next/image?url=%2Fimages%2Fhandshake-circle.svg&w=256&q=75',
        {
          headers: {
            referer: 'https://gluestack.io/enterprise',
            'user-agent':
              'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/119.0.0.0 Safari/537.36',
            'sec-ch-ua': '"Brave";v="119", "Chromium";v="119", "Not?A_Brand";v="24"',
            'sec-ch-ua-mobile': '?0',
            'sec-ch-ua-platform': '"macOS"',
          },
        }
      )
      response = http.get(
        'https://gluestack.io/_next/image?url=%2Fimages%2Fenterprise%2Fpepperfry.svg&w=640&q=75',
        {
          headers: {
            referer: 'https://gluestack.io/enterprise',
            'user-agent':
              'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/119.0.0.0 Safari/537.36',
            'sec-ch-ua': '"Brave";v="119", "Chromium";v="119", "Not?A_Brand";v="24"',
            'sec-ch-ua-mobile': '?0',
            'sec-ch-ua-platform': '"macOS"',
          },
        }
      )
      response = http.get(
        'https://gluestack.io/_next/image?url=%2Fimages%2Fenterprise%2Fdarden.svg&w=384&q=75',
        {
          headers: {
            referer: 'https://gluestack.io/enterprise',
            'user-agent':
              'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/119.0.0.0 Safari/537.36',
            'sec-ch-ua': '"Brave";v="119", "Chromium";v="119", "Not?A_Brand";v="24"',
            'sec-ch-ua-mobile': '?0',
            'sec-ch-ua-platform': '"macOS"',
          },
        }
      )
      response = http.get(
        'https://gluestack.io/_next/image?url=%2Fimages%2Fenterprise%2Fmpl.svg&w=256&q=75',
        {
          headers: {
            referer: 'https://gluestack.io/enterprise',
            'user-agent':
              'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/119.0.0.0 Safari/537.36',
            'sec-ch-ua': '"Brave";v="119", "Chromium";v="119", "Not?A_Brand";v="24"',
            'sec-ch-ua-mobile': '?0',
            'sec-ch-ua-platform': '"macOS"',
          },
        }
      )
      response = http.get(
        'https://gluestack.io/_next/image?url=%2Fimages%2Fenterprise%2Fatsign.svg&w=384&q=75',
        {
          headers: {
            referer: 'https://gluestack.io/enterprise',
            'user-agent':
              'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/119.0.0.0 Safari/537.36',
            'sec-ch-ua': '"Brave";v="119", "Chromium";v="119", "Not?A_Brand";v="24"',
            'sec-ch-ua-mobile': '?0',
            'sec-ch-ua-platform': '"macOS"',
          },
        }
      )
      response = http.get(
        'https://gluestack.io/_next/image?url=%2Fimages%2Fenterprise%2Ficici.svg&w=640&q=75',
        {
          headers: {
            referer: 'https://gluestack.io/enterprise',
            'user-agent':
              'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/119.0.0.0 Safari/537.36',
            'sec-ch-ua': '"Brave";v="119", "Chromium";v="119", "Not?A_Brand";v="24"',
            'sec-ch-ua-mobile': '?0',
            'sec-ch-ua-platform': '"macOS"',
          },
        }
      )
      response = http.get(
        'https://gluestack.io/_next/image?url=%2Fimages%2Fenterprise%2Fai.svg&w=256&q=75',
        {
          headers: {
            referer: 'https://gluestack.io/enterprise',
            'user-agent':
              'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/119.0.0.0 Safari/537.36',
            'sec-ch-ua': '"Brave";v="119", "Chromium";v="119", "Not?A_Brand";v="24"',
            'sec-ch-ua-mobile': '?0',
            'sec-ch-ua-platform': '"macOS"',
          },
        }
      )
      response = http.get(
        'https://gluestack.io/_next/image?url=%2Fimages%2Fenterprise%2Frnd.svg&w=256&q=75',
        {
          headers: {
            referer: 'https://gluestack.io/enterprise',
            'user-agent':
              'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/119.0.0.0 Safari/537.36',
            'sec-ch-ua': '"Brave";v="119", "Chromium";v="119", "Not?A_Brand";v="24"',
            'sec-ch-ua-mobile': '?0',
            'sec-ch-ua-platform': '"macOS"',
          },
        }
      )
      response = http.get(
        'https://gluestack.io/_next/image?url=%2Fimages%2Fenterprise%2Fbusiness.svg&w=256&q=75',
        {
          headers: {
            referer: 'https://gluestack.io/enterprise',
            'user-agent':
              'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/119.0.0.0 Safari/537.36',
            'sec-ch-ua': '"Brave";v="119", "Chromium";v="119", "Not?A_Brand";v="24"',
            'sec-ch-ua-mobile': '?0',
            'sec-ch-ua-platform': '"macOS"',
          },
        }
      )
      response = http.get(
        'https://gluestack.io/_next/image?url=%2Fimages%2Fgeekyants-logo.png&w=48&q=75',
        {
          headers: {
            referer: 'https://gluestack.io/enterprise',
            'user-agent':
              'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/119.0.0.0 Safari/537.36',
            'sec-ch-ua': '"Brave";v="119", "Chromium";v="119", "Not?A_Brand";v="24"',
            'sec-ch-ua-mobile': '?0',
            'sec-ch-ua-platform': '"macOS"',
          },
        }
      )
      response = http.get(
        'https://gluestack.io/_next/static/chunks/pages/roadmap-7ccdbfd29a284896.js',
        {
          headers: {
            referer: '',
            'user-agent':
              'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/119.0.0.0 Safari/537.36',
            'sec-ch-ua': '"Brave";v="119", "Chromium";v="119", "Not?A_Brand";v="24"',
            'sec-ch-ua-mobile': '?0',
            'sec-ch-ua-platform': '"macOS"',
          },
        }
      )
      response = http.get(
        'https://gluestack.io/_next/static/chunks/pages/terms-of-service-353120767c4c255c.js',
        {
          headers: {
            referer: '',
            'user-agent':
              'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/119.0.0.0 Safari/537.36',
            'sec-ch-ua': '"Brave";v="119", "Chromium";v="119", "Not?A_Brand";v="24"',
            'sec-ch-ua-mobile': '?0',
            'sec-ch-ua-platform': '"macOS"',
          },
        }
      )
      response = http.get(
        'https://gluestack.io/_next/static/chunks/pages/privacy-policy-988eaf5112f79fd4.js',
        {
          headers: {
            referer: '',
            'user-agent':
              'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/119.0.0.0 Safari/537.36',
            'sec-ch-ua': '"Brave";v="119", "Chromium";v="119", "Not?A_Brand";v="24"',
            'sec-ch-ua-mobile': '?0',
            'sec-ch-ua-platform': '"macOS"',
          },
        }
      )
      response = http.get(
        'https://gluestack.io/_next/static/chunks/pages/cookie-policy-91b89dcd70483f63.js',
        {
          headers: {
            referer: '',
            'user-agent':
              'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/119.0.0.0 Safari/537.36',
            'sec-ch-ua': '"Brave";v="119", "Chromium";v="119", "Not?A_Brand";v="24"',
            'sec-ch-ua-mobile': '?0',
            'sec-ch-ua-platform': '"macOS"',
          },
        }
      )
      response = http.get('https://gluestack.io/_next/static/chunks/4975-95e42a79976c36f4.js', {
        headers: {
          referer: '',
          'user-agent':
            'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/119.0.0.0 Safari/537.36',
          'sec-ch-ua': '"Brave";v="119", "Chromium";v="119", "Not?A_Brand";v="24"',
          'sec-ch-ua-mobile': '?0',
          'sec-ch-ua-platform': '"macOS"',
        },
      })
      response = http.get(
        'https://gluestack.io/_next/static/chunks/pages/support-a9ec2315862ada52.js',
        {
          headers: {
            referer: '',
            'user-agent':
              'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/119.0.0.0 Safari/537.36',
            'sec-ch-ua': '"Brave";v="119", "Chromium";v="119", "Not?A_Brand";v="24"',
            'sec-ch-ua-mobile': '?0',
            'sec-ch-ua-platform': '"macOS"',
          },
        }
      )
      response = http.get(
        'https://gluestack.io/_next/static/chunks/pages/style/docs-7bd748f1a7168013.js',
        {
          headers: {
            referer: '',
            'user-agent':
              'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/119.0.0.0 Safari/537.36',
            'sec-ch-ua': '"Brave";v="119", "Chromium";v="119", "Not?A_Brand";v="24"',
            'sec-ch-ua-mobile': '?0',
            'sec-ch-ua-platform': '"macOS"',
          },
        }
      )
      response = http.get(
        'https://gluestack.io/_next/static/chunks/pages/roadmap-7ccdbfd29a284896.js',
        {
          headers: {
            referer: 'https://gluestack.io/enterprise',
            'user-agent':
              'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/119.0.0.0 Safari/537.36',
            'sec-ch-ua': '"Brave";v="119", "Chromium";v="119", "Not?A_Brand";v="24"',
            'sec-ch-ua-mobile': '?0',
            'sec-ch-ua-platform': '"macOS"',
          },
        }
      )
      response = http.get(
        'https://gluestack.io/_next/static/chunks/pages/cookie-policy-91b89dcd70483f63.js',
        {
          headers: {
            referer: 'https://gluestack.io/enterprise',
            'user-agent':
              'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/119.0.0.0 Safari/537.36',
            'sec-ch-ua': '"Brave";v="119", "Chromium";v="119", "Not?A_Brand";v="24"',
            'sec-ch-ua-mobile': '?0',
            'sec-ch-ua-platform': '"macOS"',
          },
        }
      )
      response = http.get(
        'https://gluestack.io/_next/static/chunks/pages/privacy-policy-988eaf5112f79fd4.js',
        {
          headers: {
            referer: 'https://gluestack.io/enterprise',
            'user-agent':
              'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/119.0.0.0 Safari/537.36',
            'sec-ch-ua': '"Brave";v="119", "Chromium";v="119", "Not?A_Brand";v="24"',
            'sec-ch-ua-mobile': '?0',
            'sec-ch-ua-platform': '"macOS"',
          },
        }
      )
      response = http.get(
        'https://gluestack.io/_next/static/chunks/pages/terms-of-service-353120767c4c255c.js',
        {
          headers: {
            referer: 'https://gluestack.io/enterprise',
            'user-agent':
              'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/119.0.0.0 Safari/537.36',
            'sec-ch-ua': '"Brave";v="119", "Chromium";v="119", "Not?A_Brand";v="24"',
            'sec-ch-ua-mobile': '?0',
            'sec-ch-ua-platform': '"macOS"',
          },
        }
      )
      response = http.get(
        'https://gluestack.io/_next/static/chunks/pages/style/docs-7bd748f1a7168013.js',
        {
          headers: {
            referer: 'https://gluestack.io/enterprise',
            'user-agent':
              'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/119.0.0.0 Safari/537.36',
            'sec-ch-ua': '"Brave";v="119", "Chromium";v="119", "Not?A_Brand";v="24"',
            'sec-ch-ua-mobile': '?0',
            'sec-ch-ua-platform': '"macOS"',
          },
        }
      )
      response = http.get('https://gluestack.io/_next/static/chunks/4975-95e42a79976c36f4.js', {
        headers: {
          referer: 'https://gluestack.io/enterprise',
          'user-agent':
            'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/119.0.0.0 Safari/537.36',
          'sec-ch-ua': '"Brave";v="119", "Chromium";v="119", "Not?A_Brand";v="24"',
          'sec-ch-ua-mobile': '?0',
          'sec-ch-ua-platform': '"macOS"',
        },
      })
      response = http.get(
        'https://gluestack.io/_next/static/chunks/pages/support-a9ec2315862ada52.js',
        {
          headers: {
            referer: 'https://gluestack.io/enterprise',
            'user-agent':
              'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/119.0.0.0 Safari/537.36',
            'sec-ch-ua': '"Brave";v="119", "Chromium";v="119", "Not?A_Brand";v="24"',
            'sec-ch-ua-mobile': '?0',
            'sec-ch-ua-platform': '"macOS"',
          },
        }
      )
    }
  )

  // Automatically added sleep
  sleep(1)
}
