import _ from 'lodash'

const global = {
  get(str) {
    return () => _.get(this, str)
  }
}

function parseComponent(component, componentName) {
  const preCreated = component.created || new Function()
  component.created = function() {
    _.set(global, componentName, this)
    return preCreated(...arguments)
  }
  parseChild(component.components, componentName)
  return component
}

function parseChild(coms, preName) {
  if (coms) {
    Object.keys(coms).forEach(it => {
      const itPreCreated = coms[it].created || new Function()
      const nowName =  `${preName}_${it}`
      coms[it].created = function() {
        _.set(global, nowName, this)
        return itPreCreated(...arguments)
      }
      parseChild(coms[it].components, nowName)
    })
  }
}

export function controller (componentName) {
  return (component) => {
    
    return parseComponent(component, componentName)
  }
}

window.__global = global;

export default global