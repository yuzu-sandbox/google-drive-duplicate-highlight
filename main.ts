;(() => {
  function elementGetFileName(elm: Element): {elm: HTMLElement; title: string} {
    const _elm = <HTMLElement>elm
    const title = (
      _elm.querySelector('[role="gridcell"] div:nth-child(2)') as HTMLElement
    ).innerText
    return {elm: _elm, title}
  }

  function duplicatedSetBackgroundColor() {
    const items = document.querySelectorAll('[data-target="doc"]')
    const itemMap = Array.from(items)
      .map(elementGetFileName)
      .reduce((m, {elm, title}) => {
        m.set(title, [...(m.get(title) ?? []), elm])
        return m
      }, new Map<string, HTMLElement[]>())

    let isDuplicate = false
    itemMap.forEach((v) => {
      if (v.length >= 2) {
        isDuplicate = true
        v.forEach((e) => {
          e.style.backgroundColor = 'rgb(255, 255, 0)'
        })
      }
    })

    isDuplicate && alert('found duplicate!!')
  }

  duplicatedSetBackgroundColor()
})()
