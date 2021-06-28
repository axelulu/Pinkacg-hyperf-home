export function timeFix () {
  const time = new Date()
  const hour = time.getHours()
  return hour < 9 ? '早上好' : hour <= 11 ? '上午好' : hour <= 13 ? '中午好' : hour < 20 ? '下午好' : '晚上好'
}

export function welcome () {
  const arr = ['休息一会儿吧', '准备吃什么呢?', '要不要打一把 DOTA', '我猜你可能累了']
  const index = Math.floor(Math.random() * arr.length)
  return arr[index]
}

/**
 * 触发 window.resize
 */
export function triggerWindowResizeEvent () {
  const event = document.createEvent('HTMLEvents')
  event.initEvent('resize', true, true)
  event.eventType = 'message'
  window.dispatchEvent(event)
}

export function handleScrollHeader (callback) {
  let timer = 0

  let beforeScrollTop = window.pageYOffset
  callback = callback || function () {}
  window.addEventListener(
    'scroll',
    event => {
      clearTimeout(timer)
      timer = setTimeout(() => {
        let direction = 'up'
        const afterScrollTop = window.pageYOffset
        const delta = afterScrollTop - beforeScrollTop
        if (delta === 0) {
          return false
        }
        direction = delta > 0 ? 'down' : 'up'
        callback(direction)
        beforeScrollTop = afterScrollTop
      }, 50)
    },
    false
  )
}

export function isIE () {
  const bw = window.navigator.userAgent
  const compare = (s) => bw.indexOf(s) >= 0
  const ie11 = (() => 'ActiveXObject' in window)()
  return compare('MSIE') || ie11
}

/**
 * Remove loading animate
 * @param id parent element id or class
 * @param timeout
 */
export function removeLoadingAnimate (id = '', timeout = 1500) {
  if (id === '') {
    return
  }
  setTimeout(() => {
    document.body.removeChild(document.getElementById(id))
  }, timeout)
}
export function scorePassword (pass) {
  let score = 0
  if (!pass) {
    return score
  }
  // award every unique letter until 5 repetitions
  const letters = {}
  for (let i = 0; i < pass.length; i++) {
      letters[pass[i]] = (letters[pass[i]] || 0) + 1
      score += 5.0 / letters[pass[i]]
  }

  // bonus points for mixing it up
  const variations = {
      digits: /\d/.test(pass),
      lower: /[a-z]/.test(pass),
      upper: /[A-Z]/.test(pass),
      nonWords: /\W/.test(pass)
  }

  let variationCount = 0
  for (var check in variations) {
      variationCount += (variations[check] === true) ? 1 : 0
  }
  score += (variationCount - 1) * 10

  return parseInt(score)
}
export function getImg (img) {
  return process.env.VUE_APP_API_BASE_SERVER_HOST + '/' + img
}
export function diaplayTime (data) {
  const str = data
  let result = ''
  // 将字符串转换成时间格式
  const timePublish = new Date(str)
  const timeNow = new Date()
  const minute = 1000 * 60
  const hour = minute * 60
  const day = hour * 24
  const month = day * 30
  const year = month * 12
  const diffValue = timeNow - timePublish
  const diffMonth = diffValue / month
  const diffWeek = diffValue / (7 * day)
  const diffDay = diffValue / day
  const diffHour = diffValue / hour
  const diffMinute = diffValue / minute
  const diffYear = diffValue / year
  if (diffValue < 0) {
    result = '刚刚发表'
  } else if (diffYear > 1) {
    result = parseInt(diffYear) + '年前'
  } else if (diffMonth > 1) {
    result = parseInt(diffMonth) + '月前'
  } else if (diffWeek > 1) {
    result = parseInt(diffWeek) + '周前'
  } else if (diffDay > 1) {
    result = parseInt(diffDay) + '天前'
  } else if (diffHour > 1) {
    result = parseInt(diffHour) + '小时前'
  } else if (diffMinute > 1) {
    result = parseInt(diffMinute) + '分钟前'
  } else {
    result = '刚刚发表'
  }
  return result
}
