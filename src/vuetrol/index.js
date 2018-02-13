import _ from 'lodash'

function Store() {

}
Store.prototype.get = function(str) {
  return () => _.get(this, str)
}

const global = new Store()

function setGlobal(name, vom) {
  if(_.get(global, name)) {
    console.warn("vuetrol 命名冲突")
  }
  _.set(global, name, vom)
  console.log("store", global)
}

function parseComponent(component, componentName) {
  const preCreated = component.created || new Function()
  const vuetrolName = component.vuetrol || componentName
  component.created = function() {
    setGlobal(vuetrolName, this)
    return preCreated(...arguments)
  }
  parseChild(component.components, vuetrolName)
  return component
}

function parseChild(coms, preName) {
  if (coms) {
    Object.keys(coms).forEach(it => {
      const itPreCreated = coms[it].created || new Function()
      const nowName =  coms[it].vuetrol || `${preName}_${it}`
      coms[it].created = function() {
        setGlobal(nowName, this)
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

window.__vuetrol = global;

export default global